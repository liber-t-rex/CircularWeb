import React, { useEffect, useState, useRef } from 'react';
import { WindowState } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../data/translations';

interface TaskbarProps {
  windows: WindowState[];
  activeWindowId: string | null;
  onToggleStart: () => void;
  onWindowClick: (id: string) => void;
  isStartOpen: boolean;
}

export const Taskbar: React.FC<TaskbarProps> = ({ 
  windows, 
  activeWindowId, 
  onToggleStart, 
  onWindowClick, 
  isStartOpen 
}) => {
  const [time, setTime] = useState<string>('12:00');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { language, setLanguage } = useLanguage();
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close lang menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
            setShowLangMenu(false);
        }
    };
    if (showLangMenu) {
        document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLangMenu]);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ];

  return (
    <div className="absolute bottom-0 left-0 w-full h-[44px] md:h-[30px] bg-win-gray border-t-2 border-win-light flex items-center p-[2px] z-[20000]">
      {/* Start Button */}
      <div 
        className={`
          flex items-center gap-2 md:gap-1.5 px-3 md:px-1.5 h-9 md:h-6 mr-1.5 font-bold italic text-lg md:text-[13px] cursor-pointer
          border-2 border-win-light border-r-win-darker border-b-win-darker bg-win-gray text-black shadow-[1px_1px_0px_#000]
          ${isStartOpen ? 'border-t-win-darker border-l-win-darker border-r-win-light border-b-win-light translate-x-[1px] translate-y-[1px]' : ''}
        `}
        onClick={onToggleStart}
      >
        <div className="w-6 h-5 md:w-5 md:h-3.5 bg-[#003399] relative flex justify-center items-center border border-black">
          <div className="w-3 h-3 md:w-2.5 md:h-2.5 border border-dotted border-[#FFCC00] rounded-full"></div>
        </div>
        Start
      </div>

      <div className="w-[2px] h-7 md:h-5 border-l border-[#888] border-r border-white ml-1 mr-1"></div>

      {/* Language Selector */}
      <div className="relative" ref={langMenuRef}>
        <div 
            className={`
                h-9 md:h-6 px-2 md:px-1 flex items-center gap-1 cursor-pointer select-none bg-win-gray text-black text-sm md:text-[11px]
                border-2 border-win-light border-r-win-darker border-b-win-darker active:border-inset
                ${showLangMenu ? 'border-t-win-darker border-l-win-darker border-r-win-light border-b-win-light bg-[#ddd]' : ''}
            `}
            onClick={() => setShowLangMenu(!showLangMenu)}
        >
            <span className="text-lg md:text-sm">{languages.find(l => l.code === language)?.flag}</span>
            <span className="font-bold hidden md:inline uppercase">{language}</span>
        </div>

        {/* Language Popup Menu */}
        {showLangMenu && (
            <div className="absolute bottom-[46px] md:bottom-[32px] left-0 w-[140px] bg-win-gray border-2 border-t-win-light border-l-win-light border-r-win-darker border-b-win-darker shadow-[2px_2px_5px_rgba(0,0,0,0.5)] flex flex-col p-[2px]">
                {languages.map((lang) => (
                    <div 
                        key={lang.code}
                        className={`px-2 py-1 flex items-center gap-2 cursor-pointer hover:bg-win-blue hover:text-white text-sm md:text-[12px] ${language === lang.code ? 'font-bold' : ''}`}
                        onClick={() => {
                            setLanguage(lang.code);
                            setShowLangMenu(false);
                        }}
                    >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                    </div>
                ))}
            </div>
        )}
      </div>

      <div className="hidden md:block w-[2px] h-5 border-l border-[#888] border-r border-white ml-1 mr-1"></div>

      {/* Task Items */}
      <div className="flex-grow flex gap-[3px] pl-1 overflow-hidden">
        {windows.filter(w => w.id !== 'login' && w.id !== 'alert').map((win) => {
          const isActive = activeWindowId === win.id && !win.isMinimized;
          return (
            <div
              key={win.id}
              onClick={() => onWindowClick(win.id)}
              className={`
                w-[160px] md:w-[150px] h-9 md:h-6 bg-win-gray border-2 flex items-center px-2 md:px-1 gap-2 md:gap-1 text-sm md:text-[11px] cursor-pointer select-none overflow-hidden whitespace-nowrap
                ${isActive 
                  ? 'bg-[#ddd] border-t-win-darker border-l-win-darker border-r-win-light border-b-win-light font-bold' 
                  : 'border-t-win-light border-l-win-light border-r-win-darker border-b-win-darker'}
              `}
            >
              {win.icon.includes('.') ? (
                <img src={win.icon} alt="" className="w-5 h-5 md:w-4 md:h-4" />
              ) : (
                <span className="material-symbols-rounded text-[20px] md:text-[16px]">{win.icon}</span>
              )}
              <span className="truncate">{win.title}</span>
            </div>
          );
        })}
      </div>

      {/* Clock */}
      <div className="ml-auto border-2 border-win-dark border-r-win-light border-b-win-light px-3 md:px-2 py-1 md:py-[3px] text-sm md:text-[11px] bg-win-gray">
        {time}
      </div>
    </div>
  );
};