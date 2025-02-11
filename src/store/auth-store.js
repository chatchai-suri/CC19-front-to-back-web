import {create} from "zustand"
import { actionLogin } from "../../api/auth"
import {persist} from "zustand/middleware"

// Step 1 Create Store 
const authStore = (set) => ({
  user: [],
  token: null,
  actionLoginwithZustand: async (value) => {
    try {
      const  res = await actionLogin(value)
      // console.log("Hello, Zustand", res)
      const {payload, token} = res.data
      console.log(payload)
      console.log(token)
      set({user: payload, token: token})
      return {success: true, role: payload.role}
    } catch (error) {
      console.log(error)
      return {success: false, error: error.response?.data?.message}
    }
  }
})

// Step 2 Export store
const useAuthStore = create(persist(authStore, {name: "auth-store"}))

export default useAuthStore