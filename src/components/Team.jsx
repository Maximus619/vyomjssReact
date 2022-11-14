/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import '../resource/css/team.css';
import Teams from '../team.json'
import Anant from '../resource/images/Anant1.png'
import Aman from '../resource/images/Aman.png'
import Vishnu from '../resource/images/Vishnu.png'

function Team() {


    return (
        <>
            <div className="container">
                <div className="cards">
                    {
                        Teams.map(team => {
                            return <div className="card" key={team.id}>
                                <span className="card-header"><img loading='lazy' src={team.icon} alt="" height={team.height}
                                    width={team.width} /></span>
                                <span className="card-title">
                                    <h3>{team.name} </h3>
                                </span>
                                <span className="card-summary">
                                    {team.designation}
                                </span>
                                <span className="card-meta">
                                    <ul className="list-unstyled">
                                        <li><a href={team.insta} target="_blank" className="bi bi-instagram" rel="noreferrer"></a>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        })
                    }

                </div>
            </div>
            <hr className="hr-text" data-content="Technical Team" />
            <div className="container">
                <div className="cards">
                    <div className="card">
                        <span className="card-header" >
                            <img src={Anant} alt="" height="300px" width="270px" />
                            <span className="card-titles" >
                                <h3> अनंत कुमार गुप्ता</h3>
                            </span>
                        </span>
                        <span className="card-summary">
                            Web Developer
                        </span>
                        <span className="card-meta">
                            <ul className="list-unstyled">
                                <li><a href="https://www.linkedin.com/in/anantkumargupta/" target="_blank" className="bi bi-linkedin pr-1" rel="noreferrer"></a> <a
                                    href="https://www.instagram.com/11_anant" target="_blank" className="bi bi-instagram " rel="noreferrer"></a></li>
                            </ul>
                        </span>
                    </div>

                    <div className="card" href="#">
                        <span className="card-header" >
                            <img src={Aman} alt="" height="300px" width="260px" />
                            <span className="card-titles">
                                <h3>अमन राय</h3>
                            </span>
                        </span>
                        <span className="card-summary">
                            Ex-Editorial Head
                        </span>
                        <span className="card-meta">
                            <ul className="list-unstyled">
                                <li> <a href="https://www.instagram.com/amanrai2015/" target="_blank" className="bi bi-instagram" rel="noreferrer"></a></li>
                            </ul>
                        </span>
                    </div>

                    <div className="card" href="#">
                        <span className="card-header" >
                            <img src={Vishnu} alt="" height="300px" width="260px" />
                            <span className="card-titles">
                                <h3>विष्णु सिंह</h3>
                            </span>
                        </span>
                        <span className="card-summary">
                            Ex-Technical Head
                        </span>
                        <span className="card-meta">
                            <ul className="list-unstyled">
                                <li> <a href="https://www.instagram.com/vishnu_sthakur/" target="_blank" className="bi bi-instagram" rel="noreferrer"></a></li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team