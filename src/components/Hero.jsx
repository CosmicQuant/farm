import { useState, useRef, useEffect } from 'react';

const Hero = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef([]);

  const videos = [
    '/media/sheepvid2.mp4',
    '/media/Grass1.mp4',
    '/media/sheepvid.mp4',
    '/media/sheepvid1.mp4',
    '/media/sheepvid3.mp4',
    '/media/Grass.mp4'
  ];

  useEffect(() => {
    // Play the active video
    if (videoRefs.current[activeVideo]) {
      const playPromise = videoRefs.current[activeVideo].play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Auto-play was prevented");
        });
      }
    }
  }, [activeVideo]);

  const handleVideoEnd = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="hero">
      {videos.map((src, index) => (
        <div key={index} className={`video-bg ${index === activeVideo ? 'active' : ''}`}>
          <video
            ref={el => videoRefs.current[index] = el}
            muted
            playsInline
            className="hero-video"
            onEnded={() => {
              if (index === activeVideo) handleVideoEnd();
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <div className="fade-in">
          <span className="uppercase text-gold">Est. 2024 • Garissa, Kenya</span>
          <span className="eid-badge">Now Taking Eid Orders</span>
        </div>

        <h1 className="hero-title fade-in delay-1">
          Prime Livestock <br />
          <span className="italic">& Fresh Harvests</span>
        </h1>
        <p className="hero-subtitle fade-in delay-2">
          A sustainable 50-acre sanctuary along the Tana River.
          Raising fattened sheep and goats for Eid, and cultivating organic onions, watermelons, and lemons.
        </p>
        <div className="hero-cta-group fade-in delay-3">
          <a href="#contact" className="btn btn-outline">Book for Eid</a>
          <a href="#crops" className="btn btn-text produce-link">View Produce →</a>
        </div>
      </div>

      <style>{`
        .hero {
          height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #000;
        }
        
        .video-bg {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 2s ease-in-out;
          z-index: 0;
        }
        
        .video-bg.active {
          opacity: 1;
        }
        
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 18, 16, 0.45);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          color: var(--white);
          max-width: 1400px;
          padding-top: 5vh;
        }

        .eid-badge {
          background-color: var(--gold);
          color: var(--primary);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-left: 1rem;
          letter-spacing: 0.05em;
          display: inline-block;
          vertical-align: middle;
        }
        
        .hero-title {
          font-size: 5.5rem;
          color: var(--white);
          line-height: 1;
          margin: 1.5rem 0;
        }
        
        .hero-title .italic {
          font-family: var(--font-heading);
          font-style: italic;
          color: var(--gold);
          font-weight: 300;
        }
        
        .hero-subtitle {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.9);
          max-width: 500px;
          border-left: 1px solid var(--gold);
          padding-left: 1.5rem;
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 3.5rem; }
          .hero-subtitle { border: none; padding: 0; }
          .eid-badge { margin-left: 0; margin-top: 0.5rem; display: block; width: fit-content; }
          
          .hero-cta-group {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
            margin-top: 2rem;
          }
          
          .produce-link {
             margin-left: 0 !important;
             text-align: center;
             display: block;
             padding: 1rem;
             background: rgba(255,255,255,0.1);
             border: 1px solid rgba(255,255,255,0.3);
          }
        }
        
        .hero-cta-group {
           margin-top: 2rem;
        }
        
        .produce-link {
           margin-left: 1.5rem;
           color: #fff;
           text-decoration: none;
           transition: color 0.3s;
        }
        
        .produce-link:hover {
           color: var(--gold);
        }
      `}</style>
    </section>
  );
};

export default Hero;
