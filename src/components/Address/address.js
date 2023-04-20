import {BiRightArrowAlt} from 'react-icons/bi'
import {AiFillHome, AiFillCalendar} from 'react-icons/ai'
import {BsFillExclamationTriangleFill} from 'react-icons/bs'
import {FiMapPin} from 'react-icons/fi'
import {Component} from 'react'
import {
  PersonAddress,
  AddressDetails,
  Disclaimer,
  Info,
} from './styledComponents'
import InventoryObjects from '../InventoryObjects/inv'

class Address extends Component {
  state = {
    status: false,
  }

  moreDetails = () => {
    this.setState(prevState => ({
      status: !prevState.status,
    }))
  }

  render() {
    const {details} = this.props
    const {
      movingFrom,
      movingTo,
      estimateId,
      propertySize,
      totalItems,
      distance,
      dateCreated,
      customStatus,
      oldHouseAdditionalInfo,
      existingHouseDetails,
      newHouseDetails,
      inventory,
    } = details
    const {
      oldFloorNo,
      oldElevatorAvailability,
      oldParkingDistance,
    } = existingHouseDetails
    const {
      newFloorNo,
      newElevatorAvailability,
      newParkingDistance,
    } = newHouseDetails
    const {status} = this.state
    return (
      <div>
        <PersonAddress>
          <div>
            <h1>From</h1>
            <p>{movingFrom}</p>
          </div>
          <BiRightArrowAlt />
          <div>
            <h1>To</h1>
            <p>{movingTo}</p>
          </div>
          <div>
            <h1>Requests</h1>
            <p>{estimateId}</p>
          </div>
        </PersonAddress>
        <AddressDetails>
          <div>
            <AiFillHome />
            <p>{propertySize}</p>
          </div>
          <div>
            <AiFillHome />
            <p>{totalItems}</p>
          </div>
          <div>
            <FiMapPin />
            <p>{distance}</p>
          </div>
          <div>
            <AiFillCalendar />
            <p>{dateCreated}</p>
          </div>
          <button type="button" onClick={this.moreDetails}>
            View More Details
          </button>
          <button type="button">{customStatus}</button>
        </AddressDetails>
        <Disclaimer>
          <BsFillExclamationTriangleFill />
          <h1>
            Disclaimer: Please update your move date before two days of shifting
          </h1>
        </Disclaimer>
        {status ? (
          <div>
            <Info>
              <h1>Additional Information</h1>
              <button type="button">Edit Additional Information</button>
            </Info>
            <p>{oldHouseAdditionalInfo}</p>
            <Info>
              <h1>House Details</h1>
              <button type="button">Edit House Details</button>
            </Info>
            <h1>Existing House Details</h1>
            <Info>
              <div>
                <h1>Floor No</h1>
                <p>{oldFloorNo}</p>
              </div>
              <div>
                <h1>Elevator Availability</h1>
                <p>{oldElevatorAvailability}</p>
              </div>
              <div>
                <h1>Distance from Elevator/StairCase to truck</h1>
                <p>{oldParkingDistance}</p>
              </div>
            </Info>
            <h1>New House Details</h1>
            <Info>
              <div>
                <h1>Floor No</h1>
                <p>{newFloorNo}</p>
              </div>
              <div>
                <h1>Elevator Availability</h1>
                <p>{newElevatorAvailability}</p>
              </div>
              <div>
                <h1>Distance from Elevator/StairCase to truck</h1>
                <p>{newParkingDistance}</p>
              </div>
            </Info>
            <h1>Inventory Details</h1>
            {inventory.map(data => (
              <InventoryObjects key={data.id} details={data} />
            ))}{' '}
          </div>
        ) : null}
        <hr />
      </div>
    )
  }
}
export default Address
