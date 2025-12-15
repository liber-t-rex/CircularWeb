import React, { useState, useEffect, useRef } from 'react';
import { DesktopIcon } from './components/DesktopIcon';
import { Taskbar } from './components/Taskbar';
import { StartMenu } from './components/StartMenu';
import { WindowFrame } from './components/WindowFrame';
import { WindowState, WindowId } from './types';
import { PROJECT_METADATA } from './constants';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  // System State
  const [bootStage, setBootStage] = useState<'off' | 'booting' | 'desktop'>('booting');
  const [zIndexCounter, setZIndexCounter] = useState(100);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [isStartOpen, setIsStartOpen] = useState(false);
  
  // Scaling State for Mobile "Desktop" Feel
  const [scale, setScale] = useState(1);

  // Language Context
  const { t } = useLanguage();

  // Windows State
  const [windows, setWindows] = useState<WindowState[]>([]);
  
  // Refs
  const startMenuRef = useRef<HTMLDivElement>(null);

  // Boot Sequence
  useEffect(() => {
    if (bootStage === 'booting') {
      const timer = setTimeout(() => {
        setBootStage('desktop');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [bootStage]);

  // Handle Resize & Scaling
  useEffect(() => {
    const handleResize = () => {
        const DESKTOP_BASE_WIDTH = 1024;
        const currentWidth = window.innerWidth;
        if (currentWidth < DESKTOP_BASE_WIDTH) {
            setScale(currentWidth / DESKTOP_BASE_WIDTH);
        } else {
            setScale(1);
        }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Window Management ---

  const openWindow = (
    id: WindowId, 
    title: string, 
    icon: string, 
    options?: { width?: number; height?: number; x?: number; y?: number; isClosable?: boolean }
  ) => {
    const newZIndex = zIndexCounter + 1;
    setZIndexCounter(newZIndex);
    
    // Adaptive logic for mobile
    let finalWidth = options?.width || 600;
    let finalX = options?.x;
    
    if (id === 'register' && window.innerWidth < 768) {
        finalWidth = 850; 
        if (finalX === undefined) finalX = 85;
    }
    
    setWindows(prev => {
      const existing = prev.find(w => w.id === id);
      if (existing) {
        return prev.map(w => w.id === id ? { ...w, isMinimized: false, zIndex: newZIndex } : w);
      }
      
      const newWindow: WindowState = {
        id,
        title,
        icon,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        zIndex: newZIndex,
        content: null, 
        x: finalX || 50 + (prev.length * 20),
        y: options?.y || 50 + (prev.length * 20),
        width: finalWidth,
        height: options?.height || 450
      };
      return [...prev, newWindow];
    });
    
    setActiveWindowId(id);
    setIsStartOpen(false);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
    setActiveWindowId(null);
  };

  const maximizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
    focusWindow(id);
  };

  const focusWindow = (id: string) => {
    const newZIndex = zIndexCounter + 1;
    setZIndexCounter(newZIndex);
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: newZIndex } : w));
    setActiveWindowId(id);
    setIsStartOpen(false);
  };

  const moveWindow = (id: string, x: number, y: number) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, x, y } : w));
  };

  const resizeWindow = (id: string, width: number, height: number) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, width, height } : w));
  };

  const toggleStartMenu = () => {
    setIsStartOpen(prev => !prev);
  };

  // --- Specific Logic ---

  const openProjectWindow = (key: string) => {
    const projectTranslation = t.projects[key];
    if (projectTranslation) {
        openWindow(`doc-${key}`, projectTranslation.title, "help_book_big-0.png"); 
    }
  };

  // --- Render Content Helper ---
  const renderWindowContent = (id: string) => {
    if (id.startsWith('doc-')) {
        const key = id.replace('doc-', '');
        const projectMetadata = PROJECT_METADATA[key];
        const projectTranslation = t.projects[key];
        
        if (projectMetadata && projectTranslation) {
            return (
                <div className="flex flex-col h-full text-black">
                     <h2 className="text-2xl md:text-lg border-b-2 border-black pb-1 mt-0">{projectTranslation.title}</h2>
                     <div className="flex-grow mt-4 text-lg md:text-base leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: projectTranslation.text }} />
                     <div className="mt-5 pt-2 border-t border-[#ccc] text-base md:text-xs bg-[#f0f0f0] p-2">
                         <a href={projectMetadata.link} target="_blank" rel="noreferrer" className="block text-blue-800 font-bold hover:underline mb-1">🔗 {projectMetadata.link}</a>
                         <a href={`mailto:${projectMetadata.email}`} className="block text-blue-800 font-bold hover:underline">✉️ {projectMetadata.email}</a>
                     </div>
                </div>
            );
        }
    }

    switch (id) {
        case 'register':
            return (
                <div className="flex flex-col h-full w-full overflow-hidden">
                    <iframe 
                        src="https://tally.so/embed/ob6ByN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        title="Inscription CircularOS"
                        style={{ background: 'transparent' }}
                    ></iframe>
                </div>
            );
        case 'alert':
            return (
                <div className="flex flex-col items-center justify-center h-full text-center p-5 bg-[#f0f0f0]">
                    <span className="material-symbols-rounded text-[40px] text-[#ffcc00] mb-2">warning</span>
                    <p className="font-bold mb-2">Accès restreint.</p>
                    <p>Cette fonctionnalité nécessite une accréditation.</p>
                    <button onClick={() => { closeWindow('alert'); }} className="mt-4 w-20 border-2 border-t-win-light border-l-win-light border-r-win-darker border-b-win-darker bg-win-gray px-3 py-1 text-xs font-bold active:border-inset">OK</button>
                </div>
            );
        case 'folder-projets':
            return (
                <div className="flex flex-col h-full">
                     <div className="flex flex-wrap gap-6 md:gap-5 p-2">
                        {Object.keys(PROJECT_METADATA).map(key => {
                            const p = t.projects[key];
                            if (!p) return null;

                            let icon = 'folder';
                            if (key.includes('made')) icon = 'factory';
                            if (key.includes('life')) icon = 'diversity_3';
                            if (key.includes('smart')) icon = 'router';
                            if (key === 'impact_data') icon = 'bar_chart';
                            if (key === 'achats_eco') icon = 'shopping_bag';
                            if (key === 'fournisseurs_eco') icon = 'inventory_2';
                            
                            if (key === 'made_fr') icon = 'language';
                            if (key === 'made_paris') icon = 'location_city';
                            if (key === 'made_bzh') icon = 'sailing';
                            if (key === 'life_paris') icon = 'sports_esports';
                            if (key === 'life_alsace') icon = 'styler';
                            if (key === 'life_bzh') icon = 'forest';
                            if (key === 'smart_paris') icon = 'apartment';
                            if (key === 'smart_alsace') icon = 'precision_manufacturing';
                            if (key === 'smart_bzh') icon = 'water_drop';

                            return (
                                <div key={key} className="w-[100px] md:w-[80px] flex flex-col items-center text-center cursor-pointer p-1 hover:border hover:border-dotted hover:border-black hover:bg-[#eee]" onDoubleClick={() => openProjectWindow(key)}>
                                    <span className="material-symbols-rounded text-[48px] md:text-[32px] mb-1 text-black">{icon}</span>
                                    <span className="text-sm md:text-[11px] leading-tight text-black break-words">{p.title}</span>
                                </div>
                            )
                        })}
                     </div>
                     <p className="text-sm md:text-[11px] text-[#666] mt-5">{Object.keys(PROJECT_METADATA).length} objet(s)</p>
                </div>
            );
        case 'vision':
            return (
                <div className="text-black text-lg md:text-base">
                     <h1 className="text-3xl md:text-2xl font-bold mb-4">{t.vision.title}</h1>
                     <p style={{textAlign:'center', fontWeight:'bold'}}>{t.vision.subtitle}</p>

                     <h3>{t.vision.urgency_title}</h3>
                     <div className="italic border-l-[3px] border-[#ccc] pl-2 my-2 text-[#555]">
                        {t.vision.quote_trump}
                     </div>
                     <div className="italic border-l-[3px] border-[#ccc] pl-2 my-2 text-[#555]">
                        {t.vision.quote_caffarra}
                     </div>

                     <h3>{t.vision.wakeup_title}</h3>
                     <p>{t.vision.wakeup_text}</p>
                     <h4>{t.vision.paradox_title}</h4>
                     <ul className="list-disc pl-5">
                        {t.vision.paradox_list.map((item, idx) => <li key={idx}>{item}</li>)}
                     </ul>
                     <p>{t.vision.system_missing}</p>
                     <p>{t.vision.gap_text}</p>

                     <h3>{t.vision.mission_title}</h3>
                     <p>{t.vision.mission_text}</p>
                     <p>{t.vision.os_why}</p>

                     <h3>{t.vision.pillars_title}</h3>
                     <ol className="list-decimal pl-5">
                        {t.vision.pillars.map((item, idx) => <li key={idx}>{item}</li>)}
                     </ol>
                </div>
            );
        case 'plan':
            return (
                <div className="text-black text-lg md:text-base">
                     <h1 className="text-3xl md:text-2xl mt-0 uppercase border-b-[3px] border-black pb-2 mb-4">{t.plan.title}</h1>
                     <h2 className="text-2xl md:text-lg border-b-2 border-black pb-1 mb-4">{t.plan.subtitle}</h2>
                     <p>{t.plan.intro}</p>
                     
                     {t.plan.points.map((point, index) => (
                        <div key={index} className="mb-4 pb-2 border-b border-dashed border-[#ccc]">
                            <span className="font-bold text-win-blue flex items-center text-xl md:text-[15px] mb-1">{point.title}</span>
                            {point.text}
                        </div>
                     ))}
                </div>
            );
        default:
            return <div>Content Not Found</div>;
    }
  }

  // --- Render ---

  if (bootStage === 'booting') {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black text-[#00ff41] flex flex-col items-center justify-center font-mono z-[20000]">
            <div className="w-[80px] h-[80px] rounded-full bg-[#333] border-2 border-[#555] text-white text-[40px] flex justify-center items-center shadow-[0_0_15px_rgba(0,255,65,0.2)] animate-pulse mb-5">
                ⏻
            </div>
            <div className="text-left w-[300px] text-xs">
                {'>'} BIOS Check... OK<br/>
                {'>'} Memory... 64MB OK<br/>
                {'>'} Loading CircularOS...<br/>
                {'>'} Mounting EU Stack...<br/>
                {'>'} System Ready.
            </div>
        </div>
    );
  }

  return (
    // Global Scaled Container
    <div 
        style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            width: `${100 / scale}%`,
            height: `${100 / scale}%`,
            overflow: 'hidden',
            position: 'fixed',
            top: 0,
            left: 0
        }}
    >
        <div 
            className="w-full h-full bg-win-teal font-main overflow-hidden relative"
            onClick={() => {
                if (isStartOpen) setIsStartOpen(false);
            }}
        >
            {/* Wallpaper Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10vw] text-black/10 pointer-events-none z-0 whitespace-nowrap" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                CircularOS
            </div>

            {/* Desktop Icons */}
            {bootStage === 'desktop' && (
                <div className="p-2.5 flex flex-col gap-6 absolute top-0 left-0 z-10">
                    <DesktopIcon 
                        icon="vpn_key" 
                        label="S'enregistrer" 
                        onDoubleClick={() => openWindow('register', 'Inscription CircularOS', 'vpn_key', { width: 500, height: 600, x: 300, y: 50 })} 
                    />
                    <DesktopIcon 
                        icon="folder_managed" 
                        label="Mes Projets" 
                        color="#FFCC00"
                        onDoubleClick={() => openWindow('folder-projets', 'Mes Projets', 'folder_managed')} 
                    />
                    <DesktopIcon 
                        icon="public" 
                        label="The Vision" 
                        onDoubleClick={() => openWindow('vision', 'The Vision', 'public')} 
                    />
                    <DesktopIcon 
                        icon="description" 
                        label="The Plan" 
                        onDoubleClick={() => openWindow('plan', 'The Plan', 'description')} 
                    />
                    <DesktopIcon 
                        icon="delete" 
                        label="Big Tech" 
                        onDoubleClick={() => {}} 
                    />
                </div>
            )}

            {/* Windows - Pass scale prop */}
            {windows.map((win) => (
                <WindowFrame
                    key={win.id}
                    {...win}
                    scale={scale}
                    onClose={closeWindow}
                    onMinimize={minimizeWindow}
                    onMaximize={maximizeWindow}
                    onFocus={focusWindow}
                    onMove={moveWindow}
                    onResize={resizeWindow}
                >
                    {renderWindowContent(win.id)}
                </WindowFrame>
            ))}

            {/* Start Menu */}
            <StartMenu 
                menuRef={startMenuRef}
                isOpen={isStartOpen}
                onOpenWindow={openWindow}
                onOpenProject={openProjectWindow}
                onShutdown={() => window.location.reload()}
            />

            {/* Taskbar */}
            <Taskbar 
                windows={windows} 
                activeWindowId={activeWindowId} 
                onToggleStart={(e?: React.MouseEvent) => {
                    e?.stopPropagation();
                    toggleStartMenu();
                }}
                onWindowClick={(id) => {
                    const win = windows.find(w => w.id === id);
                    if (win?.id === activeWindowId && !win.isMinimized) {
                        minimizeWindow(id);
                    } else {
                        focusWindow(id);
                    }
                }}
                isStartOpen={isStartOpen}
            />
        </div>
    </div>
  );
};

export default App;