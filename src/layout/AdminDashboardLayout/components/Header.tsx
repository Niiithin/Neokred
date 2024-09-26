/* Imports */
import { memo } from "react";
import {
  Box,
  Container,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

/* Relative Imports */
import breakpoints from "theme/breakpoints";

/* Local Imports */
import styles from "../index.style";
import Footer from "components/AccountPopover";

// ----------------------------------------------------------------------

/* Types/Interfaces */
/**
 * Interface used to create header for the admin dashboard pages.
 *
 * @interface HeaderProps
 * @property {function} onMobileNavOpen - callback function to handle open/close on click of side bar icon.
 */
export interface HeaderProps {
  onMobileNavOpen: any;
}

// ----------------------------------------------------------------------

/**
 * Header for the admin dashboard pages
 *
 * @component
 * @param {function} onMobileNavOpen - callback function to handle open/close on click of side bar icon.
 * @returns {JSX.Element}
 */
const Header = ({ onMobileNavOpen }: HeaderProps): JSX.Element => {
  /* Hooks */
  const theme = useTheme();
  const laptopDownMatches = useMediaQuery(
    theme.breakpoints.down(breakpoints.values.laptop)
  );

  /* Output */
  return (
    <Container maxWidth={false} sx={styles.header}>
      {laptopDownMatches && (
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ width: "100%" }}
        >
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
            sx={styles.menuIcon}
          >
            <MenuIcon />
          </IconButton>
          <Footer />
        </Stack>
      )}
    </Container>
  );
};

export default memo(Header);
