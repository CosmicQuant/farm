import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'Livestock',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        alert(`Thank you, ${formData.name}. We will contact you shortly.`);
        setFormData({ name: '', email: '', phone: '', interest: 'Livestock', message: '' });
    };

    return (
        <section id="contact" className="section bg-primary contact-section">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-xl">

                    <div className="contact-info">
                        <span className="uppercase text-gold">Get in Touch</span>
                        <h2 className="text-white">Begin Your <br /><i>Partnership</i></h2>
                        <p className="text-cream-light mb-8">
                            Whether you are interested in our premium livestock or our organic produce,
                            we invite you to start a potentially lucrative conversation.
                        </p>

                        <div className="info-list">
                            <div className="info-item">
                                <span className="label">Location</span>
                                <p>Garissa County, Along Tana River, Kenya</p>
                            </div>
                            <div className="info-item">
                                <span className="label">Email</span>
                                <p>info@garissaprime.com</p>
                            </div>
                            <div className="info-item">
                                <span className="label">Phone</span>
                                <p>+254 700 000 000</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Mohamed Ali"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="mohamed@example.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+254..."
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Area of Interest</label>
                                <select name="interest" value={formData.interest} onChange={handleChange}>
                                    <option value="Livestock">Livestock (Sheep/Goats/Cows)</option>
                                    <option value="Crops">Crops (Onions/Watermelons)</option>
                                    <option value="Fodder">Napier Grass / Fodder</option>
                                    <option value="Other">Other Inquiry</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-gold-filled w-full">Send Inquiry</button>
                        </form>
                    </div>

                </div>
            </div>

            <style>{`
        .bg-primary { background-color: var(--primary); }
        .text-cream-light { color: rgba(245, 242, 234, 0.7); }
        .gap-xl { gap: 4rem; }
        .mb-8 { margin-bottom: 2rem; }
        .gap-4 { gap: 1rem; }
        .w-full { width: 100%; }
        
        .info-item {
          margin-bottom: 2rem;
          border-left: 1px solid var(--gold);
          padding-left: 1.5rem;
        }
        
        .info-item .label {
          display: block;
          font-family: var(--font-body);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: var(--gold);
          margin-bottom: 0.25rem;
        }
        
        .info-item p {
          color: var(--white);
          font-family: var(--font-heading);
          font-size: 1.25rem;
          margin: 0;
        }
        
        .contact-form-wrapper {
          background: #152b1f; /* Slightly lighter/darker green */
          padding: 3rem;
          border: 1px solid rgba(197, 160, 89, 0.2); /* Gold border */
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          color: var(--gold);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }
        
        .form-group input, 
        .form-group select, 
        .form-group textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          color: var(--white);
          padding: 0.75rem 0;
          font-family: var(--font-body);
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        
        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          outline: none;
          border-bottom-color: var(--gold);
        }
        
        select option {
          background: var(--primary);
          color: var(--white);
        }
        
        .btn-gold-filled {
          background: var(--gold);
          color: var(--primary);
          border: none;
          margin-top: 1rem;
          font-weight: 600;
        }
        
        .btn-gold-filled:hover {
          background: var(--white);
          color: var(--primary);
        }
        
        @media (max-width: 768px) {
           .contact-form-wrapper { padding: 1.5rem; }
        }
      `}</style>
        </section>
    );
};

export default Contact;
