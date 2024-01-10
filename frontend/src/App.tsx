import './App.css'
import { sampleProducts } from './data'

function App() {
  return (
    <>
      <div>
        <header>TS Amazona</header>
        <main>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img
                className='product-image'
                src={product.image}
                alt={product.name}
              />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </li>
          ))}
        </main>
        <footer>All right reserved</footer>
      </div>
    </>
  )
}

export default App
