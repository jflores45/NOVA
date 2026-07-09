// import { useState } from 'react';
import EditorialCard from "../components/features/EditorialCard";
import ProductGrid from "../components/features/ProductGrid";
import ProductGridSmall from "../components/features/ProductGridSmall";
import TrendCard from "../components/features/TrendCard";
import BlogCard from "../components/features/BlogCard";

// import { mainProduct } from "../data/mainProduct";
import { products } from "../data/products";

function MainPage () {
    return (
        <>
             <EditorialCard type="female"/>
             <ProductGrid collection="women editorial"/>
             
             <EditorialCard type="male"/>
             <ProductGrid collection="men editorial" />

             <TrendCard/>
             <ProductGridSmall products={products}/>
             <BlogCard/>
        </>
    );
}
export default MainPage;