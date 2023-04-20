import {Switch, Route} from 'react-router-dom'
import MoviesSection from './components/MoviesSection/movies'
import SideBar from './components/SideBar/bar'
import './App.css'

const App = () => {
  console.log('')
  return (
    <div className="hi">
      <SideBar />
      <MoviesSection />
    </div>
  )
}
export default App
