import menuImage1 from "../images/menuDisplay1.jpeg"
import menuImage2 from "../images/menuDisplay2.jpeg"
import menuImage3 from "../images/menuDisplay3.jpeg"
import menuImage4 from "../images/menuDisplay4.jpeg"
import menuImage5 from "../images/menuDisplay5.jpeg"
import '../CSS/MenuDisplay.css'

function MenuDisplay () {
    return (
        <div className="menuDisplay">
            <img className="menuImages" src={menuImage1}/>
            <img className="menuImages" src={menuImage2}/>
            <img className="menuImages" src={menuImage3}/>
            <img className="menuImages" src={menuImage4}/>
        </div>
    )
}

export default MenuDisplay;