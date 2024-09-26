export default {
  rootStyle: (theme: any) => ({
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    height: "100vh",
    display: "flex",
    position: "relative",
    overflow: "hidden",
  }),
  leftPanel: (theme: any) => ({
    height: "100%",
  }),
  sidebarDrawer: (theme: any) => ({
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "none !important",
    border: "none !important",
  }),
  logoContainer: (theme: any) => ({
    backgroundColor: theme.palette.secondary.main,
    cursor: "pointer",
    border: "none !important",
    padding: 2,
    margin: 1,
    "&:hover": {
      borderRadius: 2,
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("lg")]: {
      padding: 0,
    },
  }),

  userProfile: (theme: any) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderBottom: `1px solid ${theme.palette.divider}`,
    borderRadius: 1,
    [theme.breakpoints.down("md")]: {
      marginX: 2,
    },
  }),
  profilePicture: {
    cursor: "pointer",
    width: 48,
    height: 48,
    mr: 2,
  },
  logoHeading: (theme: any) => ({
    color: theme.palette.primary.main,
  }),
  listContainer: {
    flex: 1,
    overflowY: "auto",
    minHeight: 60,
    margin: 1,
  },
  sidebarList: (theme: any) => ({
    marginX: theme.spacing(1),
    marginBottom: theme.spacing(4),
    "& .MuiListItemButton-root": {
      [theme.breakpoints.up("md")]: {
        paddingX: 3,
      },
    },
  }),
  sidebarBottomList: (theme: any) => ({
    marginX: theme.spacing(1),
    "& .MuiListItemButton-root": {
      [theme.breakpoints.up("md")]: {
        paddingX: 3,
      },
    },
  }),
  nameText: (theme: any) => ({
    color: theme.palette.primary.main,
  }),
  subHeading: (theme: any) => ({
    color: theme.palette.primary.light,
    marginLeft: theme.spacing(2),
  }),
  wrapperStyle: (theme: any) => ({
    flex: 1,
    height: "100%",
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light,
  }),
  containerStyle: {
    height: "calc(100% - 64px)",
    // mt: 8,
    overflow: "auto",
  },
  contentStyle: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
  header: (theme: any) => ({
    width: "calc(100% - 264px)",
    // height: 64,
    // position: "fixed",
    zIndex: 999,
    left: 264,
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    [theme.breakpoints.down("laptop")]: {
      width: "100%",
      left: 0,
      marginBottom: theme.spacing(3),
    },
  }),
  menuIcon: (theme: any) => ({
    mr: 3,
    color: theme.palette.primary.main,
  }),
  rightOptions: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footer: (theme: any) => ({
    textAlign: "center",
    borderTop: `1px solid ${theme.palette.divider}`,
  }),
  listStyles: (theme: any) => ({
    "& .Mui-selected": {
      backgroundColor: "black",
    },
  }),
  sidebarItem: (theme: any) => ({
    width: "100%",
    marginY: theme.spacing(0.5),
    justifyContent: "flex-start",
    padding: theme.spacing(0.5, 1),
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.common.white,
      borderRadius: theme.spacing(1),
    },
    "&:focus": {
      color: theme.palette.common.white,
      borderRadius: theme.spacing(1),
    },
    "& .MuiButton-startIcon": {
      marginRight: theme.spacing(1),
    },
    "& .MuiButton-endIcon": {
      textAlign: "right",
    },
  }),
  popperBox: (theme: any) => ({
    width: 200,
    backgroundColor: theme.palette.secondary.light,
    border: `1px solid ${theme.palette.primary.light}`,
    elevation: 3,
    borderRadius: 2,
    textAlign: "center",
    padding: theme.spacing(1),
  }),
};
