import { Layout } from "antd";

const { Footer: AntdFooter } = Layout

const Footer = () => {

  return (
    <AntdFooter className="flex justify-center items-center text-xs">
      {`© ${new Date().getFullYear()} Unofficial Google Places App`}
    </AntdFooter>
  )
};

export default Footer;