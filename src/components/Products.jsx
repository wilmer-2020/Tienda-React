import './products.css';
export function Products({products}){
    return(
        <main className="main">
        {products.slice(0,12).map(product => (
            <article className="container_product" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div className="product_body">
                <p>{product.title}-${product.price}</p>
            </div>
                <div className="product_button">
                <button>ADD</button>
                </div>
            </article>
        ))}
    </main>    
    )
}