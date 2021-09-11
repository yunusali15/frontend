import React, {useState, useEffect} from "react";
import {useChecklist} from 'react-checklist'; 
import "./FilterSort.css";
import axios from "axios";

const FilterSort = () => {
    const possiblevenues = new Set();
    const possibleCCAs = new Set();
    const possibleDates = new Set();
    const BASEURL = "https://britannic.herokuapp.com/";
    const [bookingRequest, setbookingRequest] = useState([]);

  const api = axios.create({ baseURL: BASEURL });
  api.defaults.headers.common["Authorization"] = "KEVII1!";

  useEffect(() => {
    api.get("/api/v1/bookingreq/all").then((res) => {
      console.log(res);
      setbookingRequest(res.data.bookingRequest.slice(0, 15));
    });
    return;
  }, []);

    useEffect(() => {
        bookingRequest.map((req) => {
            possiblevenues.add({_id:req.venue._id, label: req.venue.name});
            possibleCCAs.add({_id: req.cca, label: req.cca});
            possibleDates.add({_id: req.date, label: req.date});
        });
    }, []);

    bookingRequest.map((req) => {
        possiblevenues.add(req.venue.name);
        possibleCCAs.add(req.cca);
        possibleDates.add(req.date);
    })

    var listofVenue =[];
    var listofCCA =[];
    var listofDates =[];
    for (let i = 0; i< possiblevenues.size; i++){
        listofVenue.push({_id:i, label:Array.from(possiblevenues)[i]});
    }
    for (let i = 0; i< possibleCCAs.size; i++){
        listofCCA.push({_id:i, label:Array.from(possibleCCAs)[i]});
    }
    for (let i = 0; i< possibleDates.size; i++){
        listofDates.push({_id:i, label:Array.from(possibleDates)[i]});
    }

    
    console.log(listofVenue);

    const {handlevenue, venueItems} = useChecklist(listofVenue, {key:'_id', keyType:'number'});
    console.log(venueItems);

    const {handleCCA, CCAItems} = useChecklist(possibleCCAs, {key:'_id',keyType: 'number'});
    console.log(CCAItems);

    const {handleDate, DatesItems} = useChecklist(possibleDates, {key:'_id', keyType: 'number'});
    console.log(DatesItems);

    const handleRest = () => {
        venueItems = new Set();
        CCAItems = new Set();
        DatesItems = new Set();
    }

    

    return (
        <div className = "maindiv">
            <form className = "filter">
            <div className = "include">
                Include
            </div>
            <div className = "list">
                
                <label>Venue</label>
                <ul className = "list_content">
                    {listofVenue.map((obj) => (
                        <li key= {obj._id}>
                            <input type = "checkbox" 
                            data-key = {obj._id}
                            onChange = {handlevenue}
                            />
                            <label>{obj.label}</label>
                        </li>
                    ))}
                </ul>
                
                <label>CCA</label>
                <ul className = "list_content">
                    
                    {listofCCA.map((obj) => (
                        <li key= {obj._id}>
                            <input type = "checkbox" 
                            data-key = {obj._id}
                            onChange = {handleCCA}
                            />
                            <label>{obj.label}</label>
                        </li>
                    ))}
                </ul>
                
                <label>Dates</label>
                <ul className = "list_content">
                    
                    {listofDates.map((obj) => (
                        <li key= {obj._id}>
                            <input type = "checkbox" 
                            data-key = {obj._id}
                            onChange = {handleDate}
                            />
                            <label>{obj.label}</label>
                        </li>
                    ))}
                </ul>   
            </div>
            </form>
            <div className = "buttons">
                <button className = "cancel" onClick = {handleRest}>
                    Cancel
                </button>

                <button className = "submit"
                    >
                    Submit
                </button>
                
            </div>
        </div>
    )
}
    
export default FilterSort;