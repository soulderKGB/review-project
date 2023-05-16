import GoldenBeeh from "./images/firstM.jpg"
import Gage from "./images/g.jpg"
import Line from "./images/2.jpg"
function Section2(){
    return(
        <div id="div1">
            <br/>
            <br/>
        <img id="Line" src={Line} alt=""/>
        <h3 id="m1Header"> DETECTIVE CHIRP & THE GOLDEN BEEHIVEG </h3>
        <img id="Gpicture" src={Gage} alt=""/>
        <br/>
        <br/>
        <div id="picVed">
        <img id="m1picture" src={GoldenBeeh} alt=""/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/J06RCXgKFiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br/>
        <br/>
        <br/>
        <hr/>
        </div>
        </div>



     )
}
export default Section2;