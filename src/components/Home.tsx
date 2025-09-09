import React from 'react'
import heroImage from '../public/heroImage.png'
import img107 from '../public/image 107.svg'
import img108 from '../public/image 108.png'
import img109 from '../public/image 109.svg'
import img110 from '../public/image 110.png'
import wwdImgA from '../public/img_01-3.jpg.svg'
import wwdImgB from '../public/img_02-2.jpg.svg'
import wwdImgC from '../public/img_03-2.jpg.svg'
// Products images
import prod1 from '../public/image 1.png'
import prod2 from '../public/Images.png'
import prod3 from '../public/Images (1).png'
import prod4 from '../public/Images (2).png'
import prod5 from '../public/Images (3).png'
import prod6 from '../public/Images (4).png'
import prod7 from '../public/Images (5).png'
import prod8 from '../public/Images (6).png'

// Gallery images
import rect36 from '../public/Rectangle 36 (1).png'
import rect37 from '../public/Rectangle 37 (1).png'
import rect38 from '../public/Rectangle 38 (1).png'
import rect40 from '../public/Rectangle 40.png'
import rect39 from '../public/Rectangle 39.png'
import rect41 from '../public/Rectangle 41.png'
import rect43 from '../public/Rectangle 43.png'
import rect44 from '../public/Rectangle 44.png'
import rect45 from '../public/Rectangle 45.png'
import logo from '../public/logo.svg'

import '../styles/Home.css'
import Browse from './Browse'

