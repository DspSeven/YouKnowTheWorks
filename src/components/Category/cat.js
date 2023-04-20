const Category = props => {
  const {details} = props
  const {name, displayName} = details
  return (
    <div>
      <h1>{name}</h1>
      <h1>{displayName}</h1>
    </div>
  )
}
export default Category
