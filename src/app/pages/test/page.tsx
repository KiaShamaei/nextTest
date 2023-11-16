"use client"
import { useEffect, useState } from 'react';
import { ContextApiCall } from '../../api/ContextApiCall'
import { User } from './dto/User';
import { AxiosResponse } from 'axios';



export default function Test() {
  //in each component need api call just get a instance 
  const apiService = ContextApiCall.getInstance();

const [users , setUsers] = useState<User[]>([])

useEffect(()=>{
apiService.get<AxiosResponse<User[]>>("users")
.then(t=>{
  console.log(t);
  setUsers(t.data)
})

},[])
  return (
    <main>
      <p>this is test case for :  api axios </p>
      <div>
      {users.length > 0 && users.map((row)=><p>{row.name}</p>)}
      </div>
    </main>
  )
}