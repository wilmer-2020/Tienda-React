export function Cart({name}) {
    return(
        <>
            <aside className="cart-content">
                    <div className="product-cart">
                        <img src=""></img>
                        <p>iPhone<strong>1500</strong></p>
                        <small>
                            Quantity:1
                        </small>
                        <button>Eliminar<strong>{name}</strong></button> 
                    </div>
                    <button>Limpiar Carrito</button>
            </aside>
        </>
    )
}