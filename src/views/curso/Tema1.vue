<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Teorías y métodos de integración'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p Comencemos el estudio de la temática, viendo el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/uC70F4HpWvA?si=Gqd-GM6UybkUp4k0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    p De acuerdo con lo que hemos observado y lo planteado, es necesario que profundicemos un poco más acerca de las teorías de la integración de sistemas de gestión, dado que contienen elementos fundamentales para comprenderlos. Para ellos daremos una breve descripción de los puntos fundamentales, pero más adelante profundizaremos y hablaremos de una manera más detallada de cada uno de los puntos. Comenzaremos por los siguientes:

    .row.align-items-start.mb-5
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Pensamiento sistémico")
            p El pensamiento sistémico es fundamental para entender cómo las diferentes áreas de una organización interactúan y se afectan mutuamente. Este enfoque permite a los líderes empresariales adoptar una visión más amplia, donde cada elemento del sistema se reconoce por su papel en la consecución de los objetivos organizacionales. En el contexto de los sistemas integrados de gestión, esto implica que un incidente en la seguridad puede repercutir en la calidad del producto, así como en la percepción ambiental de la empresa. Por ende, la gestión efectiva de sistema integrado de gestión que comúnmente llamamos HSEQ, exige una colaboración multidisciplinaria, donde todos los departamentos se alineen hacia un objetivo común. Más adelante se profundizará un poco más acerca de este aspecto.
          .div(titulo="Gestión basada en procesos")
            p La gestión basada en procesos proporciona una estructura clara para la integración de sistemas, permitiendo a las organizaciones definir, documentar y optimizar sus procesos claves. Este enfoque no solo facilita la alineación entre los objetivos estratégicos y operativos, sino que también proporciona un marco para la evaluación continua y el ajuste de estos procesos. En el ámbito de HSEQ, esto significa que los procesos de gestión de la calidad pueden estar íntimamente relacionados con los procedimientos de seguridad y medio ambiente, lo que maximiza la eficacia y minimiza los riesgos asociados.
    
          .div(titulo="Mejora continua y el Ciclo PHVA")
            p El Ciclo PHVA es esencial para fomentar la mejora continua en la gestión integrada de HSEQ. Este ciclo no solo permite a las organizaciones evaluar y ajustar sus procesos regularmente, sino que también promueve un ambiente de aprendizaje y adaptación. Por ejemplo, una revisión periódica de los indicadores de seguridad puede revelar áreas de mejora que, al ser abordadas, también pueden conducir a mejoras en la calidad del producto y la sostenibilidad ambiental. En un momento posterior se explorará con mayor detalle este aspecto.
    

    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", alt="").mb-4.mb-lg-0

    p Ahora bien, vale la pena que hablemos acerca de los métodos de integración de los sistemas de Calidad, Seguridad, Salud y Medio Ambiente, para lo cual debemos revisar los siguientes aspectos: 


    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-1.png", alt="Grupo de personas revisando documentos en una tablet")
            .col-lg-7
              h4 Enfoque de estructura de alto nivel
              p La estructura de alto nivel representa un avance significativo en la estandarización de los sistemas de gestión. Al proporcionar un marco común para normas como ISO 9001, ISO 14001 e ISO 45001, la estructura de alto nivel facilita la integración y reduce la complejidad de la gestión. Este enfoque no solo promueve la eficiencia operativa, sino que también asegura que las organizaciones puedan adaptarse rápidamente a los cambios normativos y del mercado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-2.png", alt="Equipo de trabajo analizando procesos en una sala de reuniones")
            .col-lg-7
              h4 Modelo de integración por procesos
              p El modelo de integración por procesos se centra en la identificación de procesos compartidos y la eliminación de redundancias, lo que resulta en una mayor eficiencia. Este enfoque requiere un análisis detallado de los flujos de trabajo y la interacción entre las diferentes áreas, lo que puede ser facilitado mediante herramientas visuales como mapas de procesos. Al optimizar estos procesos comunes, las organizaciones pueden reducir costos y mejorar la calidad del servicio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png", alt="Equipo de trabajo evaluando documentos y riesgos")
            .col-lg-7
              h4 Gestión basada en riesgos
              p La gestión basada en riesgos es un componente crucial en la integración de calidad, seguridad, salud y medio ambiente, puesto que permite a las organizaciones anticiparse a posibles incidentes y mitigarlos de manera proactiva. Este enfoque no solo ayuda a garantizar la seguridad de los empleados y la protección del medio ambiente, sino que también contribuye a la resiliencia organizacional. Al integrar la gestión de riesgos en todos los niveles, las empresas pueden identificar oportunidades de mejora que, de lo contrario, podrían pasarse por alto.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-4.png", alt="Equipo de trabajo en una reunión de planificación")
            .col-lg-7
              h4 Modelo de integración gradual
              p La integración gradual de los sistemas de gestión es una estrategia que permite a las organizaciones abordar la complejidad de la integración de manera progresiva. Comenzar con la integración de sistemas más compatibles, como calidad y medio ambiente, puede facilitar la aceptación y el desarrollo de una cultura de gestión integrada. Esta estrategia también permite que las organizaciones aprendan de cada fase de integración, ajustando sus enfoques, según sea necesario.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-5.png", alt="Equipo revisando datos en dispositivos tecnológicos")
            .col-lg-7
              h4 Uso de herramientas tecnológicas
              p La digitalización ha transformado la manera en que las organizaciones gestionan sus sistemas integrados de gestión. Las herramientas tecnológicas, como software de gestión integrada, permiten la centralización de datos y la automatización de procesos, lo que facilita la toma de decisiones informadas y el monitoreo en tiempo real de los indicadores de desempeño.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-start
          .col-lg-auto
            img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La integración de los sistemas de gestión en Salud, Seguridad, Medio Ambiente y Calidad no solo es un requisito normativo, sino también una estrategia esencial para la sostenibilidad y eficiencia organizacional. A través de un enfoque sistemático que incorpora el pensamiento sistémico, la gestión basada en procesos y la mejora continua, las organizaciones pueden abordar los retos actuales y futuros de manera más efectiva. La adopción de métodos de integración y el uso de herramientas tecnológicas son pasos claves hacia la creación de un entorno empresarial más resiliente, sostenible y competitivo. En última instancia, la integración de los sistemas no solo beneficia a la organización, sino que también contribuye a la protección del medio ambiente y al bienestar de la sociedad en su conjunto. 


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Principios de los sistemas de gestión
    
    p  Los sistemas de gestión son herramientas esenciales para las organizaciones que buscan mejorar su eficacia y eficiencia en el cumplimiento de sus objetivos. Estos sistemas permiten no solo gestionar procesos y recursos, sino también establecer un marco para la mejora continua y la sostenibilidad. En este contexto, el ciclo PHVA (Planificar, Hacer, Verificar, Actuar) se presenta como un enfoque sistemático y fundamental para la gestión de calidad y mejora de procesos.

    .bg-full-width.bg-color-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/anexo-1.png', alt='')
    
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Principios fundamentales de los sistemas de gestión
            p.mb-4(data-aos="fade-right") En el PDF Principios fundamentales,  se exploran ejemplos y herramientas prácticas para su aplicación, subrayando su importancia en la mejora de procesos, la toma de decisiones basada en evidencias y el fortalecimiento de la sostenibilidad organizacional. Este enfoque integral permite a las organizaciones optimizar su desempeño y asegurar su competitividad a largo plazo.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Principios fundamentales de los sistemas de gestión
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Ciclo PHVA

    p El ciclo PHVA, también conocido como ciclo de Deming o ciclo de mejora continua, Es un método sistémico para la estructuración de la secuencia de actividades de un proceso, la resolución de problemas y el mejoramiento continuo. Vásquez Lema (2020). Se compone de las siguientes etapas y se ilustra de la siguiente manera:

    .titulo-figura.mb-2
      h5 Figura 1. 
      span Ciclo PHVA
    
    figure.bg-color-info.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema1/f1.png", data-aos="zoom-in", style="max-width: 630px").mx-auto

    h2 Planear o Planificar (P)

    p La planeación dentro del ciclo PHVA es el proceso en el cual se establecen los objetivos y políticas de calidad y se desarrollan los medios para alcanzarlos, se asegura que los bienes, servicios y procesos internos cumplan con las necesidades de los clientes. Es un proceso estructurado para desarrollar productos que garanticen que el resultado final se ajuste a las expectativas del cliente (Zapata Gómez, A. 2015). 


    .bg-full-width.bg-fondo-slider.mb-5#SLYDER-2
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-1-2.png", alt="Equipo de trabajo en reunión de planificación")
            .col-lg-7.order-lg-1
              h5 ¿Qué pasa en esta etapa?
              p La fase de planificación es la primera y una de las más cruciales dentro del ciclo PHVA, dado que establece las bases para el éxito del proceso de mejora continua. En esta etapa, las organizaciones definen los objetivos estratégicos y los procesos necesarios para alcanzar los resultados deseados, considerando tanto las metas a corto como a largo plazo. La planificación efectiva no solo involucra la definición de lo que se quiere lograr, sino también cómo, cuándo y con qué recursos se va a lograr. Este proceso de planificación debe ser exhaustivo, involucrando a todos los niveles de la organización y alineando los objetivos de cada área con los objetivos generales de la empresa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-2-2.png", alt="Equipo analizando datos y documentos")
            .col-lg-7.order-lg-1
              h5 Aspecto clave
              p Un aspecto clave de la fase de planificación es realizar un análisis detallado de la situación actual. Esto implica evaluar el estado actual de los procesos, recursos, capacidades y resultados de la organización. El análisis debe incluir una evaluación crítica de las fortalezas, debilidades, oportunidades y amenazas (análisis DOFA), lo que proporciona una visión clara del entorno interno y externo. Identificar los problemas existentes y las áreas de mejora es fundamental para asegurar que las acciones que se tomen estén orientadas a resolver los desafíos más importantes. Al mismo tiempo, esta evaluación permite identificar oportunidades que pueden ser aprovechadas para mejorar la competitividad, la eficiencia y la calidad dentro de la organización.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-3-2.png", alt="Equipo revisando documentos y recursos")
            .col-lg-7.order-lg-1
              h5 Previsión de recursos
              p Además del análisis de la situación actual, la fase de planificación también implica una previsión de los recursos necesarios para la ejecución del plan. Esto incluye la asignación de recursos humanos, financieros, tecnológicos y materiales, asegurando que todos los aspectos estén cubiertos para que los objetivos puedan alcanzarse de manera eficiente y efectiva. Es fundamental definir un presupuesto claro y asignar los recursos de manera óptima para evitar desviaciones durante la implementación. En este sentido, la planificación no solo es estratégica, sino también práctica, puesto que proporciona las pautas específicas sobre cómo se llevarán a cabo las acciones necesarias.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-4-2.png", alt="Equipo discutiendo plazos y responsabilidades")
            .col-lg-7.order-lg-1
              h5 Plazos y responsabilidades
              p El establecimiento de plazos y responsabilidades también juega un papel central en esta fase. La planificación debe contemplar un cronograma detallado que establezca los tiempos de ejecución de cada acción, así como los hitos que permitirán monitorear el progreso. Un calendario bien definido permite a la organización gestionar su tiempo de manera eficiente y asegurarse que las actividades se lleven a cabo en los plazos previstos, lo que contribuye al cumplimiento de los objetivos. Además, cada tarea debe tener un responsable asignado, garantizando que las personas adecuadas estén a cargo de las actividades y que haya claridad sobre los roles y expectativas. Esto también facilita la rendición de cuentas y la evaluación del desempeño.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-5-2.png", alt="Equipo en reunión de planificación estratégica")
            .col-lg-7.order-lg-1
              h5 Planificación estratégica
              p La planificación estratégica en esta fase es esencial porque establece un marco de referencia claro que guiará todo el ciclo PHVA. Una planificación bien estructurada no solo facilita la ejecución, sino que también contribuye a la alineación de todas las partes de la organización con los objetivos y metas generales. A través de este marco de referencia, se asegura que las acciones y decisiones que se tomen en las fases posteriores del ciclo (Hacer, Verificar y Actuar) estén alineadas con los objetivos establecidos en la planificación inicial.
    
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Además, la fase de planificación no debe considerarse como un proceso aislado, sino como el inicio de un ciclo dinámico que puede ser revisado y ajustado a medida que se avanza. A lo largo de su implementación, la planificación debe ser flexible para adaptarse a los cambios en el entorno, nuevas oportunidades, riesgos inesperados y lecciones aprendidas, lo que garantiza que la organización permanezca ágil y preparada para enfrentar los desafíos de manera eficaz.
    
        .bg-color-3.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La fase de planificación es crucial porque sienta las bases sobre las cuales se construye todo el proceso de mejora continua. Al realizar un análisis profundo de la situación actual, identificar problemas y oportunidades, definir objetivos claros, asignar recursos adecuados, establecer plazos y responsabilidades, y desarrollar un marco estratégico, se facilita una ejecución exitosa de los planes, y se asegura que la organización esté orientada hacia el logro de sus metas de manera coherente y eficiente. 
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")


    h2 Hacer (H)
    p La fase de “Hacer” del ciclo PHVA es crucial para la materialización de los planes establecidos en la fase de planificación. Durante esta etapa, las estrategias, objetivos y procesos previamente definidos se ponen en práctica. Es el momento en que las acciones diseñadas para alcanzar los resultados deseados son ejecutadas, lo que requiere una atención meticulosa a cada detalle para asegurar que todo se lleve a cabo, según lo previsto. La clave del éxito en esta fase radica en la correcta implementación de los procesos, lo que implica no solo seguir los pasos establecidos, sino también hacerlo con la calidad y eficiencia necesarias para cumplir los estándares esperados.


    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Capital humano" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 ¿Qué es?
            p Uno de los aspectos más críticos en la etapa de ejecución es asegurar que todos los recursos definidos en la fase de planificación estén disponibles y sean utilizados de manera efectiva. Esto incluye no solo los recursos materiales y tecnológicos, sino también el capital humano, que juega un papel fundamental en la ejecución de los planes. El personal involucrado debe estar debidamente capacitado para realizar sus tareas, de acuerdo con los procedimientos establecidos, lo que resalta la importancia de la capacitación continua. La formación del personal no solo debe centrarse en el conocimiento técnico, sino también en la alineación con la visión organizacional, los objetivos y los procesos de calidad. A través de la capacitación, se puede asegurar que los empleados estén completamente preparados para llevar a cabo las acciones, según los requisitos y con los estándares de calidad necesarios.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-1.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Gestión efectiva de los recursos" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Gestión efectiva de los recursos
            p Además de la capacitación, la gestión efectiva de los recursos es fundamental para garantizar que todo el trabajo se realice de manera eficiente y sin contratiempos. Los recursos deben ser gestionados adecuadamente para evitar retrasos, escasez de insumos o problemas logísticos. La planificación detallada de los recursos, que se realizó en la fase anterior, debe ser monitoreada durante la ejecución para asegurar que las cantidades y tipos de recursos sean los correctos, y que estén disponibles en el momento adecuado para cumplir con los plazos establecidos.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-2.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Coordinación efectiva" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Coordinación efectiva
            p Es importante también asegurar la coordinación efectiva entre todos los involucrados en la implementación de los planes. Esto incluye la colaboración entre diferentes departamentos o equipos dentro de la organización, asegurando que las actividades se realicen de manera sincronizada y sin interferencias. La comunicación abierta y constante entre los equipos es esencial en esta fase para resolver cualquier problema que surja y para asegurar que todos estén alineados con los objetivos y las expectativas.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-3.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Supervisión constante" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Supervisión constante
            p Además, la supervisión constante de la ejecución es crucial para asegurar que los procesos se realicen conforme a lo planificado. Esto implica monitorear el progreso, realizar ajustes si es necesario y corregir cualquier desvío respecto a los objetivos. La recopilación de datos y el seguimiento del rendimiento durante la fase de ejecución permiten detectar problemas de manera temprana y tomar decisiones correctivas antes que se conviertan en obstáculos importantes. Un sistema de monitoreo adecuado también permite una mayor visibilidad del estado de las actividades, lo que facilita la toma de decisiones informadas durante la implementación.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-4.png', alt='')
    

    

    
    //////////////////////////
    //////////////////////////
    //////////////////////////
    //////////////////////////
    //////////////////////////
    //////////////////////////
    //////////////////////////
    
    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
