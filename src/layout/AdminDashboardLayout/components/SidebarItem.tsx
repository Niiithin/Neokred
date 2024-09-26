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
 * @property {object} selectedIcon - icon to show when the list id selected
 * @property {object} icon - icon to show for list item
 * @property {string} title - name of the tab in side bar
 * @property {string} href - redirect url of the tab in side bar
 */
export interface SidebarItemProps {
  icon: React.ElementType;
  title: string;
  href: string;
  selectedIcon: React.ElementType;
}

// ----------------------------------------------------------------------

/**
 * Side bar item to show as tab.
 *
 * @component
 * @param {object} selectedIcon - icon to show when the list id selected
 * @param {object} icon - icon to show for list item
 * @param {string} title - name of the tab in side bar
 * @param {string} href - redirect url of the tab in side bar
 * @returns {JSX.Element}
 */
const SidebarItem = ({
  icon: Icon,
  title,
  href,
  selectedIcon: SelectedIcon,
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
        {isActive ? (
          <SelectedIcon
            style={{
              marginRight: "8px",
              color: "inherit",
              width: 20,
              height: 20,
            }}
          />
        ) : (
          <Icon
            style={{
              marginRight: "8px",
              color: "inherit",
              width: 20,
              height: 20,
            }}
          />
        )}
        <Typography variant="body2" sx={{ color: "inherit" }}>
          {title}
        </Typography>
      </Box>
    </Button>
  );
};

export default memo(SidebarItem);
