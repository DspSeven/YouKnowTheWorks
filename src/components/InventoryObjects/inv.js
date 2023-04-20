import Category from '../Category/cat'

const InventoryObjects = props => {
  const {details} = props
  const {name, category} = details
  return (
    <div>
      <h1>{name}</h1>
      {category.map(data => (
        <Category key={data.id} details={data} />
      ))}
    </div>
  )
}
export default InventoryObjects
