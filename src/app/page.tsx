import api from "~/product/api";
import StoreScreen from "~/store/screens/Store";

// eslint-disable-next-line react/function-component-definition
const IndexRoute = async () => {
  const products = await api.list();

  return <StoreScreen products={products} />;
};

export default IndexRoute;
