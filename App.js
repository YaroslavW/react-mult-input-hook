import React, { userState } from 'react';
const App = () => {
    const [ product, setProduct ] = useState({ description: '', price: ''})

    const handleChangeFor = (propertyName) => (e) => {
        const newProduct = {
            ...product,
            [propertyName]: e.target.value
        }
        setProduct(newProduct)
    }

    const logProduct = () => {
        console.log(product)
    }

    return (
        <div>
            <h3>Product Description: { product.description }</h3>
            <h3>Product Price: { product.price }</h3>
            <input type="text" value={product.description} onChange={handleChangeFor('description')} />
            <br />
            <input type="text" value={product.price} onChange={handleChangeFor('price')} />
            <br />
            <button onClick={logProduct}>Send</button>
        </div>
    )
}

export default App