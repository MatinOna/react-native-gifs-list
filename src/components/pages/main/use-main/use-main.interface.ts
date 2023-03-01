import {Gif} from '../../../../utils/interfaces/gift-interface';
import {Dispatch, SetStateAction} from 'react';

export interface UseMainHookReturn {
  gifData: Gif[];
  gifError: string;
  gifStatus: string;
  addGifError: string;
  addGifStatus: string;
  setGifUrl: Dispatch<SetStateAction<string>>;
  onPressAddGif: () => void;
  onPressDeleteGif: (gif: Gif) => void;
}
