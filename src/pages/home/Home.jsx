import React from 'react';
import Banner from "../../components/Banner.jsx";
import Categories from "./Categories.jsx";
import SpecialDishes from "./SpecialDishes.jsx";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <SpecialDishes/>
        </div>
    );
};

export default Home;
