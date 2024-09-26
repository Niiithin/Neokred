import { useEffect } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import styles from "./index.style";
import { abbreviateNumber, formatNumber, getGreeting } from "utility/helper";
import { metricsData } from "constants/appConstants";
import DataTable from "components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { loadOrders } from "store/orderSlice";
import { OrderItem } from "model/model";

const Home = () => {
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
  const dispatch = useDispatch();

  const orderItems = useSelector((state: any) => state.orders.orders);
  useEffect(() => {
    dispatch(loadOrders());
  }, [dispatch]);

  return (
    <Box sx={styles.containerStyles}>
      <Typography variant="h6" sx={styles.wishText}>
        <b>{getGreeting()}, Erica</b>
      </Typography>
      <Typography variant="body1" sx={styles.overviewHeading}>
        Overview
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          marginTop: 2,
        }}
      >
        {metricsData.map((item, index) => (
          <Box key={index} sx={styles.boxStyles}>
            <Typography variant="body2" sx={styles.desc}>
              {item.title}
            </Typography>
            <Typography variant="h4" sx={styles.heading}>
              {item.isAmount
                ? `$ ${abbreviateNumber(item.value)}`
                : formatNumber(item.value)}
            </Typography>
            <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
              <Box sx={styles.stats(item.isIncreased)}>
                {item.isIncreased ? (
                  <Typography variant="body2">+{item.stats} %</Typography>
                ) : (
                  <Typography variant="body2">-{item.stats} %</Typography>
                )}
              </Box>
              <Typography variant="body2" sx={styles.lastweekText}>
                from last week
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>
      <Typography variant="body2" sx={styles.recentOrderHeading}>
        Recent Orders
      </Typography>
      <DataTable
        columns={columns}
        rows={orderItems}
        totalRow={orderItems.length}
      />
    </Box>
  );
};

export default Home;
