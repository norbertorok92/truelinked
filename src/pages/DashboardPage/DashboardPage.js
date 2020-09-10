import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'antd';
import Loader from '../../components/Loader/Loader';
import useFetch from '../../hooks/useFetch';
import './DashboardPage.scss';

const DashboardPage = () => {
  const history = useHistory();
  const { data, isLoading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
  );

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User Id',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
  ];

  const onClickRow = (post) => {
    history.push(`/post/${post.id}`);
  };

  const onRowModeration = (post) => {
    return {
      onClick: () => onClickRow(post),
    };
  };

  return (
    <div className="DashboardPage">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Dashboard Page</h1>
          <Table
            dataSource={data}
            columns={columns}
            onRow={(post) => onRowModeration(post)}
            className="DashboardPage__table"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
