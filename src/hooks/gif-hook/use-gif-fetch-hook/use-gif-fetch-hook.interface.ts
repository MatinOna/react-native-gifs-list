import {Gif} from '../../../utils/interfaces/gift-interface';
import {Dispatch, SetStateAction} from "react";

export interface UseGifFetchHookReturn {
  gifData: Gif[];
  setGifData: Dispatch<SetStateAction<Gif[]>>;
  gifError: string;
  gifStatus: string;
}
