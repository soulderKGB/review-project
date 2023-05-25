import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MovieList(){
  const [allMovies, setallMovies] = useState("");

  useEffect(()=>{
      axios.get("http://localhost:5500/getMovies")
      .then((res)=>{setallMovies(res.data)})
  },[]);
    return(
      <>
        {
            allMovies && allMovies.map((movie)=>(
              <div id='MoviesList'>
              <div className="child" id="child1">
              <div>
                <img  src={movie.moviePic} alt=""/>
                </div>
                <div>
                <h3 class="Title">{movie.movieTitle}</h3>
                <p> {movie.movieDes}</p>
                <Link to ='/Movie1'><button>More Details</button></Link>
                </div>
            </div>
            </div>
            ))
        }
        </>
    );
}

export default MovieList;