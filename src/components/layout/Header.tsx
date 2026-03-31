import {useState, useEffect, useRef} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Menu, X, Star, ExternalLink} from 'lucide-react';
import {Button} from '@/components/ui/Button';
import {cn} from '@/utils/cn';
import {svg, iconSize} from '@/assets';


const nav = [
    {label: 'Главная', href: '/'},
    {label: 'Курсы', href: '/courses'},
    {label: 'Блог', href: '/blog'},
    {label: 'О нас', href: '/about'},
];


function KidsLink({mobile = false, onClick}: { mobile?: boolean; onClick?: () => void }) {
    return (
        <a href="https://kids.foxel.com" target="_blank" rel="noopener noreferrer" onClick={onClick} className={cn('group flex items-center gap-1.5 font-medium transition-all duration-200', mobile ? 'px-4 py-3 rounded-lg text-text hover:bg-accent-purple/10' : 'px-3 py-1.5 rounded-lg text-text-secondary hover:text-accent-purple hover:bg-accent-purple/10')}>
            <Star size={mobile ? 16 : 14} className={cn('transition-colors', mobile ? 'text-accent-purple' : 'text-accent-purple/70 group-hover:text-accent-purple')}/>
            <span className={mobile ? 'text-base' : 'text-sm'}>Для детей</span>
            <ExternalLink size={mobile ? 14 : 12} className="opacity-50 group-hover:opacity-80 transition-opacity"/>
        </a>
    );
}


function useHeaderVisibility() {
    const [visible, setVisible] = useState(true);
    const [atTop, setAtTop] = useState(true);
    const lastY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const onScroll = () => {
            if (ticking.current) return;
            ticking.current = true;
            requestAnimationFrame(() => {
                const y = window.scrollY;
                setAtTop(y < 10);
                setVisible(y < 10 || y < lastY.current || y < 60);
                lastY.current = y;
                ticking.current = false;
            });
        };
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return {visible, atTop};
}


export function Header() {
    const [open, setOpen] = useState(false);
    const {visible, atTop} = useHeaderVisibility();
    const show = visible || open;

    return (
        <header
            className={cn('fixed top-0 left-0 right-0 z-[var(--z-sticky)] border-b backdrop-blur-lg transition-all duration-300', show ? 'translate-y-0' : '-translate-y-full', atTop && !open ? 'bg-bg/60 border-transparent' : 'bg-bg/80 border-border')}>
            <div className="container">
                <div className="flex items-center justify-between h-14 lg:h-16">
                    <Link to="/" className="flex items-center" aria-label="Фоксель">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-bg-tertiary border border-border flex items-center justify-center shrink-0">
                                <img src={svg.icons.imagePlaceholder} alt="" className="w-4 h-4 opacity-40" aria-hidden="true"/>
                            </div>
                            <span className="font-display text-gradient-primary text-lg">Фоксель</span>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-1" aria-label="Навигация">
                        {nav.map(i => (
                            <NavLink key={i.href} to={i.href} className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link'} end={i.href === '/'}>
                                {i.label}
                            </NavLink>
                        ))}
                        <div className="ml-2"><KidsLink/></div>
                    </nav>

                    <div className="hidden lg:flex items-center gap-3">
                        <Link to="/login"><Button variant="secondary" size="sm">Вход</Button></Link>
                        <Link to="/register"><Button variant="primary" size="sm">Регистрация</Button></Link>
                    </div>

                    <button className="lg:hidden p-2 text-text-secondary hover:text-text transition-colors clickable" onClick={() => setOpen(!open)} aria-label={open ? 'Закрыть' : 'Меню'} aria-expanded={open}>
                        {open ? <X size={iconSize.lg}/> : <Menu size={iconSize.lg}/>}
                    </button>
                </div>

                <div
                    className={cn('lg:hidden transition-all duration-300', open ? 'max-h-[calc(100dvh-3.5rem)] overflow-y-auto pb-6' : 'max-h-0 overflow-hidden')}>
                    <nav className="flex flex-col gap-1 pt-4">
                        {nav.map(i => (
                            <NavLink key={i.href} to={i.href} className={({isActive}) => cn('px-4 py-3 rounded-lg transition-colors', isActive ? 'text-primary bg-surface' : 'text-text-secondary hover:text-text hover:bg-surface')} onClick={() => setOpen(false)} end={i.href === '/'}>
                                {i.label}
                            </NavLink>
                        ))}
                        <div className="mt-2"><KidsLink mobile onClick={() => setOpen(false)}/></div>
                    </nav>
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                        <Link to="/login" onClick={() => setOpen(false)}><Button variant="secondary" className="w-full">Вход</Button></Link>
                        <Link to="/register" onClick={() => setOpen(false)}><Button variant="primary" className="w-full">Регистрация</Button></Link>
                    </div>
                </div>
            </div>
        </header>
    );
}