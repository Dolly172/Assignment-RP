import logo from './logo.svg';
import './App.css';
import tShirt from './images/tShirt.png';
import footer1 from './images/footer1.png';
import footer2 from './images/footer2.png';
import footer3 from './images/footer3.png';
import footer4 from './images/footer4.png';


function App() {
  return (
    <div className="container">
      <div className='grid-container'>
       <span className='col-1'>
        <h3>Flat 50% Off On All Brands</h3>
        <h4>Premium T-Shirt</h4>
        <div>Aliquam erat volutpat. Ut eget dui odio. Proin ipsum lorem, efficitur id ligula sed, accumsan egestas ipsum. Aliquam placerat libero sed tristique congue. Quisque eu enim lorem. Curabitur sodales viverra ex a euismod. Suspendisse condimentum lacus ac elit mattis, et sodales libero commodo.</div>
       </span>
       <span className='col-2'>
        <div className='image'><img width={120} height={120} alt='t-shirt' src={tShirt} /></div>
        <h4 className='h4'>Premium</h4>
        <h5 className='h5'>T-Shirt</h5>
       </span>
      </div>
      <div className='footer'>
        <span>
          <div><img className='images' src={footer1}/></div>
          <h6>Designed with Love</h6>
          <p>in India</p>
        </span>
        <span>
        <div><img className='images' src={footer2}/></div>
          <h6>Environment</h6>
          <p>friendly</p>
        </span>
        <span>
        <div><img className='images' src={footer3}/></div>
          <h6>100% Secure</h6>
          <p>Online payments</p>
        </span>
        <span>
        <div><img className='images' src={footer4}/></div>
          <h6>Shipping</h6>
          <p>across India</p>
        </span>
      </div>
    </div>
  );
}

export default App;
