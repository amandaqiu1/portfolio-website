import React from "react";
import Hexagon from "./Hexagon";
import styles from "./HexagonGrid.module.css";

const HexagonGrid = ({ hexagons }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.container}>
        {hexagons.map((hexagon, index) => (
          <Hexagon
            key={index}
            onClick={hexagon.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default HexagonGrid;
