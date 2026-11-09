import './home.css'
function Skills(){
    return(
        <section id="skills" className='sec'>
            <h1>Skills page</h1>
            <div className="skill-content">
                <div>
                    <h2>Frontend</h2>
                    <p className='fontend-img'>
                        <span id='span'>
                            <img src="/assets/icons/html.png" alt="html-img" height={60} />
                            <span style={{marginTop:'8px'}}>HTML</span>
                        </span>
                        <span id='span'>
                            <img src="/assets/icons/css.png" alt="css-img" height={60} style={{objectFit:'cover'}} />
                            <span style={{marginTop:'8px'}}>CSS</span>
                        </span> 
                        <span id='span'>
                            <img src="/assets/icons/js.png" alt="js-img" height={60} style={{objectFit:'cover'}} />
                            <span style={{marginTop:'8px'}}>JavaScript</span>
                        </span>   
                        <span id='span'>
                            <img src="/assets/icons/react.png" alt="react-img" height={60} style={{objectFit:'cover'}} />
                            <span style={{marginTop:'8px'}}>React</span>
                        </span>                                                                          
                    </p>
                </div>
                <div>
                    <h2>Language</h2>
                    <p className='fontend-img'>
                        <span id='span'>
                            <img src="/assets/icons/python.png" alt="python-img" height={60} />
                            <span style={{marginTop:'8px'}}>Python</span>
                        </span>                                                                        
                    </p>
                </div>
                <div>
                    <h2>Database</h2>
                    <p className='fontend-img'>
                        <span id='span'>
                            <img src="/assets/icons/mysql.png" alt="mysql-img" height={60} />
                            <span style={{marginTop:'8px'}}>My SQL</span>
                        </span>                                                                         
                    </p>
                </div>
                <div>
                    <h2>Tools</h2>
                    <p className='fontend-img'>
                        <span id='span'>
                            <img src="/assets/icons/vscode.png" alt="vscode-img" height={60} />
                            <span style={{marginTop:'8px'}}>VS Code</span>
                        </span>
                        <span id='span'>
                            <img src="/assets/icons/git.png" alt="git-img" height={60} style={{objectFit:'cover'}} />
                            <span style={{marginTop:'8px'}}>Git</span>
                        </span> 
                        <span id='span'>
                            <img src="/assets/icons/github.png" alt="github-img" height={60} style={{objectFit:'cover'}} />
                            <span style={{marginTop:'8px'}}>Github</span>
                        </span>                                                                            
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Skills;