import { useState } from 'react'
import Alert from './alert'

let timeout;
export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [sucess, setSucess] = useState(false);
    const [showAlert, setAlert] = useState(false);
    const [warningMessage, setWarning] = useState("");

    const [loader, setLoader] = useState(false);

    async function sendMessage(e) {
        clearTimeout(timeout);
        e.preventDefault();
        setLoader(true)
        if (name.length < 3) {
            displayAlert("Name Cannot be less than 3");
            setLoader(false)
            return 0;
        }
        else if (email.length < 3 || !email.includes("@") || !email.includes(".")) {
            displayAlert("Please enter a valid email");
            setLoader(false)
            return 0;
        }
        else if (message.length < 1) {
            displayAlert("Please enter a message");
            setLoader(false)
            return 0;
        }
        else if (phone.length < 10) {
            displayAlert("Please enter a correct phone number");
            setLoader(false)
            return 0;
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                message: message
            })
        }
        fetch('https://ek-laafad-marunga.herokuapp.com/contact', requestOptions)
            .then(response => {
                console.log(response);
                setLoader(false);
                setSucess(true)
                setTimeout(() => {
                    setSucess(false)
                }, 5000);
            })
            .catch(error => {
                console.log('There was an error!', error);
                setLoader(false);
                displayAlert("Message not sent, Some error occured!");

            });
    }

    function displayAlert(msg) {
        setWarning(msg)
        setAlert(true)
        timeout = setTimeout(() => {
            setAlert(false)
        }, 5000);
    }
    function setAlertFalse() {
        setAlert(false)
    }
    function setSucessFalse() {
        setSucess(false)
    }
    return (
        <section id="contact">
            {showAlert && <Alert message={warningMessage} Style="warning-alert" function={setAlertFalse} />}
            {sucess && <Alert message="Recieved, Thank-you!" Style="success-alert" function={setSucessFalse} />}
            <h1 className="primary-h center">Contact Form</h1>
            <div id="contact-box">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone no">Phone no:</label>
                    <input type="number" id="phone no" name="phone no" placeholder="Enter your phone no." onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" cols="30" rows="6"
                        placeholder="Enter Your Complaints Here" onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                {/* <button id="imp-btn" className="btn-1" type="submit" value="Submit Now" onClick={sendMessage} >Submit</button> */}
                <div className={`progress-btn ${loader && 'active'}`} onClick={sendMessage} data-progress-style="indefinite">
                    <div className="contact_btn">Send</div>
                    <div className="progress"></div>
                </div>
            </div>
        </section>
    )
}