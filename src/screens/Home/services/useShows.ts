import {AxiosResponse} from 'axios';
import {useInfiniteQuery, UseInfiniteQueryResult} from 'react-query';
import {apiInstance} from '../../../services';
import {KEYS} from '../../../services/keys';
import {Show, ShowCategory} from '../../../services/types';
import {ArrayGroupBy} from '../../../utils/arrayGroupBy';
import {showsAdapter} from './factory';

export const useShows = (): UseInfiniteQueryResult<
  ArrayGroupBy<ShowCategory>,
  unknown
> => {
  return useInfiniteQuery<AxiosResponse<Show[], any>, unknown, any, string>(
    KEYS.shows.keyName,
    ({pageParam = 0}) => {
      return apiInstance.get(`/shows?page=${pageParam}`);
    },
    {
      getNextPageParam: lastPage => {
        if (lastPage) {
          return Math.floor(
            (lastPage.data[lastPage.data.length - 1].id + 1) / 250,
          );
        }
        return undefined;
      },
      keepPreviousData: true,
      select: data => {
        const {pageParams} = data;

        const pagesAdapted = showsAdapter(data);

        return {
          pageParams,
          pages: pagesAdapted,
        };
      },
    },
  );
};
