/* Constants */
const ROOT_ADMIN_DASHBOARD = "/";

/* Admin Dashboard Pages */
export const PAGE_ADMIN_DASHBOARD = {
  root: {
    relativePath: ROOT_ADMIN_DASHBOARD,
    absolutePath: `/${ROOT_ADMIN_DASHBOARD}`,
  },
  home: {
    relativePath: "home",
    absolutePath: `/home`,
  },
  events: {
    relativePath: "events",
    absolutePath: `/events`,
  },
  orders: {
    relativePath: "orders",
    absolutePath: `/orders`,
  },
  settings: {
    relativePath: "settings",
    absolutePath: `/settings`,
  },
  upcoming: {
    relativePath: "upcoming",
    absolutePath: `/upcoming`,
  },
};
