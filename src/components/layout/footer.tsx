import { Copyright } from 'lucide-react';

import Typography from '@/components/general/typography';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} |&nbsp;
          {/* <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.FIGMA_FILE}
          >
            Designed
          </Link> */}
          Designed
          &nbsp;and&nbsp;
          {/* <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.GITHUB_REPO}
          >
            coded
          </Link> */}
          coded
          &nbsp;by Amit
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
