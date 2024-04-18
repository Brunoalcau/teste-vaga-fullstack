import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RoutePublic from "./RoutePublic";

const Route = () => {
    const route = createBrowserRouter(RoutePublic())
    
    return (
        <>  
            <RouterProvider router={route} />
        </>
    )
};

export default Route;