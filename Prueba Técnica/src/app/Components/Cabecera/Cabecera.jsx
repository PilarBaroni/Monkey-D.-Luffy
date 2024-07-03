import Image from "next/image";
import { monserrat, LilitaOne } from "../Fonts/fonts";
import styles from "./cabecera.module.css";
import luffyCabecera from "../../../../public/customers/luffyCabecera.gif";
export const Cabecera = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1 className={`${LilitaOne.className} ${styles.title}`}>
          Monkey <span>D</span> Luffy <br />
          <span className={`${monserrat.className} ${styles.subtitle}`}>
            Capitán y fundador de los Piratas de Sombrero de Paja
          </span>
          
        </h1>
        <div className={styles.arrowDown}></div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={luffyCabecera}
          alt="LuffyCabecera"
          quality={100}
          priority
          className={styles.image}
        />
      </div>
    </div>
  );
};
