import React from "react";
import jobapp from "../images/work/jobapps.svg";
import meetings from "../images/work/meetings.svg";
import ledger from "../images/work/ledger.svg";
import presentations from "../images/work/presentations.svg";
import tasks from "../images/work/tasks.svg";
import add from "../images/add.svg";
import UserInfo from "../components/UserInfo";
import ProfileNav from "../components/ProfileNav";

const Workspace = () => {
  return (
    <div className="profile">
        <ProfileNav />
        <div className="main">
            <UserInfo />
            <div className="pages">
                <button><img src={jobapp} alt="Job Applications" /></button> 
                <button><img src={tasks} alt="Tasks" /></button>
                <button><img src={meetings} alt="Meetings" /></button>
                <button><img src={ledger} alt="Ledger" /></button> 
                <button><img src={presentations} alt="Presentations" /></button>
                <button><img src={add} alt="Add Page" /></button>
            </div>  
        </div>  
    </div>
  );
};

export default Workspace;