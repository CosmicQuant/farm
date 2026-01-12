import { useState } from 'react';

const Livestock = () => {
  const [activeTab, setActiveTab] = useState('all');

  const animals = [
    { id: 1, type: 'goat', src: '/media/Goat2.jpeg', title: 'Boer Perfection' },
    { id: 2, type: 'sheep', src: '/media/Sheep.jpeg', title: 'Dorper Grade A' },
    { id: 3, type: 'goat', src: '/media/Goat5.jpeg', title: 'Savanna Buck' },
    { id: 4, type: 'sheep', src: '/media/sheep5.jpeg', title: 'Merino Cross' },
    { id: 5, type: 'goat', src: '/media/Goat6.jpeg', title: 'Kalahari Red' },
    { id: 6, type: 'sheep', src: '/media/sheep11.jpeg', title: 'Blackhead Persian' },
  ];

  const filtered = activeTab === 'all' ? animals : animals.filter(a => a.type === activeTab);

  return (
    <section id="livestock" className="section bg-dark">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="uppercase text-gold">The Collection</span>
          <h2 className="text-white">World-Class <span className="italic text-gold">Genetics</span></h2>
          <p className="text-cream max-w-2xl">
            Our feedlot is home to the finest breeds, raised with scientific precision for superior meat quality.
            Arriving mid-year: Premium Beef Cattle.
          </p>

          <div className="filter-nav mt-8">
            {['all', 'sheep', 'goat'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
              >
                {tab === 'all' ? 'All' : `${tab}s`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-md">
          {filtered.map((animal) => (
            <div key={animal.id} className="livestock-item fade-in">
              <div className="item-image luxury-card">
                <img src={animal.src} alt={animal.title} className="grayscale-hover" />
                <div className="overlay">
                  <span className="overlay-text">View Details</span>
                </div>
              </div>
              <div className="item-info">
                <h4 className="text-white">{animal.title}</h4>
                <div className="h-line"></div>
                <span className="type-tag">{animal.type}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .bg-dark {
          background-color: var(--primary);
          color: var(--white);
        }
        
        .mb-16 { margin-bottom: 4rem; }
        .max-w-2xl { max-width: 40rem; }
        
        .filter-nav {
          display: flex;
          gap: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 1rem;
        }
        
        .filter-btn {
          background: none;
          border: none;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.8rem;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s;
        }
        
        .filter-btn.active, .filter-btn:hover {
          color: var(--gold);
        }
        
        .livestock-item {
          margin-bottom: 2rem;
        }
        
        .item-image {
          height: 400px;
          position: relative;
          margin-bottom: 1.5rem;
        }
        
        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
          transition: all 0.6s ease;
        }
        
        .item-image:hover img {
          filter: grayscale(0%);
          transform: scale(1.05);
        }
        
        .item-info {
           text-align: center;
        }
        
        .h-line {
          width: 30px;
          height: 1px;
          background: var(--gold);
          margin: 0.5rem auto;
        }
        
        .type-tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.6);
        }
      `}</style>
    </section>
  );
};

export default Livestock;
