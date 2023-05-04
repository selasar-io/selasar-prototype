import Map from "src/component/Map"
import MenuButton from "src/component/MenuButton"
import SearchButton from "src/component/SearchButton"
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
  