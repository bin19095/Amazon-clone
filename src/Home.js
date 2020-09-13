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
                id={Math.random()}
                title="The lean Startup"
                price={20.00}
                image="https://picsum.photos/400/500"
                rating={5}
                />
                  <Product
                  id={Math.random()} 
                title="The lean Startup"
                price={30.00}
                image="https://picsum.photos/200/301"
                rating={5}
                />
               
              </div>
              <div className="home__row">
                {/*Product*/}
                <Product
                id={Math.random()} 
                title="The lean Startup"
                price={40.00}
                image="https://picsum.photos/200/330"
                rating={5}
                />
                  <Product 
                id={Math.random()}
                title="The lean Startup"
                price={120.00}
                image="https://picsum.photos/200/360"
                rating={5}
                />
                  <Product 
                  id={Math.random()}
                title="The lean Startup"
                price={22.00}
                image="https://picsum.photos/200/320"
                rating={5}
                />
              </div>

              <div className="home__row">
                {/*Product*/}
                <Product 
                id={Math.random()}
                title="The lean Startup"
                price={20.00}
                image="https://picsum.photos/200/310"
                rating={5}
                />
              </div>
            </div>
        </div>
    )
}

export default Home
