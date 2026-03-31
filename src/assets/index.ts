export interface PartnerAsset {
    id: number;
    name: string;
    url: string;
    color: string
}


export interface SocialLink {
    id: 'telegram' | 'discord' | 'youtube' | 'github' | 'vk';
    name: string;
    url: string;
    color: string;
    followers?: string
}


export const iconSize = {
    xs: '0.75rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2rem',
} as const;

export type IconSize = keyof typeof iconSize;


export const svg = {
    icons: {
        imagePlaceholder: '/svg/icons/image-placeholder.svg',
        videoPlaceholder: '/svg/icons/video-placeholder.svg',
        avatarPlaceholder: '/svg/icons/avatar-placeholder.svg'
    },
    social: {
        telegram: '/svg/social/telegram.svg',
        discord: '/svg/social/discord.svg',
        youtube: '/svg/social/youtube.svg',
        github: '/svg/social/github.svg',
        vk: '/svg/social/vk.svg',
        linkedin: '/svg/social/linkedin.svg'
    },
    brand: {
        google: '/svg/brand/google.svg'
    },
} as const;


export const images = {
    logo: '/images/logo.svg',
    logoSmall: '/images/logo-small.svg',
    courses: {
        'web-development-basics': '/images/courses/web-development.png',
        'python-programming': '/images/courses/python.png',
        'react-advanced': '/images/courses/react-advanced.png',
        'ui-ux-design': '/images/courses/ui-ux-design.png',
        'data-science-intro': '/images/courses/data-science.png',
        'mobile-flutter': '/images/courses/flutter.png'
    } as Record<string, string>,

    blog: {
        'how-to-start-programming': '/images/blog/how-to-start.jpg',
        'ai-tools-for-developers': '/images/blog/ai-tools.webp',
        'web-design-trends-2026': '/images/blog/web-design-trends.webp',
        'typescript-vs-javascript': '/images/blog/typescript-vs-js.webp'
    } as Record<string, string>,

    team: {
        'alexander-volkov': '/images/team/alexander-volkov.png',
        'ekaterina-morozova': '/images/team/ekaterina-morozova.png',
        'dmitry-sokolov': '/images/team/dmitry-sokolov.png',
        'anna-ivanova': '/images/team/anna-ivanova.png',
        'mikhail-petrov': '/images/team/mikhail-petrov.png',
        'yulia-smirnova': '/images/team/yulia-smirnova.png'
    } as Record<string, string>,

    avatars: {
        'alexander-volkov': '/images/avatars/alexander-volkov.png',
        'ekaterina-morozova': '/images/avatars/ekaterina-morozova.png',
        'dmitry-sokolov': '/images/avatars/dmitry-sokolov.png',
        'anna-ivanova': '/images/avatars/anna-ivanova.png',
        'mikhail-petrov': '/images/avatars/mikhail-petrov.png',
        'yulia-smirnova': '/images/avatars/yulia-smirnova.png'
    } as Record<string, string>,
} as const;

export const partners: PartnerAsset[] = [
    {id: 1, name: 'Яндекс', url: 'https://yandex.ru', color: '#FC3F1D'},
    {id: 2, name: 'VK', url: 'https://vk.com', color: '#0077FF'},
    {id: 3, name: 'Сбер', url: 'https://sber.ru', color: '#21A038'},
    {id: 4, name: 'Тинькофф', url: 'https://tinkoff.ru', color: '#FFDD2D'},
    {id: 5, name: 'МТС', url: 'https://mts.ru', color: '#E30611'},
    {id: 6, name: 'Озон', url: 'https://ozon.ru', color: '#005BFF'},
    {id: 7, name: 'Авито', url: 'https://avito.ru', color: '#00AAFF'},
    {id: 8, name: 'HeadHunter', url: 'https://hh.ru', color: '#D6001C'},
];

export const socialLinks: SocialLink[] = [
    {id: 'telegram', name: 'Telegram', url: 'https://t.me/foxel_school', color: '#0088CC', followers: '15.2K'},
    {id: 'discord', name: 'Discord', url: 'https://discord.gg/foxel', color: '#5865F2', followers: '8.7K'},
    {id: 'youtube', name: 'YouTube', url: 'https://youtube.com/@foxel_school', color: '#FF0000', followers: '25.4K'},
    {id: 'github', name: 'GitHub', url: 'https://github.com/foxel-school', color: '#181717', followers: '3.2K'},
    {id: 'vk', name: 'VK', url: 'https://vk.com/foxel_school', color: '#0077FF', followers: '12.1K'},
];

export const socialSvgMap: Record<string, string> = {
    telegram: svg.social.telegram, discord: svg.social.discord, youtube: svg.social.youtube,
    github: svg.social.github, vk: svg.social.vk, linkedin: svg.social.linkedin,
};