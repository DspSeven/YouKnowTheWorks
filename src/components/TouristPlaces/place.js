const TouristPlaces = props => {
  const {details} = props
  const {id, name, imageUrl, description} = details
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}
export default TouristPlaces
