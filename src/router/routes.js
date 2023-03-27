import LandingPage from "views/LandingPage";
import ProductPage from "views/ProductPage";

const routes = [
  {
    path: "/",
    element: LandingPage,
    index: true,
  },
  {
    path: "/:productId",
    element: ProductPage,
  },
];

export default routes;
