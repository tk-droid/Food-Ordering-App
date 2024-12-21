import UserContext from "../utils/UserContext"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component {
    constructor(props) {
        super(props)
        // console.log("Parent constructor")
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="min-h-screen bg-gradient-to-r from-green-500 p-8">
                {/* Main header */}
                <h1 className="text-4xl font-bold text-center mb-6">Welcome to the About Page</h1>

                {/* User context display */}
                <div className="font-semibold text-xl mb-4">
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <h2 className="text-2xl">
                                Hello, <span className="text-yellow-300"></span> 👋
                            </h2>
                        )}
                    </UserContext.Consumer>
                </div>

                {/* Self-introduction */}
                <div className="mt-8 p-6 bg-white rounded-lg shadow-lg text-gray-800">
                    <h3 className="text-3xl font-semibold mb-3">About Me</h3>
                    <p className="text-lg mb-4">
                        Hi, I'm <strong>Taif</strong>, a passionate <span className="text-blue-500">Frontend Developer</span> 👨‍💻
                        with a love for building visually appealing and highly functional web applications. I specialize in React,
                        JavaScript, and CSS, but I always enjoy exploring new technologies and tools that can improve user experience.
                    </p>
                    <p className="text-lg">
                        When I'm not coding, you can find me exploring design trends, tinkering with UI/UX, or enjoying a cup of Tea. ☕
                    </p>
                </div>

                {/* GIF Section */}
                <div className="mt-8 text-center">
                    <iframe
                        src="https://giphy.com/embed/QNFhOolVeCzPQ2Mx85"
                        width="480"
                        height="269"
                        frameBorder="0"
                        className="giphy-embed mx-auto"
                        allowFullScreen
                    ></iframe>
                    
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-lg">
                <p>Feel free to connect on :
                <span className="mx-2"></span>
    <a href="https://github.com/tk-droid" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        GitHub
    </a>
    <span className="mx-2">|</span>
    <a href="mailto:mohd.taif.khan1@gmail.com" className="text-red-500 hover:underline">
        Gmail
    </a>
    <span className="mx-2">|</span>
    <a href="https://www.linkedin.com/in/taif-khan-14b404295" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
        LinkedIn
    </a>! 📱
</p>



</div>

            </div>
        )
    }
}

export default About
