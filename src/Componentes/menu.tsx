import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import agus from '../../public/agus.jpg'
import styles from '@/Componentes/menu.module.css'

function menu() {
  return (
    <div className={styles.contenedor}>
    <div className={styles.image}>
        <Image className={styles.imagen} src={agus}></Image>
    </div>
    <div className={styles.items}>
        <Link href="#">Inicio</Link>
        <Link href="#">Planes</Link>
        <Link href="#">Desarrollos</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Contactos</Link>
    </div>
    </div>
  )
}

export default menu