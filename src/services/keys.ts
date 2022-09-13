enum API_KEYS {
  SHOW = 'show',
  SHOWS = 'shows',
  SEASONS = 'seasons',
  EPISODE = 'episode',
  EPISODES = 'episodes',
  SEARCH = 'search',
}

type ReturnKey = {
  keyName: string;
  keyWithParams: (...args: any) => unknown[];
};

export const KEYS: {[key in API_KEYS]: ReturnKey} = {
  [API_KEYS.SHOW]: {
    keyName: API_KEYS.SHOW,
    keyWithParams: (id: number) => [API_KEYS.SHOW, id],
  },
  [API_KEYS.SHOWS]: {
    keyName: API_KEYS.SHOWS,
    keyWithParams: args => [...(args as unknown[])],
  },
  [API_KEYS.SEASONS]: {
    keyName: API_KEYS.SEASONS,
    keyWithParams: (id: number) => [API_KEYS.SEASONS, id],
  },
  [API_KEYS.EPISODE]: {
    keyName: API_KEYS.EPISODE,
    keyWithParams: (id: number) => [API_KEYS.EPISODE, id],
  },
  [API_KEYS.EPISODES]: {
    keyName: API_KEYS.EPISODES,
    keyWithParams: (showId: number, id: number) => [
      API_KEYS.EPISODES,
      showId,
      id,
    ],
  },
  [API_KEYS.SEARCH]: {
    keyName: API_KEYS.SEARCH,
    keyWithParams: args => [...(args as unknown[])],
  },
};
