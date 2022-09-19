import React from 'react';
import Projects from './projects';

const Home = () => {
    return (
        <section>
            <div className="title">
                <h1>CJs Custom Builds</h1>
                <h2>Live Edge Furniture | Flooring & Trim | Custom Carpentry | Restoration</h2>
                {/* <p>
                    Welcome to CJs Custom Builds. We build to suit - we offer solutions that you are thrilled about.
                </p> */}
            </div>
            <div className="projects">
                <Projects/>
            </div>
        </section>
    );
}

export default Home;