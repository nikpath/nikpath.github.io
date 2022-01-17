import { useEffect, useRef, useState } from "react";
import "./css/Park.css";
import InfoCard from "./InfoCard";

function Park() {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [bldg, setBldg] = useState(0);

  function cardTooltip(props) {
    if (isHovering) {
      return <InfoCard bldgId={props.bldg} />;
    }
  }
  function mouseAction(evt) {
    const index = evt.currentTarget.dataset.project;
    console.dir(evt);
    //this.houses[index].classList.toggle('active');
  }

  function handleMouseOver(e) {
    setIsHovering(true);
    setBldg(e);

    console.log(bldg);
  }

  function handleMouseOut(e) {
    setIsHovering(false);
  }
  //onClick={mouseAction} onMouseOver={(e) => handleMouseOver(6)} onMouseOut={(e) => handleMouseOut(6)}>
  /*return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -50 1031.41 441.18"
      className="container"
    >
      <path
        id="floor"
        fill="none"
        stroke="none"
        strokeWidth="0.5"
        strokeMiterlimit="10"
        d="M1 390.76h1050"
        strokeLinecap="round"
      />
    </svg>
  );*/
  return null;
}

export default Park;
