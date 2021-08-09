import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, fetchNewsByAxios, setNewsList } from '../../store/actions/newsAction';
import { NEWS_REQUEST_STATUS } from '../../store/reducers/reducerNews/selectors';
import './news.css';
import NewsItem from './NewsItem/NewsItem';

export default function News() {
  // const [news, setNews] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  // const loadData = () => {
  //   setIsLoading(true);
  //   setIsError(false);

  //   fetch(API_URL)
  //     .then(response => {
  //       console.log(response);

  //       if (!response.ok || response.status !== 200) {
  //         throw Error('Что-то пошло не так...');
  //       }

  //       return response.json();
  //     })
  //     .then(responseJSON => {
  //       console.log('response - 2', responseJSON);
  //       setNews(responseJSON.data);
  //       setIsLoading(false);
  //       console.log(news);
  //     })
  //     .catch(err => {
  //       console.error('error:', err);
  //       setIsLoading(false);
  //       setIsError(true);
  //     })
  // }

  // const loadDataAxios = async () => {
  // setIsLoading(true);
  // setIsError(false);
  //   try {
  //     const { data } = await transport.get(API_URL);
  //     console.log('data', data);
  //     setNews(data);
  //  setIsLoading(false);
  //   } catch (err) {
  //     console.error('error:', err);
  // setIsLoading(false);
  // setIsError(true);
  //   }
  // }

  const { status, list } = useSelector(state => state.news);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch])

  const clearData = () => dispatch(setNewsList([]));
  const loadDataFetch = () => dispatch(fetchNews());
  const loadDataAxios = () => dispatch(fetchNewsByAxios());

  if (status === NEWS_REQUEST_STATUS.LOADING) {
    return <div className='loader'> <CircularProgress /></div>
  }

  const contentElement = (status !== NEWS_REQUEST_STATUS.ERROR
    ? list.map((el) => <NewsItem key={el.id} title={el.title} summary={el.summary} imageUrl={el.imageUrl} url={el.url} />)
    : <h2>ERROR! ({status})</h2>
  );

  return <div>
    <h3>News</h3>
    <div className='center'>
      <button onClick={loadDataFetch}>Загрузить новости fetch</button>
      <button onClick={loadDataAxios}>Загрузить новости Axios</button>
      <button onClick={clearData}>Очистить</button>
    </div>

    <div>
      <ol className='news-content'>
        {contentElement}
      </ol>
    </div>
  </div>
}