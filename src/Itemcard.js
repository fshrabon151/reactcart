import React from 'react';
import {useCart} from 'react-use-cart'

export default function Itemcard({title,desc,img,price,item}) {
    const {addItem} = useCart();
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img className="card-img-top img-fluid" src={img} alt="Card image cap" />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-title">${price}</h5>
                    <p className="card-text">{desc}</p>
                    <button  className="btn btn-success" onClick={()=>addItem(item)}>Add to Card</button>
                </div>
            </div>
        </div>
    )
}
