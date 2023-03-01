import axios from 'axios';
import {REACT_APP_GIF_API_URL} from '../../utils/constants/gif-constant';
import {AUTHOR_ID} from '../../utils/constants/author-constant';
import {Gif} from '../../utils/interfaces/gift-interface';

axios.defaults.timeout = 2000;

export const fetchGifs = async () => {
  return await axios.get<Gif[]>(
    `${REACT_APP_GIF_API_URL}/?author_id=${AUTHOR_ID}`,
  );
};

export const addGif = async (gifUrl: string) => {
  return await axios.post<Gif>(`${REACT_APP_GIF_API_URL}`, {
    url: gifUrl,
    author_id: AUTHOR_ID,
  });
};

export const deleteGif = async (gifId: number, gifUrl: string) => {
  return await axios.delete(`${REACT_APP_GIF_API_URL}`, {
    data: {
      id: gifId,
      url: gifUrl,
      author_id: AUTHOR_ID,
    },
  });
};
