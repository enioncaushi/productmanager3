import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const { products, setProducts } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', { title, price, description })
            .then(res => {
                setProducts([...products, res.data]);
            })
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <label>Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <label>Price</label>
            <input type="number" onChange={(e) => setPrice(e.target.value)} />
            <label>Description</label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} />
            <input type="submit" value="Create" />
        </form>
    );
};

export default ProductForm;
