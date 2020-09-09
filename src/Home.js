import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img 
            className="home__image"
            alt="Shipping to Australia? Visit amazon.com.au to shop for millions of items." 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        /> 
            <div className="home__row">
                {/*Product*/}
                <Product 
                id={1}
                title="The lean Startup"
                price={20.00}
                image="https://m.media-amazon.com/images/I/41u3byBybNL.jpg"
                rating={5}
                />
                  <Product
                  id={2} 
                title="The lean Startup"
                price={30.00}
                image="https://m.media-amazon.com/images/I/41u3byBybNL.jpg"
                rating={5}
                />
               
              </div>
              <div className="home__row">
                {/*Product*/}
                <Product
                id={3} 
                title="The lean Startup"
                price={40.00}
                image="https://m.media-amazon.com/images/I/41u3byBybNL.jpg"
                rating={5}
                />
                  <Product 
                  id={4}
                title="The lean Startup"
                price={120.00}
                image="https://m.media-amazon.com/images/I/41u3byBybNL.jpg"
                rating={5}
                />
                  <Product 
                  id={5}
                title="The lean Startup"
                price={22.00}
                image="https://m.media-amazon.com/images/I/41u3byBybNL.jpg"
                rating={5}
                />
               
              </div>
              <div className="home__row">
                {/*Product*/}
                <Product 
                id={6}
                title="The lean Startup"
                price={20.00}
                image="https://m.media-amazon.com/images/I/41u3byBybNL.jpg"
                rating={5}
                />
                
               
              </div>
           
          

            </div>
        </div>
    )
}

export default Home
