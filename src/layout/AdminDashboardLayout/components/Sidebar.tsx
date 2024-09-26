import { memo, useContext, useEffect, useRef, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  Fade,
  Link,
  List,
  Popper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";

import Footer from "components/AccountPopover";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import breakpoints from "theme/breakpoints";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import { SidebarItem } from ".";
import sidebarConfig, {
  SidebarBottomConfig,
  SidebarUpcomingConfig,
} from "../helper/sidebarConfig";
import styles from "../index.style";
import SidebarUpcomingItem from "./SidebarUpcomingItem";

export interface SidebarProps {
  openMobile: boolean;
  onMobileClose: () => void;
}

const Sidebar = ({ openMobile, onMobileClose }: SidebarProps): JSX.Element => {
  const theme = useTheme();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  const laptopDownMatches = useMediaQuery(
    theme.breakpoints.down(breakpoints.values.laptop)
  );

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setToggle(!toggle);
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (openMobile) {
      onMobileClose();
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popperRef.current &&
        !popperRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [anchorEl]);

  const content = (
    <Stack height="100%">
      {laptopDownMatches && (
        <Box sx={{ display: "flex", justifyContent: "flex-start", p: 1 }}>
          <IconButton onClick={onMobileClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
      <Box sx={styles.userProfile}>
        <Box flex={1}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={styles.logoContainer}
            onClick={handleToggle}
          >
            <Stack flexDirection={"row"} gap={1} justifyContent={"center"}>
              <Box sx={styles.nameText}>
                <SettingsRoundedIcon />
              </Box>
              <Typography variant="body2" noWrap sx={styles.logoHeading}>
                <b>Neo UI</b>
              </Typography>
            </Stack>
            {toggle ? (
              <Box sx={styles.nameText}>
                <KeyboardArrowUpIcon />
              </Box>
            ) : (
              <Box sx={styles.nameText}>
                <KeyboardArrowDownIcon />
              </Box>
            )}
          </Stack>
        </Box>
      </Box>
      <Box sx={styles.listContainer}>
        <Stack sx={styles.sidebarList}>
          {sidebarConfig.map((item, index) => (
            <SidebarItem
              href={item.href}
              key={index}
              title={item.title}
              icon={item.icon}
              selectedIcon={item.selectedIcon}
            />
          ))}
        </Stack>
        {!laptopDownMatches && (
          <>
            <Typography variant="caption" sx={styles.subHeading}>
              Upcoming events
            </Typography>
            <Stack sx={styles.sidebarList}>
              {SidebarUpcomingConfig.map((item, index) => (
                <SidebarUpcomingItem
                  key={index}
                  title={item.title}
                  href={item.href}
                />
              ))}
            </Stack>
          </>
        )}
      </Box>
      <Stack sx={styles.sidebarBottomList}>
        {SidebarBottomConfig.map((item, index) => (
          <SidebarItem
            href={item.href}
            key={index}
            title={item.title}
            icon={item.icon}
            selectedIcon={item.selectedIcon}
          />
        ))}
      </Stack>
      {!laptopDownMatches ? (
        <>
          <Footer containerStyle={styles.footer} />
          <Popper
            open={toggle}
            anchorEl={anchorEl}
            transition
            placement="top-start"
            ref={popperRef}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Box sx={styles.popperBox}>
                  <Typography variant="body2" sx={styles.nameText}>
                    + Add new company
                  </Typography>
                </Box>
              </Fade>
            )}
          </Popper>
        </>
      ) : (
        <></>
      )}
    </Stack>
  );

  /* Output */
  return (
    <>
      {laptopDownMatches ? (
        <Drawer
          anchor="left"
          variant="temporary"
          open={openMobile}
          onClose={onMobileClose}
          PaperProps={{
            sx: styles.sidebarDrawer,
          }}
        >
          {content}
        </Drawer>
      ) : (
        <Box sx={styles.leftPanel}>{content}</Box>
      )}
    </>
  );
};

export default memo(Sidebar);
