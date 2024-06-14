import React from 'react'
import fle from '../../public/flechazo.png'
import Image from 'next/image'
import styles from '@/Componentes/planes.module.css'

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
            <p>Landing Page, o página de aterrizaje es una página ideal para presentarte, ofrecer un curso gratuito o un Ebook, y a cambio solicitar sus contactos para luego lograr una conexión 
               Es una pagina simple para que tus visitantes puedan conocer en profundidad tu conocimientos y lo que estarías dispuesto a ofrecer.</p>
            <h2>$60000</h2>
        </div>
        <div className={styles.web}>
            <h1>Página Web</h1>
            <p>Una Página web es una página que te presenta tus productos o servicios de una manera directa, contiene diferentes apartados para compartir tus conocimientos, y diferentes opciones
                presentar tus productos. Contiene un whatsaap adaptable para que pueda conectar directamente con tus futuros clientes, y un apartado de contactos para que puedan seguirte en tus redes sociales.
            </p>
            <h2>$120000</h2>
        </div>
        <div className={styles.sitio}>
            <h1>Sitio Web</h1>
            <p>Un Sitio Web es un sitio que ofrece multiples páginas ya sea páginas de productos o servicios, como páginas de presentaciones, blogs y contactos
                un Sitio Web es un espacio en internet más robusto.
                Contiene también un whatsaap adaptable a las distintas páginas para que el futuro cliente pueda conectarse directamente con un operador o persona a cargo de la atención al cliente
            </p>
            <h2>$160000</h2>
        </div>
    </div>
    </div>
  )
}

export default planes
