import {useState, useMemo} from 'react';
import {Search, Loader2} from 'lucide-react';
import {CourseCard} from '@/components/ui/CourseCard';
import {ScrollAnimate} from '@/components/ui/ScrollAnimate';
import {courses as allCourses} from '@/data/mockData';
import type {CourseCategory, CourseLevel} from '@/types';
import {cn} from '@/utils/cn';
import {iconSize} from '@/assets';


const categories: { value: CourseCategory | 'all'; label: string }[] = [
    {value: 'all', label: 'Все'},
    {value: 'web', label: 'Веб-разработка'},
    {value: 'programming', label: 'Программирование'},
    {value: 'design', label: 'Дизайн'}, {value: 'data', label: 'Data Science'},
    {value: 'mobile', label: 'Мобильная разработка'},
];

const levels: { value: CourseLevel | 'all'; label: string }[] = [
    {value: 'all', label: 'Все уровни'},
    {value: 'beginner', label: 'Начинающий'},
    {value: 'intermediate', label: 'Средний'},
    {value: 'advanced', label: 'Продвинутый'},
];


export function CoursesPage() {
    const [category, setCategory] = useState<CourseCategory | 'all'>('all');
    const [level, setLevel] = useState<CourseLevel | 'all'>('all');
    const [search, setSearch] = useState('');

    const filtered = useMemo(() => allCourses.filter(c =>
        (category === 'all' || c.category === category) && (level === 'all' || c.level === level) &&
        (!search || c.title.toLowerCase().includes(search.toLowerCase()) || c.shortDescription.toLowerCase().includes(search.toLowerCase()) || c.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
    ), [category, level, search]);

    return (
        <>
            <section className="relative bg-bg-secondary border-b border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"/>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"/>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"/>
                <div className="container py-section-sm relative">
                    <ScrollAnimate animation="fadeUp">
                        <h1 className="text-display mb-4">Каталог курсов</h1>
                    </ScrollAnimate>
                    <ScrollAnimate animation="fadeUp" delay={1}>
                        <p className="text-body-lg text-text-secondary max-w-2xl mb-8">
                            Выберите курс и&nbsp;начните путь в&nbsp;IT.
                        </p>
                    </ScrollAnimate>
                    <ScrollAnimate animation="fadeUp" delay={2}>
                        <div className="relative max-w-md">
                            <Search size={iconSize.md} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"/>
                            <input type="text" placeholder="Поиск по курсам..." value={search} onChange={e => setSearch(e.target.value)} className="input" style={{paddingLeft: 44}}/>
                        </div>
                    </ScrollAnimate>
                </div>
            </section>

            <section className="py-section">
                <div className="container">
                    <div className="mb-8 space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {categories.map(c => (
                                <button key={c.value} onClick={() => setCategory(c.value)} className={cn('px-4 py-2 rounded-lg text-sm font-medium transition-all clickable', category === c.value ? 'bg-primary text-white' : 'bg-surface text-text-secondary hover:text-text hover:bg-surface-hover')}>
                                    {c.label}
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {levels.map(l => (
                                <button key={l.value} onClick={() => setLevel(l.value)} className={cn('px-3 py-1.5 rounded-full text-xs font-medium border transition-all clickable', level === l.value ? 'border-accent-green bg-accent-green/10 text-accent-green' : 'border-border text-text-muted hover:text-text-secondary hover:border-border-hover')}>
                                    {l.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {filtered.length > 0 &&
                        <p className="text-body-sm text-text-muted mb-6">Найдено: {filtered.length}</p>}

                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {filtered.map((c, i) => (
                                <ScrollAnimate key={c.id} animation="fadeUp" delay={((i % 3) + 1) as 1 | 2 | 3}>
                                    <CourseCard course={c}/>
                                </ScrollAnimate>))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-h3 text-text-muted mb-2">
                                Курсы не&nbsp;найдены</p>
                            <p className="text-body-sm text-text-muted">
                                Попробуйте изменить фильтры
                            </p>
                        </div>
                    )}

                    {filtered.length > 0 && (
                        <div className="mt-12 flex flex-col items-center gap-3">
                            <div className="flex items-center gap-2 text-text-muted">
                                <Loader2 size={iconSize.md} className="animate-spin text-primary"/>
                                <span className="text-body-sm">Загрузка курсов...</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse"/>
                                <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" style={{animationDelay: '0.2s'}}/>
                                <div className="w-2 h-2 rounded-full bg-primary/20 animate-pulse" style={{animationDelay: '0.4s'}}/>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}