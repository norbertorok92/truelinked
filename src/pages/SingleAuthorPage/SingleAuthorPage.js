import React from 'react';
import { Card } from 'antd';
import { useParams, Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader/Loader';

import './SingleAuthorPage.scss';

const SingleAuthorPage = () => {
  const { userId } = useParams();
  const { data, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  const {
    id,
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
        <p className="SingleAuthorPage__card--details">
          Address: {address.suite}, {address.street} street,{' '}
          {address.city}, {address.zipcode}
        </p>
      );
    }
    return null;
  };

  return (
    <div className="SingleAuthorPage">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Link to={`/posts/${name}/${id}`}>
            See all posts of {name}
            <RightOutlined />
          </Link>
          <Card title={name} className="SingleAuthorPage__card">
            <p className="SingleAuthorPage__card--details">
              Username: {username}
            </p>
            <p className="SingleAuthorPage__card--details">
              email: {email}
            </p>
            <p className="SingleAuthorPage__card--details">
              Phone: {phone}
            </p>
            <p className="SingleAuthorPage__card--details">
              Website: {website}
            </p>
            {renderAddress()}
            <p className="SingleAuthorPage__card--details">
              Company: {company && company.name}
            </p>
          </Card>
        </>
      )}
    </div>
  );
};

export default SingleAuthorPage;
