// import styling
import "./LatestArticle.css";

// import titletypeone fom UI
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

// import lettestArticleData from Data
import { latestArticleData } from "../../Data/Data";

// import Link
import { Link } from "react-router-dom";

// import react icons
import { ImFacebook, ImBehance } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { GrLinkedinOption } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";

export default function LatestArticle() {
  return (
    <section className="latestArticle">
      <div className="container latest-article-container">
        <TitleTypeOne Title={"Latest Article"} TitleTop={"Read our articles"} />
        <div className="latest-article-content">
          {latestArticleData.map(
            (
              {
                title,
                titLink,
                fbLink,
                instLink,
                twitaLink,
                date,
                image,
                linkLink,
                inspiration
              },
              index
            ) => {
              return (
                <article className="latest-article" key={index}>
                  <div className="article-image">
                    <img src={image} alt="" />
                  </div>
                  <div className="article-info">
                    <h5>{date}</h5>
                    <Link to={titLink}>
                      <h3>{title}</h3>
                    </Link>
                  </div>
                  <div className="latest-article-social">
                    <p>{inspiration}</p>
                    <div className="article-social">
                    <a href={fbLink}>
                      <ImFacebook />
                    </a>
                    <a href={instLink}>
                      <FiInstagram />
                    </a>
                    <a href={twitaLink}>
                      <RiTwitterXLine />
                    </a>
                    <a href={linkLink}>
                      <GrLinkedinOption />
                    </a>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
        <Link to={'*'} className="btn btn-border">
            Read all articles <sapn> <BsArrowRight /></sapn>
        </Link>
      </div>
    </section>
  );
}
