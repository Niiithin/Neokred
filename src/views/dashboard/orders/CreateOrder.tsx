import React from "react";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
} from "@mui/material";
import { TextInput } from "components/InputFields";
import styles from "./index.style";
import { addOrder } from "store/orderSlice";

type CreateOrderProps = {
  openDialog: boolean;
  handleDialog: () => void;
};

const CreateOrder = ({
  openDialog,
  handleDialog,
}: CreateOrderProps): JSX.Element => {
  const dispatch = useDispatch(); // Use dispatch from redux

  const initialValues = {
    orderNumber: "",
    date: "",
    customerName: "",
    eventName: "",
    amount: "",
  };

  const validationSchema = Yup.object().shape({
    orderNumber: Yup.string().required("Order number is required"),
    date: Yup.date()
      .required("Date is required")
      .min(new Date(), "Date must be in the future"),
    customerName: Yup.string().required("Customer name is required"),
    eventName: Yup.string().required("Event name is required"),
    amount: Yup.number()
      .positive("Amount must be positive")
      .required("Amount is required"),
  });

  const handleFormSubmit = (values: any) => {
    const newOrder = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID or handle this dynamically
      orderNumber: values.orderNumber,
      date: values.date,
      customer_name: values.customerName,
      event_name: values.eventName,
      amount: values.amount,
    };

    dispatch(addOrder(newOrder)); // Dispatch the new order to the store

    handleDialog(); // Close the dialog
  };

  return (
    <Dialog open={openDialog} onClose={handleDialog} fullWidth maxWidth="sm">
      <DialogTitle sx={styles.dialogContainer}>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={styles.dialogHeader}
        >
          <b> Create New Order</b>
        </Typography>
      </DialogTitle>
      <DialogContent sx={styles.dialogContainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Stack spacing={3} mt={2} sx={styles.dialogHeader}>
                <TextInput
                  fullWidth
                  label="Order Number"
                  name="orderNumber"
                  value={values.orderNumber}
                  inputProps={{ maxLength: 50 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={styles.textField}
                  error={Boolean(touched.orderNumber && errors.orderNumber)}
                  helperText={String(touched.orderNumber && errors.orderNumber)}
                />
                <TextInput
                  fullWidth
                  label="Date"
                  name="date"
                  type="date"
                  value={values.date}
                  inputProps={{ min: new Date().toISOString().split("T")[0] }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={styles.textField}
                  error={Boolean(touched.date && errors.date)}
                  helperText={String(touched.date && errors.date)}
                />
                <TextInput
                  fullWidth
                  label="Customer Name"
                  name="customerName"
                  value={values.customerName}
                  inputProps={{ maxLength: 100 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={styles.textField}
                  error={Boolean(touched.customerName && errors.customerName)}
                  helperText={String(
                    touched.customerName && errors.customerName
                  )}
                />
                <TextInput
                  fullWidth
                  label="Event Name"
                  name="eventName"
                  value={values.eventName}
                  inputProps={{ maxLength: 100 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={styles.textField}
                  error={Boolean(touched.eventName && errors.eventName)}
                  helperText={String(touched.eventName && errors.eventName)}
                />
                <TextInput
                  fullWidth
                  label="Amount"
                  name="amount"
                  value={values.amount}
                  inputProps={{ maxLength: 100 }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={styles.textField}
                  error={Boolean(touched.amount && errors.amount)}
                  helperText={String(touched.amount && errors.amount)}
                />
              </Stack>

              <Box mt={4}>
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  spacing={2}
                  mt={2}
                >
                  <Button
                    color="inherit"
                    onClick={handleDialog}
                    sx={styles.buttonText}
                  >
                    Cancel
                  </Button>
                  <LoadingButton
                    type="submit"
                    color="primary"
                    variant="contained"
                    loading={isSubmitting}
                  >
                    Create Order
                  </LoadingButton>
                </Stack>
              </Box>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrder;
