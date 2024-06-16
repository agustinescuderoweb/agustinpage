import React from 'react'
import fle from '../../public/flechazo.png'
import Image from 'next/image'
import styles from '@/Componentes/planes.module.css'
import x from '../../public/icon/x-circle-fill.svg'
import check from '../../public/icon/check-circle-fill.svg'

function planes() {
  return (
    <div>
    <div className={styles.container}>
      <Image className={styles.imag} src={fle}></Image>
      <h1>Elige el Servicio que más se adapté a tu modelo de negocio</h1>
    </div>
    <div className={styles.servicios}>
        <div className={styles.landing}>
            <h1>Landing Page</h1>
            <ul className={styles.lista}>
            <li><Image src={check}></Image>Formulario de Contacto</li>
            <li><Image src={check}></Image>Multiple páginas</li>
            <li><Image src={check}></Image>Whatsaap Personalizado</li>
            <li><Image src={check}></Image>Responsive Desing</li>
            <li><Image src={check}></Image>Dominio Personalizado</li>
            <li><Image src={check}></Image>Contactos Redes Sociales</li>
            </ul>
            <h2>$60000</h2>
        </div>
        <div className={styles.web}>
            <h1>Página Web</h1>
            <ul className={styles.lista}>
            <li><Image src={check}></Image>Formulario de Contacto</li>
            <li><Image src={check}></Image>Multiple páginas</li>
            <li><Image src={check}></Image>Whatsaap Personalizado</li>
            <li><Image src={check}></Image>Responsive Desing</li>
            <li><Image src={check}></Image>Dominio Personalizado</li>
            <li><Image src={check}></Image>Contactos Redes Sociales</li>
            </ul>
            <h2>$120000</h2>
        </div>
        <div className={styles.sitio}>
            <h1>Sitio Web</h1>
            <ul className={styles.lista}>
            <li><Image src={check}></Image>Formulario de Contacto</li>
            <li><Image src={check}></Image>Multiple páginas</li>
            <li><Image src={check}></Image>Whatsaap Personalizado</li>
            <li><Image src={check}></Image>Responsive Desing</li>
            <li><Image src={check}></Image>Dominio Personalizado</li>
            <li><Image src={check}></Image>Contactos Redes Sociales</li>
            </ul>
            <h2>$160000</h2>
        </div>
    </div>
    </div>
  )
}

export default planes
