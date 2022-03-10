import { useState } from 'react';
import { send } from '@emailjs/browser';
import TextField from '@mui/material/TextField'; 
import { toast } from 'react-toastify';

export const Contact = () => {

    const [sendName, setSendName] = useState("");
    const [sendEmail, setSendEmail] = useState("");
    const [sendSubject, setSendSubject] = useState("");
    const [sendMessage, setSendMessage] = useState("");
    const [sendDisable, setSendDisable] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setSendDisable(false);


        toast.promise(send(
            'service_6hdjrgw',
            'template_g9wq3pu',
            {name:sendName, email:sendEmail, subject:sendSubject, message:sendMessage},
            'user_gtWgrIIYShDcN57WcFFcz'
        ),{
            pending:"Sending...",
            success:"Email Sent",
            error:"Something went wrong"
        })

        setSendName("");
        setSendEmail("");
        setSendSubject("");
        setSendMessage("");

    }

    return(
    <div className="content">
        <div className="contact container">
            <h1 className="head">Contact Me</h1>
            <p>I'd like to know what you think about me!</p>

            <div id="email">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <TextField className="input" size="small" label="Name" variant="outlined" type="text" name="name" value={sendName} onChange={e => setSendName(e.target.value)} required/>
                    <TextField className="input" size="small" label="Email" variant="outlined" type="email" name="email" value={sendEmail} onChange={e => setSendEmail(e.target.value)} required/>
                    <TextField className="input" size="small" label="Subject" variant="outlined" type="text" name="subject" value={sendSubject} onChange={e => setSendSubject(e.target.value)}/>
                    <TextField 
                        className="input" 
                        multiline={true}
                        minRows={5}
                        maxRows={10} 
                        label="Message" 
                        variant="outlined" 
                        name="message" 
                        onChange={e => setSendMessage(e.target.value)} 
                        value={sendMessage}
                        inputProps={{maxLength:800}}
                        required/>
                    <input disabled={sendDisable} type="submit" value="SEND"/>
                </form>
                <br/>
            </div>
        </div>
    </div>)
}