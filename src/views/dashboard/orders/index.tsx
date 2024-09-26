import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./index.style";
import DataTable from "components/DataTable";
import { useSelector } from "react-redux";
import CreateOrder from "./CreateOrder";
import { OrderItem } from "model/model";

function Overview() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const columns = [
    {
      field: "orderNumber",
      headerName: "Order Number",
      sortable: true,
      flex: 1,
    },
    {
      field: "date",
      headerName: "Purchase Date",
      sortable: true,
      width: 250,
      renderCell: (params: OrderItem) => (
        <Box>
          <Typography sx={{ color: "#67666b" }}>{params.date}</Typography>
        </Box>
      ),
    },
    {
      field: "customer_name",
      headerName: "Customer",
      sortable: true,
      width: 250,
    },
    {
      field: "event_name",
      headerName: "Event",
      sortable: true,
      width: 250,
      renderCell: (params: OrderItem) => (
        <Stack flexDirection={"row"} gap={1}>
          <Box
            component="img"
            alt="i"
            src={params.image_src}
            sx={{ height: 30, width: 30, borderRadius: 50 }}
          />
          <Typography>{params.event_name}</Typography>
        </Stack>
      ),
    },
    {
      field: "amount",
      headerName: "Amount",
      sortable: true,
      headerAlign: "right",
      textAlign: "right",
      width: 250,
      renderCell: (params: OrderItem) => (
        <Box>
          <Typography sx={{ textAlign: "right" }}>
            US${params.amount}
          </Typography>
        </Box>
      ),
    },
  ];

  const orderItems = useSelector((state: any) => state.orders.orders);

  return (
    <Box sx={styles.containerStyles}>
      <Stack flexDirection={"row"} justifyContent={"space-between"} mb={4}>
        <Typography variant="h5" sx={styles.headingText}>
          <b>Orders</b>
        </Typography>
        <Button
          variant="contained"
          sx={styles.buttonContainer}
          onClick={handleDialog}
        >
          <Typography variant="body2" sx={styles.headingText}>
            Create Order
          </Typography>
        </Button>
      </Stack>
      <DataTable
        columns={columns}
        rows={orderItems}
        totalRow={orderItems.length}
      />

      <CreateOrder openDialog={openDialog} handleDialog={handleDialog} />
    </Box>
  );
}

export default Overview;
