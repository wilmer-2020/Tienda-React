import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FiltersProvider } from './context/FiltersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
