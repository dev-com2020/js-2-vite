import { Form, Link, NavLink, useSearchParams } from "react-router-dom";
import logo from '../public/vite.svg'

export function Header(){
    const [searchParams] = useSearchParams()

    return (
        <header>
            <Form action="/products">
            <input type="search"
                name="search"
                defaultValue={searchParams.get('search')?? ''}></input>
            </Form>

            <Link to="">
            <img src={logo} alt="Logo"/>
            </Link>
            <nav>
                <NavLink to="products">Produkty</NavLink>
            </nav>
        </header>
    )
}