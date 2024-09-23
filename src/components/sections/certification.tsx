import { CERTIFICATE_DETAILS } from '@/lib/data';
import CertficationDetails from '@/components/data-display/certifications-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ExperienceSection = () => {
  return (
    <Container className="bg-gray-50" id='Certifications'>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Certifications" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here is a quick summary of my certifications:
        </Typography>
      </div>
    
        <div className="flex flex-col gap-4">
            {CERTIFICATE_DETAILS.map((certificate, index) => (
            <CertficationDetails key={index} {...certificate} />
            ))}
        </div>
    </Container>
  );
};

export default ExperienceSection;
