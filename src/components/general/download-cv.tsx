'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('AmitSTomarPortfolio/files/Resume_Amit_Singh_Tomar.pdf', '_blank')}>
      Download Resume
    </Button>
  );
};

export default DownloadCV;
