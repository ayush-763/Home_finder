import React from 'react'
import "./Contact.css"
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className='padding innerWidth flexCenter c-container'>
            <div className='flexColStart c-left'>
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText'>We are always ready to help by providing the best service and we
                     belive a good place to live can make your life better</span>

                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}></MdCall>
                                </div>
                                <div className="flexColStart details">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>012 123 234 345</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart details">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>012 123 234 345</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart details">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>012 123 234 345</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart details">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>012 123 234 345</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flexColStart c-right'>
                <div className="imageContainer">
                    <img src="./contact.jpg" alt="contact" srcset="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact