import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { useParams, Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader/Loader';

import './PostPage.scss';

const PostPage = () => {
  const { postId } = useParams();
  const [author, setAuthor] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const { data } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );

  useEffect(() => {
    if (data.userId && !author.id) {
      fetch(
        `https://jsonplaceholder.typicode.com/users/${data.userId}`,
      )
        .then((response) => response.json())
        .then((response) => {
          setAuthor(response);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [data, author]);

  return (
    <div className="PostPage">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Link to="/dashboard">
            <LeftOutlined />
            Back to Dashboard
          </Link>
          <Card
            title={`#${postId} ${data.title}`}
            className="PostPage__card"
          >
            <p className="PostPage__card--author">
              Author:{' '}
              <Link to={`/profile/${author.id}`}>{author.name}</Link>
            </p>

            <p>{data.body}</p>
          </Card>
        </>
      )}
    </div>
  );
};

export default PostPage;
