import { useId } from 'react'
import { Filters } from './Filters.jsx'

export function Header() {
    const CartId = useId()
    return(
        <header>
            <h1>React Shop</h1>
            <Filters/>
            <button className="btnCart" id={CartId} onClick={activeCart}>Carrito</button>
        </header>    
    )
}

function activeCart() {
    document.querySelector('.cart-content').classList.toggle('cart-content-active');
}

