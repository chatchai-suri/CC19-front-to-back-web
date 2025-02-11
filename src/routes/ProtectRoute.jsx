//rfce
import React, { useEffect, useState } from 'react'
import useAuthStore from '../store/auth-store'
import { date } from 'zod'
import { actionCurrentUser } from '../../api/auth'


function ProtectRoute({el, allows}) {
  console.log("Hello. Protect Route")
  const [ok, setOk] = useState(null)
  // const user = useAuthStore((state) => state.user)
  const token = useAuthStore((state) => state.token)
  // console.log(user)
  console.log(token)

  useEffect(()=>{
    // code
    checkPermission()
  },[])

  const checkPermission = async () => {
    // code
    console.log("check permission")
    try {
      const res = await actionCurrentUser(token)
      //Role from backend
      const role = res.data.result.role
      console.log(role)
      if(allows.includes(role)){
        setOk(true)
      }else{
        setOk(false)
      }
    } catch (error) {
      console.log(error)
      setOk(false)
    }
  }
  console.log(ok)
  if(ok === null) {
    return <h1>Loading...</h1>
  }
  if(!ok) {
    return <h1>Unauthorized !!!</h1>
  }

  return el
}

export default ProtectRoute