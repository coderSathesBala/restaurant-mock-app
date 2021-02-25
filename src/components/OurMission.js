import blueImageDiv from "../images/blueImageDiv.jpg"
import foodImage from '../images/foodImage.jpeg'
import "../CSS/OurMission.css"


function OurMission() {
    return (
    <div className="OurMissionWhole">
        <img className="OurMissionImage" src={blueImageDiv}/>
        <div className="OurMissionDescription">
             <h1 id="OurMissionTitle">Our Mission</h1>
             <p>Top Notch cuisine provides amazing food with style, grace and refinement. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nibh 
                fermentum, accumsan metus quis, iaculis massa. Donec rhoncus id ligula ut 
                mattis. Phasellus quis purus ac eros vestibulum ultrices id quis nisi. Vivamus
                pellentesque, nisl vitae ornare lacinia, ex justo aliquet urna, nec lobortis 
                lorem mauris eget risus. Cras eros sem, sollicitudin et nulla scelerisque, 
                scelerisque vestibulum erat. In sed dignissim mauris. Pellentesque viverra 
                dignissim sagittis. Vivamus nisl metus, mattis vitae elit sed, porttitor 
                volutpat ex. Nullam interdum ante ut nisl vulputate porttitor. Etiam bibendum 
                elit vitae magna convallis, in scelerisque libero vestibulum. Aliquam tempus 
                lectus ac tristique sodales. Donec fringilla iaculis ligula semper tristique. 
                Duis in placerat nunc.</p>
        </div>
    </div>
    )};
  
  export default OurMission;