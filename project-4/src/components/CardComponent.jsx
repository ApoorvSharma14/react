const CardComponent = ({ product }) => {
    console.log(product);
    return (
        <div>
            <img src={product.image} height="100px" alt="" />
            <p>{product.title}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default CardComponent;