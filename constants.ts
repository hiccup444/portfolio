import { GameProject, TechStack } from './types';

export const DEVELOPER_NAME = "Gary Stambaugh";

export const GAMES: GameProject[] = [
  {
    id: '1',
    title: 'The Sleepy Leaf',
    description: 'As the cold sets in, anxious squirrels, polite badgers, and sleepy bears stop by for the perfect cup of tea. Hand-craft custom brews, manage your tiny shop, and help the forest unwind before winter.',
    jamName: 'Comfy Jam Autumn 2025',
    jamRank: 'Ongoing',
    role: 'Lead Programmer',
    image: 'https://picsum.photos/800/450?random=1',
    // videoUrl: 'https://path-to-the-gameplay-video.mp4', // Add mp4 here
    tags: [TechStack.Unity, TechStack.CSharp, TechStack.PixelArt],
    date: 'Nov 2025',
    playUrl: 'https://jameskjams2learnhelp.itch.io/the-sleepy-leaf',
    githubUrl: 'https://github.com/hiccup444/ComfyJam-TheSleepyLeaf'
  },
  {
    id: '2',
    title: 'Gore Factory',
    description: '3D non-combative, action horror where you are chased by a Jiāngshī (僵尸) cyborg through a body harvesting warehouse',
    jamName: 'Scream Jam 2025',
    role: 'Generalist Programmer',
    image: 'https://picsum.photos/800/450?random=2',
    // videoUrl: 'https://path-to-the-gameplay-video.mp4', // Add mp4 here
    tags: [TechStack.Godot, TechStack.GDScript],
    date: 'Oct 2025',
    playUrl: 'https://fresh4.itch.io/gorefactory',
    githubUrl: 'https://github.com/hiccup444/ScreamJam-GoreFactory/tree/main'
  },
  {
    id: '3',
    title: 'Run Shiba Run',
    description: 'Welcome to Shiba park where nature blends with culture. There are some eye-catching views worth visiting for,  from the Cherry blossom forest to the Daiki Shrine. Kids must be supervised at all times. We care about nature, so littering at the park is forbidden. Thank you very much!',
    jamName: 'Brackeys Game Jam 2025.2',
    role: ['Sr. Gameplay Programmer', 'VFX Programmer'],
    image: 'https://picsum.photos/800/450?random=3',
    // videoUrl: 'https://path-to-the-gameplay-video.mp4', // Add mp4 here
    tags: [TechStack.Unity, TechStack.CSharp],
    date: 'Aug  2025',
    playUrl: 'https://generalisk.itch.io/run-shiba-run',
    githubUrl: '#'
  }
];