import {Component} from 'react'
import Address from '../Address/address'

class MoviesSection extends Component {
  state = {
    moviesData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const options = {
      method: 'GET',
    }
    const response = await fetch(
      'http://test.api.boxigo.in/sample-data/',
      options,
    )
    const datas = await response.json()
    console.log(datas)
    const updatedData = datas.Customer_Estimate_Flow.map(data => ({
      movingFrom: data.moving_from,
      movingTo: data.moving_to,
      estimateId: data.estimate_id,
      propertySize: data.property_size,
      totalItems: data.total_items,
      distance: data.distance,
      dateCreated: data.date_created,
      customStatus: data.custom_status,
      oldHouseAdditionalInfo: data.old_house_additional_info,
      existingHouseDetails: {
        oldFloorNo: data.old_floor_no,
        oldElevatorAvailability: data.old_elevator_availability,
        oldParkingDistance: data.old_parking_distance,
      },
      newHouseDetails: {
        newFloorNo: data.new_floor_no,
        newElevatorAvailability: data.new_elevator_availability,
        newParkingDistance: data.new_parking_distance,
      },
      inventory: data.items.inventory,
    }))
    this.setState({moviesData: updatedData})
  }

  render() {
    const {moviesData} = this.state

    return (
      <div>
        <h1>My Movies</h1>
        {moviesData.map(data => (
          <Address key={data.estimateId} details={data} />
        ))}
      </div>
    )
  }
}
export default MoviesSection
