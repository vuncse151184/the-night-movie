import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import DefaultLayout from '~/components/DefaultLayout/DefaultLayout';
import Blog from '~/pages/Blog/Blog';
import HomePage from '~/pages/HomePage/HomePage';

const ScrollToTop: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
};

interface RouteType {
    path: string;
    component: React.FC<any>;
    layout?: React.FC<any> | null;
    exact?: boolean;
}
export const RouterComponents: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <ScrollToTop />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout: React.FC<any> = route.layout || DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = React.Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>}

                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export const publicRoutes: RouteType[] = [
    {
        path: '/',
        component: HomePage,
        layout: DefaultLayout,
        exact: true
    }, {
        path: '/blog',
        component: Blog,
        layout: null,
        exact: true
    }
]
