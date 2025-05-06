import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Timsea from './Timsea';

const Home = () => {
   const [products, setProducts] = useState([]);
   const img_url = "https://marshmelly.pythonanywhere.com/static/images/";
   const navigate = useNavigate();
   const location = useLocation();

   const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://marshmelly.pythonanywhere.com/api/get_product"
        );
        setProducts(response.data.products);
      } catch (error) {}
    };
    useEffect(() => {
      getProducts();
    }, []);

  return (
  <div className='home'>
      <div className="bg-dark">
      <div className="container-fluid row">
        {location.state && location.state.successMessage && (
          <div className="text" role="alert" style={{width: '20%', textAlign: 'center'}}>
            {location.state.successMessage}
          </div>
        )}
        <h1 className='text-white yo'>Explore Haircuts</h1>
        <p className='text'>At Huncho's Barbershop we provide exquisite haircuts that make our clients look and feel like proffessionals in their own perspective. Explore our haicuts to see which one you see fit.</p>
        <p className='text'>Come explore our haircuts for which is at affordable prices.</p>

        {products?.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow p-2">
              <img
                src={img_url + product.product_photo}
                alt={product.product_photo} className='haircut'
              />
              <div className="card-body">
                <h5 className="mt-2">{product.product_name}</h5>
                <p className="text-muted">{product.product_description} </p>
                <b className="text-warning">{product.product_cost}</b> <br />
                <button
                  className="button"
                  onClick={() => {
                    navigate("/payments",{state:{product}});}}>
                  Book haircut
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className='text'>Want to get the full experience? Signup to get complete updates <Link to='/signup'>Sign Up</Link></p>
    </div><br /><br />
    <Timsea/>
  </div>
  );
}

export default Home;
