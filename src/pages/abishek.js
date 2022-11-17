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
    
    const [cart,setCart] = useState([])


    const [showCart,setShowCart]=useState(false);
    


    const showCarts = event => {
        setShowCart(current => !current);
      };

      function increaseQuantity(id){
        var data = cart?.id;
         var newQuantity = data.quantity+1;
         var newData =  {
            ...data,
            quantity: newQuantity
         }
         setCart({...cart, id: newData})
      }
      
      function decreaseQuantity(id){
        var data = cart?.id;
         var newQuantity = data.quantity-1;
         var newData =  {
            ...data,
            quantity: newQuantity
         }
         setCart({...cart, id: newData})
    }


    function addToCart(id){
        // toast.success('Product added to Cart',{autoClose:2000})
        let product = carData.filter(car=> car.id===id);
        product = product[0];
        const clickedProduct = Object.keys(cart).some(carId => carId === id);
        if(clickedProduct){
            increaseQuantity(id)   
        }else{
            setCart({...cart,id:{
                carName: product.carName,
                id:id,
                quantity: 1,
                price: product.price
            },
          })
           
        }
    }
    console.log("cart", cart)
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
                                        <button className='addToCartBtn' onClick={()=>addToCart(data.id)}>Add to Cart</button>
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
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    {Object.values(cart).map((cars,index)=>{
                    return(
                        <tbody>
                            <tr key={index}>
                                
                                <td>{cars.carName}</td>
                                <td>{cars.price}</td>
                                <td>
                                  <button onClick={() => decreaseQuantity(cars.id)}>-</button>  
                                    {cars.quantity}
                                  <button onClick={() => increaseQuantity(cars.id)}>+</button>
                                </td>
                                <td>{cars.price*cars.quantity}</td>
                            </tr>
                        </tbody>
                    )
                })}
                </table>
            </div>
        </div>
    </div>
    )}
     </>
  )
}

export default Home