import React, { useLayoutEffect, Component, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { render } from "react-dom";
import ProfileNav from "../../components/ProfileNav";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import PrivateLayout from "../../Layout/Private";
import styled from 'styled-components'
import Eventbox from "../../components/Eventbox"
import events from "../../components/Eventbox/events.js"
import "../../styles/Calendar.css"

const Button = styled.button`
    min-width: 100px;
    padding: 10px 18px;
    border-radius: 4px;
    border: none;
    background: #b2c2a3;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 10px;
`;

moment.locale("en-US");
const localizer = momentLocalizer(moment)
const myEventsList = {}

const MyCalendar = () => {
    const [showEventbox, setShowEventbox] = useState(false);
    
    const openEventbox = () => {
        setShowEventbox(prev => !prev);
    };

    return (
        <PrivateLayout>
            <ProfileNav />
            <div className="main-calendar">
                <Calendar className="calendar"
                    localizer = { localizer }
                    events = {events}
                    startAccessor = "start"
                    endAccessor = "end"
                    style = {{ height: 500 }}
                />
                {/* <div className="modal"> */}
                    <Button onClick={openEventbox}>Add Event</Button>
                    <Eventbox showEventbox={showEventbox} setShowEventbox={setShowEventbox}/>
                {/* </div> */}
            </div>
        </PrivateLayout>
    );
};


export default MyCalendar;