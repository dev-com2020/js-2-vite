import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { HomePage } from "./pages/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'products',
                element: <ProductsPage/>
            },
            {
                path: 'products/:id',
                element: <ProductPage/>
            },
        ]
    }
])
export function Routes(){
    return <RouterProvider router={router} />
}