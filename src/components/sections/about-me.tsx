import Image from 'next/image';

import AmitFullPose from '../../../public/images/Amit_AboutMe.png';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={AmitFullPose}
              alt="Fullpose of Amit"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
              I'm a Full Stack Developer and MS Software Engineering Systems student at Northeastern University, passionate about building clean, scalable solutions. My journey began at Accenture, where I evolved from QA to full-stack development over around 3 years, gaining expertise across backend, frontend, and cloud engineering.
          </Typography>
          <Typography>
              Most recently, I completed a software engineering co-op at Dispatch Technologies, where I architected GitHub Actions pipelines, built AI-powered code review workflows with OpenAI, automated Salesforce deployments across 25+ environments, and optimized frontend builds by migrating to Vite—contributing across DevOps, web, and mobile platforms.
          </Typography>
          <Typography>
              Beyond industry work, I serve as a Teaching Assistant for Object-Oriented Design, helping students master Java and design patterns, while mentoring 40+ international students as a Global Student Mentor.
          </Typography>
          <Typography>
              I thrive working across the full stack—from Spring Boot microservices and Kafka to React/Next.js, AWS, and Salesforce platform engineering. Explore my projects to see my commitment to scalability and impact.
          </Typography>
          <Typography>
              Let's connect and build something meaningful together!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
