import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'>
                            <div className='row'>
                                <div className='col-6 col-lg-3'>
                                    <h2>
                                        Topics
                                    </h2>
                                    <ul>
                                        <li>
                                            <a href='/challenge'>Challenge</a>
                                        </li>
                                        <li>
                                            <a href='/tools'>Tools</a>
                                        </li>
                                        <li>
                                            <a href='/review'>Review</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-6 col-lg-3'>
                                    <h2>
                                        NewsLetter
                                    </h2>
                                    <p className='Subscription'>Get the latest news, updates and offers straight to your inbox.</p>
                                    <input type='text' placeholder='Enter email address' /><br />
                                    <button type='button' className='Subscribebtn'>Subscribe</button>
                                </div>
                                <div className='col-6 col-lg-3'>
                                    <h2>
                                        Follow Us
                                    </h2>
                                    <div className='row'>
                                        <div className='col-3 mx-auto'>
                                            <a href="https://www.youtube.com/watch?v=SIoCXOxsvVE">
                                                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                                            </a>
                                        </div>
                                        <div className='col-3 mx-auto'>
                                            <a href="https://instagram.com/dfiforensics?igshid=YmMyMTA2M2Y=">
                                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                            </a>
                                        </div>

                                        <div className='col-3 mx-auto'>
                                            <a href="https://www.facebook.com/groups/715219206512838/?ref=share">
                                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='division' />
                            <div className='mt-5'>
                                <p className='main-hero-para text-center copyright'>
                                    Copyright @ 2022 Andriod Forensic. All rights reserved.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
