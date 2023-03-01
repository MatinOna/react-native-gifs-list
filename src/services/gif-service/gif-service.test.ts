import {Gif} from '../../utils/interfaces/gift-interface';
import {addGif, deleteGif, fetchGifs} from './gif-service';
import axios from 'axios';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('Gif Service', () => {
  test('should return gif lists', async () => {
    const gifs: Gif[] = [
      {
        id: 503,
        url: 'https://media.tenor.com/4S4yHRykP1cAAAAd/avengers-assemble8bi-t-8bit-art.gif',
        author_id: 28,
      },
      {
        id: 504,
        url: 'https://media.tenor.com/-SELJ9J3DdkAAAAS/thor-marvel.gif',
        author_id: 28,
      },
      {
        id: 505,
        url: 'https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif',
        author_id: 28,
      },
    ];
    jest.spyOn(axios, 'get').mockResolvedValue({data: gifs});
    const gifsResponse = await fetchGifs();
    expect(gifsResponse.data).toEqual(gifs);
  });

  test('should return gif when addGif is called', async () => {
    const gif: Gif = {
      id: 503,
      url: 'https://media.tenor.com/4S4yHRykP1cAAAAd/avengers-assemble8bi-t-8bit-art.gif',
      author_id: 28,
    };
    jest.spyOn(axios, 'post').mockResolvedValue({data: gif});
    const gifResponse = await addGif(gif.url);
    expect(gifResponse).toEqual(gif);
  });

  test('should delete gif when deleteGif is called', async () => {
    mockAxios.delete.mockResolvedValue({data: {}});
    const gifResponse = await deleteGif(
      1,
      'https://media.tenor.com/xmya78vg-zUAAAAM/luna-snow-marvel-future-fight.gif'
    );
    expect(gifResponse).toEqual(true);
  });
});
