import React from "react"
import { Link } from "react-router-dom"
import { useRowSelect, useRowState } from "react-table"
import { ApproveReject } from "./ApproveReject"

export const COLUMNS = [
    {   width: 1000,
        Header: '',
        accessor: 'checkbox' 
    },
    {   width: 10,
        Header: 'Time',
        accessor: 'time' 
    },
    {   width: 100,
        Header: 'Venue',
        accessor: 'venue' 
    },
    {   
        Header: 'CCA',
        accessor: 'cca' 
    },
    {   width: 100,
        Header: 'Time Booked',
        accessor: 'timebooked' 
    },
    {   width: 200,
        Header: 'Purpose',
        accessor: 'purpose ' 
    },
    {   width: 100,
        Header: '',
        accessor: 'aprrove-reject',
        Cell: (value) => (
            <ApproveReject props={value}/>
        )
    },
]
