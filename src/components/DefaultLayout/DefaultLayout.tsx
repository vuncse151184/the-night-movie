import React from 'react';
import { Layout } from 'antd';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
interface DefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {

    return (
        <Layout>
            <Header />
            {children}
            <Footer />
        </Layout>
    );
};

export default DefaultLayout;