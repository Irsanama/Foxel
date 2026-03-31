import {cn} from '@/utils/cn';
import {iconSize, type IconSize} from '@/assets';

export function MaskIcon({src, size = 'md', className}: { src: string; size?: IconSize; className?: string }) {
    const s = iconSize[size];

    return (
        <span
            className={cn('inline-block shrink-0', className)}
            aria-hidden="true"
            style={{
                width: s,
                height: s,
                backgroundColor: 'currentColor',
                maskImage: `url(${src})`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: `url(${src})`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
            }}
        />
    );
}