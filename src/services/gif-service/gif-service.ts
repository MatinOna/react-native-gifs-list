import axios from 'axios';
import {REACT_APP_PLAYER_API_URL} from '../../utils/constants/gif-constant';
import {AUTHOR_ID} from '../../utils/constants/author-constant';
import {Gif} from '../../utils/interfaces/gift-interface';

axios.defaults.timeout = 2000;

export const fetchPlayers = async () => {
  const response = await axios.get<Gif[]>(
    `${REACT_APP_PLAYER_API_URL}/?author_id=${AUTHOR_ID}`,
  );
  return response.data;
};
