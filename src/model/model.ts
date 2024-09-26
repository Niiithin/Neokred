export interface OrderItem {
  id: number;
  orderNumber: number;
  date: string;
  customer_name: string | null;
  event_name: string;
  amount: string;
  image_src?: string;
}
