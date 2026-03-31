import {cn} from '@/utils/cn';


export function Badge({variant = 'neutral', solid = false, children, className}: {
    variant?: 'primary' | 'green' | 'purple' | 'neutral';
    solid?: boolean;
    children: React.ReactNode;
    className?: string;
}) {
    const base: Record<string, string> = {
        primary: solid ? 'badge-primary-solid' : 'badge-primary',
        green: solid ? 'badge-green-solid' : 'badge-green',
        purple: solid ? 'badge-purple-solid' : 'badge-purple',
        neutral: 'badge-neutral',
    };
    return <span className={cn(base[variant], className)}>{children}</span>;
}