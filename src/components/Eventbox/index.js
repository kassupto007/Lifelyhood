import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import AddEventForm from "../../components/Eventbox/add.js";
import {
    ModalBackground,
    ModalWrapper,
    ModalContent,
    CloseModalButton
  } from "./style.js";
import axios from "axios";
import { useAuthCtx } from "../../Hooks/useAuthContext";

/*
  Eventbox component loads up a modal to "Add Event." Through the use of AddEventForm
  we are able to send a post request using an axios method. Modal uses react-spring to 
  display with animation. Style.js and modal template made using tutorial from Youtuber
  "Brian Design." We use showEventbox and setShowEventbox to display the modal like an 
  off/on switch.
*/

//   const URL = "http://127.0.0.1:8000/api/calendar/events/"
const URL = "/api/calendar/events/"
const Eventbox = ({showEventbox, setShowEventbox}) => {
    const { user } = useAuthCtx();
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showEventbox ? 1 : 0,
        transform: showEventbox ? "translateY(0%)" : "translateX(+100%)"
    })

    const [error, setError] = useState(null);
    const submitHandler = async (data) => {
      try {
        const response = await axios.post(URL, data, {
            headers: {
              "Authorization": `Token ${user.token}`
            }}).then(function (response) {
            // handle success
            console.log(response);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
        });
      } catch (err) {
        console.log(`err`);
        setError(`${err.message}`);
      }
    };

    return (
        <>
        {showEventbox ? (
            <ModalBackground >
                <animated.div style={animation}>
                    <ModalWrapper showEventbox={showEventbox}>
                        <ModalContent>
                            <AddEventForm showEventbox={showEventbox} setShowEventbox={setShowEventbox} onSubmitData={submitHandler}/>
                        </ModalContent>
                        <CloseModalButton aria-label="Close Modal" onClick={() => setShowEventbox (prev => !prev)} />
                    </ModalWrapper>
                </animated.div>
            </ModalBackground>
        ) : null}
        </>
    )
};

export default Eventbox;