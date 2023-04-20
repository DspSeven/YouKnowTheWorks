import {HiOutlineTruck} from 'react-icons/hi'
import {CgProfile} from 'react-icons/cg'
import {BiReceipt} from 'react-icons/bi'
import {RiLogoutCircleRFill} from 'react-icons/ri'
import {CustomButton, Icon} from './styledComponents'

const SideBar = () => {
  console.log('')
  return (
    <div>
      <div>
        <Icon>
          <HiOutlineTruck />
        </Icon>
        <CustomButton type="button">My movies</CustomButton>
      </div>
      <div>
        <CgProfile />
        <CustomButton type="button">My Profile</CustomButton>
      </div>
      <div>
        <BiReceipt />
        <CustomButton type="button">Get Quote</CustomButton>
      </div>
      <div>
        <RiLogoutCircleRFill />
        <CustomButton type="button">Logout</CustomButton>
      </div>
    </div>
  )
}
export default SideBar
