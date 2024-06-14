import React from 'react'
import Image from 'next/image'
import bull from "../../public/icon/bullseye.svg"
import rain from "../../public/icon/rainbow.svg"
import book from "../../public/icon/bookmark-check.svg"
import styles from "@/Componentes/programas.module.css"
import note from "../../public/note.png"

function planes() {
  return (
    <div className={styles.programas}>
      <div className={styles.estilo}>
        <h1>Desarrolla tu web con un estilo moderno</h1>
        <button></button>
        <Image className={styles.note} src={note}></Image>
      </div>
      <div className={styles.contenido}>
        <div className={styles.cardone}>
          <div className={styles.content}>
            <Image className={styles.svg} src={bull}></Image>
            <h1 className={styles.titulo}>Diseños Web Personalizados</h1>
            <p className={styles.parrafos}>Diseños de web que destacan la identidad de tu marca</p>
            <button className={styles.mas}>Más Info</button>
            </div>
        </div>
        <div className={styles.cardtwo}>
          <div className={styles.content}>
            <Image className={styles.svg} src={rain}></Image>
            <h1 className={styles.titulo}>Responsive Desing</h1>
            <p className={styles.parrafos}>Sitios Web con adaptabilidad a distintos dispositivos</p>
            <button className={styles.mas}>Más Info</button>
            </div>
        </div>
        <div className={styles.cardthree}>
          <div className={styles.content}>
            <Image className={styles.svg} src={book}></Image>
            <h1 className={styles.titulo}>Marketing Digital y SEO</h1>
            <p className={styles.parrafos}>Diseños de web con atractivo e interes comercial</p>
            <button className={styles.mas}>Más Info</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default planes