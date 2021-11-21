import MyCube from '../components/MyCube';
import Layout from '../layout/Layout';
import { Meta } from '../layout/Meta';

const defaultStyle = {
  width: 300,
  height: 300,
  margin: '200px auto',
};

const Cube = () => (
  <Layout
    meta={<Meta title="About Page" description="Ma page de description" />}
  >
    <div className="h-screen">
      <div
        style={{
          ...defaultStyle,
        }}
      >
        <MyCube size={50} />
      </div>
    </div>
  </Layout>
);

export default Cube;
