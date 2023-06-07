import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductForm.css";

export const ProductForm = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("Chocolate");
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePriceChange = (e) => {
        const { value } = e.target;
        if (value === "" || /^\d{1,4}(\.\d{0,2})?$/.test(value)) {
            setPrice(value);
        }
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            id: Math.floor(Math.random() * 100), // Generate a random ID for the example
            name,
            type,
            pricePerUnit: parseFloat(price),
            productTypeId: getProductTypeId(type),
        };

        fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then(() => {
                navigate("/products");
            })
            .catch((error) => {
                console.error("Error adding product:", error);
            });
    };

    const getProductTypeId = (type) => {
        switch (type) {
            case "Gummy":
                return "3";
            case "Hard Candy":
                return "2";
            case "Chocolate":
                return "1";
            default:
                return "";
        }
    };

    return (
        <div className="form-container">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        min="0"
                        max="1000"
                        step="0.01"
                        value={price}
                        onChange={handlePriceChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <select id="type" value={type} onChange={handleTypeChange}>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Hard Candy">Hard Candy</option>
                        <option value="Gummy">Gummy</option>
                    </select>
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};
