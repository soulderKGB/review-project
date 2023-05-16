import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Section1/>
    <Section2/>
    <Section3/>
    <div class="testimonial-heading">
       
       <h2>Reviews</h2>
   </div>
   <div class="testimonial-box-container">

{/* <Section3 Rname="HR" Rate1="" Rate2="" Rate3 ="" Rate4 ="" Rate5="" Rcomment="" /> */}
<Section4 Uname="Mariam" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="fas fa-star" Rate5="far fa-star" Ucomment="The children were really looking forward to the cartoon, as the fans of the animated series) Liked it! A real detective with intrigue))
" />

<Section4 Uname="Obaid" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="far fa-sta" Rate5="far fa-star" Ucomment="Everything seems to be fine, but something is missing. For a split." />

<Section4 Uname="Maria" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="far fa-sta" Rate5="far fa-star" Ucomment="If you told 5 year old me this movie would exist I probably wouldn’t believe it. I didn’t know what to expect going into this movie when it was first announced but when I went to see it earlier today it was… everything!
From the animation, game sounds, the acting and the music! I really enjoyed it!
" />

<Section4 Uname="Reem" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="far fa-sta" Rate5="far fa-star" Ucomment="I saw this film on opening day and enjoyed this film a lot! It has tons of nice easter eggs and I would definitely recommend it to other  fans! " />
</div>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
