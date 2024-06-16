import React from 'react'
import Image from 'next/image'
import imagen from '../../public/desarrollo-web.jpg'
import styles from '@/Componentes/hero.module.css'
import Link from 'next/link'

function hero() {
  return (
    <div className={styles.container}>
        <div className={styles.img}><Image src={imagen}></Image></div>
    </div>
  )
}

export default hero