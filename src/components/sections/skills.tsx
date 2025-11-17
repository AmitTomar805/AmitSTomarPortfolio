import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      {/* Languages & Databases */}
      <div className="flex flex-col gap-4">
        <Typography variant="h3" className="text-xl font-semibold text-gray-900">
          Languages & Databases
        </Typography>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Java</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">JavaScript</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">TypeScript</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Python</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Apex</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">SQL</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">PostgreSQL</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">MySQL</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">MongoDB</span>
        </div>
      </div>

      {/* Frontend */}
      <div className="flex flex-col gap-4">
        <Typography variant="h3" className="text-xl font-semibold text-gray-900">
          Frontend
        </Typography>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">React.js</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Next.js</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">HTML</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">CSS</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Bootstrap</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Material UI</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">REST APIs</span>
        </div>
      </div>

      {/* Backend */}
      <div className="flex flex-col gap-4">
        <Typography variant="h3" className="text-xl font-semibold text-gray-900">
          Backend
        </Typography>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Node.js</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Express.js</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Spring Boot</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Spring Cloud</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Kafka</span>
        </div>
      </div>

      {/* Cloud & DevOps */}
      <div className="flex flex-col gap-4">
        <Typography variant="h3" className="text-xl font-semibold text-gray-900">
          Cloud & DevOps
        </Typography>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">AWS (EC2, RDS, S3, Lambda)</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Docker</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Terraform</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">GitHub Actions</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Git</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">GitHub</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Salesforce</span>
        </div>
      </div>

      {/* Tools */}
      <div className="flex flex-col gap-4">
        <Typography variant="h3" className="text-xl font-semibold text-gray-900">
          Tools
        </Typography>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">JIRA</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Postman</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Packer</span>
          <span className="px-4 py-2 bg-gray-900 text-white rounded-md font-medium text-sm">Vite</span>
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;
