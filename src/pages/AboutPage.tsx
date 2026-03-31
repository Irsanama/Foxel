import {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {
    BookOpen, User, Play, Star,
    ChevronLeft, ChevronRight, ArrowRight,
} from 'lucide-react';
import {Button} from '@/components/ui/Button';
import {AvatarPlaceholder} from '@/components/ui/ImagePlaceholder';
import {MaskIcon} from '@/components/ui/MaskIcon';
import {ScrollAnimate} from '@/components/ui/ScrollAnimate';
import {cn} from '@/utils/cn';
import {iconSize, svg, images} from '@/assets';


interface TeamMember {
    name: string;
    role: string;
    bio: string;
    color: string;
    avatar?: string;
    socials?: { telegram?: boolean; linkedin?: boolean; github?: boolean };
}

const team: TeamMember[] = [
    {
        name: 'Артём Волков',
        role: 'CEO & Founder',
        bio: 'Основал Фоксель в 2020 году. 10+ лет в IT.',
        color: '#E85D04',
        avatar: images.team['alexander-volkov'],
        socials: {telegram: true, linkedin: true}
    },
    {
        name: 'Екатерина Морозова',
        role: 'Head of Education',
        bio: 'Разрабатывает учебные программы и методики.',
        color: '#7B2CBF',
        avatar: images.team['ekaterina-morozova'],
        socials: {telegram: true, linkedin: true}
    },
    {
        name: 'Дмитрий Соколов',
        role: 'CTO',
        bio: 'Отвечает за техническую инфраструктуру.',
        color: '#06D6A0',
        avatar: images.team['dmitry-sokolov'],
        socials: {telegram: true, github: true}
    },
    {
        name: 'Анна Иванова',
        role: 'Lead Designer',
        bio: 'Создаёт визуальный стиль всех продуктов.',
        color: '#F77F00',
        avatar: images.team['anna-ivanova'],
        socials: {telegram: true, linkedin: true}
    },
    {
        name: 'Михаил Петров',
        role: 'Data Scientist',
        bio: 'Ведёт направление Data Science и ML.',
        color: '#0EA5E9',
        avatar: images.team['mikhail-petrov'],
        socials: {telegram: true, github: true}
    },
    {
        name: 'Юлия Смирнова',
        role: 'Community Manager',
        bio: 'Развивает сообщество и поддерживает студентов.',
        color: '#EC4899',
        avatar: images.team['yulia-smirnova'],
        socials: {telegram: true, linkedin: true}
    },
];

const values = [
    {
        icon: BookOpen,
        color: 'text-primary',
        bg: 'bg-primary/10',
        title: 'Практика важнее теории',
        desc: '80% обучения — реальные проекты для портфолио.'
    },
    {
        icon: User,
        color: 'text-accent-purple',
        bg: 'bg-accent-purple/10',
        title: 'Сообщество',
        desc: 'Среда, где студенты растут вместе.'
    },
    {
        icon: Play,
        color: 'text-accent-green',
        bg: 'bg-accent-green/10',
        title: 'Актуальность',
        desc: 'Курсы обновляются каждые 3–6 месяцев.'
    },
    {
        icon: Star,
        color: 'text-yellow-500',
        bg: 'bg-yellow-500/10',
        title: 'Доступность',
        desc: 'Рассрочка, скидки и\u00A0бесплатный контент.'
    },
];

const milestones = [
    {year: '2020', title: 'Начало пути', text: 'Запуск первого курса по\u00A0веб-разработке.', color: '#E85D04'},
    {year: '2021', title: 'Рост', text: '1\u00A0000 выпускников, запуск Python.', color: '#7B2CBF'},
    {year: '2022', title: 'Расширение', text: '5\u00A0000 студентов, Data\u00A0Science.', color: '#06D6A0'},
    {year: '2023', title: 'Карьера', text: '10\u00A0000 студентов, трудоустройство.', color: '#F77F00'},
    {year: '2024', title: 'Партнёрства', text: 'IT-компании, 50+ курсов.', color: '#0EA5E9'},
    {year: '2025', title: 'Масштаб', text: '15\u00A0000+ студентов.', color: '#EC4899'},
    {year: '2026', title: 'Будущее', text: 'AI/ML, блокчейн, кибербезопасность.', color: '#E85D04'},
];

const socialConfig: Record<string, { icon: string; hoverClass: string; label: string }> = {
    telegram: {icon: svg.social.telegram, hoverClass: 'hover:text-[#26A5E4] hover:bg-[#26A5E4]/10', label: 'Telegram'},
    linkedin: {icon: svg.social.linkedin, hoverClass: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10', label: 'LinkedIn'},
    github: {icon: svg.social.github, hoverClass: 'hover:text-text hover:bg-surface-hover', label: 'GitHub'},
};

const SCROLL_STEP = 320;

const stats = [
    {value: '15\u00A0000+', label: 'Студентов', gradient: 'text-gradient-primary'},
    {value: '50+', label: 'Курсов', gradient: 'text-gradient-green'},
    {value: '30+', label: 'Экспертов', gradient: 'text-gradient-purple'},
    {value: '6\u00A0лет', label: 'На рынке', gradient: 'text-gradient-primary'},
]


function TeamCard({member}: { member: TeamMember }) {
    const socials = member.socials ? (Object.entries(member.socials) as [string, boolean][]).filter(([, v]) => v) : [];

    return (
        <div className={`group bg-surface rounded-2xl border border-border overflow-hidden flex flex-col snap-start shrink-0 self-stretch w-[14.5rem] md:w-[15.5rem] transition-all duration-300 hover:border-border-hover hover:-translate-y-0.5`} style={{boxShadow: 'var(--shadow-sm)'}}>
            <div className="flex items-center justify-center py-5" style={{background: `linear-gradient(135deg, ${member.color}20 0%, ${member.color}05 100%)`}}>
                <div className="group-hover:scale-105 transition-transform duration-300" style={{filter: `drop-shadow(0 6px 20px ${member.color}25)`}}>
                    <AvatarPlaceholder src={member.avatar} alt={member.name} size="xl" className="!w-32 !h-32 !rounded-2xl ring-4 ring-surface"/>
                </div>
            </div>

            <div className="p-4 pt-3 flex flex-col items-center text-center flex-1">
                <h3 className="text-body font-semibold text-text mb-0.5 group-hover:text-primary transition-colors">
                    {member.name}
                </h3>
                <p className="text-caption font-medium mb-2" style={{color: member.color}}>
                    {member.role}
                </p>
                <p className="text-caption text-text-muted leading-relaxed flex-1">
                    {member.bio}
                </p>

                {socials.length > 0 && (
                    <div className="flex justify-center gap-1.5 mt-3 pt-3 border-t border-border w-full">
                        {socials.map(([key]) => {
                            const cfg = socialConfig[key];
                            if (!cfg) return null;
                            return (
                                <button key={key} type="button" title={cfg.label} className={`w-8 h-8 rounded-lg bg-bg-tertiary flex items-center justify-center text-text-muted ${cfg.hoverClass} transition-all cursor-pointer`}>
                                    <MaskIcon src={cfg.icon} size="sm"/>
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}


function TeamSlider() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(true);

    const updateButtons = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanLeft(el.scrollLeft > 5);
        setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
    };

    const scrollTo = (dir: 'left' | 'right') => {
        scrollRef.current?.scrollBy({left: dir === 'left' ? -SCROLL_STEP : SCROLL_STEP, behavior: 'smooth'})
    };

    const navBtn = (dir: 'left' | 'right', enabled: boolean) => (
        <button onClick={() => scrollTo(dir)} disabled={!enabled} className={cn('w-9 h-9 rounded-full border flex items-center justify-center transition-all', enabled ? 'border-border bg-surface hover:bg-surface-hover text-text-secondary hover:text-text clickable' : 'border-border/50 bg-surface/50 text-text-muted/50 cursor-not-allowed')}>
            {dir === 'left' ? <ChevronLeft size={iconSize.md}/> : <ChevronRight size={iconSize.md}/>}
        </button>
    );

    return (
        <div className="relative">
            <div className="hidden md:flex items-center gap-2 absolute -top-14 right-0 z-10">
                {navBtn('left', canLeft)}
                {navBtn('right', canRight)}
            </div>

            <div ref={scrollRef} onScroll={updateButtons} className="flex items-stretch gap-4 overflow-x-auto no-scrollbar py-2 snap-x snap-mandatory">
                {team.map((member, i) => (<TeamCard key={i} member={member}/>))}

                <Link to="/about#team" className={`group bg-surface rounded-2xl border border-dashed border-border overflow-hidden flex flex-col snap-start shrink-0 self-stretch w-[14.5rem] md:w-[15.5rem] transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5 clickable`} style={{boxShadow: 'var(--shadow-sm)'}}>
                    <div className="flex items-center justify-center py-5" style={{background: 'linear-gradient(135deg, rgba(232,93,4,0.12) 0%, rgba(232,93,4,0.02) 100%)'}}>
                        <div className="w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center ring-4 ring-surface group-hover:scale-105 transition-transform duration-300">
                            <ArrowRight size={28} className="text-primary"/>
                        </div>
                    </div>
                    <div className="p-4 pt-3 flex flex-col items-center text-center flex-1">
                        <p className="text-body font-semibold text-text-secondary group-hover:text-text transition-colors mb-0.5">Вся команда</p>
                        <p className="text-caption font-medium text-primary mb-2">Ещё 10+ человек</p>
                        <p className="text-caption text-text-muted leading-relaxed flex-1">Познакомьтесь со&nbsp;всеми</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}


export function AboutPage() {
    return (
        <>
            <section className="relative pt-10 pb-12 md:pt-16 md:pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent"/>
                <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[100px]"/>
                <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-accent-purple/15 rounded-full blur-[100px]"/>

                <div className="container relative">
                    <div className="max-w-3xl">
                        <ScrollAnimate animation="fadeUp">
                            <h1 className="text-display mb-5">Мы&nbsp;— <span className="text-gradient-primary">Фоксель</span></h1>
                        </ScrollAnimate>
                        <ScrollAnimate animation="fadeUp" delay={1}>
                            <p className="text-body-lg text-text-secondary mb-7 max-w-xl">
                                Современная IT‑школа, которая помогает людям освоить
                                digital‑профессии и&nbsp;построить успешную карьеру.
                            </p>
                        </ScrollAnimate>
                        <ScrollAnimate animation="fadeUp" delay={2}>
                            <div className="flex flex-col md:flex-row gap-3">
                                <Link to="/courses" className="flex">
                                    <Button variant="primary" className="w-full md:w-auto">Смотреть курсы</Button>
                                </Link>
                                <a href="#team" className="flex">
                                    <Button variant="secondary" className="w-full md:w-auto">Наша команда</Button>
                                </a>
                            </div>
                        </ScrollAnimate>
                    </div>
                </div>
            </section>

            <section className="bg-bg-secondary border-y border-border">
                <div className="container py-8 md:py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s, i) => (
                            <ScrollAnimate key={i} animation="fadeUp" delay={(i + 1) as 1 | 2 | 3 | 4}>
                                <div className="text-center">
                                    <div className={`text-h2 ${s.gradient} mb-0.5`}>{s.value}</div>
                                    <div className="text-body-sm text-text-muted">{s.label}</div>
                                </div>
                            </ScrollAnimate>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-section">
                <div className="container">
                    <ScrollAnimate animation="fadeUp">
                        <div className="text-center mb-8 md:mb-10">
                            <h2 className="text-h1 mb-2">Наши ценности</h2>
                            <p className="text-body text-text-secondary max-w-lg mx-auto">Принципы, которые определяют всё, что мы&nbsp;делаем</p>
                        </div>
                    </ScrollAnimate>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                        {values.map((v, i) => (
                            <ScrollAnimate key={i} animation="fadeUp" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                                <div className="card p-5 h-full group hover:-translate-y-1 transition-all duration-300">
                                    <div className={`w-11 h-11 ${v.bg} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                        <v.icon size={iconSize.md} className={v.color}/>
                                    </div>
                                    <h3 className="text-h5 mb-1.5 group-hover:text-primary transition-colors">{v.title}</h3>
                                    <p className="text-body-sm text-text-secondary">{v.desc}</p>
                                </div>
                            </ScrollAnimate>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-section bg-bg-secondary overflow-hidden">
                <div className="container">
                    <ScrollAnimate animation="fadeUp">
                        <div className="text-center mb-10 md:mb-14">
                            <h2 className="text-h1 mb-2">Наша история</h2>
                            <p className="text-body text-text-secondary max-w-lg mx-auto">От&nbsp;первого курса до&nbsp;тысяч выпускников</p>
                        </div>
                    </ScrollAnimate>

                    <div className="max-w-3xl mx-auto relative">
                        <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px"/>
                        {milestones.map((m, i) => (
                            <ScrollAnimate key={i} animation={i % 2 === 0 ? 'fadeRight' : 'fadeLeft'} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                                <div className={cn('relative flex items-start gap-5 pb-10 last:pb-0', i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')}>
                                    <div className="absolute left-[23px] md:left-1/2 -translate-x-1/2 mt-1 z-10">
                                        <div className="w-3.5 h-3.5 rounded-full ring-4 ring-bg-secondary" style={{backgroundColor: m.color}}/>
                                    </div>
                                    <div className={cn('ml-14 md:ml-0 md:w-[calc(50%-24px)]', i % 2 === 0 ? 'md:text-right md:mr-auto' : 'md:text-left md:ml-auto')}>
                                        <div className="bg-surface border border-border rounded-xl p-4 hover:border-border-hover transition-colors">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="inline-block px-2.5 py-0.5 rounded-full text-caption font-bold text-white" style={{backgroundColor: m.color}}>
                                                    {m.year}
                                                </span>
                                                <span className="text-body-sm font-semibold text-text">{m.title}</span>
                                            </div>
                                            <p className="text-body-sm text-text-secondary">{m.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimate>
                        ))}
                    </div>
                </div>
            </section>

            <section id="team" className="py-section scroll-mt-20">
                <div className="container">
                    <ScrollAnimate animation="fadeUp">
                        <div className="mb-8 md:mb-10">
                            <h2 className="text-h1 mb-2">Наша команда</h2>
                            <p className="text-body text-text-secondary max-w-lg">Люди, которые делают Фоксель лучше каждый день</p>
                        </div>
                    </ScrollAnimate>
                    <ScrollAnimate animation="fadeUp" delay={1}>
                        <TeamSlider/>
                    </ScrollAnimate>
                </div>
            </section>

            <section className="py-section relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/8 via-transparent to-transparent"/>
                <div className="absolute top-10 right-1/4 w-64 h-64 bg-accent-purple/15 rounded-full blur-[100px]"/>
                <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-primary/15 rounded-full blur-[100px]"/>

                <div className="container relative">
                    <ScrollAnimate animation="scale">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="text-h1 mb-3">Хотите присоединиться?</h2>
                            <p className="text-body text-text-secondary mb-6 max-w-md mx-auto">
                                Мы&nbsp;ищем талантливых людей. Если разделяете наши ценности&nbsp;— напишите.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-3">
                                <Link to="/contacts" className="flex">
                                    <Button variant="primary" className="w-full md:w-auto">Связаться с&nbsp;нами</Button>
                                </Link>
                                <Link to="/courses" className="flex">
                                    <Button variant="secondary" className="w-full md:w-auto">Начать учиться</Button>
                                </Link>
                            </div>
                        </div>
                    </ScrollAnimate>
                </div>
            </section>
        </>
    );
}