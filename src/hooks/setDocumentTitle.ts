import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
  const documentTitle = `React sand box - ${title}`;
  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
  return documentTitle;
};

export default useDocumentTitle;
