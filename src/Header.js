import logo from "./images/logo1.PNG"

function Header(){
    return(
        <header>
            
             <img src={logo} alt="Clogo" id="Cinemalogo"/>
        <nav>
          
            <a href=""> Movies </a>
            <a href=""> Top 10 Movies </a>
            <a href=""> Add Movie </a>  
        </nav>

        </header>
    )
}
    export default Header;