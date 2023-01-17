import React from "react";
// import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { useCart } from "react-use-cart";


function Enrolnow () {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
    
  if (isEmpty) return <h1 className="text-center">No Courses Available</h1>;
  return (
    <div>
           <section className="py-4 container">
      <br />
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Mycourses ({totalUniqueItems}) total Courses: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {/* items display on the cart */}
              {items.map((item, id) => {
                return (
                  <tr key={id}>
                    <td>
                      <img
                        src={item.url}
                        style={{
                          height: "10rem",
                          marginBottom: "4%",
                          marginRight: "5%",
                        }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>
                      <strong>{item.price}$</strong>
                    </td>
                    <td>
                      <strong>Qty {item.quantity}</strong>
                    </td>
                    {/*Decrease item quantity */}
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        style={{ height: "2rem" }}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <strong>-</strong>
                      </button>
                      {/* increase item quantity */}
                      <button
                        className="btn btn-info ms-2"
                        style={{ height: "2rem" }}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <strong>+</strong>
                      </button>
                      {/* Remove item from cart */}
                      <button
                        className="btn btn-danger ms-2"
                        style={{ height: "2rem" }}
                        onClick={() => removeItem(item.id)}
                      >
                        <strong>Remove Course</strong>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* Display cart's total */}
        <div className="col-auto ms-auto">
          <h2>Total Price: {cartTotal} $</h2>
        </div>
        {/* Clear the whole cart */}
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            <strong>Clear Cart</strong>
          </button>
          <button className="btn btn-primary m-2">
            <strong>Buy Now</strong>
          </button>
        </div>
      </div>
    </section>      
      <Footer/>
    </div>
    
  );
}export default Enrolnow