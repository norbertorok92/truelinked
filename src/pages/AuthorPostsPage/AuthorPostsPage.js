import React from 'react';
import { Card } from 'antd';
import { useParams, Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import useFetch from '../../hooks/useFetch';
import './AuthorPostsPage.scss';

const AuthorPostsPage = () => {
  const { userId, userName } = useParams();
  const { data, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );

  return (
    <div className="AuthorPostsPage">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>{userName}`s posts</h1>
          {data.map((post) => {
            const { title, body, id } = post;
            return (
              <Link to={`/post/${id}`}>
                <Card
                  size="small"
                  title={title}
                  className="AuthorPostsPage__card"
                >
                  {body}
                </Card>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
};

export default AuthorPostsPage;
