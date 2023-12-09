import { useLoaderData } from "react-router-dom";
import Loading from "../../Components/Share/Loading";

export default function ProductsDetails() {
  const data = useLoaderData();
  if (!data) {
    return <Loading />;
  }
  return <div>ProductsDetails : {data.length}</div>;
}
