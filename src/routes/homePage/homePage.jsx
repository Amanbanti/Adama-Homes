import { useContext } from "react";
import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";


function HomePage()   {


  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
        <h1 className="title">
            Find Your <span style={{ color: 'rgb(255,149,5)' }}>Dream House</span> In Adama        </h1>
 
          <p>
          Welcome to Adama Homes, your go-to real estate partner in Adama.
           We specialize in helping you find your dream home,
            whether you're looking to buy or rent. Our dedicated team is committed to making your home search seamless and enjoyable.
          </p>

          <SearchBar/>
       
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;