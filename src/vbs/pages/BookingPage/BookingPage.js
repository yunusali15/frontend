import "./BookingPage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingPage = () => {
  const [cca, setCCA] = useState("");
  return (
    // <div class="mainDiv">
    //   <h1 class="Venue">Venue Booking System</h1>
    //   <div class="contents">
    //     <div class="Titles">
    //       <h2>VENUE</h2>
    //       <h2>TIME</h2>
    //       <h2>EMAIL</h2>
    //       <h2>PURPOSE</h2>
    //     </div>
    //     <div class="box">
    //       <form action="">
    //         <h3>Communal Hall</h3>
    //         <h3>4 July 2021</h3>
    //         <br></br>
    //         <input
    //           type="text"
    //           id="Email"
    //           name="Email"
    //           placeholder="e0123456@u.nus.edu.sg"
    //           required
    //         ></input>
    //         <div class="Purpose">
    //           <input type="radio" id="CCA" name="Purpose" value="CCA"></input>
    //           <label for="CCA">CCA</label>
    //           <input
    //             type="radio"
    //             id="Personal"
    //             name="Purpose"
    //             value="Personal"
    //           ></input>
    //           <label for="Personal">Personal</label>
    //         </div>
    //         <input
    //           type="text"
    //           id="HallCCA"
    //           name="HallCCA"
    //           placeholder="Hall CCA"
    //           required
    //         ></input>
    //         <br></br>
    //         <input
    //           type="text"
    //           id="Details"
    //           name="Details"
    //           placeholder="Details"
    //         ></input>
    //       </form>
    //     </div>
    //   </div>

    //   {/* <div className="Buttons">
    //     <input type="button" value="BACK" name="Back"></input>
    //     <input type="button" value="SUBMIT" name="Submit"></input>
    //   </div> */}
    // </div>
  );
};

export default BookingPage;
