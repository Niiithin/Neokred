import { memo, useState, useEffect, useRef } from "react";
import {
  Typography,
  Box,
  Stack,
  Popper,
  Fade,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { profileConfig } from "layout/AdminDashboardLayout/helper/sidebarConfig";
import styles from "./index.style";
import breakpoints from "theme/breakpoints";

export interface AccountPopoverProps {
  containerStyle?: object | (() => void);
}

const AccountPopover = ({
  containerStyle = {},
}: AccountPopoverProps): JSX.Element => {
  const theme = useTheme();
  const laptopDownMatches = useMediaQuery(
    theme.breakpoints.down(breakpoints.values.laptop)
  );

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setOpen((prevOpen) => !prevOpen);
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popperRef.current &&
        !popperRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [anchorEl]);

  return (
    <Box mt={2}>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        sx={[styles.rootStyle, containerStyle]}
        gap={2}
        onClick={handleToggle}
      >
        <Box
          component="img"
          alt="i"
          src="/assets/images/profile_pic.jpg"
          height={40}
          width={40}
          sx={{ borderRadius: 1 }}
        />
        {!laptopDownMatches && (
          <>
            <Stack justifyItems={"center"} alignItems={"flex-start"}>
              <Typography variant="body2" sx={styles.nameText}>
                Nithin
              </Typography>
              <Typography variant="body2" sx={styles.emailText}>
                nithin@example.com
              </Typography>
            </Stack>
            <Box sx={styles.nameText}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Box>
          </>
        )}

        <Popper
          open={open}
          anchorEl={anchorEl}
          transition
          placement="top-start"
          ref={popperRef}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Box sx={styles.popperBox}>
                {profileConfig.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      borderBottom:
                        index % 2 === 0 ? `2px solid #202022` : "none",
                    }}
                  >
                    <Stack flexDirection={"row"} gap={1} m={1}>
                      <item.icon sx={styles.popperIcon} />
                      <Typography variant="body2" sx={styles.popperText}>
                        {item.title}
                      </Typography>
                    </Stack>
                  </Box>
                ))}
              </Box>
            </Fade>
          )}
        </Popper>
      </Stack>
    </Box>
  );
};

export default memo(AccountPopover);
