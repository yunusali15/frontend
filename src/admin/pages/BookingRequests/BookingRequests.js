import React, { useState } from 'react'
import { useTable, useMemo, usePagination, useRowSelect} from 'react-table'
import {FcNext} from 'react-icons/fc'
import {FcPrevious} from 'react-icons/fc'
import { Link } from "react-router-dom";
import { COLUMNS } from './Columns';
import MOCK_DATA from './MOCK_DATA.json'
import './BookingRequests.css'
import axios from "axios";
import { Checkbox } from './CheckBox';
import { ApproveReject } from './ApproveReject';
const api = axios.create({ baseURL: "https://britannic.herokuapp.com/" });



export const BookingRequests = () => {

    const tableData = useTable ({
        columns: COLUMNS,
        data: MOCK_DATA,
    },
    usePagination,
    useRowSelect,
    (hooks) => {
        hooks.visibleColumns.push((columns) => {
            return [
                {
                    id: 'selection',
                    Header: ({getToggleAllRowsSelectedProps}) => (
                        <Checkbox {...getToggleAllRowsSelectedProps()} />
                        ),
                    Cell: ({row}) => (
                        <Checkbox {...row.getToggleRowSelectedProps()} />
                        )
                    
                },
                ...columns
            ]
        })
    }
    )

    const {
        getTableProps,
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, 
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        selectedFlatRows
    } = tableData

    const { pageIndex } = state;

    return (
        <div>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()} >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
                prepareRow(row)
                return (
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                </tr>
                )
            })}
       </tbody>
        </table>
        <div>
            <span>
                Page {pageIndex +1} of {pageOptions.length} {''}
            </span>
            
            <FcPrevious onClick={() => previousPage()} disabled={!canPreviousPage} />
            <FcNext onClick={() => nextPage()} disabled={!canNextPage} />
        </div>
        </div>
    )
}
