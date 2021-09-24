import React from "react";
import { Link } from "react-router-dom";
import "./SearchContainCard.css";
function SearchContainCard(props) {
  return (
    <div className="search__contain__card">
      <div className="card_img">
        <img src="../images/abdoul.jpeg" alt="" />
      </div>
      <div className="card_info">
        <h5>{`${props.profil?.prenom} ${props.profil?.nom}`}</h5>
        <p>Comptable</p>
        <span>
          <i className="fas fa-map-marker-alt"></i>
          Conakry
        </span>
      </div>
      <div className="info_plus">
        <Link to={{
          pathname:'/profils/' + props.profil?.nom_utilisateur, 
          profile: props.profil,
          }}
          >
          Consulter <i className="fas fa-angle-double-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default SearchContainCard;
