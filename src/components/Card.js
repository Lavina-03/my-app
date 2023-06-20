import React from 'react'
import { useDispatchCart, useCart } from '../ContextReducer'
export default function Card(props) {

  // let options = props.options;
  //  let ooptions = Object.keys(options);
  let foodItem = props.foodItems;
      const handleAddToCart = ()=>{

      }
  return (
    <div>
       <div><div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
  <img src={props.foodItems.img} className="card-img-top" alt="..." style={{height:"150px",objectFit:"film"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.foodItem.name}</h5>
    
    <div className='container w-100' >
        <select className='m-2 h-100  bg-secondary rounded'>
            {Array.from(Array(6), (e,i)=>{
                return(
                    <option key={i+1} value={i+1}> {i+1} </option>
                )
            })}
        </select>
        <select className='m-2 h-100  bg-secondary rounded'>
           {/* {options.map((data)=>{
            // return (
            // // <option key={data} value={data}>{data}</option>
            // )
           })} */}
           <option value='half'>Half</option>
           <option value='full'>Full</option>
        </select>
        <div className='d-inline h-100 fs-5'>
            Total Price
        </div>
    </div>
    <hr></hr>
    <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
  </div>
</div></div>
    </div>
  )
}
// https://i.pinimg.com/736x/f2/2c/33/f22c33be4bfdfb2c7ff21b5459dd7afd.jpg