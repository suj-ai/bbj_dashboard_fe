import { Button, Result } from "antd";

const ErrorFallback = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={
      <Button onClick={() => window.location.reload()} type="primary">
        Refresh
      </Button>
    }
  />
);
const UnauthorisedFallback = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button
        type="primary"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Back Home
      </Button>
    }
  />
);

export { ErrorFallback, UnauthorisedFallback };
