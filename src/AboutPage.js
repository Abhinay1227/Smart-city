import React from 'react';
import './AboutPage.css';
import person1 from './images/cat.jpg'; // Replace with actual image paths
import person2 from './images/cat.jpg';
import person3 from './images/cat.jpg';

function AboutPage() {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>About Us</h1>
                <p>Discover our team's vision and mission for a smart city.</p>
            </header>

            <section className="team-section">
                <h2>Meet Our Team</h2>
                <div className="team-members">
                    {[{name: "John Doe", role: "Project Manager", image: person1, info: "John is passionate about urban development and sustainability."},
                      {name: "Jane Smith", role: "Lead Developer", image: person2, info: "Jane specializes in front-end technologies and user experience."},
                      {name: "Emily Johnson", role: "UI/UX Designer", image: person3, info: "Emily loves creating intuitive designs that enhance user interaction."}].map((member, index) => (
                        <div className="team-member" key={index}>
                            <div className="card">
                                <div className="card-front">
                                    <img src={member.image} alt={member.name} className="team-image" />
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                                <div className="card-back">
                                    <p>{member.info}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
