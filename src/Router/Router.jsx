import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Apartment from "../Pages/Apartment/Apartment";
import LoginPage from "../Pages/Login/LoginPage";
import SignUpPage from "../Pages/SignUp/SignUpPage"
import DasboardLayout from "../Layout/DasboardLayout/DasboardLayout";
// import AdminPage from "../Pages/Dashboard/AdminPage/AdminPage";
import ProfailPage from "../Pages/Dashboard/ProfailPage/ProfailPage";
import ManageCoupons from "../Pages/Dashboard/AdminPage/ManageCoupons/ManageCoupons";
import UpdateCupon from "../Pages/Dashboard/AdminPage/ManageCoupons/UpdateCupon";
import ManageMember from "../Pages/Dashboard/AdminPage/ManageMamber/ManageMember";
import UpdateMember from "../Pages/Dashboard/AdminPage/ManageMamber/UpdateMember";
import PendingRequest from "../Pages/Dashboard/AdminPage/PendingRequest/PendingRequest";
import MakeAnnouncement from "../Pages/Dashboard/AdminPage/MakeAnnouncement/Make Announcement";
import Announcement from "../Pages/Dashboard/Announcement/Announcement";
import PostAApeartment from "../Pages/Dashboard/AdminPage/ApeartmentManage/PostAApeartment";
import UpdateApartment from "../Pages/Dashboard/AdminPage/ApeartmentManage/UpdateApartment";
import Admin from "../Pages/Dashboard/AdminPage/Admin/Admin";
import MakePayment from "../Pages/Dashboard/MemberPage/MakePayment";
import PaymentHistory from "../Pages/Dashboard/MemberPage/PaymentHistory";
import PrivetRoute from "./PrivetRoute";
import AllPaymentsDetails from "../Pages/Dashboard/AdminPage/PaymentsPage/AllPaymentsDetails";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
            path:'/apartment',
            element:<Apartment></Apartment>
        },
        {
            path:'/login',
            element:<LoginPage></LoginPage>
        },
        {
            path:'/signup',
            element:<SignUpPage></SignUpPage>
        },
      ]
    },
    {
      path:'/dasboard',
      element: <PrivetRoute><DasboardLayout></DasboardLayout></PrivetRoute>,
      children:[
        {
          path: '/dasboard',
          element: <ProfailPage></ProfailPage>
        },
        
        {
          path: '/dasboard/admin',
          element: <Admin></Admin>
        },
        {
          path: '/dasboard/profile',
          element: <ProfailPage></ProfailPage>
        },
        {
          path: '/dasboard/cupon',
          element: <ManageCoupons></ManageCoupons>,
        },
        {
          path: '/dasboard/updatecupon/:id',
          element: <UpdateCupon></UpdateCupon>,
        },
        {
          path: '/dasboard/manageMember',
          element: <ManageMember></ManageMember>
        },
        {
          path: '/dasboard/updateMamber/:id',
          element: <UpdateMember></UpdateMember>
        },
        {
          path: '/dasboard/memberRequest',
          element: <PendingRequest></PendingRequest>
        },
        {
          path: '/dasboard/annoucement',
          element: <Announcement></Announcement>
        },
        {
          path: '/dasboard/manageAnnoucement',
          element: <MakeAnnouncement></MakeAnnouncement>
        },
        {
          path: '/dasboard/addApeartment',
          element: <PostAApeartment></PostAApeartment>
        },
        {
          path: '/dasboard/UpdateApeartment/:id',
          element: <UpdateApartment></UpdateApartment>
        },
        {
          path: '/dasboard/allPayments',
          element: <AllPaymentsDetails></AllPaymentsDetails>
        },
        {
          path: '/dasboard/makePayment',
          element: <MakePayment></MakePayment>
        },
        {
          path: '/dasboard/paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
      ]
    }
  ]);

export default Router;