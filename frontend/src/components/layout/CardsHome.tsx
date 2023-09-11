import { Link } from 'react-router-dom';
import { home1 } from '../../assets';
import { BookmarkSimple } from '@phosphor-icons/react';
import { useFilterStore, useSearchStore } from '../../store/store';

type Cards = {
  img: string;
  title: string;
  text: string;
  subtitle: string;
};

function removeAccentsAndLowerCase(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export const CardsHome = () => {
  const cards: Cards[] = [
    // Tecnología
    {
      img: home1,
      title: 'Plataforma de Inteligencia Artificial para Diagnóstico Médico',
      text: 'Desarrollo de una plataforma de IA que utiliza imágenes médicas para ayudar en el diagnóstico temprano de enfermedades, mejorando la precisión y la velocidad del diagnóstico médico.',
      subtitle: 'Tecnología',
    },
    {
      img: home1,
      title: 'Blockchain para la Gestión de Cadena de Suministro',
      text: 'Implementación de tecnología blockchain en la cadena de suministro para aumentar la transparencia y la trazabilidad de productos, reduciendo los riesgos de fraude y mejorando la eficiencia.',
      subtitle: 'Tecnología',
    },
    {
      img: home1,
      title: 'Plataforma de Realidad Virtual para la Educación a Distancia',
      text: 'Creación de una plataforma de realidad virtual que permite a los estudiantes participar en experiencias educativas inmersivas, facilitando un aprendizaje más efectivo y atractivo a distancia.',
      subtitle: 'Tecnología',
    },
    // Nuevos
    {
      img: home1,
      title: 'Nuevo Sistema de Energía Sostenible',
      text: 'Desarrollo de un sistema de energía renovable avanzado que utiliza fuentes de energía limpias y tecnologías innovadoras para reducir la dependencia de combustibles fósiles y mitigar el cambio climático.',
      subtitle: 'Nuevos',
    },
    {
      img: home1,
      title: 'Plataforma de Comercio Electrónico Local',
      text: 'Creación de una plataforma de comercio electrónico que se centra en conectar a los consumidores con pequeñas empresas locales, promoviendo el comercio justo y sostenible.',
      subtitle: 'Nuevos',
    },
    {
      img: home1,
      title: 'Red de Transporte Urbano Autónomo',
      text: 'Implementación de una red de transporte público totalmente autónoma y eléctrica que reduce la congestión del tráfico, disminuye las emisiones de carbono y mejora la movilidad urbana.',
      subtitle: 'Nuevos',
    },
    // Educación
    {
      img: home1,
      title: 'Plataforma de Aprendizaje Personalizado',
      text: 'Desarrollo de una plataforma de aprendizaje en línea que utiliza algoritmos de aprendizaje automático para adaptar los cursos y materiales de estudio a las necesidades individuales de los estudiantes.',
      subtitle: 'Educación',
    },
    {
      img: home1,
      title: 'Programa de Alfabetización Digital para Comunidades Rurales',
      text: 'Lanzamiento de un programa de alfabetización digital en áreas rurales que brinda acceso a la tecnología y habilidades digitales básicas, empoderando a las comunidades para participar en la economía digital.',
      subtitle: 'Educación',
    },
    {
      img: home1,
      title: 'Becas de Acceso a la Educación Superior',
      text: 'Creación de un programa de becas que brinda oportunidades educativas a jóvenes talentosos de bajos recursos, permitiéndoles acceder a la educación superior y alcanzar sus metas académicas y profesionales.',
      subtitle: 'Educación',
    },
    // Agricultura
    {
      img: home1,
      title: 'Agricultura de Precisión con Drones',
      text: 'Implementación de drones equipados con sensores avanzados para monitorear y optimizar la agricultura, permitiendo una gestión más eficiente de los cultivos y reduciendo el uso de recursos.',
      subtitle: 'Agricultura',
    },
    {
      img: home1,
      title: 'Sistema de Riego Inteligente',
      text: 'Desarrollo de un sistema de riego automatizado que utiliza datos climáticos en tiempo real y sensores de humedad del suelo para optimizar el uso del agua en la agricultura, conservando recursos hídricos.',
      subtitle: 'Agricultura',
    },
    {
      img: home1,
      title: 'Plataforma de Comercialización Agrícola',
      text: 'Creación de una plataforma en línea que conecta a los agricultores con compradores y mercados, facilitando la venta directa de productos agrícolas y mejorando los ingresos de los agricultores.',
      subtitle: 'Agricultura',
    },
    // Salud
    {
      img: home1,
      title: 'Telemedicina Avanzada',
      text: 'Desarrollo de una plataforma de telemedicina con capacidades de diagnóstico a distancia y monitoreo de pacientes, mejorando el acceso a la atención médica y la gestión de enfermedades crónicas.',
      subtitle: 'Salud',
    },
    {
      img: home1,
      title: 'Programa de Prevención de Enfermedades',
      text: 'Implementación de un programa de educación y detección temprana de enfermedades que promueve estilos de vida saludables y reduce la carga de enfermedades crónicas en la comunidad.',
      subtitle: 'Salud',
    },
    {
      img: home1,
      title: 'Centro de Investigación en Biomedicina',
      text: 'Establecimiento de un centro de investigación de vanguardia dedicado al desarrollo de terapias innovadoras y avances en el campo de la biomedicina para abordar enfermedades complejas.',
      subtitle: 'Salud',
    },
    // Movilidad
    {
      img: home1,
      title: 'Red de Transporte Público Electrificado',
      text: 'Modernización de la red de transporte público con vehículos eléctricos y una infraestructura de carga eficiente para reducir la contaminación del aire y mejorar la movilidad urbana.',
      subtitle: 'Movilidad',
    },
    {
      img: home1,
      title: 'Plataforma de Compartir Viajes Sostenibles',
      text: 'Lanzamiento de una plataforma de compartir viajes que fomenta la movilidad compartida y el uso de vehículos eléctricos, contribuyendo a la reducción del tráfico y las emisiones de carbono.',
      subtitle: 'Movilidad',
    },
    {
      img: home1,
      title: 'Infraestructura de Bicicletas Urbanas',
      text: 'Construcción de una red de carriles para bicicletas seguros y estaciones de alquiler de bicicletas en áreas urbanas, promoviendo una movilidad más saludable y ecológica.',
      subtitle: 'Movilidad',
    },
    // Equidad
    {
      img: home1,
      title: 'Programa de Empoderamiento de Mujeres',
      text: 'Implementación de un programa que brinda capacitación, recursos y oportunidades a mujeres en comunidades desfavorecidas para fomentar su empoderamiento económico y social.',
      subtitle: 'Equidad',
    },
    {
      img: home1,
      title: 'Centro de Recursos para Personas con Discapacidad',
      text: 'Creación de un centro de recursos que ofrece apoyo y servicios integrales a personas con discapacidad, promoviendo su inclusión en la sociedad y mejorando su calidad de vida.',
      subtitle: 'Equidad',
    },
    {
      img: home1,
      title: 'Acceso Universal a Internet',
      text: 'Proyecto para llevar la conectividad a comunidades rurales y marginadas, garantizando que todas las personas tengan acceso a Internet y las oportunidades que ofrece la era digital.',
      subtitle: 'Equidad',
    },
    // Medio Ambiente
    {
      img: home1,
      title: 'Conservación de Ecosistemas Marinos',
      text: 'Iniciativa para proteger y restaurar ecosistemas marinos, incluyendo arrecifes de coral y manglares, con el objetivo de preservar la biodiversidad y mitigar el cambio climático.',
      subtitle: 'Medio Ambiente',
    },
    {
      img: home1,
      title: 'Reforestación a Gran Escala',
      text: 'Proyecto de reforestación que involucra la plantación de millones de árboles para absorber el CO2 atmosférico, restaurar bosques degradados y conservar la fauna silvestre.',
      subtitle: 'Medio Ambiente',
    },
    {
      img: home1,
      title: 'Gestión Sostenible de Residuos',
      text: 'Implementación de un sistema de gestión de residuos sólidos que reduce la generación de desechos y promueve el reciclaje y la reutilización, contribuyendo a la protección del medio ambiente.',
      subtitle: 'Medio Ambiente',
    },
  ];

  const filter = useFilterStore((FilterStoreState) => FilterStoreState.filter);
  const search = useSearchStore((SearchStoreState) => SearchStoreState.search);

  const filteredCards = cards.filter((card) =>
    filter
      ? removeAccentsAndLowerCase(card.subtitle).includes(
          removeAccentsAndLowerCase(filter)
        )
      : true
  );

  const searchFilteredCards = filteredCards.filter((card) => {
    const title = removeAccentsAndLowerCase(card.title);
    const text = removeAccentsAndLowerCase(card.text);
    const subtitle = removeAccentsAndLowerCase(card.subtitle);
    const searchInput = removeAccentsAndLowerCase(search);

    // Verifica si la busqueda esta vacia o no antes de aplicar el filtro
    if (!searchInput) {
      return true;
    }

    return (
      title.includes(searchInput) ||
      text.includes(searchInput) ||
      subtitle.includes(searchInput)
    );
  });

  return (
    <div className="flex justify-center  items-center  gap-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchFilteredCards.map((pass, index) => (
          <div className="" key={index}>
            <img
              className="w-[333px] h-[197px] object-cover shadow-md "
              src={pass.img}
              alt={pass.title}
            />
            <div className="w-[333px] px-2 pb-5 flex flex-col justify-center items-start gap-4">
              <div className="w-[317px] h-[30px]  text-black font-Poppins text-xl font-normal mt-4">
                {pass.title}
              </div>
              <div className="w-[317px] h-[84px] text-cards font-Poppins text-sm font-normal ">
                {pass.text}
              </div>
              <div className="w-[317px]  text-cards font-Poppins text-xs font-normal ">
                {pass.subtitle}
              </div>
              
              <span className="text-sm font-Poppins w-[317px]">
                <span className="text-cards ">Recolectado </span>
                <span className="text-primary ">$10.848 </span>
                <span className="text-cards ">de </span>
                <span className="text-primary"> $10.000</span>
                <span className="text-cards "> Deseados </span>
              </span>

              <div className="flex items-start gap-4 w-[317px] ">
                <button className="flex w-11 px-4 py-3 justify-center items-center gap-2.5  rounded border-[1px] border-[#13ADB7]">
                  <BookmarkSimple
                    className="text-primary text-xl"
                    weight="thin"
                  />
                </button>
                <Link
                  to="/detail/1"
                  className="flex px-20 py-3 justify-center gap-2.5 rounded border-[1px] border-[#13ADB7] font-Poppins text-sm font-normal text-primary "
                >
                  Donar Ahora
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
