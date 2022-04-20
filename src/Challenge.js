import React from 'react'
import Navigation from './Navigation'
import image from './df.png'
import Footer from './Footer'

export default function Challenge() {
    return (
        <>
            <div>
                <Navigation />
            </div>
            <div className='CDF'>
                <img src={image} className='classification' />
                <br /><br />
                <h1 className='Heading'>Introduction:</h1>
                <p className='data'>
                    Internet and Information Technology are no more new today as
                    they have become an integral part of everybody's life, but these
                    technologies have given birth to many more technologies which
                    make life further easy. The rapid growth in the Small Scale
                    Digital Devices (SSDD) research and manufacturing has acted
                    as a catalyst for the world of ubiquitous computing. Today
                    Mobile Phones which are part of SSDD have become so
                    pervasive that they rule us in many ways which includes; they
                    not only allow us to make and attend a call but also allow us to
                    do business, online commerce, make financial transactions,
                    social networking, SMS, MMS, video calls, photography,
                    electronic mail, Web browsing, multimedia capturing, basic
                    editing and playback, electronic document previewing, store and
                    manage Personal Information via Persona Information
                    Management (PIM) applications (e.g., contacts, calendar, etc.)
                    <br />
                    Digital Forensic (DF) came into existence because of the
                    cybercrimes carried out by use of IT infrastructure or technology
                    by cyber criminals. DF has developed several sub-disciplines,
                    including Computer Forensics, Memory Forensics, Multimedia
                    Forensics, Network Forensics, Small Scale Device Forensics or
                    Mobile Device Forensics (MDF) and Android Forensic (AF)
                    depending on attributes of computing and the type of device used.
                    <br />
                    In the past decade the mobile technology (both hard ware and
                    especially software) has obtained phenomenal growth. This
                    growth has not only attracted the common users but also the
                    malware developers and the tradition computer hackers leading
                    to an increased number of cyber-attacks and malware threats.
                    In the past few years the rate of stolen phones have also
                    increased. As these phones contained sensitive personal
                    information, it is risky if they are lost or stolen. Forensic
                    analysis of these phones and devices by app developers and the
                    user themselves can make them more aware on how and which
                    data to store or not to store on these devices. These stored
                    sensitive information can be used by the attacker as a stepping
                    stone to spoof the real identity of a person.
                </p>
            </div>
            <div>
                <h1 className='Heading'>Challenges:</h1>
                <p className='data'>
                    The wide spread use of Mobile Phones, makes it inevitable
                    source for forensic analysis both from criminal and noncriminal point of view. According to MF from legal
                    perspective is the science of recovering digital evidence from
                    an non-tampered mobile device under forensically sound
                    conditions using legally accepted methods. Because of the
                    cramming growth of the mobile device manufactures and
                    challenges have also increased because of varying CPU
                    architecture and operating systems. In modern world of
                    competition every day new mobile device manufacturers are
                    coming into the market with the same operating system but with
                    its own variations, in their implementation, resulting in a
                    myriad of file system and structural permutations. These
                    flexibilities offered by the vendors create significant challenges
                    for mobile forensic tool manufacturers and examiners in
                    hunting at the right location and with right technique inside the
                    phone. These variations and changes are so fast that there is always the risk that one forensic tool can be good for a specific
                    version with no guarantee that it will be the same for the
                    successor version. Sometimes the power consumption may lead
                    to vanishing of the information available on these devices as
                    these devices are power constrained. This can occur during one
                    the-fly data acquisition from the volatile memory. always the risk that one forensic tool can be good for a specific
                    version with no guarantee that it will be the same for the
                    successor version. Sometimes the power consumption may lead
                    to vanishing of the information available on these devices as
                    these devices are power constrained. This can occur during one
                    the-fly data acquisition from the volatile memory.
                    <br />
                    Lack of standard hardware and
                    software interface further poses challenge in MDF for the
                    practitioners. Sometimes the storage that is brought to the
                    analyst or recovered by the analyst is damaged or corrupt and
                    taking data out of it is very challenging. Variety of applications
                    for the same task on same mobile platform also puts challenge
                    for example these days web browser forensic in also in demand
                    and there are different types of browsers for android platforms,
                    which are different from each other in many respects.
                    <br />
                    Another challenge to digital forensic analysis with release of
                    every new phone is the growth in the volume of data seized and
                    presented for analysis because of the increased storage and
                    processing capacity on these devices. Because of the
                    presence of dual time stamps (naive and UTC timestamps),
                    timestamps normalization may be required and is a complicated
                    process with an additional possibility of presence of clock
                    skewness.
                </p>
            </div>
            <div>
                <h1 className='Heading'>Methods:</h1>
                <p className='data'>
                    Android forensics focuses on extracting data from android
                    based devices using sound forensic conditions and legally
                    accepted techniques. Primarily there are 3 different methods
                    for the same:
                    <ol type='A' className='DFM'>
                        <li><h2>Manual Acquisition:</h2>
                            <p className='data'>
                                In this technique forensic examiner or
                                analyst utilizes the user interface of the mobile device to
                                investigate the available content. While browsing the
                                device, the examiner takes pictures of each screen,
                                containing the required data. The advantage of this
                                technique is that it does not require any tool(s) to perform
                                data acquisition but at the same time disadvantage to this
                                technique is that only data visible to users on the device can
                                be recovered and is time consuming.
                            </p>
                        </li>
                        <li><h2>Physical Acquisition:</h2>
                            <p className='data'>
                                In this technique cloning of the data
                                available on the phone device is done. This process clones
                                deleted data as well as the unallocated spaces too. After
                                cloning the cloned data is analyzed using different tools.
                            </p>
                        </li>
                        <li><h2>Logical Acquisition:</h2>
                            <p className='data'>
                                In this technique neither much of
                                manual intervention nor cloning is required. Here data
                                /information available on the phone is acquired using
                                automated tools for synchronizing phone and PC
                                (generally) Most tools available for free perform logical
                                acquisition.
                            </p>
                        </li>
                    </ol>
                </p>
            </div>
            <br /><br />
            <div>
                <Footer />
            </div>
        </>
    )
}
