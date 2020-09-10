import React from 'react';
import { Card } from 'antd';
import { useParams, Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader/Loader';

import './AuthorPage.scss';

const AuthorPage = () => {
  const { userId } = useParams();
  const { data, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  const {
    name,
    username,
    email,
    phone,
    website,
    address,
    company,
  } = data;

  const renderAddress = () => {
    if (
      address.suite &&
      address.street &&
      address.city &&
      address.zipcode
    ) {
      return (
        <p className="PostPage__card--author">
          Address: {address.suite}, {address.street} street,{' '}
          {address.city}, {address.zipcode}
        </p>
      );
    }
    return null;
  };
  return (
    <div className="AuthorPage">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Link to="/dashboard">
            See all posts of {name}
            <RightOutlined />
          </Link>
          <Card title={name} className="PostPage__card">
            <p className="PostPage__card--author">
              Username: {username}
            </p>
            <p className="PostPage__card--author">email: {email}</p>
            <p className="PostPage__card--author">Phone: {phone}</p>
            <p className="PostPage__card--author">
              Website: {website}
            </p>
            {renderAddress()}
            <p className="PostPage__card--author">
              Company: {company && company.name}
            </p>
          </Card>
        </>
      )}
    </div>
  );
};

export default AuthorPage;
