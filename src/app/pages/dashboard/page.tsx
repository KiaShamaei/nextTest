"use client"
import { useEffect, useState } from 'react';
import { AxoisApiCall } from '../../api/AxoisApiCall';
import { ContextApiCall } from '../../api/ContextApiCall'
import { AxiosResponse } from 'axios';

interface User {
  id: number
  name: string
  email: string
}
export default function Dashboard() {
  const apiService = new ContextApiCall(
    new AxoisApiCall() , "https://jsonplaceholder.typicode.com/");

const [users , setUsers] = useState<User[]>([])

useEffect(()=>{
apiService.get<AxiosResponse<User[]>>("users").then(t=>{
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