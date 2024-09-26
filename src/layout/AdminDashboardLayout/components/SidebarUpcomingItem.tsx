/* Imports */
import { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import styles from "../index.style";
// ----------------------------------------------------------------------

/* Types/Interfaces */
/**
 * Interface used to create side bar item to show as tab.
 *
 * @interface SidebarItemProps
 * @property {string} title - name of the tab in side bar
 * @property {string} href - redirect url of the tab in side bar
 */
export interface SidebarItemProps {
  title: string;
  href: string;
}

// ----------------------------------------------------------------------

/**
 * Side bar item to show as tab.
 *
 * @component
 * @param {string} title - name of the tab in side bar
 * @param {string} href - redirect url of the tab in side bar
 * @returns {JSX.Element}
 */
const SidebarUpcomingItem = ({
  title,
  href,
  ...other
}: SidebarItemProps): JSX.Element => {
  /* Hooks */
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isActive = pathname.includes(href);
  /* Output */
  return (
    <Button
      onClick={() => navigate(href)}
      sx={(theme) => ({
        ...styles.sidebarItem(theme),
        ...(isActive
          ? {
              color: theme.palette.common.white,
              borderRadius: theme.spacing(1),
            }
          : {
              color: theme.palette.primary.light,
            }),
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
      })}
    >
      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
        <Typography variant="body2" sx={{ color: "inherit" }}>
          {title}
        </Typography>
      </Box>
    </Button>
  );
};

export default memo(SidebarUpcomingItem);
