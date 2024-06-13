import React from 'react';
import { Layout, Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './header.css'
const items = [
    {
        key: '0',
        label: "WATCHER",
        className: "logo",
    },
    {
        key: '1',
        label: 'Home',
    },
    {
        key: '2',
        label: 'Schedule',
    },

    {
        key: '3',
        label: 'Login',
    },
    {
        key: '4',
        label: 'Register',
    },
    {
        key: '5',
        label: '',
        icon: <SearchOutlined />,
    },

];

const Header: React.FC = () => {

    const { Header } = Layout;

    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                height: '100px',
                alignItems: 'center',
                backgroundColor: "#202124",
                padding: 0,
            }}
        >
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={items}
                className="custom-menu"
            />
        </Header>
    );
};

export default Header;