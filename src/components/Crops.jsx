const Crops = () => {
  const crops = [
    { name: 'Red Onions', img: '/media/onions.png', desc: 'Hand-selected bulbs.' },
    { name: 'Watermelons', img: '/media/watermelons.png', desc: 'Sun-ripened sweetness.' },
    { name: 'Lemons', img: '/media/lemons.png', desc: 'Citrus perfection.' },
    { name: 'Napier Grass', img: '/media/napier.png', desc: 'Premium organic fodder.' },
  ];

  return (
    <section id="crops" className="section bg-cream">
      <div className="container">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="uppercase text-gold">The Harvest</span>
            <h2>Seasonal <br /><i>Produce</i></h2>
          </div>
          <div className="hidden-mobile">
            <p className="max-w-xs text-right text-stone">
              Fresh from our fields to your table.
              Cultivated with care along the Tana River.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-md">
          {crops.map((crop, index) => (
            <div key={index} className="crop-card luxury-card">
              <div className="crop-img-container">
                <img src={crop.img} alt={crop.name} />
                <div className="crop-overlay">
                  <h3>{crop.name}</h3>
                  <p className="text-white text-sm">{crop.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
            .bg-cream { background-color: var(--cream); }
            
            .text-stone { color: var(--stone); }
            .mb-16 { margin-bottom: 4rem; }
            
            .crop-img-container {
                height: 500px;
                position: relative;
            }
            
            .crop-img-container img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                transition: transform 0.8s ease;
            }
            
            .crop-card:hover .crop-img-container img {
                transform: scale(1.1);
            }
            
            .crop-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                padding: 2rem;
                background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                color: var(--white);
                transform: translateY(10px);
                opacity: 0;
                transition: all 0.4s ease;
            }
            
            .crop-card:hover .crop-overlay {
                opacity: 1;
                transform: translateY(0);
            }
            
            .crop-overlay h3 {
                color: var(--white);
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
            }
            
            @media (max-width: 768px) {
                .hidden-mobile { display: none; }
                .crop-img-container { height: 350px; }
            }
        `}</style>
    </section>
  );
};

export default Crops;

