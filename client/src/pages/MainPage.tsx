import { useEffect, useState } from "react";
import EditorialCard from "../components/features/EditorialCard";
import EditorialGrid from "../components/features/EditorialGrid";
import ProductGridSmall from "../components/features/ProductGridSmall";
import TrendCard from "../components/features/TrendCard";
import BlogCard from "../components/features/BlogCard";
import type { EditorialFeature, EditorialLook } from "../types/Editorial";

function MainPage() {
  const [features, setFeatures] = useState<EditorialFeature[]>([]);
  const [looks, setlooks] = useState<EditorialLook[]>([]);
  const [color, setColor] = useState("tomato-red");
  const [error, setError] = useState<string | null>(null);

  const womenFeature = features.find((c) => c.category === "WOMEN");

  const menFeature = features.find((c) => c.category === "MEN");

  const womenEditorial = looks.filter((c) => c.category === "WOMEN");

  const menEditorial = looks.filter((c) => c.category === "MEN");

  useEffect(() => {
    async function loadFeatures() {
      try {
        const url = `${import.meta.env.VITE_API_URL}/api/editorial/features`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Unable to load editorial.");
        }

        const data = await response.json();

        console.log(data);

        setFeatures(data);
      } catch {
        setError("Unable to load editorial.");
      }
    }

    async function loadLooks() {
      try {
        const url = `${import.meta.env.VITE_API_URL}/api/editorial/looks`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Unable to load look.");
        }

        const data = await response.json();

        console.log(data);

        setlooks(data);
      } catch {
        setError("Unable to load look.");
      }
    }

    loadFeatures();
    loadLooks();
  }, []);

  if (error) {
    return <p>Something went wrong: {error}</p>;
  }

  return (
    <>
      {womenFeature && <EditorialCard collection={womenFeature} />}
      {womenEditorial && <EditorialGrid collection={womenEditorial} />}

      {menFeature && <EditorialCard collection={menFeature} />}
      {menEditorial && <EditorialGrid collection={menEditorial} />}

      <TrendCard color={color} setColor={setColor} />
      <ProductGridSmall collection={color} />

      <BlogCard />
    </>
  );
}
export default MainPage;
