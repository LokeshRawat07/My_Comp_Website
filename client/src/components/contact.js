export default function Contact() {
    return (
        <section id="contact">
            <h1 className="primary-h center">Contact Form</h1>
            <div id="contact-box">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone no">Phone no:</label>
                        <input type="number" id="phone no" name="phone no" placeholder="Enter your phone no." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" cols="30" rows="6"
                            placeholder="Enter Your Complaints Here"></textarea>
                    </div>
                    <div className="form-group" id="imp-btn">
                        <input id="submit" className="btn-1" type="submit" value="Submit Now" />
                        <input id="reset" className="btn-2" type="Reset" value="Reset Now" />
                    </div>
                </form>
            </div>
        </section>
    )
}