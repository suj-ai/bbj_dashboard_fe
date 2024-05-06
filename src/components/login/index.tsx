import { Button, Col, Form, Input, Row, Switch, Typography } from "antd";
import { useContext } from "react";
import { isAuthorised } from "../../routes";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsLoggedIn } = useContext(isAuthorised);
  const navigate = useNavigate();

  const onFinish = () => {
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Row className=" bg-[#F0F6FB]  h-screen">
        <Col md={12} className="bg-loginImage bg-no-repeat bg-contain"></Col>
        <Col md={12} className="flex items-center justify-center ">
          <Col
            md={14}
            lg={10}
            className="bg-white drop-shadow-2xl   p-10 rounded-xl"
          >
            <Col className="text-center text-3xl font-medium"> Welcome!</Col>
            <Row className="mt-5">
              <Col xl={24}>
                <Form.Item
                  name={["user", "email"]}
                  label="Email ID"
                  rules={[{ type: "email", required: true }]}
                  className="font-normal font-poppins"
                >
                  <Input
                    className="w-[100%]"
                    placeholder="Email or phone number"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xl={24}>
                <Form.Item
                  name={["user", "password"]}
                  label="Password"
                  className="font-normal font-poppins"
                >
                  <Input.Password
                    className="w-[100%]"
                    placeholder="Enter Password"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className="mt-0 justify-between">
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
              <Col xl={24}>
                <Form.Item>
                  <Button
                    className="w-full bg-primary text-secondary "
                    size="large"
                    htmlType="submit"
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
