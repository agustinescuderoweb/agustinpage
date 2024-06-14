import Image from "next/image"
import Menu from "@/Componentes/menu"
import Hero from "@/Componentes/hero"
import Programas from "@/Componentes/programas"
import Slider from "@/Componentes/proyectos"
import Planes from "@/Componentes/planes"

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <Programas />
      <Planes />
    </main>
  );
}
