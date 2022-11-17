import React, { useState } from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function Home(props) {
    const carData = require('../carsData.json');

    const [cartData,setCartData]= useState([]);
    const [showCart,setShowCart]=useState(false);    

    const showCarts = event => {
        setShowCart(current => !current);
      };


    function addToCart(id){
        const clickedProduct = carData.filter(car => car.id === id);
        // cartData.push(clickedProduct)
        // setCartData([...carData, clickedProduct ]);
        const existInCart = cartData.some(car=>car.id===id)
        if(existInCart){
            toast.error('Product Already Exists in Cart.',{autoClose:2000})
        }
        else{
            toast.success('Product added to Cart',{autoClose:2000})
            setCartData(cartData.concat(clickedProduct));
        }
    }
    return (
    <>
    {!showCart &&(
        <div className='dashboard container'>
        <div className='dashboard-header'>
            <div className='header mb-4'>
                <h1>Featured Products</h1>
                <button className='shopping-cart' onClick={showCarts}><i className="fa-solid fa-cart-shopping"></i></button>   
            </div>
            
              <div className='cards'>
                {carData.map((data,id)=>{
                    return(
                        <MDBRow className='row-cols-1 g-4' >
                            <MDBCol id={id}>
                                <MDBCard className='h-100 w-100 card'>
                                    <MDBCardImage className='w-100 carImage'
                                        src= {data.image}
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className='carTitle'>{data.carName}</MDBCardTitle>
                                        <div className='cardBody'>
                                        <MDBCardText className='carPrice'>Rs. {data.price}</MDBCardText>
                                        <button className='addToCartBtn' onClick={()=>addToCart(data.id)}>Add to cart</button>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    )
                })}
              </div>
        </div>
    </div>
    )}
    {showCart &&(
        <div className='dashboard container'>
        <div className='dashboard-header'>
            <div className='header mb-4'>
                <h1>My Cart</h1>
                <button className='shopping-cart' onClick={showCarts}><i class="fa-solid fa-circle-chevron-left"></i></button>   
            </div>
            <div className='cart-table-div'>
                <table className='cart-table'>
                    <thead>
                        <tr>
                            <th>Product Details</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                        </tr>
                        <hr></hr>
                    </thead>
                    {cartData.map((cars,index)=>{
                    return(
                        <tbody>
                            <tr key={index} className='product-details-row'>
                                <td className='product-details-cart'><img src={cars.image} alt='...'/> <p>{cars.carName}</p></td>
                                <td>
                                  <button onClick={() => (
                                    setCartData(prevState => {
                                      const newData =  prevState.map(item => {
                                        if ( item.id === cars.id &&cars.quantity>1) {
                                            return {
                                                ...item, quantity: cars.quantity - 1
                                            }
                                        }
                                        
                                        return item;
                                      })
                                     
                                     return newData;
                                    })
                                  )} className='plusMinus'>-</button>
                                  <span className='quantity'>{cars.quantity}</span> 
                                    <button onClick={() => (
                                    setCartData(prevState => {
                                      const newData =  prevState.map(item => {
                                        if ( item.id === cars.id) {
                                            return {
                                                ...item, quantity: cars.quantity + 1
                                            }
                                        }
                                        return item;
                                      })
                                     
                                     return newData;
                                    })
                                  )} className='plusMinus'>+</button> </td>
                                  <td>Rs. {cars.price}</td>
                                <td>Rs. {cars.price*cars.quantity}</td>
                            </tr>
                            <hr />
                        </tbody>
                        
                    )
                })}
                </table>
            </div>
        </div>
        <button onClick={showCarts} className='checkout btn btn-success'>CHECKOUT</button>
    </div>
    )}
     </>
  )
}

export default Home

