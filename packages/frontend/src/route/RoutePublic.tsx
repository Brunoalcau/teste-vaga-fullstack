import { Navigate } from "react-router-dom";
import { Home } from "../pages/Home";


const RoutePublic = () => {
    return [{
        path: "/",
        element: <Home />
    }, {
        path: "*",
        element: <Navigate to="/" replace />
    }]
};

export default RoutePublic;