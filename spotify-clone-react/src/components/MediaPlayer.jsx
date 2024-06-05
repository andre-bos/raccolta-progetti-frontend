import React from 'react';
import {Col, Container, ProgressBar, Row} from "react-bootstrap";
import NextBtn from '../assets/playerbuttons/Next.png';
import PlayBtn from '../assets/playerbuttons/Play.png';
import PreviousBtn from '../assets/playerbuttons/Previous.png';
import RepeatBtn from '../assets/playerbuttons/Repeat.png';
import ShuffleBtn from '../assets/playerbuttons/Shuffle.png';


function MediaPlayer() {
    return (
        <>
            <div className="container-fluid fixed-bottom bg-container pt-1">
                <div className="row">
                    <div className="col-lg-10 offset-lg-2">
                        <div className="row">
                            <div
                                className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                                <div className="row text-center">
                                    <a href="#a" className="col-2">
                                        <img src={ShuffleBtn} alt="shuffle"/>
                                    </a>
                                    <a href="#b" className="col-2">
                                        <img src={PreviousBtn} alt="previous"/>
                                    </a>
                                    <a href="#c" className="col-4">
                                        <img src={PlayBtn} alt="play"/>
                                    </a>
                                    <a href="#d" className="col-2">
                                        <img src={NextBtn} alt="next"/>
                                    </a>
                                    <a href="#e" className="col-2">
                                        <img src={RepeatBtn} alt="repeat"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center playBar py-3">
                            <div className="col-8 col-md-6">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                                         aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MediaPlayer;