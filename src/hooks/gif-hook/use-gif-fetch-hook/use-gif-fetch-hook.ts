import {useEffect, useState} from 'react';
import {Gif} from '../../../utils/interfaces/gift-interface';
import {fetchGifs} from '../../../services/gif-service/gif-service';
import {
  ERROR,
  IDLE,
  LOADING,
  SUCCESS,
} from '../../../utils/constants/strings-constants';
import {UseGifFetchHookReturn} from './use-gif-fetch-hook.interface';

export const useGifFetch = (): UseGifFetchHookReturn => {
  const [gifData, setGifData] = useState<Gif[]>([]);
  const [gifError, setError] = useState('');
  const [gifStatus, setStatus] = useState(IDLE);

  useEffect((): (() => void) => {
    let doUpdate = true;

    setStatus(LOADING);

    fetchGifs()
      .then(response => {
        if (doUpdate) {
          setGifData(response.data);
          setStatus(SUCCESS);
        }
      })
      .catch(error => {
        if (doUpdate) {
          setError(error.message);
          setStatus(ERROR);
        }
      });
    return () => (doUpdate = false);
  }, []);
  return {gifData, setGifData, gifError, gifStatus};
};
