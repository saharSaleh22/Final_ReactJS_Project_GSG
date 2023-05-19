import { React } from "react";
import ImageHomePage from "../ImageHomePage";
import background from "../../images/p2.jpg";
import ValueRight from "./ValueRight";
import styles from "./styless.module.css";

const Values = () => {
  return (
    <section className="v-wrapper">
      <div className={`paddings innerWidth flexCenter ${styles.vContainer}`}>
        <div className="v-left">
          <ImageHomePage background={background} />
        </div>

        <ValueRight />
      </div>
    </section>
  );
};
export default Values;
