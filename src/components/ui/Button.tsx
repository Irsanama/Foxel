import {ButtonHTMLAttributes, forwardRef} from 'react';
import {cn} from '@/utils/cn';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
}


export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant = 'primary', size = 'md', children, ...props}, ref) => {
        const v = {primary: 'btn-primary', secondary: 'btn-secondary', ghost: 'btn-ghost'};
        const s = {sm: 'btn-sm', md: '', lg: 'btn-lg'};
        return <button ref={ref} className={cn(v[variant], s[size], className)} {...props}>{children}</button>;
    }
);
Button.displayName = 'Button';