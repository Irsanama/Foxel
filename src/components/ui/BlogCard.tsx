import {Link} from 'react-router-dom';
import {Clock, ArrowRight} from 'lucide-react';
import type {BlogPost} from '@/types';
import {Badge} from './Badge';
import {ImagePlaceholder, AvatarPlaceholder} from './ImagePlaceholder';
import {formatDate} from '@/services/api';
import {cn} from '@/utils/cn';
import {iconSize} from '@/assets';


export function BlogCard({post, variant = 'default', className}: { post: BlogPost; variant?: 'default' | 'featured'; className?: string }) {
    const featured = variant === 'featured';
    return (
        <Link to={`/blog/${post.slug}`} className={cn('card-interactive group flex flex-col h-full', featured && 'md:flex-row md:overflow-hidden', className)}>
            <div className={cn('relative', featured ? 'w-full md:w-1/2 shrink-0 md:min-h-[280px]' : '')}>
                <ImagePlaceholder src={post.thumbnail} alt={post.title} aspectRatio={featured ? 'auto' : 'video'} fallbackIcon="image" gradientVariant="purple" className={cn(featured ? 'aspect-video md:aspect-auto md:absolute md:inset-0 md:w-full md:h-full' : '')}/>
                <div className="absolute top-3 left-3 z-10"><Badge variant="purple" solid>{post.category}</Badge></div>
            </div>
            <div className={cn('p-5 flex flex-col flex-1 min-w-0', featured && 'md:w-1/2 md:p-8 md:justify-center')}>
                <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    <span className="flex items-center gap-1"><Clock size={iconSize.sm}/>{post.readTime}</span>
                </div>
                <h3 className={cn('font-display mb-3 group-hover:text-primary transition-colors', featured ? 'text-h3' : 'text-h4')}>{post.title}</h3>
                <p className={cn('text-text-secondary line-clamp-2 flex-1', featured && 'md:line-clamp-3')}>{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 min-w-0"><AvatarPlaceholder src={post.author.avatar} alt={post.author.name} size="sm"/>
                        <span className="text-sm text-text-secondary truncate">{post.author.name}</span>
                    </div>
                    <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all shrink-0 ml-3">
                        <span className="text-sm font-medium">Читать</span><ArrowRight size={iconSize.sm}/>
                    </span>
                </div>
            </div>
        </Link>
    );
}