import ItemCount from "./ItemCount"

const ItemDetail = () => {

    const onAdd =() => {
        console.log("..onAdd")
    }
  return (
    <div>
        <ItemCount onAdd={onAdd}></ItemCount>
    </div>
  )
}
export default ItemDetail