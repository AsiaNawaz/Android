import React from 'react'
import Navigation from './Navigation'
import andriller from './Andriller tool.gif'
import ufed from './ufed.gif'
import meft from './MEFT.gif'
import driod from './as.gif'
import Footer from './Footer'

export default function Tools() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <h1 className='HTool'>Tools</h1>
      <div className='outerdiv'>
        <div className='div1'>
          <img src={andriller} height='150px' className='andstyle' />
          <br />
          <a href='https://github.com/den4uk/andriller' className='link1'>Andriller</a>
        </div>
        <div className='div2'>
          <img src={ufed} height='150px' className='ufedstyle' />
          <br />
          <a href='https://ufed-phone-detective.soft112.com/' className='link1'>UFED</a>
        </div>
      </div>
      <div className='outerdiv'>
        <div className='div1'>
          <img src={meft} height='150px' className='meftstyle' />
          <br />
          <a href='https://www.mobiledit.com/download-list/forensic-express' className='link1'>MobilEDIT</a>
        </div>
        <div className='div2'>
          <img src={driod} height='150px' className='driodstyle' />
          <br />
          <a href='https://apkpure.com/droid-spotter/com.iteracja.droidspotter' className='link1'>DROIDSPOTTER</a>
        </div>
      </div>
      <br /><br />
      <div>
        <Footer />
      </div>
    </>
  )
}
