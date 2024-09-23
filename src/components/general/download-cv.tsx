'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('https://drive.google.com/file/d/1K-dzj8UmOoChByOlAJWzTxmaaVwuJNQY/view?usp=sharing', '_blank')}>
      Download Resume
    </Button>
  );
};

export default DownloadCV;
