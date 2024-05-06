import { Button, Col, Input, Row, Switch, Typography } from "antd";

const Login = () => {
  return (
    <Row className=" bg-[#F0F6FB]  h-screen">
      <Col md={12} className="bg-loginImage bg-no-repeat bg-contain"></Col>
      <Col md={12} className="flex items-center justify-center ">
        <Col
          md={10}
          className="bg-white drop-shadow-2xl text-center text-3xl font-medium p-10 rounded-xl"
        >
          Welcome!
          <Row className="mt-5">
            <Typography.Text className="text-xs">Email ID</Typography.Text>
            <Input type="text" className="bg-gray-100 mt-2" />
          </Row>
          <Row className="mt-5">
            <Typography.Text className="text-xs">Password</Typography.Text>
            <Input type="password" className="bg-gray-100 mt-2" />
          </Row>
          <Row className="mt-2 justify-between">
            <Col>
              <Switch className="bg-[#f2f2f2] mr-1" />
              <Typography.Text>Remember Me</Typography.Text>
            </Col>
            <Col>
              <Typography.Text className="text-primary font-normal">
                Forgot password?
              </Typography.Text>
            </Col>
          </Row>
          <Row className="mt-10">
            <Button className="w-full bg-primary text-secondary " size="large">
              Sign In
            </Button>
          </Row>
        </Col>
      </Col>
    </Row>
  );
};

export default Login;
