import './home.css'
import { Link } from 'react-router-dom'
function Home(){
    return(
        <section id="home" className="home">
            <h1>WELCOME TO MY PAGE</h1>
            <div className='home-content'>
                <div id='one'>
                    <h1>Hii, I'm Bhajarang <br />
                    Aspiring Fullstock Developer</h1>
                    <p>
                    I'm an aspiring Full-Stack Developer with a strong interest in web development, backend technologies and database management. I enjoy learning new technologies and developing applications that solve real-world problems.</p> 
                    
                    <Link to='/projects' style={{textDecoration:'none',borderRadius:'10px',background:'inherit',padding:'10px',color:'inherit', margin:'15%',boxShadow:'0 4px 5px gray', fontFamily:'inherit'}}>View My Work</Link>
                    <Link to='/contacts' style={{textDecoration:'none',borderRadius:'10px',background:'inherit',padding:'10px',color:'inherit',boxShadow:'0 4px 5px gray',fontFamily:'inherit'}}>Contact Me</Link>
               <p style={{textAlign:'start', wordSpacing:'15px', marginTop:'10px', paddingTop:'5px'}}>
                 HTML CSS JavaScript ReactJs MySql Python
                </p>
                </div>
                <div className="img">
                    <img src="/assets/images.jpg" alt="laptop" style={{borderRadius:'50%',padding:'5px',marginLeft:'10%', border:'inset black'}} width={250} height={250}/>
                </div>
            </div>
        </section>
    )
}
export default Home;