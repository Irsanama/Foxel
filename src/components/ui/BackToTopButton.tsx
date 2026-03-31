import {useState, useEffect} from 'react';
import {ArrowUp} from 'lucide-react';
import {cn} from '@/utils/cn';
import {iconSize} from '@/assets';


export const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const fn = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', fn, {passive: true});
        return () => window.removeEventListener('scroll', fn);
    }, []);
    return (
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} aria-label="Вернуться наверх" className={cn('fixed bottom-6 right-6 z-[var(--z-sticky)] w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-surface-hover hover:border-primary transition-all duration-300 group clickable', visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none')}>
            <ArrowUp size={iconSize.md} className="text-text-secondary group-hover:text-primary transition-colors"/>
        </button>
    );
};