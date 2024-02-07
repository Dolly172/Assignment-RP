import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { MdStarRate } from "react-icons/md";
import { TiSocialFacebook, TiSocialPinterest } from "react-icons/ti";
import { BiLogoTwitter } from "react-icons/bi";
import shirt from './images/shirt.png';
import { useState, useRef } from 'react';

function App() {

  const notEligiblePins = [560017,560018,560019,560020];

  const [cartVal, setCartVal] = useState(0);
  const [qty, setQty] = useState(0);
  const [price] = useState(2599);
  const [pincode, setPincode] = useState({pin: '', eligible: true});
  const inputRef = useRef();

  function qtyHandler(e){
    let action = e.currentTarget.innerText;
    if(action === '+'){
      setQty((prev) => prev + 1);
      setCartVal((prev) => prev + price );
    } else if(action === '-') {
      if(qty>0){
        setQty((prev) => prev - 1);
        setCartVal((prev) => prev - price );
      }else {
        toast.warn("Quantity cannot be less than 0", {
          position: "top-center",
          autoClose: 3000
        });
      }
    }
  }

  function checkHandler(){
    const pin = inputRef.current.value;
    if(notEligiblePins.includes(Number(pin))){
      toast.error("Sorry, You are not eligible for COD", {
        position: "top-center",
        autoClose: 3000
      }); 
      setPincode({pin: inputRef.current.value, eligible: false});
    }else{
      toast.success("You are eligible for COD", {
        position: "top-center",
        autoClose: 3000
      });
      setPincode({pin: inputRef.current.value, eligible: true});
    }
  }
  // console.log("pin checked:: ", pincode);

  function addToCartHandler(){
    if(pincode.pin.length === 0){
      inputRef.current.focus();
    }else{
      toast.success("Item Added To Cart Successfully", {
        position: "top-center",
        autoClose: 3000
      });
    }
  }

  return (
    <>
    <ToastContainer/>
      <div className="container">
        <span className='col-1'>
          <img height={250} width={200} alt="shirt" src={shirt} />
        </span>
        <span className='col-2'>
          <div>CLASSIC DENIM SHIRT</div>
          <div className='rating'>{[1,2,3,4,5].map((el) => {
           return <MdStarRate />
          })} 23 reviews</div>
          <div className='qty-container'>
            <div className='font'>Quantity</div>
            <div className='qty'>
              <span value="plus" onClick={(e) => qtyHandler(e)} className='sign'>+</span>
              {qty}
              <span onClick={(e) => qtyHandler(e)} className='sign'>-</span>
            </div>
          </div>
          <div className='cod-container'>
            <div>CHECK COD AVAILABILITY</div>
            <div className='cod-input'>
              <span><input name='pincode' ref={inputRef} className='input' type='number' placeholder='ENTER PINCODE'/></span>
              <span onClick={checkHandler} className='btn-pin-chk'>CHECK</span>
            </div>
          </div>
          <div onClick={pincode.eligible ? addToCartHandler : null} className={pincode.eligible ? 'add-to-cart' : 'disable-add-to-cart'}>
              <span>ADD TO CART</span>
              <span>₹ {cartVal}</span>
          </div>
          <div className='share-tags'>
            <span>{<TiSocialFacebook/>} SHARE</span>
            <span>{<BiLogoTwitter />} TWEET</span>
            <span>{<TiSocialPinterest/>} PIN</span>
          </div>
        </span>
      </div>
      </>
  );
}

export default App;
