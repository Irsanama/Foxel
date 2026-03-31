import type {Course, BlogPost, Testimonial, User} from '@/types';


export function getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
        programming: 'Программирование',
        web: 'Веб-разработка',
        design: 'Дизайн',
        data: 'Data Science',
        mobile: 'Мобильная разработка',
        gamedev: 'Геймдев',
    };
    return labels[category] || category;
}

export function getLevelLabel(level: string): string {
    const labels: Record<string, string> = {
        beginner: 'Начинающий',
        intermediate: 'Средний',
        advanced: 'Продвинутый',
    };
    return labels[level] || level;
}

export function formatPrice(price: number): string {
    return price.toLocaleString('ru-RU') + ' ₽';
}

export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}


export type {
    Course,
    BlogPost,
    Testimonial,
    User,
};
