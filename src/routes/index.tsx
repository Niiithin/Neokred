/* Imports */
import { Suspense, useContext, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";

/* Relative Imports */

/* Local Imports */
import AdminDashboardRoutes from "./adminDashboardRoutes";

// ----------------------------------------------------------------------

/**
 * Create routing with the routes
 *
 * @return {JSX.Element}
 */
const Routing: React.FC = (): JSX.Element => {
  const [routes, setRoutes] = useState([...AdminDashboardRoutes]);
  const content = useRoutes(routes);
  return <Suspense>{content}</Suspense>;
};

export default Routing;
