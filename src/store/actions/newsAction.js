import axios from 'axios';

export const SET_NEWS_LIST = 'NEWS::SET_NEWS_LIST';
export const SET_ERROR_STATUS = 'NEWS::ERROR_STATUS';
export const SET_LOADING_STATUS = 'NEWS::SET_LOADING_STATUS';
export const SET_IDLE_STATUS = 'NEWS::SET_IDLE_STATUS';

// export const API_URL = 'http://api.mediastack.com/v1/news?access_key=c24efebebc367be109bb809932a33c36&countries=ru&languages=ru&limit=10';
export const API_URL = 'https://api.spaceflightnewsapi.net/v3/articles';

export const setErrorStatus = () => ({type:SET_ERROR_STATUS});
export const setLoadingStatus = () => ({type:SET_LOADING_STATUS});
export const setIdleStatus = () => ({type:SET_IDLE_STATUS});
export const setNewsList = (newsList) => ({
  type: SET_NEWS_LIST,
  payload: { newsList }
});

export const fetchNews = () => {
  return (dispatch, getState) => {
    dispatch(setLoadingStatus());

    fetch(API_URL)
      .then(response => {
        if (!response.ok || response.status !== 200) {
          throw Error('Что-то пошло не так...');
        }
        return response.json();
      }).then(responseJSON => {
        dispatch(setNewsList(responseJSON));
        dispatch(setIdleStatus());
      }).catch(err => {
        console.error('error::',err);
        dispatch(setErrorStatus());
      });
  }
}
export const fetchNewsByAxios = () => {

  return async (dispatch, getState) => {
    dispatch(setLoadingStatus());
    try {
      const {data} = await axios.create().get(API_URL);
      dispatch(setIdleStatus());
      dispatch(setNewsList(data));
    } catch (err) {
      console.error('error::', err);
      dispatch(setErrorStatus());
    }
  }
}

