import React from "react";
import { ConfigProvider } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "../theme/theme.json";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../utils/fallbacks";

type ProviderProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ConfigProvider theme={Theme} componentSize="middle">
        <Router>{children}</Router>
      </ConfigProvider>
    </ErrorBoundary>
  );
};

export default Providers;
