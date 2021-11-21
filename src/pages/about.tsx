import Layout from '../layout/Layout';
import { Meta } from '../layout/Meta';

const About = () => (
  <Layout
    meta={<Meta title="About Page" description="Ma page de description" />}
  >
    <div className="h-screen bg-gray-100">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
          recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
          labore voluptatibus distinctio recusandae autem esse explicabo
          molestias officia placeat, accusamus aut saepe.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
          recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
          labore voluptatibus distinctio recusandae autem esse explicabo
          molestias officia placeat, accusamus aut saepe.
        </p>
      </div>
    </div>
  </Layout>
);

export default About;
