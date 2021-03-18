import beerImage1 from "../images/beerImage1.jpg"
import beerImage2 from "../images/beerImage2.jpg"
import beerImage3 from "../images/beerImage3.jpg"
import beerImage4 from "../images/beerImage4.jpg"
import '../CSS/BeerDisplay.css'

function BeerDisplay () {
    return (
        <div>
            <h1 id="beerTitle">SEASONAL CRAFT BEERS</h1>
            <div className="beerDisplay">
                <img className="menuImages" src={beerImage1}/>
                <img className="menuImages" src={beerImage2}/>
                <img className="menuImages" src={beerImage3}/>
                <img className="menuImages" src={beerImage4}/>
            </div>
        </div>
    )
}

export default BeerDisplay;