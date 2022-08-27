import { Layout } from "antd";
import googlePlacesIcon from '../../assets/google-places-icon.png';
import './styles.css';

const { Header: AntdHeader } = Layout

const Header = () => {

  return (
    <AntdHeader className="py-3 px-5 flex items-center">
      <img
        className="w-10 h-auto cursor-pointer"
        src={googlePlacesIcon}
        alt="google places icon"
      />
    </AntdHeader>
  )
};

export default Header;