import {useGifFetch} from '../../../../hooks/gif-hook/use-gif-fetch-hook/use-gif-fetch-hook';
import {useEffect, useState} from 'react';
import {Gif} from '../../../../utils/interfaces/gift-interface';
import {
  ERROR,
  IDLE,
  LOADING,
  SUCCESS,
} from '../../../../utils/constants/strings-constants';
import {addGif, deleteGif} from '../../../../services/gif-service/gif-service';
import {UseMainHookReturn} from "./use-main.interface";

export const useMain = (): UseMainHookReturn => {
  const {gifData, setGifData, gifError, gifStatus} = useGifFetch();

  const [addGifData, setAddGifData] = useState<Gif>();
  const [addGifError, setAddGifError] = useState('');
  const [addGifStatus, setAddGifStatus] = useState(IDLE);
  const [gifUrl, setGifUrl] = useState('');

  useEffect(() => {
    if (addGifData) gifData.push(addGifData);
  }, [addGifData]);

  const onPressAddGif = () => {
    setAddGifStatus(LOADING);
    addGif(gifUrl)
      .then(response => {
        setAddGifData(response.data);
        setAddGifStatus(SUCCESS);
      })
      .catch(error => {
        setAddGifError(error.message);
        setAddGifStatus(ERROR);
      });

  };

  const onPressDeleteGif = (gif: Gif) => {
    setAddGifStatus(LOADING);
    deleteGif(gif.id, gif.url)
      .then(response => {
        setGifData(gifData.filter(g => g.id != response.data.id));
        setAddGifStatus(SUCCESS);
      })
      .catch(error => {
        setAddGifError(error.message);
        setAddGifStatus(ERROR);
      });
  };
  return {
    gifData,
    gifError,
    gifStatus,
    addGifError,
    addGifStatus,
    setGifUrl,
    onPressAddGif,
    onPressDeleteGif,
  };
};
