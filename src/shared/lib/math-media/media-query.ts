import { useEffect, useMemo, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [isMatch, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.onchange = onChange;

    return () => {
      mediaQuery.onchange = null;
    };
  }, [mediaQuery]);

  return isMatch;
};
