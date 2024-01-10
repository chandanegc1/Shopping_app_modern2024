import { useState,  useEffect } from "react";
import "../styles/cart.scss"
import { FaPlus, FaTrash } from "react-icons/fa";
// import axios from "axios";
// import scrollToTop from "./goToTop";
// import { allcarturl, carturl, postcarturl } from "./APIUrl";
// import { useDispatch } from "react-redux"; 
let cartitems = 0;

function Cart() {
  // scrollToTop();
  cartitems = 0;
  let total = 0;
  let count = 0;
  const [priceCount, setPriceCount] = useState(0);
  total += priceCount;


  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([
    {
      name:"t-shirt",
      img:"/Assets/img/products/f3.jpg",
      brand:"chine",
      _id:"eereu",
      price:"129$"
  },
  {
      name:"t-shirt",
      img:"/Assets/img/products/f3.jpg",
      brand:"chine",
      _id:"eer",
      price:"129$"
  },
  {
      name:"t-shirt",
      img:"/Assets/img/products/f4.jpg",
      brand:"chine",
      _id:"eere",
      price:"129$"
  }
  ]);

  useEffect(() => {
    const fetch = async () => {
      try {
        // const response = await axios.get(postcarturl);
        // setUsers(response.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  // const cartprice = users.reduce((ac , currval)=> ac+currval.price ,0)

  
  useEffect(() => {
    // setPriceCount(cartprice);
  });

  // const dispatch = useDispatch();
  // const reducxfun = ()=>{
  //   dispatch({
  //     type:"cartCount",
  //     payload: -1
  //   })
  // }

  const handleDeleteItem = async (e) => {
      // await axios.delete(carturl+"/"+e);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== e));
      // reducxfun();
  };

  // const reducxfunc = ()=>{
  //   dispatch({
  //     type:"cartCount",
  //     payload: 0
  //   })
  // }
  const clearAllCart = async()=>{
      // await axios.delete(allcarturl);
      setUsers((prevUsers) => prevUsers.filter((user) =>false));
      // reducxfunc();
  }
  return (
    <>
      <div className="section123">
        <h1>#readmore</h1>
        <p>Read all case studies about aur product! </p>
      </div>
      <div className="cart">
        <table width="100%" className="tbl">
          <div className="size">
            <thead>
              <tr>
                <td>Remove</td>
                <td>Image</td>
                <td>Products</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </tr>
            </thead>
            <div className="scroll">
              {loading ? users.map((Product) => (
                <tbody>
                  <td className="delete" onClick={() => handleDeleteItem(Product._id)}><FaTrash/></td>
                  <td><img src={Product.img} alt="" /></td>
                  <td>{Product.name} </td>
                  <td>{Product.price} $ </td>
                  <td className="pdtval"><button>+</button><p> 1 </p><button> - </button></td>
                  <td></td>
                </tbody>
              )): <div className="loading"><p>Data Loading......</p></div>}
            </div>
          </div>
        </table>
      </div>
      <div className="cart-add">
        <div className="coupon">
          <h2>Apply Coupon</h2>
          <div className="inp">
            <input type="text" placeholder="Enter coupon..." />
            <button>Apply</button>
          </div>
        </div>
        <div className="subtotal">
          <h2>Cart Total</h2>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>{total}$</td>
            </tr>
            <tr>
              <td>Delivery Charge</td>
              <td>1$</td>
            </tr>
            <tr>
              <td>Disscount</td>
              <td>2$</td>
            </tr>
            <tr style={{ color: "white", background: "#088178" }}>
              <td>TOTAL</td>
              <td>{total + 1 + 2}$</td>
            </tr>
          </table>
          <button onClick={clearAllCart}>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;



