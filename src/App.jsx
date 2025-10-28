import { Purposes } from "./components/Purposes";

export default function App(){
  return (
    <div className="app-root">
      <Purposes 
        title = 'Missão'
        paragraph = {"Transformar  tecnologia  em\nconfiança  e  tranquilidade\noferecendo  soluções\ninteligentes,  seguras  e\nsustentáveis  que  façam  a\ndiferença na vida de nossos\nclientes."}
      />
      <Purposes 
        title = 'Visão'
        paragraph = {"Ser referência regional em\nsegurança eletrônica, redes\ne energia renovável,\nimpulsionando inovação,\nexcelência e crescimento\ncontínuo, sempre à frente\ndas necessidades do\nmercado."}
      />
       <Purposes 
        title = 'Valores'
        paragraph = {"Nos guiamos pela ética e\npela qualidade, unindo\ninovação e responsabilidade\npara entregar segurança,\nconexão e energia com\neficiência e sustentabilidade."}
      />
     </div>
  )
}
