import { useParams } from "react-router-dom"
import { products } from "../data/products"

type Params = {
    id: string
}

export function ProductPage() {
    const params = useParams<Params>()
    const id = params.id === undefined ? undefined: parseInt(params.id)
    const product = products.find((product) => product.id === id)

    return (
        <div className="card">
            {product === undefined ? (
                <h2>Nie znaleniono produktu</h2>
            ):(
                <>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                {new Intl.NumberFormat('pl-PL',{
                    currency: 'PLN',
                    style: 'currency'
                }).format(product.price)}
                </>
            )}
        </div>
    )
}