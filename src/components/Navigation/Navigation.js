import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const Navigation = () => {
  const { Header } = Layout;
  const location = useLocation();

  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        selectedKeys={location.pathname}
        mode="horizontal"
      >
        <Menu.Item key="dashboard" icon={<HomeOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navigation;
