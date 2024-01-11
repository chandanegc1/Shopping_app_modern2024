import "../styles/product.scss"
import { FaCartPlus } from "react-icons/fa";

function Products(Product) {
  return (
    <>
      <div className="products">
            <div className="product" key={Product._id}>
              <div className="product-images">
                <img src={Product.img} alt=""/>
              </div>
              <div className="product-describe">
                <p className="brand">{Product.brand}</p>
                <h4>{Product.name}</h4>
                <div className="shop">
                  <div className="price">
                    <h4>{Product.price}</h4>
                  </div>
                  <div>
                    <button><FaCartPlus/></button>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  );
}
export default Products;
