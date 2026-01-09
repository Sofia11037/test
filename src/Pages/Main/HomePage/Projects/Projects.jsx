import './projects.scss';
import CardsOfProject from './CardsOfProject/CardsOfProject';
import { useState, useEffect } from "react";
import catalogs from './dataCatalogAboutProjects.json'; 

export default function Projects() {
  const categories = Object.keys(catalogs);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    setVisibleCount(2);
  }, [selectedCategory]); 

  const cardsToShow = catalogs[selectedCategory].slice(0, visibleCount);
  const hasMore = visibleCount < catalogs[selectedCategory].length;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  return (
    <div className="projects">
      <h2 className="title__projects">Наши проекты</h2>
      <div className="for-line">
        <div className="catalog">
          {categories.map((category, index) => (
            <p key={index} className={`catalog__opt ${selectedCategory === category ? 'active' : ''}`} onClick={() => setSelectedCategory(category)}>
              {category}
            </p>
          ))}
        </div>
      </div>
      <div className="cards">
        {cardsToShow.map(card => (
          <CardsOfProject key={card.id} data={card} />
        ))}
      </div>

      {hasMore && (
        <button className="btn-more" onClick={handleShowMore}>
          <p>Посмотреть больше проектов</p>
          <img src="/src/assets/icons/arrow.svg" alt="" className="img" />
        </button>
      )}
    </div>
  );
}
