export interface Translation {
    meta: {
        title: string;
        description: string;
    };
    header: {
        name: string;
        tagline: string;
    };
    projects: {
        title: string;
        image: { src: string; alt: string; type: 'gif' | 'png' };
        description: string;
        tags: string[];
        highlight: string;
        link: { url: string; label: string };
        details: {
            summary: string;
            sections: {
                title: string;
                content?: string;
                list?: string[];
                extraContent?: string;
                link?: { url: string; label: string };
            }[];
        };
    }[];
    footer: {
        telegram: string;
        github: string;
    };
}

const ru: Translation = {
    meta: {
        title: '',
        description: 'Портфолио: серверные плагины, физические движки, процедурная генерация',
    },
    header: {
        name: 'Агзам',
        tagline: '',
    },
    projects: [
        {
            title: 'Mindustry Плагин + Веб админка',
            image: { src: '/plugin.gif', alt: 'админка', type: 'gif' },
            description: 'Плагин для Mindustry со встроенным веб-сервером, Telegram-ботом и системой прав. Требует не более 1 ГБ ОЗУ (linux + mindustry + плагин)',
            tags: ['Java', 'React', 'TypeScript', 'SQLite', 'REST API', 'Telegram API', 'Gradle', "Java APT"],
            highlight: 'Annotation processor для генерации TypeScript Api и HTTP клиента Java-кода',
            link: { url: 'https://github.com/Agzam4/Mindustry-plugin', label: 'github.com/Agzam4/Mindustry-plugin' },
            details: {
                summary: 'Архитектурные решения и оптимизация памяти',
                sections: [
                    {
                        "title": "Архитектура и цели",
                        "content": "Проект представляет собой платформу, объединяющую игровой сервер, веб-панель и Telegram-бота. Java-ядро перехватывает внутриигровые события и выступает фундаментом для экосистемы субплагинов. Фронтенд на React и Telegram-бот предоставляют интерфейсы для удаленного мониторинга и администрирования всей системы"
                    },
                    {
                        "title": "Самописный веб-фреймворк (с Dependency Injection)",
                        "content": "Легковесная система на базе встроенного com.sun.httpserver, с автоматической генерацией TS типов, методов, хуков и самого бека"
                    },
                    {
                        "title": "Легковесная ORM",
                        "content": "Микроскопическая рефлексивная система управления бдшкой",
                    },
                ],
            },
        },
        {
            title: '2D Pixel Physics Engine',
            image: { src: '/pixel-physics.gif', alt: 'симуляция', type: 'gif' },
            description:
                'Движок для попиксельной физики материалов на Java',
            tags: ['Java'],
            highlight:
                'Бесконечный мир на базе динамической сетки (без жесткого ограничения размеров карты)',
            link: { url: 'https://youtu.be/FA3KZNn9lJY', label: 'Видео-демонстрация' },
            details: {
                summary: '',
                sections: [
                ],
            },
        },
        {
            title: 'Terraria Flying Islands Generator',
            image: { src: '/flying-islands.png', alt: 'скриншот сгенерированной карты', type: 'png' },
            description:
                'Генератор миров, состоящих из летающих островов для Terraria на JavaScript. Процедурная генерация биомов, подземелий, пирамид, храмов, деревьев и прочих структур',
            tags: ['JavaScript', 'Процедурная генерация'],
            highlight: 'Без библиотек',
            link: { url: 'https://github.com/Agzam4/TerrariaFlyingIslands', label: 'github.com/Agzam4/TerrariaFlyingIslands' },
            details: {
                summary: 'как устроено / почему так',
                sections: [
                    {
                        title: 'Генерация',
                        content: 'Процесс запускается в Web Worker, чтобы не блокировать UI поток браузера. Рельеф формируется на основе различных шумов, после чего заполняется структурами, в конце все собирается в готовый бинарный файл мира и скачивается'
                    },
                    {
                        title: 'Формат файла',
                        content: 'Пришлось адоптировать BinaryWriter из C# на JS',
                    },
                    {
                        title: 'Проблемки',
                        content: 'Были жалобы на невозможность генерации со слабых мобильных устройств',

                    },
                ],
            },
        },
    ],
    footer: {
        telegram: 'Telegram',
        github: 'GitHub',
    },
} as const;

export default ru;
export type Translations = Translation;
