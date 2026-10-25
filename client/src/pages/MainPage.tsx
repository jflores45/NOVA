import { useEffect, useState } from "react";
import EditorialCard from "../components/features/EditorialCard";
import ProductGrid from "../components/features/ProductGrid";
import EditorialGrid from "../components/features/EditorialGrid";
import ProductGridSmall from "../components/features/ProductGridSmall";
import TrendCard from "../components/features/TrendCard";
import BlogCard from "../components/features/BlogCard";
// import EditorialSidePanel from "../components/features/EditorialSidePanel";
import type { EditorialFeature, EditorialLook } from "../types/Editorial";

// import { mainProduct } from "../data/mainProduct";
// import { products } from "../data/products";

function MainPage () {
    const [features, setFeatures] = useState<EditorialFeature[]>([]);
    const [looks, setlooks] = useState<EditorialLook[]>([]);
    // const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [color, setColor] = useState("tomato-red");

    const womenFeature = features.find(
        (c) => c.category === "WOMEN"
    );

    const menFeature = features.find(
        (c) => c.category === "MEN"
    );

    const womenEditorial = looks.filter(
        (c) => c.category === "WOMEN"
    );

    const menEditorial = looks.filter(
        (c) => c.category === "MEN"
    );

    useEffect(() => {
        async function loadFeatures() {
        const response = await fetch(
            "http://localhost:3001/api/editorial/features"
        );

        const data = await response.json();
        
        console.log(data);

        setFeatures(data);
        }

        async function loadLooks() {
        const response = await fetch(
            "http://localhost:3001/api/editorial/looks"
        );

        const data = await response.json();
        
        console.log(data);

        setlooks(data);
        }
    
        loadFeatures();
        loadLooks();
    }, []);

    return (
        <>
            {womenFeature && <EditorialCard collection={womenFeature} />}
           
             {/* <ProductGrid collection="women-editorial" clickMode="editorial"/> */}
            {womenEditorial && <EditorialGrid collection={womenEditorial} />}

             
            {menFeature && <EditorialCard collection={menFeature} />}

             {/* <ProductGrid collection="men-editorial" clickMode="editorial"/> */}
            
            {menEditorial && <EditorialGrid collection={menEditorial} />}

             <TrendCard color={color} setColor={setColor}/>
             <ProductGridSmall collection={color}/>

             <BlogCard/>

            {/* <EditorialSidePanel /> */}

        </>
    );
}
export default MainPage;