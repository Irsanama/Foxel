import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Eye, EyeOff, Mail, Lock, User, ArrowRight} from 'lucide-react';
import {Button} from '@/components/ui/Button';
import {MaskIcon} from '@/components/ui/MaskIcon';
import {ScrollAnimate} from '@/components/ui/ScrollAnimate';
import {svg, iconSize} from '@/assets';


function InputWithIcon({label, name, type, placeholder, value, onChange, icon, rightElement}: {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon: React.ReactNode;
    rightElement?: React.ReactNode
}) {
    return (
        <div className="w-full">
            <label htmlFor={name} className="input-label">{label}</label>
            <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">{icon}</div>
                <input id={name} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} className="input" style={{paddingLeft: 42, paddingRight: rightElement ? 42 : 16}}/>
                {rightElement && <div className="absolute right-3.5 top-1/2 -translate-y-1/2">{rightElement}</div>}
            </div>
        </div>);
}


export function AuthPage() {
    const isLogin = useLocation().pathname === '/login';
    const [form, setForm] = useState({name: '', email: '', password: ''});
    const [showPw, setShowPw] = useState(false);
    const [agreed, setAgreed] = useState(false);

    return (
        <div className="min-h-[calc(100dvh-5rem)] flex items-center justify-center py-section-sm relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"/>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent-purple/10 rounded-full blur-[100px]"/>
            </div>
            <div className="container relative z-10">
                <div className="max-w-md mx-auto">
                    <ScrollAnimate animation="fadeUp">
                        <div className="text-center mb-8">
                            <h1 className="text-h1 mb-2 whitespace-nowrap">{isLogin ? 'С\u00A0возвращением!' : 'Создать аккаунт'}</h1>
                            <p className="text-text-secondary">{isLogin ? 'Войдите, чтобы продолжить обучение' : 'Начните свой путь в\u00A0IT'}</p>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate animation="fadeUp" delay={2}>
                        <div className="space-y-3 mb-6">
                            <Button variant="secondary" className="w-full group">
                                <img src={svg.brand.google} alt="" className="w-5 h-5"/>
                                <span>Продолжить с&nbsp;Google</span>
                                <ArrowRight size={iconSize.sm} className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/>
                            </Button>
                            <Button variant="secondary" className="w-full group">
                                <MaskIcon src={svg.social.github} size="sm"/>
                                <span>Продолжить с&nbsp;GitHub</span>
                                <ArrowRight size={iconSize.sm} className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/>
                            </Button>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate animation="fadeUp" delay={3}>
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border"/>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-bg text-text-muted">или через email</span>
                            </div>
                        </div>
                        <form className="space-y-4">
                            {!isLogin && <InputWithIcon label="Имя" name="name" type="text" placeholder="Ваше имя" value={form.name} onChange={e => setForm({...form, name: e.target.value})} icon={<User size={iconSize.sm}/>}/>}
                            <InputWithIcon label="Email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} icon={<Mail size={iconSize.sm}/>}/>
                            <InputWithIcon label="Пароль" name="password" type={showPw ? 'text' : 'password'} placeholder="••••••••" value={form.password} onChange={e => setForm({...form, password: e.target.value})} icon={<Lock size={iconSize.sm}/>} rightElement={<button type="button" onClick={() => setShowPw(!showPw)} className="text-text-muted hover:text-text transition-colors clickable" aria-label={showPw ? 'Скрыть' : 'Показать'}>{showPw ? <EyeOff size={iconSize.sm}/> : <Eye size={iconSize.sm}/>}</button>}/>
                            {isLogin ? (
                                <div className="flex justify-end">
                                    <Link to="/contacts" className="text-sm text-primary hover:underline">
                                        Забыли пароль?
                                    </Link>
                                </div>
                                ) : (
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-0.5 w-4 h-4 rounded border-border bg-surface text-primary focus:ring-primary focus:ring-offset-0"/>
                                        <span className="text-sm text-text-secondary group-hover:text-text transition-colors">Я&nbsp;согласен с{' '}
                                            <Link to="/contacts" className="text-primary hover:underline">условиями</Link>
                                            {' '}и{' '}
                                            <Link to="/contacts" className="text-primary hover:underline">политикой</Link>
                                        </span>
                                    </label>
                            )}
                            <Button type="submit" variant="primary" className="w-full">
                                <span>{isLogin ? 'Войти' : 'Создать аккаунт'}</span>
                                <ArrowRight size={iconSize.sm}/>
                            </Button>
                        </form>
                        <p className="mt-6 text-center text-text-secondary">
                            {isLogin ? (
                                <>Нет аккаунта?{' '}
                                    <Link to="/register" className="text-primary hover:underline font-medium">Зарегистрироваться</Link>
                                </>) : (
                                    <>
                                        Уже есть аккаунт?{' '}
                                        <Link to="/login" className="text-primary hover:underline font-medium">Войти</Link>
                                    </>
                            )}
                        </p>
                    </ScrollAnimate>
                </div>
            </div>
        </div>
    );
}