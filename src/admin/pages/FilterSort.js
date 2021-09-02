import React, {useState, useEffect} from "react";
import {useChecklist} from 'react-checklist'; 
import "./FilterSort.css";

const FilterSort = (props) => {
    const possiblevenues = new Set();
    const possibleCCAs = new Set();
    const possibleDates = new Set();

    useEffect(() => {
        props.allRequests.map((req) => {
            possiblevenues.add({_id: req._id, label: req.venue.name});
            possibleCCAs.add({_id: req._id, label: req.cca});
            possibleDates.add({_id: req._id, label: req.date});
        });
    }, []);

    const {handlevenue, isvenueAll, venueItems} = useChecklist(possiblevenues, {key:'_id', keyType:'ObjectId'});
    console.log(venueItems);

    const {handleCCA, isCCAAll, CCAItems} = useChecklist(possibleCCAs, {key:'_id',keyType: 'ObjectId'});
    console.log(CCAItems);

    const {handleDate, isDateAll, DatesItems} = useChecklist(possibleDates, {key:'_id', keyType: 'ObjectId'});
    console.log(DatesItems);

    const handleRest = () => {
        venueItems = new Set();
        CCAItems = new Set();
        DatesItems = new Set();
    }

    return (
        <div className = "maindiv">
            <Form className = "filter">
            <div className = "include">
                Include
            </div>
            <div className = "list">
                <ul>
                <li>
                    <input type = "checkbox" onChange={handlevenue} checked = {isvenueAll} />
                    <label>Venue</label>
                </li>
                    {props.possiblevenues.map((venue, i) => (
                        <li key= {i}>
                            <input type = "checkbox" 
                            data-key = {venue._id}
                            onChange = {handlevenue}
                            />
                            <label>{venue.label}</label>
                        </li>
                    ))};
                </ul>

                <ul>
                <li>
                    <input type = "checkbox" onChange={handleCCA} checked = {isCCAAll} />
                </li>
                    {props.possiblevenues.map((CCA, i) => (
                        <li key= {i}>
                            <input type = "checkbox" 
                            data-key = {CCA._id}
                            onChange = {handleCCA}
                            />
                            <label>{CCA.label}</label>
                        </li>
                    ))};
                </ul>
                <ul>
                <li>
                    <input type = "checkbox" onChange={handleDate} checked = {isDateAll} />
                </li>
                    {props.possiblevenues.map((Date, i) => (
                        <li key= {i}>
                            <input type = "checkbox" 
                            data-key = {Date._id}
                            onChange = {handleDate}
                            />
                            <label>{Date.label}</label>
                        </li>
                    ))};
                </ul>
            </div>
            </Form>
            <div className = "buttons">
                <button onClick = {handleRest}>
                    Cancel
                </button>

                <button onClick = {() => FilterSortModal(false)}>
                    Submit
                </button>
            </div>
        </div>
    )
}
    
export default FilterSort;