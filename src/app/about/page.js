'use client'
import Head from 'next/head';
import Link from 'next/link';

const About = () => {
    return (
        <div className="about-container">
            <Head>
                <title>About Us - NWG- Next Web Guru PVT.LTD</title>
                <meta name="description" content="Learn more about our company and mission." />
            </Head>


            <main>
                <section className="hero">
                    <h1>About Us</h1>
                    <p>Welcome to Your Company Name - Where Innovation Meets Quality.</p>
                </section>

                <section className="mission">
                    <h2>Our Mission</h2>
                    <p>
                        At Your Company Name, our mission is to provide innovative solutions that
                        exceed our customers' expectations. We are dedicated to delivering
                        top-notch products and services while maintaining a commitment to
                        sustainability and social responsibility.
                    </p>
                </section>

                <section className="team">
                    <h2>Our Team</h2>
                    <p>
                        Our team is composed of talented individuals who are passionate about what
                        they do. With diverse backgrounds and expertise, we collaborate to tackle
                        complex challenges and turn ideas into reality.
                    </p>
                </section>
            </main>

            
           
        </div>
    );
};

export default About;
