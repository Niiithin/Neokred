export default {
  rootStyle: (theme: any) => ({
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.secondary.main,
    cursor: "pointer",
    border: "none !important",
    margin: 1,
    "&:hover": {
      borderRadius: 2,
      backgroundColor: theme.palette.secondary.light,
    },
    borderTop: `1px solid ${theme.palette.divider}`,
  }),
  nameText: (theme: any) => ({
    color: theme.palette.primary.main,
  }),
  emailText: (theme: any) => ({
    color: theme.palette.primary.light,
  }),
  popperBox: (theme: any) => ({
    width: 250,
    backgroundColor: theme.palette.secondary.light,
    border: `1px solid ${theme.palette.divider}`,
    elevation: 3,
    borderRadius: 1,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
  }),
  popperText: (theme: any) => ({
    color: theme.palette.primary.main,
  }),
  divider: (theme: any) => ({
    color: theme.palette.primary.light,
  }),
  popperItem: (theme: any) => ({
    borderBottom: `1px solid ${theme.palette.primary.light}`,
  }),
  popperIcon: (theme: any) => ({
    width: 20,
    color: theme.palette.primary.main,
  }),
};
