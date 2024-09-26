const styles = {
  containerStyles: (theme: any) => ({
    margin: theme.spacing(5),
    overflow: "hidden",
    [theme.breakpoints.down("lg")]: {
      marginTop: 0,
      marginX: theme.spacing(3),
      marginBottom: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  }),
  wishText: (theme: any) => ({
    color: theme.palette.primary.main,
  }),
  overviewHeading: (theme: any) => ({
    color: theme.palette.primary.main,
    marginTop: theme.spacing(5),
  }),
  boxStyles: (theme: any) => ({
    borderTop: `3px solid ${theme.palette.divider}`,
    flexBasis: {
      xs: "100%",
      sm: "calc(50% - 8px)",
      md: "calc(25% - 12px)",
    },
    flexGrow: 1,
  }),
  iconStyles: (theme: any) => ({
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1),
    borderRadius: 50,
  }),
  desc: (theme: any) => ({
    color: theme.palette.primary.dark,
    paddingY: theme.spacing(1),
    marginTop: theme.spacing(4),
  }),
  heading: (theme: any) => ({
    color: theme.palette.primary.main,
    marginY: theme.spacing(1),
  }),
  divider: (theme: any) => ({
    color: theme.palette.secondary.light,
  }),
  stats: (isIncreased: boolean) => (theme: any) => ({
    paddingTop: theme.spacing(2),
    color: isIncreased
      ? theme.palette.success.main
      : theme.palette.warning.main,
    backgroundColor: isIncreased
      ? theme.palette.success.light
      : theme.palette.warning.light,
    padding: theme.spacing(0.5),
    borderRadius: 1,
    display: "inline-flex",
    alignItems: "center",
    "& .lastWeek": {
      marginLeft: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
  }),
  lastweekText: (theme: any) => ({
    color: theme.palette.primary.light,
  }),
  recentOrderHeading: (theme: any) => ({
    color: theme.palette.primary.main,
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
  }),
};

export default styles;