const Home: React.FC = () => {
  return (
    <>
      {/* Top anchor for smooth scroll back to top */}
      <div id="top" />
      <div className="hero">
        <div className="hero-media">
          <img 
            src={heroImage}
            alt="Sample"
            className="image-style"
          />
          <div className="rect-wrap">
            <div className="rect-inner">
              <h3 className="rect-title">New Arrival</h3>
              <h4 className="rect-subtitle">Discover Our New Collection</h4>
              <p className="rect-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis.
              </p>
              
              
              <button className="rect-cta" type="button" onClick={() => {
  const section = document.getElementById('reasons');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}}>
  Book Now
</button>
            </div>
          </div>
        </div>
      </div>
      {/* Reasons Section */}
      <section id="reasons" className="reasons-section">
        {/* Urbanist, sans-serif, 800 weight */}
        <h2 className="reasons-title">Here are a few <span className="reasons-underline">reasons</span> why our <br /> customers choose ios.</h2>
        <div className="reasons-grid">
          <div className="reason-card beds">
            <div className="reason-content beds-content" style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              {/* No text, image only */}
              <img className="reason-icon" src={img107} alt="Beds icon" style={{width: 44, height: 44, objectFit: 'contain', flexShrink: 0}} />
              <div className="reason-text">
                {/* Urbanist, sans-serif, 700 weight */}
                <strong>Beds</strong>
                {/* Urbanist, sans-serif, 400 weight */}
                <span className="reason-desc">Pellentesque habitant morbi <br />tristique senectus et netus.</span>
              </div>
            </div>
          </div>
          <div className="reason-card sofa">
            <div className="reason-content">
              <img className="reason-icon circle" src={img108} alt="Sofa icon" />
              <div className="reason-text">
                {/* Urbanist, sans-serif, 700 weight */}
                <strong>Sofa</strong>
                {/* Urbanist, sans-serif, 400 weight */}
                <span className="reason-desc">Vivamus sagittis lacus augue <br />feugiat dapibus nibh.</span>
              </div>
            </div>
          </div>
          <div className="reason-card lamp">
            <div className="reason-content">
              <img className="reason-icon" src={img109} alt="Lamp icon" />
              <div className="reason-text">
                {/* Urbanist, sans-serif, 700 weight */}
                <strong>Lamp</strong>
                {/* Urbanist, sans-serif, 400 weight */}
                <span className="reason-desc">Vestibulum ligula porta felis <br />euismod semper.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Browse The Range Section (moved onto Home page) */}
      <Browse />

      {/* End of Season Sale Section */}
      <section className="sale-section">
        <div className="sale-inner">
          <div className="sale-text">
            <span className="sale-eyebrow">END OF SEASON SALE</span>
            <h3 className="sale-headline">Upto 60% Off</h3>
            <p className="sale-desc">We bring solutions to make life easier for our customers.</p>
          </div>
          <img src={img110} alt="End of season sale" className="sale-image" />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="wwd-section">
        <div className="wwd-canvas">
          <img src={wwdImgA} alt="Collage main" className="wwd-img wwd-a" />
          <img src={wwdImgB} alt="Collage secondary" className="wwd-img wwd-b" />
          <img src={wwdImgC} alt="Collage overlay" className="wwd-img wwd-c" />
          <div className="wwd-text">
            <h3 className="wwd-title">What We Do!</h3>
            <p className="wwd-lead">
              <span className="wwd-line1">It is a long established fact that a reader will be distracted by the</span>
              <span className="wwd-line2">readable content of a page when looking at its layout</span>
            </p>
            <ul className="wwd-list">
              <li>World Wide Donation</li>
              <li>Various industrial Applications.</li>
              <li>Providing Solutions For Construction, Management</li>
              <li>Engineers design and build the structure</li>
            </ul>
            <div className="wwd-spacer" />
            <h4 className="wwd-subtitle">What You Can Do in!</h4>
            <ul className="wwd-list">
              <li>Certified & Awards winner</li>
              <li>Work with energetic team</li>
              <li>Just Because You Work Hard You'll Be Successful.</li>
              <li>For all your construction needs!</li>
            </ul>
            <div className="wwd-blank" />
            <button className="wwd-btn" type="button" onClick={() => {
  const section = document.querySelector('.products-section');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}}>
  MORE EXPLORE
</button>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="products-section">
        <h2 className="products-title">Our Products</h2>
        <div className="product-grid">
          {/* Card 1 - specific requirements */}
          <div className="product-card">
            <img src={prod1} alt="Syltherine" className="product-image" />
            <div className="product-info">
              <div className="product-name">Syltherine</div>
              <div className="product-subtitle">Stylish cafe chair</div>
            </div>
          </div>

          {/* Other cards to complete 4-per-row layout */}
          <div className="product-card">
            <img src={prod2} alt="Product" className="product-image" />
            <div className="product-info">
              <div className="product-name">Lolito</div>
              <div className="product-subtitle">Luxury big sofa</div>
            </div>
          </div>
          <div className="product-card">
            <img src={prod3} alt="Product" className="product-image" />
            <div className="product-info">
              <div className="product-name">Respira</div>
              <div className="product-subtitle subtitle-small">Outdoor bar table and stool</div>
            </div>
          </div>
          <div className="product-card">
            <img src={prod4} alt="Product" className="product-image" />
            <div className="product-info">
              <div className="product-name">Lolito</div>
              <div className="product-subtitle">Luxury big sofa</div>
            </div>
          </div>

          <div className="product-card">
            <img src={prod5} alt="Product" className="product-image" />
            <div className="product-info">
              <div className="product-name">Grifo</div>
              <div className="product-subtitle">Night lamp</div>
            </div>
          </div>
          <div className="product-card">
            <img src={prod6} alt="Product" className="product-image" />
            <div className="product-info">
              <div className="product-name">Muggo</div>
              <div className="product-subtitle">Small mug</div>
            </div>
          </div>
          <div className="product-card">
            <img src={prod7} alt="Product" className="product-image" />
            <div className="product-info">
              <div className="product-name">Pingky</div>
              <div className="product-subtitle">Cute bed set</div>
            </div>
          </div>
          <div className="product-card">
            <img src={prod8} alt="Product" className="product-image" />
            <div className="product-info">
              <div className="product-name">Potty</div>
              <div className="product-subtitle">Minimalist flower pot</div>
            </div>
          </div>
        </div>
        <div className="show-more-wrap">
          <button className="show-more" type="button" onClick={() => {
  const section = document.querySelector('.gallery-section');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}}>
  Show more
</button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h3 className="gallery-title">Gallery</h3>
        <p className="gallery-hashtag">#FuniroFurniture</p>
        
        <div className="gallery-grid">
          {/* Top row */}
          <img src={rect36} alt="Shelving unit" className="g-img gallery-img-1" />
          <img src={rect38} alt="Desk setup" className="g-img gallery-img-2" />
          <img src={rect40} alt="Dining room" className="g-img gallery-img-3" />
          <img src={rect43} alt="Bedroom" className="g-img gallery-img-4" />
          <img src={rect45} alt="Dining area" className="g-img gallery-img-5" />
          
          {/* Bottom row */}
          <img src={rect37} alt="Chair" className="g-img gallery-img-6" />
          <img src={rect39} alt="Stools" className="g-img gallery-img-7" />
          <img src={rect41} alt="Frame" className="g-img gallery-img-8" />
          <img src={rect44} alt="Kitchen" className="g-img gallery-img-9" />
        </div>
      </section>

      {/* Join Our Community Section (moved to last) */}
      <section className="community-section">
        <div className="community-card">
          <h3 className="community-title">JOIN OUR COMMUNITY</h3>
          <p className="community-text">We are trusted by over 5000+ clients.</p>
          <p className="community-text">Join them now and grow your business</p>
          <button type="button" className="community-btn" onClick={() => {
  const section = document.querySelector('.browse-section');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}}>
  Get Started
</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img className="logoImg" src={logo} alt="IOS INTERIORS logo" />
              <span className="footer-brand-text">IOS INTERIORS</span>
            </div>
            <p className="footer-copyright">© 2023 Sandbox</p>
            <p className="footer-rights">All rights reserved.</p>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Get in Touch</h4>
            <p className="footer-text">Moonshine St. 14/05</p>
            <p className="footer-text">Light City, London.</p>
            <p className="footer-text">United Kingdom</p>
            <p className="footer-text">info@email.com</p>
            <p className="footer-text">00 (123) 456 78 90</p>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Learn More</h4>
            <p className="footer-text">About Us</p>
            <p className="footer-text">Our Story</p>
            <p className="footer-text">Projects</p>
            <p className="footer-text">Terms of Use</p>
            <p className="footer-text">Privacy Policy</p>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Our Newsletter</h4>
            <p className="footer-text">Subscribe to our newsletter to get our</p>
            <p className="footer-text">news & deals delivered to you</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Email Address" className="newsletter-input" />
              <button type="button" className="newsletter-btn">Join</button>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Home