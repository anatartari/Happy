import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import mapMarker from '../images/map-mark.svg'

import '../styles/pages/orphanages-map.css';

export default function OrphanagesMap(){
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="logo"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>
          Muitas crianças estão esperando a sua visita ':)'
          </p>
        </header>
        <footer>
          <strong>Salvador</strong>
          <span>Bahia</span>
        </footer>
      </aside>
      <Map 
        center={[-12.8410319,-38.2849455]}
        zoom={15}
        style={{width: "100%", height: "100%"}}
       >
         <TileLayer url="https://a.title.openstreetmap.org/{z}/{x}/{y}.png" />
         </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff"/>
      </Link>
    </div>
  );
}