import {Link} from 'react-router-dom';
import {ArrowRight, Check, Star, BookOpen, User, Briefcase, Play} from 'lucide-react';
import {Button} from '@/components/ui/Button';
import {Badge} from '@/components/ui/Badge';
import {CourseCard} from '@/components/ui/CourseCard';
import {BlogCard} from '@/components/ui/BlogCard';
import {AvatarPlaceholder} from '@/components/ui/ImagePlaceholder';
import {ScrollAnimate} from '@/components/ui/ScrollAnimate';
import {courses, blogPosts, testimonials} from '@/data/mockData';
import {iconSize, partners} from '@/assets';
import {cn} from '@/utils/cn';


const stats = [
    {value: '15\u00A0000+', label: 'Студентов'},
    {value: '50+', label: 'Курсов'},
    {value: '95%', label: 'Довольны обучением'},
    {value: '4.8', label: 'Средний рейтинг'},
];

const features = [
    {
        Icon: BookOpen,
        color: 'text-primary',
        bg: 'bg-primary/10',
        title: 'Практика с\u00A0первого дня',
        desc: 'Никакой скучной теории — сразу реальные проекты для портфолио'
    },
    {
        Icon: User,
        color: 'text-accent-purple',
        bg: 'bg-accent-purple/10',
        title: 'Опытные менторы',
        desc: 'Преподаватели из топовых IT-компаний с\u00A0реальным опытом'
    },
    {
        Icon: Briefcase,
        color: 'text-accent-green',
        bg: 'bg-accent-green/10',
        title: 'Помощь с\u00A0трудоустройством',
        desc: 'Карьерный центр, подготовка к\u00A0собеседованиям, стажировки'
    },
    {
        Icon: Play,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        title: 'Гибкий формат',
        desc: 'Учитесь в\u00A0своём темпе: онлайн-уроки, вебинары, домашки с\u00A0проверкой'
    },
];


