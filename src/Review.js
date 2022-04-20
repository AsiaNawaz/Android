import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'

export default function Review() {
    return (
        <>
            <div>
                <Navigation />
            </div>
            <div>
                <br />
                <h1 className='Heading'>Our promise</h1>
                <br />
                <p className='data'>
                    We are committed to protect the thoughts, intellectual property and integrity of the contributors to our platform. If you believe there is an incident where information is attributed incorrectly in an article, please contact us directly at <a href='#' className='link1'>cyberwork@andriodforensic.com</a>. We take these inquiries very seriously and will mitigate the concern with the respective contributor as soon as possible.
                </p>
            </div>
            <div>
                <h1 className='Heading'>Review/Comment</h1>
                <br />
                <form id='usrform' className='Cform'>
                    <div className='outer'>
                        <div className='ldiv'>
                            <br />
                            <label for='fname' className='fname'>First Name:</label>
                            <input type='text' className='ibox' name='fname' size="30"></input><br /><br />
                            <label for='email' className='fname'>Email:</label>
                            <input type='email' className='ebox' name='email' size="30"></input>
                            <br /><br />
                            <b><p className='Qs'>How was your experience?</p></b>
                            <input type='radio' id='outstanding' name='rating' className='Qs' />
                            <label for='outstanding'>Outstanding</label>
                            <input type='radio' id='good' name='rating' className='Qs' />
                            <label for='good'>Good</label>
                            <input type='radio' id='bad' name='rating' className='Qs' />
                            <label for='bad' >Bad</label>
                            <br /><br />
                            <label for='msg' className='Qs'>Comment:</label>
                            <textarea rows="8" cols="70" name="comment" form="usrform" className='Qs' placeholder='Enter text here...'></textarea><br /><br />
                            <button type="submit" className='Qs'><a href='/'>Submit</a></button><br /><br />
                        </div>
                        <div className='rdiv'>
                            <br />
                            <label for='lname' className='fname'>Last Name:</label>
                            <input type='text' className='ibox' name='lname' size="30"></input><br /><br />
                            <label for='prof' className='fname' >Profession:</label>
                            <input type='text' name='prof' size="30" className='ibox'></input><br /><br /><br /><br />
                            <input type='radio' id='execellent' name='rating' className='Qs' />
                            <label for='excellent' >Excellent</label>
                            <input type='radio' id='neutral' name='rating' className='Qs' />
                            <label for='neutral' >Neutral</label>
                            <input type='radio' id='worst' name='rating' className='Qs' />
                            <label for='worst' >Worst</label>

                        </div>
                    </div>
                </form>
            </div>
            <br /><br /><br />
            <div>
                <Footer />
            </div>
        </>
    )
}
