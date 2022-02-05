import { useCallback, useEffect, useState } from 'react';
import instance from 'utils/instance';

const useFetch = ({ url, page }) => {
  const [list, setList] = useState([]);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendQuery = useCallback(async () => {
    setIsLoading(true);

    await instance
      .get(url, { params: { page } })
      .then(({ data: { data } }) => {
        setList((list) => list.concat(data));
        setHasNext(data.length > 0);
      })
      .catch(() => {
        throw new Error('서버에 연결할 수 없습니다.');
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [page]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);

  return { list, hasNext, isLoading };
};

export default useFetch;
