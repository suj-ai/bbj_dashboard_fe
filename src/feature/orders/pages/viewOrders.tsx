import { Col, Row } from "antd"
import OrdersCard from "../../../components/orderCard"
import CustomerCard from "../../../components/customerCard";
import BillingCard from "../../../components/billingCard";
import EventDetailCard from "../../../components/eventDetailCard";


const ViewOrders = () => {

    //  interface ViewOrders {
    //     order: string;
    //     originalOrder: string;
    //     originalDate: string ;
    //     transactionType: string;
    //     orderType: string;
    //     orderStatus: string;
    //     postOffice: string;
    //     sampleOrder: string;
    //   }
    
    //    const ORDERS_TABLE_CONSTANTS: ViewOrders[] = [
    //     {
    //       order: "R963270",
    //       originalOrder: "",
    //       originalDate: "09/05/2023 Tue 10:42:56 AM CST",
    //       transactionType: "Rental",
    //       orderType:'Quote',
    //       orderStatus: "Open",
    //       postOffice: '',
    //       sampleOrder: "",
    //     },     
    // ]

  return (

<>
<Col className="p-4 bg-white w-screen h-full flex flex-col gap-6">
  {/* First Row */}
<Row className="flex gap-6 h-[40%] bg-slate-700">
<OrdersCard />
<CustomerCard />
<BillingCard />

</Row>
{/* Second Row */}
<Row className="bg-[yellow] h-[30%]">
<EventDetailCard/>
</Row>
{/* Third Row */}
<Row className="bg-[pink] h-[30%]">

</Row>

</Col>
</>
  )
}


export default ViewOrders