import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
   const [products, setProducts] = useState([]);
   const img_url = "https://marshmelly.pythonanywhere.com/static/images/";
    const navigate = useNavigate("");

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
    getProducts();

  return (
    <div className="bg-dark">
      <div className="container-fluid row">
        <h1 className='text-white'>Explore Haircuts</h1>
        <p className='text'>At Huncho's Barbershop we provide exquisite haircuts that make our clients look and feel like proffessionals in their own perspective. Explore our haicuts to see which one you see fit.</p>

        {products?.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow p-2">
              <img
                src={img_url + product.product_photo}
                alt={product.product_photo}
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
    </div>
  );
}

export default Home;