import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Error from "../Pages/Error/Error";
import DonationData from "../Pages/DonationData/DonationData";


const CreateRoute=createBrowserRouter([
  {
    path:"/",
    element:  <MainLayout></MainLayout>,
    errorElement:<Error></Error> , 
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('/cards.json')
      },
      {
        path:"/Donation",
        element:<Donation></Donation>
      },
      {
        path:"/Statistics",
        element:<Statistics></Statistics>,
        
      },
      {
        path:"/cards/:id",
        element:<DonationData></DonationData>,
        loader:()=>fetch('/cards.json')
      }
    ]
  }
])

export default CreateRoute;