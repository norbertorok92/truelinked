import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'antd';
import Loader from '../../components/Loader/Loader';
import useFetch from '../../hooks/useFetch';
import './AuthorsPage.scss';

const AuthorsPage = () => {
  const history = useHistory();
  const { data, isLoading } = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  );

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
  ];

  const onClickRow = (author) => {
    history.push(`/profile/${author.id}`);
  };

  const onRowModeration = (author) => {
    return {
      onClick: () => onClickRow(author),
    };
  };

  return (
    <div className="AuthorsPage">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>All authors</h1>
          <Table
            dataSource={data}
            columns={columns}
            onRow={(author) => onRowModeration(author)}
            className="AuthorsPage__table"
          />
        </>
      )}
    </div>
  );
};

export default AuthorsPage;
