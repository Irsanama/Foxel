import {useState} from 'react';
import {Link} from 'react-router-dom';
import {ChevronDown} from 'lucide-react';
import {MaskIcon} from '@/components/ui/MaskIcon';
import {cn} from '@/utils/cn';
import {svg, socialLinks, socialSvgMap, iconSize} from '@/assets';


const footerLinks = {
    courses: [
        {name: 'Веб-разработка', href: '/courses?category=web'},
        {name: 'Python', href: '/courses?category=programming'},
        {name: 'UI/UX Дизайн', href: '/courses?category=design'},
        {name: 'Data Science', href: '/courses?category=data'},
        {name: 'Мобильная разработка', href: '/courses?category=mobile'},
    ],

    company: [
        {name: 'О нас', href: '/about'},
        {name: 'Сообщество', href: '/community'},
        {name: 'Блог', href: '/blog'},
        {name: 'Карьера', href: '/careers'},
        {name: 'Контакты', href: '/contacts'},
    ],

    support: [
        {name: 'Помощь', href: '/contacts'}, {name: 'FAQ', href: '/faq'},
        {name: 'Документация', href: '/docs'}, {name: 'Обратная связь', href: '/contacts'},
    ],
} as const;


function Accordion({title, items}: { title: string; items: readonly { readonly name: string; readonly href: string }[] }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-border lg:border-none">
            <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-4 lg:py-0 lg:mb-4 lg:cursor-default" aria-expanded={open}>
                <h4 className="font-medium text-text-secondary text-body">{title}</h4>
                <ChevronDown size={iconSize.md} className={cn('lg:hidden text-text-muted transition-transform duration-200', open && 'rotate-180')}/>
            </button>
            <ul className={cn('overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 lg:!pb-0', open ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0')}>
                <div className="space-y-3">
                    {items.map(l => (
                        <li key={l.name}>
                            <Link to={l.href} className="block text-text-muted hover:text-text-secondary transition-colors text-body-sm py-0.5">{l.name}</Link>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
}


export function Footer() {
    return (
        <footer className="bg-bg-secondary border-t border-border">
            <div className="container py-section-sm">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-8 lg:mb-10">
                    <div className="pb-6 border-b border-border lg:border-none lg:pb-0й">
                        <Link to="/" className="inline-flex items-center gap-3 mb-4" aria-label="Фоксель">
                            <div className="w-[2.25rem] h-[2.25rem] rounded-lg bg-bg-tertiary border border-border flex items-center justify-center shrink-0">
                                <img src={svg.icons.imagePlaceholder} alt="" className="w-[1rem] h-[1rem] opacity-40"/>
                            </div>
                            <span className="font-display text-gradient-primary text-lg">Фоксель</span>
                        </Link>
                        <p className="text-text-muted text-body-sm mb-4 max-w-xs">Современная IT‑школа для тех, кто хочет освоить digital‑профессии.</p>
                        <div className="flex gap-[0.5rem]">
                            {socialLinks.slice(0, 4).map(s => (
                                <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" className="group w-[2.25rem] h-[2.25rem] flex items-center justify-center rounded-lg bg-surface transition-all duration-300 hover:scale-110"
                                   onMouseEnter={e => {
                                       e.currentTarget.style.backgroundColor = s.color
                                   }}
                                   onMouseLeave={e => {
                                       e.currentTarget.style.backgroundColor = ''
                                   }}
                                   aria-label={s.name}>
                                    <MaskIcon src={socialSvgMap[s.id]} size="sm" className="text-text-muted group-hover:text-white transition-colors"/>
                                </a>
                            ))}
                        </div>
                    </div>

                    <Accordion title="Курсы" items={footerLinks.courses}/>
                    <Accordion title="Компания" items={footerLinks.company}/>
                    <Accordion title="Поддержка" items={footerLinks.support}/>
                </div>

                <div className="py-6 md:py-8 border-b border-border mb-6 md:mb-8 lg:border-t">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h4 className="font-medium text-text-secondary mb-1">Подпишитесь на&nbsp;рассылку</h4>
                            <p className="text-text-muted text-body-sm">Получайте новости о&nbsp;курсах и&nbsp;эксклюзивные материалы</p>
                        </div>
                        <form className="flex gap-2 w-full md:w-auto" onSubmit={e => e.preventDefault()}>
                            <input type="email" placeholder="Ваш email" className="input flex-1 md:w-64"/>
                            <button type="submit" className="btn-primary btn-sm whitespace-nowrap">Подписаться</button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-text-muted text-body-sm">© {new Date().getFullYear()} Фоксель. Все права защищены.</p>
                    <p className="text-text-muted text-body-sm">
                        Designed by{' '}
                        <Link to="https://github.com/Irsanama" className="text-primary hover:text-primary-light transition-colors">Irsanama</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}