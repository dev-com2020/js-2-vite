
import { Link, useSearchParams } from "react-router-dom"
import { products } from "../data/products"

export function ProductsPage() {
    const [searchParams] = useSearchParams()
    function getFilteredProducts() {
        const search = searchParams.get('search')
        if (search === null || search === '') {
            return products
        } else {
            return products.filter(
                (product) => product.name.toLowerCase().indexOf(
                    search.toLowerCase()) > -1,
            )
        }
    }

    return (
        <div className="card">
            <h2>Książki IT</h2>
            <ul>
                {getFilteredProducts().map((product) => (
                    <li key={product.id}>
                        <Link to={`${product.id}`}>
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}