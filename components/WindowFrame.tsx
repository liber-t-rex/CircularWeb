import React, { useRef } from 'react';

interface WindowFrameProps {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  // Position and Size come from the window state
  x: number;
  y: number;
  width: number;
  height: number;
  scale?: number; // Prop to handle drag calculations with CSS scale
  
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onMaximize: (id: string) => void;
  onFocus: (id: string) => void;
  onMove: (id: string, x: number, y: number) => void;
  onResize: (id: string, width: number, height: number) => void;
  children: React.ReactNode;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  id,
  title,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  x,
  y,
  width,
  height,
  scale = 1,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onMove,
  onResize,
  children,
}) => {
  const windowRef = useRef<HTMLDivElement>(null);

  // --- Drag Logic (Mouse & Touch) ---
  const handleStartDrag = (clientX: number, clientY: number) => {
    onFocus(id);
    
    // Calculate offset from the window's top-left corner
    const offsetX = clientX - (x * scale); // Adjust for visual scale vs actual position
    const offsetY = clientY - (y * scale);

    // Common move handler
    const move = (cx: number, cy: number) => {
        // We need to divide the delta by scale to get "internal" pixels
        // Or simpler: New Pos = (CurrentClient - Offset) / Scale
        onMove(id, (cx - offsetX) / scale, (cy - offsetY) / scale);
    };

    const handleMouseMove = (e: MouseEvent) => move(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
        // e.preventDefault(); // Prevent scrolling while dragging window
        move(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleUp);
  };

  const handleMouseDownTitle = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.window-controls')) return;
    e.preventDefault();
    // For mouse, we use internal coords logic slightly adapted
    // Actually, let's use the unified logic:
    // We need the visual offset relative to screen:
    // But x/y are internal. ScreenX = x * scale (if container is 0,0)
    // Simplified:
    onFocus(id);
    const startX = e.clientX;
    const startY = e.clientY;
    const initialWindowX = x;
    const initialWindowY = y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
        const deltaX = (moveEvent.clientX - startX) / scale;
        const deltaY = (moveEvent.clientY - startY) / scale;
        onMove(id, initialWindowX + deltaX, initialWindowY + deltaY);
    };
    
    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStartTitle = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('.window-controls')) return;
    // e.preventDefault(); // Sometimes needed to prevent scroll, but might block click
    onFocus(id);
    const startX = e.touches[0].clientX;
    const startY = e.touches[0].clientY;
    const initialWindowX = x;
    const initialWindowY = y;

    const handleTouchMove = (moveEvent: TouchEvent) => {
        // moveEvent.preventDefault(); // Stop screen scrolling
        const deltaX = (moveEvent.touches[0].clientX - startX) / scale;
        const deltaY = (moveEvent.touches[0].clientY - startY) / scale;
        onMove(id, initialWindowX + deltaX, initialWindowY + deltaY);
    };

    const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
  };

  // --- Resize Logic ---
  const handleMouseDownResizer = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onFocus(id);
    
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = width;
    const startHeight = height;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = (moveEvent.clientX - startX) / scale;
      const deltaY = (moveEvent.clientY - startY) / scale;
      const newWidth = startWidth + deltaX;
      const newHeight = startHeight + deltaY;
      onResize(id, Math.max(250, newWidth), Math.max(150, newHeight));
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  if (!isOpen || isMinimized) return null;

  const maximizeStyle: React.CSSProperties = isMaximized 
    ? { top: 0, left: 0, width: '100%', height: 'calc(100% - 30px)', transform: 'none' } 
    : { top: y, left: x, width: width, height: height };

  return (
    <div
      ref={windowRef}
      className={`absolute flex flex-col bg-win-gray border-t-2 border-l-2 border-r-2 border-b-2 border-t-win-light border-l-win-light border-r-win-darker border-b-win-darker shadow-[2px_2px_5px_rgba(0,0,0,0.5)] ${isMaximized ? 'border-none shadow-none' : ''}`}
      style={{
        zIndex,
        minWidth: 250,
        minHeight: 150,
        ...maximizeStyle
      }}
      onMouseDown={() => onFocus(id)}
      onTouchStart={() => onFocus(id)}
    >
      {/* Title Bar */}
      <div 
        className="bg-win-blue text-white px-2 py-1 md:px-1.5 md:py-0.5 font-bold flex justify-between items-center text-lg md:text-[13px] cursor-default select-none touch-none"
        onMouseDown={handleMouseDownTitle}
        onTouchStart={handleTouchStartTitle}
        onDoubleClick={() => onMaximize(id)}
      >
        <span className="truncate mr-2">{title}</span>
        <div className="flex gap-1 md:gap-[2px] window-controls">
          <button 
            onClick={(e) => { e.stopPropagation(); onMinimize(id); }}
            className="w-7 h-7 md:w-4 md:h-3.5 bg-win-gray border border-win-light border-r-win-darker border-b-win-darker text-black text-sm md:text-[10px] leading-none flex justify-center items-center active:border-t-win-darker active:border-l-win-darker active:border-r-win-light active:border-b-win-light active:pt-[1px] active:pl-[1px]"
            onTouchEnd={(e) => { e.stopPropagation(); onMinimize(id); }}
          >_</button>
          <button 
             onClick={(e) => { e.stopPropagation(); onMaximize(id); }}
             className="w-7 h-7 md:w-4 md:h-3.5 bg-win-gray border border-win-light border-r-win-darker border-b-win-darker text-black text-sm md:text-[10px] leading-none flex justify-center items-center active:border-t-win-darker active:border-l-win-darker active:border-r-win-light active:border-b-win-light active:pt-[1px] active:pl-[1px]"
             onTouchEnd={(e) => { e.stopPropagation(); onMaximize(id); }}
          >□</button>
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(id); }}
            className="w-7 h-7 md:w-4 md:h-3.5 bg-win-gray border border-win-light border-r-win-darker border-b-win-darker text-black text-sm md:text-[10px] leading-none flex justify-center items-center font-bold active:border-t-win-darker active:border-l-win-darker active:border-r-win-light active:border-b-win-light active:pt-[1px] active:pl-[1px]"
            onTouchEnd={(e) => { e.stopPropagation(); onClose(id); }}
          >X</button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow bg-white border-t-2 border-l-2 border-r-2 border-b-2 border-t-win-darker border-l-win-darker border-r-win-light border-b-win-light relative overflow-hidden flex flex-col">
        <div className="h-full overflow-y-auto p-4 md:p-[15px] font-main text-black text-lg md:text-sm">
            {children}
        </div>
      </div>

      {/* Resizer Handle */}
      {!isMaximized && (
        <div 
            className="absolute right-[2px] bottom-[2px] w-[20px] h-[20px] md:w-[15px] md:h-[15px] cursor-nwse-resize z-[101]"
            style={{ background: 'linear-gradient(135deg, transparent 50%, #808080 50%)' }}
            onMouseDown={handleMouseDownResizer}
        />
      )}
    </div>
  );
};