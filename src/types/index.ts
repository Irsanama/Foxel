export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export type CourseCategory = 'programming' | 'web' | 'design' | 'data' | 'mobile' | 'gamedev';


export interface CourseModule {
    id: string;
    title: string;
    duration: string;
    lessons: number
}


export interface Course {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    category: CourseCategory;
    level: CourseLevel;
    duration: string;
    lessonsCount: number;
    price: number;
    oldPrice?: number;
    rating: number;
    reviewsCount: number;
    studentsCount: number;
    instructor: { name: string; avatar: string; title: string };
    tags: string[];
    thumbnail: string;
    isFeatured?: boolean;
    isNew?: boolean;
}


export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: { name: string; avatar: string };
    publishedAt: string;
    readTime: string;
    thumbnail: string;
    tags: string[];
}


export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    enrolledCourses: string[]
}


export interface Testimonial {
    id: string;
    name: string;
    avatar: string;
    role: string;
    text: string;
    rating: number;
    courseId?: string
}