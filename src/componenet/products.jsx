import React from 'react'
import { products } from '../constant'

const Products = () => {
  return (
    <section className='product-div'>
      <h2 className='movie-header'>Movie Shelve</h2>


      <div className="movie-items">
        {
          products && products.map((product) => (
            <>
              <div key={product.id} className="movie-item">
                <img src={product.imgPath} alt={product.name} />
                
                <div className="movie-title">{product.name}</div>
                <div className="movie-description">{product.description}</div>
              </div>

            </>
          ))
        }
      </div>
    </section>
  )
}
export default Products