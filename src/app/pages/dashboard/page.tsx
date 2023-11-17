import { useEffect, useState } from "react";
import { Overview } from "./dto/dashboardType";
import { ContextApiCall } from "@/app/api/ContextApiCall";
import { AxiosResponse } from "axios";

const Dashboard = () => {
      //in each component need api call just get a instance 
    const apiService = ContextApiCall.getInstance();
    const [overview , setOverview]=useState<Overview>()
    useEffect(()=>{
        //please change base url to right address and after that use it
        apiService.get<AxiosResponse<Overview>>("api/dashboard/overview", false)
        .then(t=>{
          console.log(t);
          setOverview(t.data)
        })

    },[])
    return ( <>test</> );
}
 
export default Dashboard;