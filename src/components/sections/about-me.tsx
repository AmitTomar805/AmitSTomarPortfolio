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
              I am a dedicated Full Stack Developer, driven by the passion to continuously evolve and excel in the realm of software engineering. Currently, I am on an enriching journey pursuing my Master's in Software Engineering Systems from Northeastern University, where I am honing my skills and expanding my knowledge base.
              <br />
              My journey into the world of technology commenced in June 2021 when I embarked on an exciting career path with Accenture. Initially starting as a Salesforce Tester, I quickly realized my aspiration to delve deeper into development. Fueled by this motivation, I embarked on a self-learning journey, equipping myself with the necessary tools and expertise to transition seamlessly into the role of a Salesforce Developer.
              <br />
              With a total of 2.5 years of valuable experience at Accenture, I have had the opportunity to tackle diverse challenges, refine my technical acumen, and cultivate a strong foundation in both front-end and back-end development.
              <br />
              Driven by a relentless pursuit of excellence, I am passionate about leveraging technology to create innovative solutions that make a meaningful impact. My portfolio showcases a culmination of my projects, highlighting my proficiency in various programming languages, frameworks, and development tools.
              <br />
              I invite you to explore my portfolio and witness firsthand my dedication, creativity, and commitment to pushing the boundaries of what's possible in the world of software engineering.
              <br />
              Let's connect and embark on a journey of innovation together!
          </Typography>
         { /* <Typography>
            I&apos;m a passionate,{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.FIGMA}
            >
              self-proclaimed designer
            </Link>{' '}
            who specializes in full stack development (React.js & Node.js). I am
            enthusiastic about bringing the technical and visual aspects of
            digital products to life. User experience, pixel perfect design, and
            writing clear, readable, highly performant code matters to me.
          </Typography>
          <Typography>
            I began my journey as a web developer in 2015, and since then,
            I&apos;ve continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I&apos;m building cutting-edge web applications using
            modern technologies such as Next.js, TypeScript, Nestjs,
            Tailwindcss, Supabase and much more.
          </Typography>
          <Typography>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </Typography>
          <Typography>
            When I&apos;m not in full-on developer mode, you can find me
            hovering around on twitter or on indie hacker, witnessing the
            journey of early startups or enjoying some free time. You can follow
            me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.TWITTER}
            >
              Twitter
            </Link>{' '}
            where I share tech-related bites and build in public, or you can
            follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.E. in Computer Engineering
              </Typography>
              <Typography component="li">Full time freelancer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Aspiring indie hacker</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography> */}
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
