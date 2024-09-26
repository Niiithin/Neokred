/* Imports */
import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";

/* Relative Imports */
import AdminDashboardLayout from "layout/AdminDashboardLayout";

/* Local Imports */
import { PAGE_ADMIN_DASHBOARD } from "./paths";

// ----------------------------------------------------------------------

/* Admin Dashboard Module Imports */
const HomePage = lazy(() => import("views/dashboard/home"));

const EventsPage = lazy(() => import("views/dashboard/events"));

const OrdersPage = lazy(() => import("views/dashboard/orders"));

const SettingsPage = lazy(() => import("views/dashboard/settings"));

const UpcomingPage = lazy(() => import("views/dashboard/upcoming"));
// ----------------------------------------------------------------------

/**
 * assign components to routes
 *
 * @return {array}
 */
const AdminDashboardRoutes: Array<object> = [
  {
    path: PAGE_ADMIN_DASHBOARD.root.relativePath,
    element: (
      <AdminDashboardLayout>
        <Outlet />
      </AdminDashboardLayout>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={PAGE_ADMIN_DASHBOARD.home.absolutePath} />,
      },
      {
        path: PAGE_ADMIN_DASHBOARD.home.absolutePath,
        element: <HomePage />,
      },
      {
        path: PAGE_ADMIN_DASHBOARD.events.absolutePath,
        element: <EventsPage />,
      },
      {
        path: PAGE_ADMIN_DASHBOARD.orders.absolutePath,
        element: <OrdersPage />,
      },
      {
        path: PAGE_ADMIN_DASHBOARD.settings.absolutePath,
        element: <SettingsPage />,
      },
      {
        path: PAGE_ADMIN_DASHBOARD.upcoming.absolutePath,
        element: <UpcomingPage />,
      },
    ],
  },
];

export default AdminDashboardRoutes;
