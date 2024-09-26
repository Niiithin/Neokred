/* Imports */
import React, { useState } from "react";
import { Box } from "@mui/material";

/* Local Imports */
import { Header, Sidebar } from "./components";
import styles from "./index.style";

// ----------------------------------------------------------------------

/* Types/Interfaces */
/**
 * Interface used to create outer design layout for all admin dashboard pages.
 *
 * @interface AdminDashboardLayoutProps
 * @property {node} children - contains the child components.
 */
export interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

// ----------------------------------------------------------------------

/**
 * Outer design layout for all admin dashboard pages
 *
 * @component
 * @param {node} children - contains the child components
 */
const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({
  children,
}): JSX.Element => {
  /* States */
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  /* Output */
  return (
    <Box sx={styles.rootStyle}>
      <Sidebar
        openMobile={isMobileNavOpen}
        onMobileClose={() => setMobileNavOpen(false)}
      />
      <Box sx={styles.wrapperStyle}>
        <Header onMobileNavOpen={() => setMobileNavOpen(true)} />
        <Box sx={styles.containerStyle}>{children}</Box>
      </Box>
    </Box>
  );
};

export default AdminDashboardLayout;
