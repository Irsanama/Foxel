import {useEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {Header} from './Header';
import {Footer} from './Footer';
import {BackToTopButton} from '@/components/ui/BackToTopButton';

export function Layout({children}: { children?: React.ReactNode }) {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'})
    }, [pathname]);

    return (
        <div className="min-h-dvh flex flex-col bg-bg overflow-x-hidden">
            <Header/>
            <div className="h-14 lg:h-16 shrink-0"/>
            <main className="flex-1 overflow-x-hidden">{children || <Outlet/>}</main>
            <Footer/>
            <BackToTopButton/>
        </div>
    );
}