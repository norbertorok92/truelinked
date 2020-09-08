import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const Navigation = () => {
  const [current, setCurrent] = useState('home');

  return (
    <Menu onClick={setCurrent} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/dashboard">
        Dashboard
        </Link>
      </Menu.Item>
    </Menu>
  );

}

export default Navigation