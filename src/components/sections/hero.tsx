import Image from 'next/image';
import { MapPin } from 'lucide-react';

import AmitHeadShot from '../../../public/images/Amit_HeadShot.jpeg';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src={AmitHeadShot}
              alt="Headshot of Amit"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-6 md:order-first md:items-start md:justify-center 2xl:gap-8">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Amit{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
            A Full Stack Developer specializing in microservices, cloud-native systems, and modern web development. With experience across MERN, Spring Boot, Kafka, Docker, and Salesforce, I design and build scalable solutions that make an impact. Currently pursuing my MS in Software Engineering at Northeastern University.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Boston, Massachusetts</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Open to Full-Time Opportunities in Software Engineering</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>

      {/* Quick Stats Banner */}
      <div className="mt-10 grid grid-cols-3 gap-6 md:gap-8">
        <div className="flex flex-col items-center gap-2 rounded-lg bg-gray-50 p-6">
          <Typography variant="h2" className="text-3xl font-bold text-gray-900">
            3+
          </Typography>
          <Typography className="text-center text-sm text-gray-600">
            Years Experience
          </Typography>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg bg-gray-50 p-6">
          <Typography variant="h2" className="text-3xl font-bold text-gray-900">
            4
          </Typography>
          <Typography className="text-center text-sm text-gray-600">
            Salesforce Certifications
          </Typography>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-lg bg-gray-50 p-6">
          <Typography variant="h2" className="text-3xl font-bold text-gray-900">
            50+
          </Typography>
          <Typography className="text-center text-sm text-gray-600">
            Students Mentored
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
