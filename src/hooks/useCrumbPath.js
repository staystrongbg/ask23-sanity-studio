import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
const useCrumbPath = () => {
  const router = useRouter();
  const [pathSnippets, setPathSnippet] = useState([]);
  const [disabled, setDisabled] = useState(0);

  useEffect(() => {
    if (router.isReady)
      setPathSnippet(router.asPath.split('/').filter((i) => i));
  }, [router.isReady, router.asPath]);

  useEffect(() => {
    setDisabled(pathSnippets.length - 1);
  }, [pathSnippets]);

  return { pathSnippets, disabled };
};

export default useCrumbPath;
