import React from 'react';
import BookingRequest from '../../admin/pages/BookingRequests/BookingRequest';
import './Contacts.css';

const Contacts = () => {
    return ( 
    <h1 className='ContactsPageMainDiv'>
        Please send your queries to ke7webdev@gmail.com 
        <BookingRequest/>
    </h1>
    );
}
 
export default Contacts;