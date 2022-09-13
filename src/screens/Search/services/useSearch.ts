import {useQuery, UseQueryResult} from 'react-query';
import {apiInstance} from '../../../services';
import {KEYS} from '../../../services/keys';
import {SearchShow} from '../../../services/types';

export const useSearch = (value: string): UseQueryResult<SearchShow[]> => {
  return useQuery(
    KEYS.search.keyWithParams(value),
    () => {
      return apiInstance.get(`/search/shows?q=${value}`);
    },
    {
      select: data => data.data,
    },
  );
};
