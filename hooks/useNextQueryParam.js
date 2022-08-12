import * as React from 'react';
import { useRouter } from 'next/router';

export function useNextQueryParam(key) {
  const router = useRouter()

  return React.useMemo(() => {
    const res = router.asPath.match(new RegExp(`[&?]${key}=(.*)(&|$)`)) || [];
    return res[1];
  }, [router.asPath]);
}