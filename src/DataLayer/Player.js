import React from 'react'
import "./Player.css";
import {Body} from "../components/Body/Body";
import { Sidebar } from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

const Player = ({spotify}) => {
  return (
    <div className="player">
        <div className="player_body">
            <Sidebar/>
            <Body spotify={spotify}/>
        </div>

        <Footer/>
    </div>
  )
}

export default Player