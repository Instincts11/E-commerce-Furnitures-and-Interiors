import React from 'react'
import img106 from '../public/image 106.png'
import img100 from '../public/image 100.png'
import img101 from '../public/image 101.png'

import '../styles/Browse.css'

const Browse: React.FC = () => {
  return (
    <section className="browse-section">
      <h2 className="browse-title">Browse The Range</h2>
      <p className="browse-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, non.</p>

      <div className="browse-grid">
        <div className="browse-card">
          <img src={img106} alt="Dining" className="browse-image" />
          <h3 className="browse-label">Dining</h3>
        </div>
        <div className="browse-card">
          <img src={img100} alt="Living" className="browse-image" />
          <h3 className="browse-label">Living</h3>
        </div>
        <div className="browse-card">
          <img src={img101} alt="Bedroom" className="browse-image" />
          <h3 className="browse-label">Bedroom</h3>
        </div>
      </div>
    </section>
  )
}

export default Browse
