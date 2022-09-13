import {useCallback} from 'react';
import {useQuery, UseQueryResult} from 'react-query';
import {apiInstance} from '../../../services';
import {KEYS} from '../../../services/keys';
import {EpisodesBySeason} from '../../../services/types';

export const useEpisodesBySeason = (
  showId: number,
  seasonId?: number,
): UseQueryResult<EpisodesBySeason> => {
  const queryFn = useCallback(() => {
    return apiInstance.get(`seasons/${seasonId}?embed=episodes`);
  }, [seasonId]);

  return useQuery(KEYS.episodes.keyWithParams(showId, seasonId), queryFn, {
    select: data => data.data,
    enabled: !!seasonId,
  });
};
