import React from 'react';

interface DesktopIconProps {
  label: string;
  icon: string;
  onDoubleClick: () => void;
  style?: React.CSSProperties;
  color?: string; // Icon color
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ label, icon, onDoubleClick, style, color = "white" }) => {
  return (
    <div 
      className="flex flex-col items-center cursor-pointer text-center w-[100px] md:w-[85px] group"
      onDoubleClick={onDoubleClick}
      style={style}
    >
      <span 
        className="material-symbols-rounded text-[42px] md:text-[32px] drop-shadow-[1px_1px_0px_#000] mb-1"
        style={{ color: color, textShadow: color !== 'white' ? '1px 1px 0 #000' : 'none' }}
      >
        {icon}
      </span>
      <span className="text-[13px] md:text-[11px] p-[2px] text-white drop-shadow-[1px_1px_1px_black] group-hover:bg-win-blue leading-tight bg-black/20 md:bg-transparent rounded-sm md:rounded-none">
        {label}
      </span>
    </div>
  );
};