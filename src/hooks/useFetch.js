import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
