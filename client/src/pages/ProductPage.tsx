import { products } from "../data/products";
import { useParams } from "react-router-dom";

function ProductPage() {
    const { id } = useParams();

    const product = products.find((p) => p.id === Number(id));

    if (!product) {
      return <h2>Product not found</h2>;
    }

    return (
        <>
          <div className="Carosols">
            <img className="Main" src={product.images[0]?.url}/>
            <img className="preview"/>
            <img className="preview"/>
            <img className="preview"/>
            <img className="preview"/>
          </div>
          
          <div>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            
              {/* <div>
                {product.variants.sizes.map((s) => (
                  <button key={s}>{s}</button>
                ))}
              </div> */}

              {/* <div>
                {ProductVariant.color.map((c) => (
                  <button key={c}>{c}</button>
                ))}
              </div> */}
          </div>

          <button>ADD TO BAG</button>

          <hr/>

          <div>
            <p>{product.description}</p>
          </div>
        </>
    );
   
  }
  
  export default ProductPage;