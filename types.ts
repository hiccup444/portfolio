export enum TechStack {
    Unity = 'Unity',
    Godot = 'Godot',
    Unreal = 'Unreal',
    CSharp = 'C#',
    GDScript = 'GDScript',
    React = 'React',
    TypeScript = 'TypeScript',
    PixelArt = 'Pixel Art',
    Blender = 'Blender'
  }
  
  export interface GameProject {
    id: string;
    title: string;
    description: string;
    jamName: string;
    jamRank?: string;
    role: string | string[];
    image: string;
    videoUrl?: string; // URL to a short looping mp4
    playUrl?: string;
    githubUrl?: string;
    tags: TechStack[];
    date: string;
  }
  
  export interface NavItem {
    label: string;
    href: string;
  }