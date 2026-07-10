import type { Translation } from './ru';

const en: Translation = {
    meta: {
        title: '',
        description: 'Portfolio: server plugins, physics engines, procedural generation',
    },
    header: {
        name: 'Agzam',
        tagline: '',
    },
    projects: [
        {
            title: 'Mindustry Plugin + Web Admin Panel',
            image: { src: '/plugin.gif', alt: 'admin panel', type: 'gif' },
            description: 'Plugin for Mindustry with built-in web server, Telegram bot and permission system. Requires no more than 1 GB of RAM (linux + mindustry + plugin)',
            tags: ['Java', 'React', 'TypeScript', 'SQLite', 'REST API', 'Telegram API', 'Gradle', 'Java APT'],
            highlight: 'Annotation processor for generating TypeScript API and HTTP client from Java code',
            link: { url: 'https://github.com/Agzam4/Mindustry-plugin', label: 'github.com/Agzam4/Mindustry-plugin' },
            details: {
                summary: 'Architectural decisions and memory optimization',
                sections: [
                    {
                        title: 'Architecture and goals',
                        content: 'The project is a platform combining a game server, web panel, and Telegram bot. The Java core intercepts in-game events and serves as the foundation for a sub-plugin ecosystem. The React frontend and Telegram bot provide interfaces for remote monitoring and administration of the entire system'
                    },
                    {
                        title: 'Custom web framework (with Dependency Injection)',
                        content: 'A lightweight system built on top of com.sun.httpserver, with automatic generation of TS types, methods, hooks, and the backend itself'
                    },
                    {
                        title: 'Lightweight ORM',
                        content: 'A microscopic reflective database management system',
                    },
                ],
            },
        },
        {
            title: '2D Pixel Physics Engine',
            image: { src: '/pixel-physics.gif', alt: 'simulation', type: 'gif' },
            description: 'Pixel-level material physics engine in Java',
            tags: ['Java'],
            highlight: 'Infinite world based on dynamic grid (no hard map size limits)',
            link: { url: 'https://youtu.be/FA3KZNn9lJY', label: 'Video demo' },
            details: {
                summary: '',
                sections: [],
            },
        },
        {
            title: 'Terraria Flying Islands Generator',
            image: { src: '/flying-islands.png', alt: 'generated map screenshot', type: 'png' },
            description: 'Generator of floating island worlds for Terraria in JavaScript. Procedural generation of biomes, dungeons, pyramids, temples, trees and other structures',
            tags: ['JavaScript', 'Procedural generation'],
            highlight: 'No libraries',
            link: { url: 'https://github.com/Agzam4/TerrariaFlyingIslands', label: 'github.com/Agzam4/TerrariaFlyingIslands' },
            details: {
                summary: 'how it works / why',
                sections: [
                    {
                        title: 'Generation',
                        content: 'The process runs in a Web Worker to avoid blocking the browser UI thread. Terrain is formed based on various noise algorithms, then filled with structures, and finally everything is assembled into a ready-made binary world file and downloaded'
                    },
                    {
                        title: 'File format',
                        content: 'Had to adapt BinaryWriter from C# to JS',
                    },
                    {
                        title: 'Issues',
                        content: 'There were complaints about inability to generate on weak mobile devices',
                    },
                ],
            },
        },
    ],
    footer: {
        telegram: 'Telegram',
        github: 'GitHub',
    },
};

export default en;
