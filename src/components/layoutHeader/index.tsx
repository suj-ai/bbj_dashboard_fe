import { Col, Layout } from "antd";

const { Header } = Layout;

/**
 * LayoutHeader component for the application.
 *
 * @param {object} props - The props for the component.
 * @param {boolean} props.collapsed - The current state of the sidebar (collapsed or not).
 * @param {Function} props.setCollapsed - The function to set the state of the sidebar.
 * @param {string} props.colorBgContainer - The background color for the header.
 */

type LayoutHeaderProps = {
  colorBgContainer: string;
};

const LayoutHeader = ({ colorBgContainer }: LayoutHeaderProps) => {
  return (
    <Header
      style={{ backgroundColor: colorBgContainer }}
      className="border-b border-gray-300 flex items-center "
    >
      <Col>
        <span className="text-primary font-semibold text-xl">
          Welcome Back, Dev!
        </span>
      </Col>
    </Header>
  );
};

export default LayoutHeader;
