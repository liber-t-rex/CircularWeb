export interface ProjectData {
  title: string;
  link: string;
  email: string;
  text: string;
}

export type WindowId = 
  | 'login' 
  | 'alert' 
  | 'folder-projets' 
  | 'vision' 
  | 'plan' 
  | string; // For dynamic project windows

export interface WindowState {
  id: WindowId;
  title: string;
  icon: string; // Material symbol name or URL
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  content: React.ReactNode;
  
  // Position and Size
  x: number;
  y: number;
  width: number;
  height: number;
}
