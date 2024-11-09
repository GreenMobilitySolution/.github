import { routes } from "../../../Database/GareRoutes";
import { SingleCategoryCars } from "../../components/Cars/SingleCategoryCars";

const CarsPage = () => {
return (
    <SingleCategoryCars Routes={routes} CategoryTitle={""} />
)
}
export default CarsPage;