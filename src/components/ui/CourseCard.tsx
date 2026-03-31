import {Link} from 'react-router-dom';
import {Star, Users, Clock} from 'lucide-react';
import type {Course} from '@/types';
import {Badge} from './Badge';
import {ImagePlaceholder} from './ImagePlaceholder';
import {getCategoryLabel, getLevelLabel, formatPrice} from '@/services/api';
import {cn} from '@/utils/cn';
import {iconSize} from '@/assets';


const emoji: Record<string, string> = {web: '🌐', programming: '💻', design: '🎨', data: '📊', mobile: '📱', gamedev: '🎮'};

const grad: Record<string, 'primary' | 'green' | 'purple' | 'mixed'> = {
    web: 'primary',
    programming: 'green',
    design: 'purple',
    data: 'green',
    mobile: 'primary',
    gamedev: 'purple'
};

const lvl = {beginner: 'green', intermediate: 'primary', advanced: 'purple'} as const;


export function CourseCard({course, className}: { course: Course; className?: string }) {
    return (
        <Link to={`/courses/${course.slug}`} className={cn('card-interactive group h-full flex flex-col', className)}>
            <div className="relative">
                <ImagePlaceholder src={course.thumbnail} alt={course.title} aspectRatio="video" fallbackIcon="course" gradientVariant={grad[course.category] || 'mixed'}/>
                <div className="absolute top-3 left-3 flex gap-2 z-10">
                    {course.isNew && <Badge variant="green" solid>Новый</Badge>}
                    {course.oldPrice && <Badge variant="primary" solid>Скидка</Badge>}
                </div>
                <div className="absolute bottom-3 right-3 w-10 h-10 bg-bg/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-lg z-10">{emoji[course.category] || '📚'}</div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                    <Badge variant="neutral">{getCategoryLabel(course.category)}</Badge>
                    <Badge variant={lvl[course.level]}>{getLevelLabel(course.level)}</Badge>
                </div>

                <h3 className="text-h4 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {course.title.split(' ').length > 2 ? <>{course.title.split(' ').slice(0, 2).join('\u00A0')}{' '}{course.title.split(' ').slice(2).join(' ')}</> : course.title}
                </h3>

                <p className="text-text-secondary text-sm line-clamp-2 mb-4 flex-1">
                    {course.shortDescription}
                </p>

                <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                    <span className="flex items-center gap-1.5"><Clock size={iconSize.sm}/>{course.duration}</span>
                    <span className="flex items-center gap-1.5">
                        <Users size={iconSize.sm}/>{course.studentsCount.toLocaleString('ru-RU')}
                    </span>
                    <span className="flex items-center gap-1"><Star size={iconSize.sm} fill="currentColor" className="text-primary"/>
                        <span className="text-text font-medium">{course.rating}</span><span>({course.reviewsCount})</span>
                    </span>
                </div>

                <div className="flex items-baseline gap-2 pt-4 border-t border-border">
                    <span className="text-xl font-bold text-text">{formatPrice(course.price)}</span>
                    {course.oldPrice && <span className="text-sm text-text-muted line-through">{formatPrice(course.oldPrice)}</span>}
                </div>
            </div>
        </Link>
    );
}