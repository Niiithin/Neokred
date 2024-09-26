export default {
  rootStyle: (theme: any) => ({
    backgroundColor: theme.palette.secondary.main,
  }),
  headerNameStyle: (theme: any) => ({
    display: "inline-flex",
    flexDirection: "row",
    color: theme.palette.primary.light,
    "& .MuiTableSortLabel-root": {
      color: theme.palette.primary.light,
      "&:hover": {
        color: theme.palette.primary.light,
      },
      "&.Mui-active": {
        color: theme.palette.primary.light,
      },
    },
    "& .MuiTableSortLabel-icon": {
      color: theme.palette.primary.light,
    },
  }),
  tableContainer: {
    minWidth: 920,
  },
  pagination: (theme: any) => ({
    position: "static",
    color: theme.palette.primary.main,
    "& .MuiButtonBase-root-MuiPaginationItem-root": {
      color: "none !important",
    },
  }),
  loaderStyle: {
    height: 300,
  },
  tableHeading: (theme: any) => ({
    backgroundColor: `${theme.palette.secondary.light} !important`,
    color: `${theme.palette.primary.main} !important`,
    borderBottom: "none",
    borderTop: `2px solid ${theme.palette.divider}`,
  }),
};
