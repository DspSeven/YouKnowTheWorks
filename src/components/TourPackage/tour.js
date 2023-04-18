import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TouristPlaces from '../TouristPlaces/place'

const tourConstants = {
  success: 'SUCCESS',
  loading: 'LOADING',
}

class TourPackage extends Component {
  state = {
    tourStatus: tourConstants.loading,
    touristData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({tourStatus: tourConstants.loading})
    const travelGuidePackagesApiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(travelGuidePackagesApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.packages.map(tour => ({
        name: tour.name,
        id: tour.id,
        imageUrl: tour.image_url,
        description: tour.description,
      }))
      this.setState({
        touristData: updatedData,
        tourStatus: tourConstants.success,
      })
    }
  }

  // loading
  loadingApi = () => {
    console.log('')
    return (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    )
  }

  successApi = () => {
    const {touristData} = this.state
    return (
      <ul>
        {touristData.map(eachData => (
          <TouristPlaces key={eachData.id} details={eachData} />
        ))}
      </ul>
    )
  }

  startSwitch = () => {
    const {tourStatus} = this.state
    switch (tourStatus) {
      case tourConstants.success:
        return this.successApi()
      case tourConstants.loading:
        return this.loadingApi()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <h1>Travel Guide</h1>
        {this.startSwitch()}
      </div>
    )
  }
}
export default TourPackage
