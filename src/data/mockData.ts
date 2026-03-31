import type {Course, BlogPost, Testimonial} from '@/types';
import {images} from '@/assets';

export type {Course, BlogPost, Testimonial};

export const courses: Course[] = [
    {
        id: '1', //+
        slug: 'web-development-basics', //+
        title: 'Веб-разработка с нуля', //+
        shortDescription: 'Научитесь создавать современные сайты на HTML, CSS и JavaScript', //+
        category: 'web', //+
        level: 'beginner', //+
        duration: '3 месяца', //+
        lessonsCount: 48,
        price: 24900, //+
        oldPrice: 34900, //+
        rating: 4.8, //+
        reviewsCount: 234, //+
        studentsCount: 1520, //+
        instructor: {
            name: 'Алексей Петров',
            avatar: images.avatars['alexey-petrov'],
            title: 'Senior Frontend Developer'
        }, //-
        tags: ['HTML', 'CSS', 'JavaScript', 'Верстка'],
        thumbnail: images.courses['web-development-basics'], //+
        isFeatured: true, //+
        isNew: false, //+
    },
    {
        id: '2',
        slug: 'python-programming',
        title: 'Python: от основ до практики',
        shortDescription: 'Освойте Python — один из самых востребованных языков программирования',
        category: 'programming',
        level: 'beginner',
        duration: '4 месяца',
        lessonsCount: 64,
        price: 29900,
        rating: 4.9,
        reviewsCount: 412,
        studentsCount: 2340,
        instructor: {
            name: 'Мария Сидорова',
            avatar: images.avatars['maria-sidorova'],
            title: 'Python Developer, Tech Lead'
        },
        tags: ['Python', 'Программирование', 'Алгоритмы'],
        thumbnail: images.courses['python-programming'],
        isFeatured: true,
        isNew: true,
    },
    {
        id: '3',
        slug: 'react-advanced',
        title: 'React: продвинутый уровень',
        shortDescription: 'Углубленное изучение React, хуки, паттерны и оптимизация',
        category: 'web',
        level: 'advanced',
        duration: '2 месяца',
        lessonsCount: 36,
        price: 34900,
        rating: 4.7,
        reviewsCount: 156,
        studentsCount: 890,
        instructor: {name: 'Дмитрий Козлов', avatar: images.avatars['dmitry-kozlov'], title: 'Frontend Architect'},
        tags: ['React', 'TypeScript', 'Redux', 'Frontend'],
        thumbnail: images.courses['react-advanced'],
        isFeatured: false,
        isNew: false,
    },
    {
        id: '4',
        slug: 'ui-ux-design',
        title: 'UI/UX Дизайн',
        shortDescription: 'Станьте дизайнером интерфейсов: Figma, прототипы, исследования',
        category: 'design',
        level: 'intermediate',
        duration: '3 месяца',
        lessonsCount: 42,
        price: 32900,
        oldPrice: 44900,
        rating: 4.8,
        reviewsCount: 198,
        studentsCount: 1120,
        instructor: {name: 'Анна Белова', avatar: images.avatars['anna-belova'], title: 'Lead Product Designer'},
        tags: ['Figma', 'UI', 'UX', 'Дизайн'],
        thumbnail: images.courses['ui-ux-design'],
        isFeatured: true,
        isNew: false,
    },
    {
        id: '5',
        slug: 'data-science-intro',
        title: 'Data Science: введение',
        shortDescription: 'Основы анализа данных, машинное обучение и визуализация',
        category: 'data',
        level: 'intermediate',
        duration: '4 месяца',
        lessonsCount: 52,
        price: 39900,
        rating: 4.6,
        reviewsCount: 89,
        studentsCount: 560,
        instructor: {name: 'Игорь Волков', avatar: images.avatars['igor-volkov'], title: 'Data Scientist, PhD'},
        tags: ['Python', 'Data Science', 'ML', 'Pandas'],
        thumbnail: images.courses['data-science-intro'],
        isFeatured: false,
        isNew: true,
    },
    {
        id: '6',
        slug: 'mobile-flutter',
        title: 'Мобильная\u00A0разработка на Flutter',
        shortDescription: 'Создавайте кроссплатформенные приложения для iOS и Android',
        category: 'mobile',
        level: 'intermediate',
        duration: '3 месяца',
        lessonsCount: 44,
        price: 34900,
        rating: 4.7,
        reviewsCount: 123,
        studentsCount: 670,
        instructor: {name: 'Сергей Новиков', avatar: images.avatars['sergey-novikov'], title: 'Mobile Developer'},
        tags: ['Flutter', 'Dart', 'Mobile', 'iOS', 'Android'],
        thumbnail: images.courses['mobile-flutter'],
        isFeatured: false,
        isNew: false,
    },
];

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'how-to-start-programming',
        title: 'Как начать программировать в 2026 году',
        excerpt: 'Практические советы для тех, кто хочет войти в IT.',
        content: '<p>Программирование — это навык, который может освоить каждый.</p>',
        category: 'Карьера',
        author: {name: 'Александр Волков', avatar: images.avatars['alexander-volkov']},
        publishedAt: '2026-02-20',
        readTime: '7 мин',
        thumbnail: images.blog['how-to-start-programming'],
        tags: ['Карьера', 'Начинающим', 'Советы'],
    },
    {
        id: '2',
        slug: 'ai-tools-for-developers',
        title: 'AI-инструменты для разработчиков: гайд 2026',
        excerpt: 'Обзор лучших AI-помощников для кодинга.',
        content: '<p>Искусственный интеллект меняет процесс разработки.</p>',
        category: 'Инструменты',
        author: {name: 'Екатерина Морозова', avatar: images.avatars['ekaterina-morozova']},
        publishedAt: '2026-02-15',
        readTime: '10 мин',
        thumbnail: images.blog['ai-tools-for-developers'],
        tags: ['AI', 'Инструменты', 'Продуктивность'],
    },
    {
        id: '3',
        slug: 'web-design-trends-2026',
        title: 'Тренды веб-дизайна 2026: что актуально',
        excerpt: 'Разбираем главные тренды: bento-сетки, тёмные темы, крупная типографика.',
        content: '<p>Веб-дизайн постоянно эволюционирует.</p>',
        category: 'Дизайн',
        author: {name: 'Анна Иванова', avatar: images.avatars['anna-ivanova']},
        publishedAt: '2026-02-10',
        readTime: '5 мин',
        thumbnail: images.blog['web-design-trends-2026'],
        tags: ['Дизайн', 'Тренды', 'UI/UX'],
    },
    {
        id: '4',
        slug: 'typescript-vs-javascript',
        title: 'TypeScript vs JavaScript: что выбрать в 2026',
        excerpt: 'Сравнение TypeScript и JavaScript: плюсы, минусы.',
        content: '<p>TypeScript набирает популярность.</p>',
        category: 'Разработка',
        author: {name: 'Дмитрий Соколов', avatar: images.avatars['dmitry-sokolov']},
        publishedAt: '2026-01-28',
        readTime: '8 мин',
        thumbnail: images.blog['typescript-vs-javascript'],
        tags: ['TypeScript', 'JavaScript', 'Frontend'],
    },
];

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Екатерина М.',
        avatar: images.avatars['ekaterina-morozova'],
        role: 'Junior Frontend Developer',
        text: 'После курса по веб-разработке я смогла найти работу мечты!',
        rating: 5,
        courseId: '1'
    },
    {
        id: '2',
        name: 'Александр В.',
        avatar: images.avatars['alexander-volkov'],
        role: 'Студент',
        text: 'Python-курс — это именно то, что нужно для старта.',
        rating: 5,
        courseId: '2'
    },
    {
        id: '3',
        name: 'Анна И.',
        avatar: images.avatars['anna-ivanova'],
        role: 'UI Designer',
        text: 'Курс по UI/UX помог мне систематизировать знания.',
        rating: 5,
        courseId: '4'
    },
    {
        id: '4',
        name: 'Дмитрий С.',
        avatar: images.avatars['dmitry-sokolov'],
        role: 'Career Switcher',
        text: 'Сменил профессию в 35 лет благодаря курсам Фоксель.',
        rating: 5
    },
];