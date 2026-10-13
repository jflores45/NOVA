import { useEffect, useState } from "react";
import EditorialCard from "../components/features/EditorialCard";
import ProductGrid from "../components/features/ProductGrid";
import ProductGridSmall from "../components/features/ProductGridSmall";
import TrendCard from "../components/features/TrendCard";
import BlogCard from "../components/features/BlogCard";
import type { EditorialCollection } from "../types/Editorial";

// import { mainProduct } from "../data/mainProduct";
// import { products } from "../data/products";

function MainPage () {
    const [collections, setCollections] = useState<EditorialCollection[]>([]);
    const [color, setColor] = useState("tomato-red");

    const womenCollection = collections.find(
        (c) => c.category === "WOMEN"
    );

    const menCollection = collections.find(
        (c) => c.category === "MEN"
    );

    
    useEffect(() => {
        async function loadCollections() {
        const response = await fetch(
            "http://localhost:3001/api/editorial"
        );

        const data = await response.json();
        
        console.log(data);

        setCollections(data);
        }

        loadCollections();
    }, []);

    return (
        <>
             {womenCollection && (<EditorialCard collection={womenCollection}/>)}
           
             <ProductGrid collection="women-editorial"/>
             
             {menCollection && (<EditorialCard collection={menCollection}/>)}

             <ProductGrid collection="men-editorial"/>

             <TrendCard color={color} setColor={setColor}/>
             <ProductGridSmall collection={color}/>

             <BlogCard/>
        </>
    );
}
export default MainPage;