import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Send';
import TextField from "@mui/material/TextField";

function DisplayItineraries() {
    const [itinerariesList, setItineraries] = useState(null);
    const [users, setUsers] = useState([])
    const [user, setUser] = useState("");
    const [startdate, setStartDate] = useState("");
    const [stage, setStages] = useState("");
    const [hostel, setHostel] = useState("");
    const [nights, setNights] = useState("");

    useEffect(() => {
        getUsers();

        axios
            .get("http://localhost:3000/itineraries")
            .then(res => {
                console.log(res)
                setItineraries(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, []);

    function getUsers() {
        fetch("http://localhost:3000/itineraries").then((result) => {
            result.json().then((response) => {
                setUsers(response)
            })
        })
    }

    function DeleteItem(user) {
        fetch(`http://localhost:3000/itineraries/${user}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((response) => {
                console.warn(response)
                console.warn(users)
                getUsers();
                console.log("Item deleted!")
            })
        })
    }

    function EditItem(user) {
        let itinerariesList = user[user - 1];
        setUser(itinerariesList.user)
        setStartDate(itinerariesList.startdate)
        setStages(itinerariesList.stages)
        setHostel(itinerariesList.hostel)
        setNights(itinerariesList.nights)
    }

    return (
        itinerariesList && (
            <div className="showitineraries">

                {itinerariesList.map((itinerariesList, index) => (
                    <div key={index}>
                        <h3>{itinerariesList.user}</h3>
                        <p>{itinerariesList.startdate}</p>
                        {itinerariesList.stages.map((stages, index) => { return (<div key={index + 1}>{"Stage :" + stages.stage + " Hostel : " + stages.hostel + " Nights : " + stages.nights}</div>) })}
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="delete" onClick={() => DeleteItem(itinerariesList.user)} >
                                <DeleteIcon />
                            </IconButton>
                            <Button variant="contained" endIcon={<EditIcon />} onClick={() => EditItem(itinerariesList.user)}>Edit</Button>
                        </Stack>
                        <hr />
                    </div>
                ))}
                <div>
                    <TextField id="outlined-user" label="Change User" value={user} onChange={(e) => setUser(e.target.value)} />
                    <br />
                    <br />

                    <TextField id="outlined-startdate" label="Change Start Date" value={startdate} onChange={(e) => setStartDate(e.target.value)} />
                    <br />
                    <br />

                    <TextField id="outlined-stages" label="Change Stages" value={stage} onChange={(e) => setStages(e.target.value)} />
                    <br />
                    <br />

                    <TextField id="outlined-hostel" label="Change Hostel" value={hostel} onChange={(e) => setHostel(e.target.value)} />
                    <br />
                    <br />

                    <TextField id="outlined-nights" label="Change Nights" value={nights} onChange={(e) => setNights(e.target.value)} />
                </div>
            </div>
        )
    )
}

export default DisplayItineraries;