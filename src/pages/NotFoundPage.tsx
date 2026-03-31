import {Link} from 'react-router-dom';
import {Button} from '@/components/ui/Button';


export function NotFoundPage() {
    return (
        <div className="flex items-center justify-center px-4 py-section">
            <div className="text-center max-w-2xl mx-auto">
                <div className="mb-6">
                    <svg viewBox="0 0 400 300" className="w-full max-w-md mx-auto" aria-hidden="true">
                        <defs>
                            <linearGradient id="grad404-orange" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#E85D04"/>
                                <stop offset="100%" stopColor="#F77F00"/>
                            </linearGradient>
                            <linearGradient id="grad404-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#7B2CBF"/>
                                <stop offset="100%" stopColor="#9D4EDD"/>
                            </linearGradient>
                            <linearGradient id="grad404-green" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#06D6A0"/>
                                <stop offset="100%" stopColor="#00F5D4"/>
                            </linearGradient>
                            <filter id="glow404">
                                <feGaussianBlur stdDeviation="3" result="blur"/>
                                <feMerge>
                                    <feMergeNode in="blur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <circle cx="50" cy="50" r="3" fill="#E85D04" opacity="0.6">
                            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="350" cy="80" r="2" fill="#7B2CBF" opacity="0.5">
                            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.5s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="80" cy="250" r="2.5" fill="#06D6A0" opacity="0.6">
                            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.8s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="320" cy="220" r="3" fill="#E85D04" opacity="0.5">
                            <animate attributeName="opacity" values="0.5;0.15;0.5" dur="2.2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="150" cy="40" r="2" fill="#06D6A0" opacity="0.4">
                            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="280" cy="260" r="2" fill="#7B2CBF" opacity="0.5">
                            <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.8s" repeatCount="indefinite"/>
                        </circle>
                        <g transform="translate(200, 150)">
                            <circle r="100" fill="none" stroke="url(#grad404-orange)" strokeWidth="3" strokeDasharray="200 80 150 50" opacity="0.6">
                                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="40s" repeatCount="indefinite"/>
                            </circle>
                            <circle r="75" fill="none" stroke="url(#grad404-purple)" strokeWidth="2.5" strokeDasharray="120 60 100 40" opacity="0.5">
                                <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="30s" repeatCount="indefinite"/>
                            </circle>
                            <circle r="50" fill="none" stroke="url(#grad404-green)" strokeWidth="2" strokeDasharray="80 40 60 30" opacity="0.4">
                                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite"/>
                            </circle>
                            <circle r="35" fill="#1A1A1F" stroke="url(#grad404-orange)" strokeWidth="2" filter="url(#glow404)"/>
                            <text textAnchor="middle" dominantBaseline="central" y="0" fill="url(#grad404-orange)" fontSize="24" fontWeight="bold" fontFamily="Days One, sans-serif">
                                404
                            </text>
                        </g>
                        <polygon points="60,120 65,130 55,130" fill="url(#grad404-orange)" opacity="0.4">
                            <animate attributeName="opacity" values="0.4;0.2;0.4" dur="3s" repeatCount="indefinite"/>
                        </polygon>
                        <polygon points="340,170 345,180 335,180" fill="url(#grad404-purple)" opacity="0.3">
                            <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3.5s" repeatCount="indefinite"/>
                        </polygon>
                        <rect x="45" y="200" width="8" height="8" rx="2" fill="url(#grad404-green)" opacity="0.3" transform="rotate(45 49 204)">
                            <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.5s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="345" y="100" width="6" height="6" rx="1" fill="url(#grad404-orange)" opacity="0.4" transform="rotate(45 348 103)">
                            <animate attributeName="opacity" values="0.4;0.15;0.4" dur="2s" repeatCount="indefinite"/>
                        </rect>
                        <line x1="100" y1="90" x2="120" y2="90" stroke="url(#grad404-purple)" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
                        <line x1="280" y1="230" x2="310" y2="230" stroke="url(#grad404-green)" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
                    </svg>
                </div>

                <h1 className="text-h1 mb-4">
                    <span className="text-gradient-primary">Упс!</span>
                    Страница не&nbsp;найдена
                </h1>

                <p className="text-text-secondary text-body-lg mb-8 max-w-md mx-auto">
                    Возможно, страница была перемещена или никогда не&nbsp;существовала.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
                    <Link to="/">
                        <Button size="lg">На&nbsp;главную</Button>
                    </Link>
                    <Link to="/courses">
                        <Button variant="secondary" size="lg">Смотреть курсы</Button>
                    </Link>
                </div>

                <div className="border-t border-border pt-8">
                    <p className="text-text-muted mb-4">Возможно, вы&nbsp;искали:</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            {to: '/courses', label: 'Каталог курсов'},
                            {to: '/blog', label: 'Блог'},
                            {to: '/community', label: 'Сообщество'},
                            {to: '/about', label: 'О нас'},
                        ].map(link => (
                            <Link key={link.to} to={link.to} className="px-4 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-border hover:border-primary/50 text-text-secondary hover:text-text transition-all duration-200">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}