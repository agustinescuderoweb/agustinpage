import React from 'react'
import Image from 'next/image'
import imagen from '../../public/desarrollo-web.jpg'
import styles from '@/Componentes/hero.module.css'
import Link from 'next/link'

function hero() {
  return (
    <div className={styles.container}>
        <div className={styles.img}><Image src={imagen}></Image></div>
        <div className={styles.propuesta}>
          <h1>Desarrollo Web</h1>
          <p>Desarrollos web ajustables a tus necesidades actuales</p>
          <button className={styles.boton}>Ver Planes y Precios</button>
        </div>
    </div>
  )
}

export default hero