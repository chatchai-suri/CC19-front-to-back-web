import axios from "axios";

export const actionRegister = async (value) => {
  return await axios.post("http://localhost:8888/api/register", value)
}

export const actionLogin = async (value) => {
  return await axios.post("http://localhost:8888/api/login", value)
}

export const actionCurrentUser = async (token) => {
  return await axios.get("http://localhost:8888/api/current-user", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}