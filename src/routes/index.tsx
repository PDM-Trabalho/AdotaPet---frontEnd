import { getTokenStorage } from "../services/storage";

import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

export default function StackRoutes() {
    const token = getTokenStorage();
    const routes =
        typeof token === "string" ? <PrivateRoutes /> : <PublicRoutes />;
    return routes;
}
