import {useQuery, UseQueryResult} from 'react-query';
import {apiInstance} from '../../../services';
import {KEYS} from '../../../services/keys';
import {Season} from '../../../services/types';

export const useSeasons = (id: number): UseQueryResult<Season[]> => {
  return useQuery(
    KEYS.seasons.keyWithParams(id),
    () => {
      return apiInstance.get(`shows/${id}/seasons`);
    },
    {
      select: data => data.data,
    },
  );
};
