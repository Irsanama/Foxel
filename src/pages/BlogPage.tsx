import {useState, useMemo} from 'react';
import {Search, Loader2} from 'lucide-react';
import {BlogCard} from '@/components/ui/BlogCard';
import {ScrollAnimate} from '@/components/ui/ScrollAnimate';
import {blogPosts as allPosts} from '@/data/mockData';
import {cn} from '@/utils/cn';
import {iconSize} from '@/assets';


const categories = ['Все', 'Карьера', 'Инструменты', 'Дизайн', 'Разработка'];


export function BlogPage() {
    const [category, setCategory] = useState('Все');
    const [search, setSearch] = useState('');

    const filtered = useMemo(() => allPosts.filter(p =>
        (category === 'Все' || p.category === category) &&
        (!search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase()))
    ), [category, search]);

    const featured = filtered[0] || null;
    const rest = filtered.slice(1);
    const isEmpty = filtered.length === 0;

    return (
        <>
            <section className="relative bg-bg-secondary border-b border-border overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute -top-20 -right-20 w-80 h-80 bg-accent-purple/10 rounded-full blur-[100px]"/>
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-[100px]"/>
                </div>
                <div className="container py-section-sm relative z-10">
                    <ScrollAnimate animation="fadeUp">
                        <h1 className="text-display mb-4">Блог</h1>
                        <p className="text-body-lg text-text-secondary max-w-2xl mb-8">
                            Статьи о&nbsp;технологиях, карьере в&nbsp;IT и&nbsp;полезные советы
                        </p>
                    </ScrollAnimate>
                    <ScrollAnimate animation="fadeUp" delay={1}>
                        <div className="relative max-w-md">
                            <Search size={iconSize.md} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"/>
                            <input type="text" placeholder="Поиск по статьям..." value={search} onChange={e => setSearch(e.target.value)} className="input" style={{paddingLeft: 44}}/>
                        </div>
                    </ScrollAnimate>
                </div>
            </section>

            <section className="py-section">
                <div className="container">
                    <ScrollAnimate animation="fadeUp">
                        <div className="flex flex-wrap gap-2 mb-10">
                            {categories.map(c => (
                                <button key={c} onClick={() => setCategory(c)} className={cn('px-4 py-2 rounded-lg text-sm font-medium transition-all clickable', category === c ? 'bg-accent-purple text-white shadow-lg shadow-accent-purple/25' : 'bg-surface text-text-secondary hover:text-text hover:bg-surface-hover border border-border')}>
                                    {c}</button>
                            ))}
                        </div>
                    </ScrollAnimate>

                    {isEmpty && (
                        <div className="text-center py-16">
                            <p className="text-h3 text-text-muted mb-2">Ничего не&nbsp;найдено</p>
                            <p className="text-body-sm text-text-muted">Попробуйте изменить запрос или&nbsp;категорию</p>
                        </div>
                    )}

                    {featured && (
                        <ScrollAnimate animation="fadeUp">
                            <div className="mb-10">
                                <BlogCard post={featured} variant="featured"/>
                            </div>
                        </ScrollAnimate>
                    )}

                    {rest.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {rest.map((p, i) => (
                                <ScrollAnimate key={p.id} animation="fadeUp" delay={((i % 3) + 1) as 1 | 2 | 3}>
                                    <BlogCard post={p}/>
                                </ScrollAnimate>))}
                        </div>
                    )}

                    {!isEmpty && (
                        <div className="mt-12 flex flex-col items-center gap-3">
                            <div className="flex items-center gap-2 text-text-muted">
                                <Loader2 size={iconSize.md} className="animate-spin text-accent-purple"/>
                                <span className="text-body-sm">Загрузка статей...</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-accent-purple/60 animate-pulse"/>
                                <div className="w-2 h-2 rounded-full bg-accent-purple/40 animate-pulse" style={{animationDelay: '0.2s'}}/>
                                <div className="w-2 h-2 rounded-full bg-accent-purple/20 animate-pulse" style={{animationDelay: '0.4s'}}/>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}