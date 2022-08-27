import { Layout } from 'antd';
import Footer from './components/Footer';
import GooglePlaceAutocomplete from './components/GooglePlaceAutocomplete';
import Header from './components/Header';

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header/>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Content>
        <GooglePlaceAutocomplete/>
      </Content>

      <Footer/>
    </Layout>
  );
}

export default App;
