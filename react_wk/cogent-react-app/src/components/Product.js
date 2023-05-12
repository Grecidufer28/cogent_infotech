import React from "react";
import "./Product.css"
const Product=(props)=> {
    return (
        <div className="Product">
                <div>Product No-{props.itemNo}</div>
                <div>Product Name-{props.itemName}</div>
                <div>Product Price-{props.itemPrice}</div>
        </div>
    );
}

// class Product extends React.Component {
//     render() {
//         return(
//             <div className="Product">
//                 <div>Product No-{itemNo}</div>
//                 <div>Product Name-{itemName}</div>
//                 <div>Product Price-{itemPrice}</div>
//             </div>
//         )
//     }
// }


export default Product;