import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './subcomponents/header';
import Footer from './subcomponents/footer';
import Table from './subcomponents/table';

export default function Home() {
    const navigate = useNavigate(); // Hook to get access to the navigate function

    // This function will be called when the "Create Driver" button is clicked
    const handleClick = () => {
        navigate('/createDriver'); // Navigate programmatically to the create driver page
    };

    // This function will be called when the "Go to Report Page" button is clicked
    const reportHandleClick = () => {
        navigate('/report'); // Navigate programmatically to the report page
    };

    return (
        <div>
            <Header />
            <br></br>
            <br></br>
            <button type="button" className="btn btn-primary" onClick={handleClick} style={{ marginLeft: '100px' }}>
                Create Driver
            </button>
            <button type="button" className="btn btn-primary" onClick={reportHandleClick} style={{ marginLeft: '100px' }}>
                Go to Report Page
            </button>
            <br></br>
            <br></br>
            <Table />

            <Footer />
        </div>
    );
}
