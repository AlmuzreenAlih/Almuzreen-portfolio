import { useState } from 'react'
import './Contact.scss'
import { TextField } from '@mui/material'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactsIcon from '@mui/icons-material/Contacts';
import 'boxicons'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
function Contact() {
    const [TFStyles, setTFStyles] = useState(
        { input: { color: 'white', alignItems: "start",
                   '&::placeholder': {opacity: 0, color:'white'}},
          label: {color:'gray'},
          fieldset: { borderColor: 'gray' } }
    )

    const [TFStyles2, setTFStyles2] = useState(
        { input: { color: 'white', height: '7rem',
                   '&::placeholder': {opacity: 0, color:'white'}},
          label: {color:'gray'},
          textarea: {color:'white'},
          fieldset: { borderColor: 'gray' } }
    )

    return (
        <div id="Contact" className="contact-parent">
            <form className="contact-form">
                <h2 className="contact-form-title">Let's work together</h2>
                <div className="contact-form-intro">
                    Do not hesistate to contact me. I am open to any work opportunities that align with my service experience and skills.
                </div>

                {/* <label htmlFor="variable_value">Your Name</label> */}

                <label className='label' htmlFor="">Your Name :</label>
                <TextField style={{width: "100%"}} name="user_name" label="Your Name..."
                    variant="outlined" size='small'
                    className='inputValue' sx={TFStyles}/>

                <label className='label' htmlFor="">Your Email :</label>
                <TextField style={{width: "100%"}} name="user_email" label="Your Email..."
                    variant="outlined" size='small'
                    className='inputValue' sx={TFStyles}/>

                <label className='label' htmlFor="">Your Message :</label>
                <TextField style={{width: "100%"}} name="user_message" label="Your Message..."
                    variant="outlined" size='small'
                    className='inputValue' sx={TFStyles2} multiline
                    rows={4} />
            </form>
            <div className="info">
                <div className="contact">
                    <div className="row">
                        <div className='title'>Contact :</div>
                    </div>
                    <div className="row">
                        <AlternateEmailIcon className='custom-icon' />
                        <a className='specific' href='mailto:almuzreen.11@gmail.com'>almuzreen.11@gmail.com</a>
                        {/* <OpenInNewIcon className='copy-icon'/> */}
                        {/* <ContentCopyIcon className='copy-icon'/> */}
                    </div>
                    
                    <div className="row">
                        <PhoneIcon className='custom-icon' />
                        <a className='specific' href="tel:+639914043637">+63 991 404 3637</a>
                        {/* <OpenInNewIcon className='copy-icon'/> */}
                        {/* <ContentCopyIcon className='copy-icon'/> */}
                    </div>

                    <div className="row">
                        <svg className="custom-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                            <path d="M15 10C15 8.89543 13.6569 8 12 8C10.3431 8 9 8.89543 9 10C9 11.1046 10.3431 12 12 12C13.6569 12 15 12.8954 15 14C15 15.1046 13.6569 16 12 16C10.3431 16 9 15.1046 9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M18 20C20.2091 20 22 18.2091 22 16C22 14.9608 21.6037 14.0142 20.954 13.303C20.2792 12.5642 20.0562 12.2608 19.9675 11.2774C19.8052 9.47708 19.035 7.72126 17.6569 6.34315C15.4775 4.16375 12.3535 3.50467 9.60274 4.36591C8.65975 4.66116 8.29221 4.5711 7.3493 4.23329C6.92776 4.08227 6.47349 4 6 4C3.79086 4 2 5.79086 2 8C2 9.03918 2.39628 9.98581 3.04596 10.697C3.72081 11.4358 3.94384 11.7392 4.0325 12.7226C4.19482 14.5229 4.96503 16.2787 6.34315 17.6569C8.52254 19.8363 11.6465 20.4953 14.3973 19.6341C15.3403 19.3388 15.7078 19.4289 16.6507 19.7667C17.0722 19.9177 17.5265 20 18 20Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <a className='specific' href="skype:live:.cid.8e47c2b6b93c7982?chat">live:.cid.8e47c2b6b93c7982</a>
                        {/* <ContentCopyIcon className='copy-icon'/> */}
                    </div>
                    
                    <div className="row">
                        <svg className="custom-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                            <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <a className='specific' href='https://github.com/AlmuzreenAlih'>Github Connect</a>
                        {/* <OpenInNewIcon className='copy-icon'/> */}
                        {/* <ContentCopyIcon className='copy-icon'/> */}
                    </div>

                    <div className="row">
                        <svg className="custom-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                            <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                        <a className='specific' href='https://www.linkedin.com/in/almuzreen-alih-8a730a305/'>LinkedIn Connect</a>
                        {/* <OpenInNewIcon className='copy-icon'/> */}
                        {/* <ContentCopyIcon className='copy-icon'/> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;