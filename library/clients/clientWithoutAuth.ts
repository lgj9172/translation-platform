import axios from "axios";

const ClientWithoutAuth = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

export default ClientWithoutAuth;
