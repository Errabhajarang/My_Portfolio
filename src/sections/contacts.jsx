import './home.css'
function Contacts(){
    return(
        <section id='contacts'>
          <h3 style={{textAlign:'center'}}>Contact</h3>
            <div className="div-content">
                <div className="contacts">
                    <h3>Let's Connect</h3>
                    <p>Feel free to contact</p>
                    <form action="#" className='form' >
                        <div>
                            <label htmlFor="name">Name
                                <input type="text" name='name' id='name' placeholder='Enter your Name' />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="email">Email
                                <input type="email" id='email' name='email' placeholder='Enter email' />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="subject">Subject
                                <input type="text" name="subject" id="subject" placeholder='Enter subject' />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="message">Message
                                <textarea name="message" id="message" placeholder='Enter Message'></textarea>
                            </label>
                        </div>
                        <div>
                            <input type="submit" value='Send Message' id="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contacts;