import {useState, useCallback} from 'react';
import {Image, Video, User, GraduationCap, Play} from 'lucide-react';
import {cn} from '@/utils/cn';


const icons = {
    image: <Image size={48} strokeWidth={1}/>,
    video: <Video size={48} strokeWidth={1}/>,
    user: <User size={48} strokeWidth={1}/>,
    course: <GraduationCap size={48} strokeWidth={1}/>
};

const gradients = {
    primary: 'from-primary/20 via-primary/5 to-transparent',
    green: 'from-accent-green/20 via-accent-green/5 to-transparent',
    purple: 'from-accent-purple/20 via-accent-purple/5 to-transparent',
    mixed: 'from-accent-purple/20 via-primary/10 to-accent-green/20'
};

const aspects = {video: 'aspect-video', square: 'aspect-square', portrait: 'aspect-[3/4]', auto: ''};

export function ImagePlaceholder({src, alt, className, aspectRatio = 'video', fallbackIcon = 'image', gradientVariant = 'mixed'}: {
    src?: string;
    alt: string;
    className?: string;
    aspectRatio?: keyof typeof aspects;
    fallbackIcon?: keyof typeof icons;
    gradientVariant?: keyof typeof gradients;
}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const onLoad = useCallback(() => setLoading(false), []);
    const onError = useCallback(() => {
        setLoading(false);
        setError(true);
    }, []);

    return (
        <div className={cn('relative overflow-hidden bg-bg-tertiary', aspects[aspectRatio], className)}>
            <div className={cn('absolute inset-0 bg-gradient-to-br', gradients[gradientVariant])}/>
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-4 left-4 w-16 h-16 border border-white/10 rounded-lg"/>
                <div className="absolute bottom-4 right-4 w-12 h-12 border border-white/10 rounded-full"/>
            </div>
            {src && loading && !error && <div className="absolute inset-0 skeleton"/>}
            {(!src || error) &&
                <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted/50">
                    {icons[fallbackIcon]}
                    {error && <span className="text-xs mt-2 text-text-muted/40">Не удалось загрузить</span>}
                </div>}
            {src && !error &&
                <img src={src} alt={alt} onLoad={onLoad} onError={onError} className={cn('absolute inset-0 w-full h-full object-cover transition-opacity duration-300', loading ? 'opacity-0' : 'opacity-100')}/>}
        </div>
    );
}

const avatarSizes = {sm: 'w-8 h-8', md: 'w-10 h-10', lg: 'w-12 h-12', xl: 'w-16 h-16'};

export function AvatarPlaceholder({src, alt, size = 'md', className}: {
    src?: string;
    alt: string;
    size?: keyof typeof avatarSizes;
    className?: string
}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const initials = alt.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();

    return (
        <div
            className={cn('relative rounded-full overflow-hidden bg-bg-tertiary shrink-0', avatarSizes[size], className)}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/30 to-primary/30"/>
            {src && loading && !error && <div className="absolute inset-0 bg-bg-tertiary animate-pulse"/>}
            {(!src || error) &&
                <div className="absolute inset-0 flex items-center justify-center text-text-secondary font-medium text-sm">
                    {initials || <User size={16} strokeWidth={1.5}/>}
                </div>}
            {src && !error &&
                <img src={src} alt={alt} onLoad={() => setLoading(false)} onError={() => {
                setLoading(false);
                setError(true)
                }} className={cn('absolute inset-0 w-full h-full object-cover transition-opacity duration-300', loading ? 'opacity-0' : 'opacity-100')}/>}
        </div>
    );
}


export function VideoPlaceholder({src, poster, className, aspectRatio = 'video'}: { src?: string;
    poster?: string;
    className?: string;
    aspectRatio?: 'video' | 'square'
}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    return (
        <div className={cn('relative overflow-hidden bg-bg-tertiary rounded-xl', aspects[aspectRatio], className)}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-primary/10 to-accent-green/20"/>
            {loading && src && !error && <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full animate-spin"/>
            </div>}
            {(!src || error) &&
                <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted/50">
                    <Video size={48} strokeWidth={1}/>
                    <span className="text-xs mt-2 text-text-muted/40">{error ? 'Видео недоступно' : 'Видео скоро появится'}</span>
                </div>}
            {src && !error &&
                <video src={src} poster={poster} controls onLoadedData={() => setLoading(false)} onError={() => {
                    setLoading(false);
                    setError(true)
                }} className={cn('absolute inset-0 w-full h-full object-cover transition-opacity duration-300', loading ? 'opacity-0' : 'opacity-100')}/>}
            {!src && <button className="absolute inset-0 flex items-center justify-center cursor-not-allowed" disabled>
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Play size={24} className="text-white/50 ml-1" fill="currentColor"/>
                </div>
            </button>}
        </div>
    );
}