import { useState } from 'react';
import './directions.scss'
import Card from './Card/Card';
import catalogs from './dataCatalog.json'; 

export default function Directions() {
    const categories = Object.keys(catalogs);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const cards = catalogs[selectedCategory];

    return (
        <div className="directions">
          <h2 className="title__directions">Ключевые направления</h2>

          <div className="for-line">
            <div className="catalog">
              {categories.map((category, index) => (
                <p key={index} className={`catalog__opt ${selectedCategory === category ? 'active' : ''}`} onClick={() => setSelectedCategory(category)}>
                  {category}
                </p>
              ))}
            </div>
          </div>

          <div className="cards-wrapper">
            <div className="cards">
                {cards.map(card => (
                    <Card key={card.id} data={card} />
                ))}
            </div>
          </div>
        </div>
    );
}
