const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-xl items-center">

                    <div className="about-image-wrapper luxury-card">
                        <img src="/media/napier.png" alt="Lush Napier Grass" />
                        <div className="image-decoration"></div>
                    </div>

                    <div className="about-content">
                        <span className="uppercase text-gold">The Philosophy</span>
                        <h2>Cultivating <br /><i>Perfection</i></h2>
                        <p className="lead">
                            We are not just a farm; we are custodians of the land and guardians of livestock heritage.
                            Located on the fertile banks of the Tana River, we have reimagined the traditional nomadic lifestyle into a
                            state-of-the-art stationary feedlot system.
                        </p>
                        <p>
                            By growing our own nutrient-dense Napier grass and eliminating the stress of migration,
                            we ensure our animals—sheep, goats, and soon, premium cattle—thrive in an environment of
                            abundance and calm. The result is produce of unmatched quality and texture.
                        </p>

                        <div className="stats-row flex gap-md mt-8">
                            <div className="stat">
                                <h3>50+</h3>
                                <span className="uppercase text-sm">Acres Prime Land</span>
                            </div>
                            <div className="stat">
                                <h3>0%</h3>
                                <span className="uppercase text-sm">Grazing Motion</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
        .gap-xl { gap: 6rem; }
        
        .about-image-wrapper {
          position: relative;
        }
        
        .image-decoration {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 100%;
          height: 100%;
          border: 1px solid var(--gold);
          z-index: -1;
        }
        
        .about-content {
          padding-left: 2rem;
        }
        
        p.lead {
          font-size: 1.25rem;
          color: var(--dark);
          font-weight: 400;
          margin-bottom: 2rem;
        }
        
        .stats-row {
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: 2rem;
        }
        
        .stat h3 {
          color: var(--gold);
          font-size: 2.5rem;
          margin-bottom: 0.25rem;
        }
        
        .uppercase.text-sm {
          font-size: 0.7rem;
          color: var(--stone);
          letter-spacing: 0.1em;
        }
        
        @media (max-width: 768px) {
          .gap-xl { gap: 3rem; }
          .about-content { padding-left: 0; }
        }
      `}</style>
        </section>
    );
};

export default About;
