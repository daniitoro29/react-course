import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["One punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GitExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
