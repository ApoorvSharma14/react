import ProductList from '../assets/ProductList'
import CardComponent from './CardComponent'
const CardList = () => {
    return (
        <>
            {ProductList.map((product, index) => {
                return (
                    <div key={index}>
                        <CardComponent product={product} />
                    </div>
                )
            })}
        </>

    )
}

export default CardList;