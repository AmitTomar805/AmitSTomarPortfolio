import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card';
import React from 'react';

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: 'default' | 'reverse';
};

const ProjectDetails = ({
  name,
  description,
  technologies, 
  url,
  githubUrl,
  previewImage,
  previewImage2,
  previewImage3,
  previewImage4,
  layoutType = 'default',
}: ProjectDetailsProps) => {
  // Check how many unique images we have
  const hasMultipleImages = 
    (previewImage2 && previewImage2 !== previewImage) ||
    (previewImage3 && previewImage3 !== previewImage) ||
    (previewImage4 && previewImage4 !== previewImage);

  return (
    <>
    {/* Full-width layout for single image projects */}
    {!hasMultipleImages ? (
      <Card className="mx-auto w-full max-w-6xl flex-col">
        {/* Image Section - Full Width */}
        <div className="flex items-center justify-center border-b border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 rounded-t-xl lg:p-12">
          <Link noCustomization href={githubUrl || url} externalLink className="w-full">
            <Image
              src={previewImage}
              alt={`${name} preview`}
              className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105 w-full h-auto"
              style={{ objectFit: 'cover' }}
            />
          </Link>
        </div>

        {/* Content Section - Full Width */}
        <div className="flex flex-col gap-6 p-8 lg:p-12">
          <Typography variant="subtitle" className="font-semibold text-gray-900">
            {name}
          </Typography>
          <Typography>
            {description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography>
          <div className="flex flex-wrap gap-2">
            {technologies?.map((technology, index) => (
              <Tag key={index} label={technology} />
            ))}
          </div>
          <div className="flex gap-4">
            {url && (
              <Link
                href={url}
                noCustomization
                className="flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-all hover:bg-gray-700 hover:shadow-lg"
                externalLink
              >
                <ExternalLink className="h-5 w-5" />
                View Live
              </Link>
            )}
            {githubUrl && (
              <Link
                href={githubUrl}
                noCustomization
                className="flex items-center gap-2 rounded-lg border-2 border-gray-900 bg-white px-6 py-3 font-medium text-gray-900 transition-all hover:bg-gray-50 hover:shadow-lg"
                externalLink
              >
                <Github className="h-5 w-5" />
                View Code
              </Link>
            )}
          </div>
        </div>
      </Card>
    ) : (
      /* Side-by-side layout for multiple image projects */
    <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
      {/* Image */}
      <div
        className={mergeClasses(
          'flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12',
          layoutType === 'default'
            ? 'md:rounded-l-xl md:border-r'
            : 'md:order-last md:rounded-r-xl md:border-l'
        )}
      >
        <Link noCustomization href={githubUrl || url} externalLink>
          <div className={mergeClasses(
            'flex flex-col gap-4',
            !hasMultipleImages && 'w-full max-w-2xl'
          )}>
            <Image
              src={previewImage}
              alt={`${name} preview`}
              className={mergeClasses(
                'rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105',
                !hasMultipleImages && 'w-full h-auto'
              )}
              style={{ objectFit: 'cover' }}
            />
            {previewImage2 && previewImage2 !== previewImage && (
              <Image
                src={previewImage2}
                alt={`${name} preview 2`}
                className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                style={{ objectFit: 'cover' }}
              />
            )}
            {previewImage3 && previewImage3 !== previewImage && (
              <Image
                src={previewImage3}
                alt={`${name} preview 3`}
                className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                style={{ objectFit: 'cover' }}
              />
            )}
            {previewImage4 && previewImage4 !== previewImage && (
              <Image
                src={previewImage4}
                alt={`${name} preview 4`}
                className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                style={{ objectFit: 'cover' }}
              />
            )}
          </div>
        </Link>
      </div>

      {/* Content */}
      <div
        className={mergeClasses(
          'flex flex-col gap-6 p-8 md:w-1/2 lg:p-12',
          layoutType === 'default' ? '' : 'md:order-first'
        )}
      >
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {name}
        </Typography>
        <Typography>
          {description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Typography>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((technology, index) => (
            <Tag key={index} label={technology} />
          ))}
        </div>
        <div className="flex gap-4">
          {url && (
            <Link
              href={url}
              noCustomization
              className="flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-all hover:bg-gray-700 hover:shadow-lg"
              externalLink
            >
              <ExternalLink className="h-5 w-5" />
              View Live
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              noCustomization
              className="flex items-center gap-2 rounded-lg border-2 border-gray-900 bg-white px-6 py-3 font-medium text-gray-900 transition-all hover:bg-gray-50 hover:shadow-lg"
              externalLink
            >
              <Github className="h-5 w-5" />
              View Code
            </Link>
          )}
        </div>
      </div>
    </Card>
    )}
    </>
  );
};

export default ProjectDetails;
