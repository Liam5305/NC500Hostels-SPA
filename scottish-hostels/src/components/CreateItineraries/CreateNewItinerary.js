import React, { useState} from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export const Create = () => {
    const [user, setUser] = useState('');
    const [startdate, setStartDate] = useState('');
    const [stages, setStages] = useState('');
    const [hostel, setHostel] = useState('');
    const [nights, setNights] = useState('');


    function AddNew(user) {
        const data = { user, startdate, stages, hostel, nights }
        //console.warn(data)
        fetch(`http://localhost:3000/itineraries/stages/new/${user}`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data })
        }).then((res) => {
            //console.warn("res", res);
            res.json().then((result) => {
                console.warn("result", result)
            })
        })
    }

    return (
        <div className="createnew-itinerary">
            <h2>Add a new itinerary</h2>
            <br />
            <TextField id="outlined-user" label="User" value={user} onChange={(e) => setUser(e.target.value)}
            />
            <br />
            <br />
            <TextField id="outlined-startdate" label="Start Date" value={startdate} onChange={(e) => setStartDate(e.target.value)}
            />
            <br />
            <br />
            <TextField id="outlined-stages" label="Stages" value={stages} onChange={(e) => setStages(e.target.value)}
            />
            <br />
            <br />
            <TextField id="outlined-hostel" label="Hostel" value={hostel} onChange={(e) => setHostel(e.target.value)}
            />
            <br />
            <br />
            <TextField id="outlined-nights" label="Nights" value={nights} onChange={(e) => setNights(e.target.value)}
            />
            <br />
            <br />
            <Button variant="text"onClick={AddNew} >Add New!</Button>
        </div>
    )
}
