import { Layout } from 'antd';
import Footer from './components/Footer';
import GooglePlaceAutocomplete from './components/GooglePlaceAutocomplete';
import Header from './components/Header';
import googlePlaceLogo from './assets/google-place.png'
import SearchHistory from './components/SearchHistory';

const { Content } = Layout;

const App = () => {
  return (
    <Layout className='h-screen bg-indigo-100'>
      <Header />

      <Content className='bg-white flex items-center flex-col pt-24 md:pt-28 transition-all'>
        <img
          className='w-72 h-auto'
          src={googlePlaceLogo}
          alt="google place api logo"
        />
        <GooglePlaceAutocomplete />
        <SearchHistory/>
      </Content>

      <Footer />
    </Layout>
  );
}

export default App;
