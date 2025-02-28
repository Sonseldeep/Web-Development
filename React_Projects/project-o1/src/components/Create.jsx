import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";

const Create = () => {
  const [products, setProducts] = useContext(ProductContext);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const AddProductHandler = (e) => {
    e.preventDefault();
    const { title, image, category, price, description } = formData;

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each input must have at least 4 characters");
      return;
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setProducts([...products, product]);
    console.log(product);
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] items-center w-screen h-screen flex flex-col"
    >
      <h1 className="text-3xl w-1/2 mb-5">Add New Products</h1>
      <input
        type="url"
        name="image"
        placeholder="Image link"
        className="text-1xl bg-zinc-100 rounded-md mb-3 w-1/2"
        value={formData.image}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="text-1xl bg-zinc-100 rounded-md mb-3 w-1/2"
        value={formData.title}
        onChange={handleChange}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="text-1xl bg-zinc-100 rounded-md mb-3 w-[47%]"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="text-1xl bg-zinc-100 rounded-md mb-3 w-[47%]"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <textarea
        name="description"
        rows="10"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        placeholder="Enter product description here ..."
        value={formData.description}
        onChange={handleChange}
      ></textarea>
      <div className="btn w-1/2">
        <button className="border-blue-100 text-blue-400 border rounded p-2 mt-3">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
