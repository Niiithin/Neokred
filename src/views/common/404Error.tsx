import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { PAGE_ADMIN_DASHBOARD } from "routes/paths";
import styles from "./index.style";
function Error() {
  return (
    <Box sx={styles.rootStyles}>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Typography variant="h3" sx={styles.navigateText}>
          {" "}
          Navigate to home page
        </Typography>

        <Link
          component={RouterLink}
          to={PAGE_ADMIN_DASHBOARD.home.absolutePath}
          // sx={styles.logoLink}
        >
          <Typography variant="body2">Home Page</Typography>
        </Link>
      </Stack>
    </Box>
  );
}

export default Error;
