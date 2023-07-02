import React from 'react'

const About = () => {
    return (
        <div className='about' style={{ minHeight: "100vh" }}>
            <h2>About the website :</h2>
            <p>The website is build to practice react.js .</p>
            <ul>
                What I used in the website :
                <li>Routing in React</li>
                <li>Fetch data from pexels api</li>
                <li>Search picture</li>
                <li>more picture button</li>
                {/* <li></li> */}
            </ul>
        </div>
    )
}

export default About