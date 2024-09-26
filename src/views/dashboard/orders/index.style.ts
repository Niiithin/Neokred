export default {
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
  headingText: (theme: any) => ({
    color: theme.palette.primary.main,
  }),
  buttonContainer: (theme: any) => ({
    backgroundColor: theme.palette.primary.light,
  }),
  dialogContainer: (theme: any) => ({
    backgroundColor: theme.palette.secondary.light,
    maxHeight: "500px",
    overflowY: "auto",
    border: `1px solid ${theme.palette.primary.light}`,
  }),
  dialogHeader: (theme: any) => ({
    color: theme.palette.primary.main,
  }),
  textField: (theme: any) => ({
    color: theme.palette.primary.main,
    "& .MuiInputBase-input": {
      color: theme.palette.primary.main,
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "red",
      },
      "&.Mui-focused fieldset": {
        borderColor: "red",
      },
    },
  }),
  loadingButton: (theme: any) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }),
  buttonText: (theme: any) => ({
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }),
};
