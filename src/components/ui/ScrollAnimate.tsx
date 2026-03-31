import {ReactNode, useEffect, useRef, useState} from 'react';
import {cn} from '@/utils/cn';

type Anim = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale';

const cls: Record<Anim, string> = {
    fadeUp: 'scroll-animate',
    fadeLeft: 'scroll-animate-left',
    fadeRight: 'scroll-animate-right',
    scale: 'scroll-animate-scale'
};


function useVisible(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                setVisible(true);
                obs.unobserve(el)
            }
        }, {threshold, rootMargin: '0px 0px -50px 0px'});
        obs.observe(el);

        return () => obs.unobserve(el);
    }, [threshold]);

    return {ref, visible};
}


export function ScrollAnimate({children, animation = 'fadeUp', delay, className, threshold = 0.1}: {
    children: ReactNode;
    animation?: Anim;
    delay?: number;
    className?: string;
    threshold?: number
}) {
    const {ref, visible} = useVisible(threshold);

    return <div ref={ref} className={cn(cls[animation], delay && `scroll-stagger-${delay}`, visible && 'is-visible', className)}>{children}</div>;
}


export function ScrollAnimateGroup({children, animation = 'fadeUp', className}: {
    children: ReactNode;
    animation?: Anim;
    className?: string
}) {
    const {ref, visible} = useVisible(0.1);

    return <div ref={ref} className={className}>{Array.isArray(children) ? children.map((child, i) =>
        <div key={i} className={cn(cls[animation], `scroll-stagger-${Math.min(i + 1, 6)}`, visible && 'is-visible')}>{child}</div>) : children}</div>;
}