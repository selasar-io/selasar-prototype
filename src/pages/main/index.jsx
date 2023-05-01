import Map from "../../component/Map"
import MenuButton from "../../component/MenuButton"
import SearchButton from "../../component/SearchButton"
import {Link} from 'react-router-dom'
function Main() {
    return (
      <>
      <MenuButton/>
      <a href="/search"><SearchButton/></a>
      <Map/>
      </>
    )
  }
  
  export default Main
  