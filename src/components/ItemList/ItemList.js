import Item from "../Item/Item";

const ItemList = ({products}) =>{
    return(
        <>
            {products.map(prod => (
                <div className="column is-one-third" key={prod.id}>
                    <Item {...prod} />
                </div>
            ))}
        </>
    )
}

export default ItemList;