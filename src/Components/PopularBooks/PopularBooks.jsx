// import css
import "./PopularBooks.css";

// import TitletypeOne from UI
import TitletypeOne from "../../UI/TitleTypeOne/TitletypeOne";

// import usestate
import { useState } from "react";

// import data
import { galleryData } from "../../Data/Data";

export default function PopularBooks() {
 


  const [activeButton, setActiveButton] = useState("all");

  const handleFilterChange = (category) => {
    setActiveButton(category);
  };

  const filterItems =
  activeButton === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === activeButton);


  return (
    <section className="PopularBooks">
      <div className="container popularbooks-container">
        <TitletypeOne
          TitleTop={"Some quality items"}
          Title={"Poplar Books"}
          className="popularbooks-title"
        />
        <div className="filter-button">
          <button
            onClick={() => handleFilterChange("all")}
            className={activeButton === "all" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("Business")}
            className={activeButton === "Business" ? "active" : ""}
          >
            Business
          </button>
          <button
            onClick={() => handleFilterChange("Technology")}
            className={activeButton === "Technology" ? "active" : ""}
          >
            Technology
          </button>
          <button
            onClick={() => handleFilterChange("Adventure")}
            className={activeButton === "Adventure" ? "active" : ""}
          >
            Adventure
          </button>
          <button
            onClick={() => handleFilterChange("Romantic")}
            className={activeButton === "Romantic" ? "active" : ""}
          >
            Romantic
          </button>
          <button
            onClick={() => handleFilterChange("Fictional")}
            className={activeButton === "Fictional" ? "active" : ""}
          >
            Fictional
          </button>
        </div>

        <div className="gallery">
          {filterItems.map(({id, name, writer, price, image }) => {
            return (
              <div className="gallery-item" key={id}>
                <div className="popularbook-image">
                  <img src={image} alt="" />
                </div>
                <div className="popularbook-info">
                  <h4>{name}</h4>
                  <div>
                    <small>{writer}</small>
                  </div>
                  <h5>
                    <span>{price}</span>
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
