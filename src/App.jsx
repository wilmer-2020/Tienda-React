import {products as data} from './assets/db.json';
import {Products} from './components/Products.jsx';
import { Header } from './components/Header';
import {Cart} from './components/Cart.jsx';
import './index.css';
import { useFilters } from './assets/useFilters';


function App() {
const {filterProducts} = useFilters()
const Done = filterProducts(data)

 return(
    <>  
      <Header/>
      <Cart/>
      <Products products={Done}/>
    </>
  )
}

export default App
