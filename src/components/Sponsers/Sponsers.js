import React from 'react';
import "./sponsers.css";
import sponser1 from "./assets/sponser1.jpeg";
import sponser2 from "./assets/sponser2.png";

const Sponsers = () => {
    return (
        <div className="sponsers-page">
            <h1 className="underline-heading">Our Collaborations</h1>
            <p><span className="highlight">Kubesimplify</span> has served as a community and media partner for <span className="highlight">Rejekts</span>, a conference preceding <span className="highlight">KubeCon + CloudNativeCon North America 2024</span>. Additionally, <span className="highlight">Kubesimplify</span> was a community sponsor for <span className="highlight">Cloud Native Rejekts EU 2024</span> held in Paris. These partnerships highlight <span className="highlight">Kubesimplify's</span> active involvement in supporting and promoting cloud-native technologies.</p>
            <div className="sponser-images">
                <img src={sponser1} alt="Sponser 1" />
                <img src={sponser2} alt="Sponser 2" />
            </div>
        </div>
    );
};

export default Sponsers;
