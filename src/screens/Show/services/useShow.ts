import {useQuery, UseQueryResult} from 'react-query';
import {apiInstance} from '../../../services';
import {KEYS} from '../../../services/keys';
import {Show} from '../../../services/types';

export const useShow = (id: number): UseQueryResult<Show> => {
  return useQuery(
    KEYS.show.keyWithParams(id),
    () => {
      return apiInstance.get(`shows/${id}?embed=previousepisode`);
    },
    {
      select: data => data.data,
    },
  );
};
