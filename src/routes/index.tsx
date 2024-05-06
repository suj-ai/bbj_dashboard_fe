import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";
/**
 * The AppRoutes component that manages the routing of the application.
 * It uses the useSelector hook to check if the user is authenticated.
 * If the user is authenticated, it uses the protectedRoutes, otherwise it uses the publicRoutes.
 * The useRoutes hook from react-router-dom is used to create the routing elements.
 *
 * @returns {JSX.Element} The AppRoutes component.
 */

export const AppRoutes = () => {
  const isAuthenticated = true;

  const routes = isAuthenticated ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
