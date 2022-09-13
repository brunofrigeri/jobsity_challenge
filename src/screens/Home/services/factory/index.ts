import {AxiosResponse} from 'axios';
import {InfiniteData} from 'react-query';
import {Show, ShowCategory} from '../../../../services/types';
import {arrayGroupBy} from '../../../../utils/arrayGroupBy';

export const showsAdapter = (data: InfiniteData<AxiosResponse<Show[]>>) => {
  const shows: Show[] = data.pages.flatMap(page => page?.data).filter(Boolean);

  const showsByGenre = shows.map(show => {
    const arrayOfShowsWithGenre = show.genres.map(genre => ({
      show: show,
      genre,
    }));

    return arrayOfShowsWithGenre;
  });

  const pages = arrayGroupBy<ShowCategory>(showsByGenre.flat(1), 'genre');

  return pages;
};
