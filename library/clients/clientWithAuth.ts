import axios from "axios";

const ClientWithAuth = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

export default ClientWithAuth;
