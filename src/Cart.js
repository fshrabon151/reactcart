import React from "react";
import { useCart } from "react-use-cart";

export default function Cart() {
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

  if (isEmpty) return <h1 className="text-center">Your cart is empty</h1>;
  return (
    <div className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}) || Total items ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quentuty ({item.quantity})</td>
                    <td>
                        <button className="btn btn-primary ms-2"
                            onClick={()=>{updateItemQuantity(item.id, item.quantity+1)}}
                        >+</button>
                        <button className="btn btn-primary ms-2"
                             onClick={()=>{updateItemQuantity(item.id, item.quantity-1)}}
                        >-</button>
                        <button className="btn btn-danger ms-2"
                            onClick={()=>removeItem(item.id)}
                        >Remove Item</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
            <h2>Total Price :  $ {cartTotal}</h2>
        </div>
        <div className="col-auto">
            <button className="btn btn-danger m-2"
                onClick={()=>{emptyCart()}}
            >Clear Cart</button>
            <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
