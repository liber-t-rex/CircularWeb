import React from 'react';

interface StartMenuProps {
  onOpenWindow: (id: string, title: string, icon: string) => void;
  onOpenProject: (key: string) => void;
  onShutdown: () => void;
  isOpen: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
}

export const StartMenu: React.FC<StartMenuProps> = ({ onOpenWindow, onOpenProject, onShutdown, isOpen, menuRef }) => {
  if (!isOpen) return null;

  return (
    <div 
      ref={menuRef}
      className="absolute bottom-[44px] md:bottom-[30px] left-[2px] w-[320px] md:w-[240px] bg-win-gray border-2 border-t-win-light border-l-win-light border-r-win-darker border-b-win-darker shadow-[4px_4px_5px_rgba(0,0,0,0.4)] z-[999999] flex flex-row"
    >
      {/* Sidebar */}
      <div className="w-[35px] md:w-[25px] bg-gradient-to-b from-[#000080] to-[#1084d0] text-white flex items-center justify-center py-2 relative overflow-hidden">
        <span className="font-bold text-[22px] md:text-[18px] whitespace-nowrap absolute bottom-1 left-1/2 transform -translate-x-1/2 -rotate-90 origin-bottom-left tracking-widest">CircularOS</span>
      </div>

      {/* Menu List */}
      <div className="flex-grow flex flex-col p-1 md:p-[2px]">
        
        <MenuItem 
          icon="public" 
          label="The Vision" 
          onClick={() => onOpenWindow('vision', 'The Vision', 'public')} 
        />
        <MenuItem 
          icon="description" 
          label="The Plan" 
          onClick={() => onOpenWindow('plan', 'The Plan', 'description')} 
        />
        <MenuItem 
          icon="folder_managed" 
          label="Explorateur Projets" 
          onClick={() => onOpenWindow('folder-projets', 'Explorateur', 'folder_managed')} 
        />

        <div className="h-[1px] bg-[#888] border-b border-white my-1 md:my-[3px] mx-[1px]" />

        {/* Made.fr (Top Level) */}
        <MenuItem icon="language" label="Made.fr" hasSubmenu>
            <SubMenuItem label="Documentation" onClick={() => onOpenProject('made_fr')} />
            <SubMenuItemLink label="Site Web" href="https://made.fr" />
            <SubMenuItemLink label="Contact" href="mailto:we@made.fr" />
        </MenuItem>

        <div className="h-[1px] bg-[#888] border-b border-white my-1 md:my-[3px] mx-[1px]" />

        {/* Outils Eco (Updated with Submenus) */}
        
        {/* ImpactData.fr */}
        <MenuItem icon="bar_chart" label="ImpactData.fr" hasSubmenu>
            <SubMenuItem label="Documentation" onClick={() => onOpenProject('impact_data')} />
            <SubMenuItemLink label="Site Web" href="https://impactdata.fr" />
            <SubMenuItemLink label="Contact" href="mailto:we@impactdata.fr" />
        </MenuItem>

        {/* Achats.eco */}
        <MenuItem icon="shopping_bag" label="Achats.eco" hasSubmenu>
            <SubMenuItem label="Documentation" onClick={() => onOpenProject('achats_eco')} />
            <SubMenuItemLink label="Site Web" href="https://achats.eco" />
            <SubMenuItemLink label="Contact" href="mailto:we@achats.eco" />
        </MenuItem>

        {/* Fournisseurs.eco */}
        <MenuItem icon="inventory_2" label="Fournisseurs.eco" hasSubmenu>
            <SubMenuItem label="Documentation" onClick={() => onOpenProject('fournisseurs_eco')} />
            <SubMenuItemLink label="Site Web" href="https://fournisseurs.eco" />
            <SubMenuItemLink label="Contact" href="mailto:we@fournisseurs.eco" />
        </MenuItem>

        <div className="h-[1px] bg-[#888] border-b border-white my-1 md:my-[3px] mx-[1px]" />
        
        <MenuItem icon="power_settings_new" label="Arrêter le système..." onClick={onShutdown} />
      </div>
    </div>
  );
};

// Unified MenuItem that handles both top-level and nested scenarios
const MenuItem: React.FC<{ 
    icon?: string; 
    label: string; 
    onClick?: () => void; 
    hasSubmenu?: boolean; 
    children?: React.ReactNode 
}> = ({ icon, label, onClick, hasSubmenu, children }) => (
    <div 
        className="group relative px-4 py-3 md:px-2.5 md:py-1.5 cursor-pointer flex items-center justify-between text-lg md:text-[12px] text-black hover:bg-win-blue hover:text-white"
        onClick={(e) => {
             if (onClick) {
                 e.stopPropagation();
                 onClick();
             }
        }}
    >
        <div className="flex items-center">
            {icon && <span className="material-symbols-rounded text-[28px] md:text-[20px] mr-3 md:mr-2 text-black group-hover:text-white">{icon}</span>}
            <span className={!icon ? "pl-10 md:pl-7" : ""}>{label}</span>
        </div>
        {hasSubmenu && <span className="text-[14px] md:text-[10px]">►</span>}
        
        {/* Submenu Container */}
        {hasSubmenu && (
            <div className="hidden group-hover:block absolute left-full -ml-1 top-[-4px] w-[220px] md:w-[200px] bg-win-gray border-2 border-t-win-light border-l-win-light border-r-win-darker border-b-win-darker shadow-[4px_4px_5px_rgba(0,0,0,0.4)] p-[2px] z-[999999]">
                {children}
            </div>
        )}
    </div>
);

const SubMenuItem: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
    <div className="px-4 py-3 md:px-2.5 md:py-1 cursor-pointer text-lg md:text-[12px] text-black hover:bg-win-blue hover:text-white" onClick={(e) => {
        e.stopPropagation();
        onClick();
    }}>
        {label}
    </div>
);

const SubMenuItemLink: React.FC<{ label: string; href: string }> = ({ label, href }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noreferrer" 
        className="block px-4 py-3 md:px-2.5 md:py-1 cursor-pointer text-lg md:text-[12px] text-black hover:bg-win-blue hover:text-white no-underline w-full h-full"
        onClick={(e) => e.stopPropagation()}
    >
        {label}
    </a>
);