export function HomePage() {
    return (
        <>
            <section className="relative pt-10 pb-12 md:pt-16 md:pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent"/>
                <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[100px]"/>
                <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-accent-purple/15 rounded-full blur-[100px]"/>
                <div className="container relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollAnimate animation="fadeUp">
                            <div className="inline-flex items-center gap-2 mb-5">
                                <Badge variant="primary">Новый набор 2026</Badge>
                                <span className="text-text-muted text-caption">До 31 марта скидка 30%</span>
                            </div>
                        </ScrollAnimate>
                        <ScrollAnimate animation="fadeUp" delay={1}>
                            <h1 className="text-display mb-5">
                                Освойте{' '}<span className="text-gradient-primary whitespace-nowrap">IT‑профессию</span>{' '}и&nbsp;начните зарабатывать
                            </h1>
                        </ScrollAnimate>
                        <ScrollAnimate animation="fadeUp" delay={2}>
                            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-8">
                                Практические курсы по&nbsp;программированию, дизайну и&nbsp;аналитике данных. От&nbsp;основ до&nbsp;трудоустройства за&nbsp;3–6&nbsp;месяцев.
                            </p>
                        </ScrollAnimate>
                        <ScrollAnimate animation="fadeUp" delay={3}>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-10">
                                <Link to="/courses">
                                    <Button variant="primary" size="lg" className="group">Смотреть курсы <ArrowRight size={iconSize.sm}/></Button>
                                </Link>
                                <Link to="/about">
                                    <Button variant="secondary" size="lg">Узнать о&nbsp;школе</Button>
                                </Link>
                            </div>
                        </ScrollAnimate>
                        <ScrollAnimate animation="fadeUp" delay={4}>
                            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-body-sm text-text-muted">
                                <span className="flex items-center gap-1.5">
                                    <Check size={iconSize.sm} className="text-accent-green"/>
                                    Гарантия возврата 14&nbsp;дней
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Check size={iconSize.sm} className="text-accent-green"/>
                                    Рассрочка без&nbsp;%
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Check size={iconSize.sm} className="text-accent-green"/>
                                    Сертификат
                                </span>
                            </div>
                        </ScrollAnimate>
                    </div>
                </div>
            </section>

            <section className="border-y border-border bg-bg-secondary">
                <div className="container py-8 md:py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s, i) => (
                            <ScrollAnimate key={i} animation="fadeUp" delay={(i + 1) as 1 | 2 | 3 | 4}>
                                <div className="text-center">
                                    <div className="text-h2 text-gradient-primary mb-0.5">{s.value}</div>
                                    <div className="text-body-sm text-text-muted">{s.label}</div>
                                </div>
                            </ScrollAnimate>))}
                    </div>
                </div>
            </section>

            <section className="py-section">
                <div className="container">
                    <ScrollAnimate animation="fadeUp">
                        <div className="text-center mb-8 md:mb-10">
                            <h2 className="text-h1 mb-2">
                                Почему выбирают Фоксель
                            </h2>
                            <p className="text-body text-text-secondary max-w-lg mx-auto">
                                Мы&nbsp;создали среду, в&nbsp;которой учиться в&nbsp;IT&nbsp;— это увлекательно
                            </p>
                        </div>
                    </ScrollAnimate>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                        {features.map((f, i) => (
                            <ScrollAnimate key={i} animation="fadeUp" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                                <div className="card p-5 text-center hover:border-primary/30 transition-colors h-full group">
                                    <div className={`w-11 h-11 mx-auto mb-3 rounded-lg ${f.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <f.Icon size={iconSize.md} className={f.color}/>
                                    </div>
                                    <h3 className="text-h5 mb-1.5">{f.title}</h3>
                                    <p className="text-body-sm text-text-secondary">{f.desc}</p>
                                </div>
                            </ScrollAnimate>))}
                    </div>
                </div>
            </section>

            <section className="py-section bg-bg-secondary">
                <div className="container">
                    <ScrollAnimate animation="fadeUp">
                        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-3">
                            <div>
                                <h2 className="text-h1 mb-1">Популярные курсы</h2>
                                <p className="text-body text-text-secondary">
                                    Выберите направление и&nbsp;начните обучение
                                </p>
                            </div>
                            <Link to="/courses" className="group flex items-center gap-1.5 text-primary text-body-sm font-medium hover:gap-2.5 transition-all">
                                Все курсы <ArrowRight size={iconSize.sm}/>
                            </Link>
                        </div>
                    </ScrollAnimate>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {courses.slice(0, 3).map((c, i) => (
                            <ScrollAnimate key={c.id} animation="fadeUp" delay={((i % 3) + 1) as 1 | 2 | 3}>
                                <CourseCard course={c}/>
                            </ScrollAnimate>))}
                    </div>
                </div>
            </section>

            <section className="py-section">
                <div className="container">
                    <ScrollAnimate animation="fadeUp">
                        <div className="text-center mb-8">
                            <h2 className="text-h1 mb-2">Отзывы студентов</h2>
                            <p className="text-body text-text-secondary max-w-lg mx-auto">
                                Узнайте, что говорят те, кто уже прошёл наши&nbsp;курсы
                            </p>
                        </div>
                    </ScrollAnimate>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                        {testimonials.map((t, i) => (
                            <ScrollAnimate key={t.id} animation="fadeUp" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                                <div className="card p-5 h-full flex flex-col">
                                    <div className="flex gap-0.5 mb-3">{[...Array(t.rating)].map((_, j) =>
                                        <Star key={j} size={iconSize.sm} fill="currentColor" className="text-primary"/>)}
                                    </div>
                                    <p className="text-body-sm text-text-secondary mb-4 line-clamp-4 flex-1">"{t.text}"</p>
                                    <div className="flex items-center gap-2.5 mt-auto">
                                        <AvatarPlaceholder src={t.avatar} alt={t.name} size="sm"/>
                                        <div>
                                            <div className="text-body-sm font-medium">{t.name}</div>
                                            <div className="text-caption text-text-muted">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimate>))}
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-12 bg-bg-secondary">
                <div className="container">
                    <ScrollAnimate animation="fadeUp">
                        <div className="text-center mb-8"><h2 className="text-h2 mb-2">Нам доверяют</h2>
                            <p className="text-body-sm text-text-secondary max-w-lg mx-auto">
                                Наши выпускники работают в&nbsp;ведущих IT‑компаниях
                            </p>
                        </div>
                    </ScrollAnimate>
                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-[-50%] bottom-[-50%] w-16 md:w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to right,var(--color-bg-secondary) 0%,transparent 100%)'}}/>
                        <div className="absolute right-0 top-[-50%] bottom-[-50%] w-16 md:w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to left,var(--color-bg-secondary) 0%,transparent 100%)'}}/>
                        <div className="flex animate-marquee py-1">
                            {[0, 1].map(g => (
                                <div key={g} className="flex gap-3 pr-3">
                                    {partners.map(p => (
                                        <div key={`${g}-${p.id}`} className={cn('group flex items-center gap-2 px-3 py-1.5 bg-surface rounded-lg border border-border transition-all duration-300 hover:border-transparent hover:scale-105 min-w-[120px] cursor-pointer')} title={p.name}>
                                            <div className="w-6 h-6 rounded flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" style={{backgroundColor: `${p.color}20`}}>
                                                <span className="text-xs font-bold" style={{color: p.color}}>{p.name.charAt(0)}</span>
                                            </div>
                                            <span className="text-body-sm font-medium text-text-secondary group-hover:text-text transition-colors whitespace-nowrap">{p.name}</span>
                                        </div>))}
                                </div>))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-section">
                <div className="container">
                    <ScrollAnimate animation="fadeUp">
                        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-3">
                            <div>
                                <h2 className="text-h1 mb-1">Блог</h2>
                                <p className="text-body text-text-secondary">
                                    Полезные статьи о&nbsp;технологиях и&nbsp;карьере в&nbsp;IT
                                </p>
                            </div>
                            <Link to="/blog" className="group flex items-center gap-1.5 text-primary text-body-sm font-medium hover:gap-2.5 transition-all">
                                Все статьи <ArrowRight size={iconSize.sm}/>
                            </Link>
                        </div>
                    </ScrollAnimate>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {blogPosts.slice(0, 3).map((p, i) => (
                            <ScrollAnimate key={p.id} animation="fadeUp" delay={((i % 3) + 1) as 1 | 2 | 3}>
                                <BlogCard post={p}/>
                            </ScrollAnimate>))}
                    </div>
                </div>
            </section>

            <section className="py-section relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/8 via-transparent to-transparent"/>
                <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-[100px]"/>
                <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-accent-purple/15 rounded-full blur-[100px]"/>
                <div className="container relative">
                    <ScrollAnimate animation="scale">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-h1 mb-3">Готовы начать&nbsp;обучение?</h2>
                            <p className="text-body-lg text-text-secondary mb-6">
                                Зарегистрируйтесь сейчас и&nbsp;получите доступ к&nbsp;бесплатным урокам
                            </p>
                            <Link to="/register">
                                <Button variant="primary" size="lg" className="glow-primary">Начать бесплатно</Button>
                            </Link>
                        </div>
                    </ScrollAnimate>
                </div>
            </section>
        </>
    );
}