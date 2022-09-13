import {useQuery, UseQueryResult} from 'react-query';
import {apiInstance} from '../../../services';
import {KEYS} from '../../../services/keys';
import {Episode} from '../../../services/types';

export const useEpisode = (id: number): UseQueryResult<Episode> => {
  return useQuery(
    KEYS.episode.keyWithParams(id),
    () => {
      return apiInstance.get(`episodes/${id}`);
    },
    {
      select: data => data.data,
    },
  );
};
