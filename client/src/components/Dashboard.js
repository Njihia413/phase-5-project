import React from "react";
import cup from "../assets/IMG-3217.jpg";
import cap from "../assets/IMG-3225.jpg";
import cep from "../assets/IMG-3222.jpg";
import cip from "../assets/IMG-3218.JPG";
import cop from "../assets/IMG-3219.jpg";
import coup from "../assets/IMG-3224.jpg";
import bup from "../assets/IMG-3221.jpg";
import bip from "../assets/IMG-3228.jpg";
import bop from "../assets/IMG-3226.jpg";
import bep from "../assets/IMG-3223.jpg";
import boup from "../assets/IMG-3227.jpg";
import bap from "../assets/IMG-3220.jpg";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h3><b>Courses</b></h3>
      <div className="dashboard-text">
      <strong>All Courses</strong> 
      <strong>My Courses</strong>
      </div>
      <div className="search-container">
        <form>
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search for Courses iewebdevelopment"
          ></input>
        </form>
      </div>
      {/* <div class="filter-sort-container">
        <div class="filter-sort-button">
          <button type="button">
            Filter <i class="fa-solid fa-caret-down"></i>
          </button>
          <button type="button">
            Sort By <i class="fa-solid fa-caret-down"></i>
          </button>
        </div>
      </div> */}
      {/* <div className="text-container">
        <div className="text-block">
          <p>
            <strong>All Courses</strong>
          </p>
          <p>Web Development(2908)</p>
          <p>Designs(11293)</p>
          <p>Photography(2230)</p>
          <p>3d Artist(19828)</p>
          <p>Motion Graphics(8223)</p>
          <p>Software Engineer(1001)</p>
          <p>UI/UX Roadmap(734)</p>
          <p>Sound & Music(1223)</p>
          <p>Digital Marketing(382)</p>
        </div>
      </div> */}

      <div className="col-md-3">
        <div className="card">
          
            <img src={cup} alt="" className="card-img-top"></img>
          
          <div className="card-body">
            <p>Become a Social Media Expert</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          
            <img src={cap} alt="" className="card-img-top"></img>
          
          <div className="card-body">
            <p>Learn Logo Design</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          
            <img src={cep} alt="" className="card-img-top"></img>
          
          <div className="card-body">
            <p>Become a Web Developer</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          
            <img src={cop} alt="" className="card-img-top"></img>
          
          <div className="card-body">
            <p>Get Weekly Shopping Tips</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          
            <img src={coup} alt="" className="card-img-top"></img>
          
          <div className="card-body">
            <p>3 Weeks Photography Bootcamp</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          
            <img src={bup} alt="" className="card-img-top"></img>
          
          <div className="card-body">
            <p>Advance Your 3D Modelling Skills</p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card">
          
            <img src={bop} alt="" className="card-img-top"></img>
          
          <div className="card-body">
            <p>Learn Organization Management</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          
            <img src={bep} alt="" className="card-img-top"></img>
          
          <div className="card-body">
            <p>Skills Needed To Become A Designer</p>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card">
          
            <img src={boup} alt="" className="card-img-top"></img>
          
          <div className="card-body">
            <p>2 in 1 Course On Becoming A Makeup Artist</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          
            <img src={cip} alt="" className="card-img-top"></img>
          
          <div className="card-body">
            <p>Embark on the Journey of Becoming an Artist</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          
            <img src={bip} alt="" className="card-img-top"></img>
          
          <div className="card-body">
            <p>How To Have A Good Listening Ear For Music</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          
            <img src={bap} alt="" className="card-img-top"></img>
          
          <div className="card-body">
            <p>The Art Of Growing A Relationship</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
