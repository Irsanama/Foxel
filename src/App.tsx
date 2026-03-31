import {lazy} from 'react';
import {Routes, Route, HashRouter} from 'react-router-dom';
import {Layout} from '@/components/layout/Layout';

const HomePage = lazy(() => import('@/pages/HomePage').then(m => ({default: m.HomePage})));
const CoursesPage = lazy(() => import('@/pages/CoursesPage').then(m => ({default: m.CoursesPage})));
const BlogPage = lazy(() => import('@/pages/BlogPage').then(m => ({default: m.BlogPage})));
const AboutPage = lazy(() => import('@/pages/AboutPage').then(m => ({default: m.AboutPage})));
const AuthPage = lazy(() => import('@/pages/AuthPage').then(m => ({default: m.AuthPage})));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then(m => ({default: m.NotFoundPage})));


function App() {
  return (
      //<BrowserRouter basename={import.meta.env.DEV ? '/' : '/Foxel'}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="courses" element={<CoursesPage/>}/>
            <Route path="blog" element={<BlogPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="login" element={<AuthPage/>}/>
            <Route path="register" element={<AuthPage/>}/>

            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </HashRouter>
      //</BrowserRouter>
  );
}

export default App;