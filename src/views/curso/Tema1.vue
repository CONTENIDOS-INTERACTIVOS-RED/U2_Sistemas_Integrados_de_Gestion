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
              p Además del análisis de la situación actual, la fase de planificación también implica una previsión de los recursos necesarios para la ejecución del plan. Esto incluye la asignación de recursos humanos, financieros, tecnológicos y materiales, asegurando que todos los aspectos estén cubiertos para que los objetivos puedan alcanzarse de manera eficiente y efectiva. Es fundamental definir un presupuesto claro y asignar los recursos de manera óptima para evitar desviaciones durante la implementación. En este sentido, la planificación no solo es estratégica, sino que también práctica, puesto que proporciona las pautas específicas sobre cómo se llevarán a cabo las acciones necesarias.
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
    p La fase de "Hacer" del ciclo PHVA es crucial para la materialización de los planes establecidos en la fase de planificación. Durante esta etapa, las estrategias, objetivos y procesos previamente definidos se ponen en práctica. Es el momento en que las acciones diseñadas para alcanzar los resultados deseados son ejecutadas, lo que requiere una atención meticulosa a cada detalle para asegurar que todo se lleve a cabo, según lo previsto. La clave del éxito en esta fase radica en la correcta implementación de los procesos, lo que implica no solo seguir los pasos establecidos, sino también hacerlo con la calidad y eficiencia necesarias para cumplir los estándares esperados.


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
    

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Durante esta etapa, también es vital tener en cuenta la flexibilidad. A pesar que los planes fueron establecidos con base en un análisis exhaustivo, el entorno organizacional y el contexto externo pueden cambiar, lo que puede generar la necesidad de adaptar la implementación a nuevas circunstancias. Por lo tanto, la capacidad para realizar ajustes rápidos y eficaces es una característica esencial para el éxito en la fase de ejecución.
    
        .bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 La fase de "Hacer" no solo implica llevar a cabo las acciones planificadas, sino también gestionar de manera efectiva los recursos, capacitar al personal adecuadamente, monitorear el desempeño, coordinar entre los equipos y mantener una flexibilidad para adaptarse a cualquier cambio que surja. Una implementación efectiva de los planes desarrollados en la fase de planificación es la base para el éxito de cualquier organización que busque mejorar continuamente sus procesos y lograr los objetivos estratégicos establecidos. 
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
    
    
    h2 Verificar (V)
    p La fase de "Verificar" es una etapa clave en el ciclo PHVA, porque permite evaluar la efectividad de la implementación del plan y asegurar que los objetivos establecidos en la fase de planificación se hayan alcanzado. Después de llevar a cabo las acciones definidas, es esencial detenerse a revisar y analizar los resultados obtenidos para verificar que se esté cumpliendo con lo planificado y que el rendimiento esté alineado con los estándares deseados. Esta evaluación no solo se enfoca en los logros alcanzados, sino también en identificar posibles desviaciones que puedan haber surgido durante la ejecución, lo que brinda la oportunidad de tomar acciones correctivas de manera oportuna.

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/7.png", alt="").mb-4.mb-lg-0
      .col-lg-8    
        AcordionA(tipo="b")
          .div(titulo="Recolección y análisis de datos")
            p La recolección y análisis de datos son fundamentales en esta fase. A través de estos datos, se puede obtener una visión objetiva y detallada del desempeño de los procesos, lo que permite verificar si se han cumplido los resultados esperados. Estos datos pueden provenir de diferentes fuentes, como registros operativos, informes de desempeño, retroalimentación de clientes, o incluso resultados de pruebas y auditorías internas. El análisis de estos datos proporciona una base sólida para comprender si los objetivos establecidos en la planificación se han logrado en su totalidad o si existen áreas que requieren ajustes.
    
          .div(titulo="Identificación de desviaciones")
            p Una de las actividades más importantes en esta fase es la identificación de desviaciones. A veces, aunque los planes se hayan implementado adecuadamente, pueden surgir situaciones imprevistas que alteren los resultados esperados. Detectar estas desviaciones es crucial, debido a que permite a la organización corregir los problemas antes que se conviertan en obstáculos mayores. Esto puede incluir aspectos como el incumplimiento de plazos, el uso inadecuado de recursos, la falta de calidad en los productos o servicios entregados, o problemas operativos que no fueron identificados previamente. Al detectar estas desviaciones, se pueden implementar acciones correctivas inmediatas para redirigir los esfuerzos hacia el cumplimiento de los objetivos.
    
          .div(titulo="Evaluación de procesos")
            p Es importante recoger información sobre cómo se han desarrollado los procesos durante la ejecución, analizando tanto los procedimientos seguidos como la eficacia de los recursos utilizados. Esto permite obtener una visión completa de la operatividad de la organización y cómo cada uno de los componentes del proceso contribuye a los resultados finales. En algunos casos, esta evaluación también puede revelar oportunidades de mejora en los procesos mismos, incluso si se han logrado los objetivos previstos, lo que alimenta la cultura de mejora continua de la organización.
    
          .div(titulo="Auditorías y revisiones")
            p Las auditorías y revisiones son herramientas fundamentales en esta fase para garantizar la imparcialidad y la precisión en la evaluación. Las auditorías internas y externas permiten realizar una evaluación sistemática e independiente de los procesos y resultados, proporcionando una visión objetiva de la situación. Estas auditorías pueden estar orientadas a aspectos específicos, como la calidad, la seguridad, el cumplimiento normativo, o la sostenibilidad, y ofrecen un diagnóstico claro sobre el estado de las operaciones. Las revisiones periódicas también facilitan la identificación de cualquier área de oportunidad para optimizar los procesos, mejorar la eficiencia y reducir riesgos en futuras ejecuciones.

          .div(titulo="Retroalimentación")
            p Un aspecto clave de esta fase es la retroalimentación. La verificación no solo se enfoca en la evaluación interna de los procesos, sino también en la obtención de retroalimentación de todas las partes interesadas, como empleados, clientes, proveedores y otras partes externas. Esta retroalimentación proporciona una perspectiva más amplia sobre la efectividad de las acciones tomadas y ayuda a comprender cómo los resultados se perciben desde diferentes puntos de vista. Además, la retroalimentación externa puede revelar aspectos no considerados previamente, lo que puede ser invaluable para ajustar los procesos y mejorar el rendimiento a largo plazo.


    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La fase de verificación es fundamental para evaluar si los planes se han ejecutado con éxito y si los resultados obtenidos están alineados con los objetivos. La recolección y análisis de datos, la identificación de desviaciones, la evaluación de los procesos y el uso de auditorías y revisiones proporcionan las herramientas necesarias para asegurar que la organización esté en el camino correcto. Además, esta fase permite la recopilación de información valiosa para realizar ajustes y mejoras en los procesos, lo que impulsa la mejora continua y la capacidad de la organización para adaptarse a los cambios y desafíos que puedan surgir.
    

    h2 Actuar (A)
    p La fase de "Actuar" es el cierre del ciclo PHVA y marca un punto crítico en el proceso de mejora continua, dado que en esta etapa se toman decisiones claves basadas en los resultados obtenidos durante la fase de verificación. Una vez que se han evaluado los resultados y se han identificado las desviaciones, problemas o áreas de mejora, es necesario actuar para consolidar los logros alcanzados o corregir los aspectos que no han cumplido con las expectativas.

    .row.align-items-start.mb-5#acordion-2
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Estandarizar el proceso")
            p Si los objetivos establecidos en la planificación se han alcanzado de manera satisfactoria, la acción principal consiste en estandarizar el proceso. Esto significa formalizar los métodos y prácticas que han demostrado ser efectivos durante la implementación, asegurando que se conviertan en una rutina operativa dentro de la organización. La estandarización ayuda a mantener la consistencia en los resultados a lo largo del tiempo y facilita la replicación de los procesos exitosos en otras áreas o departamentos. Al aplicar este enfoque, la organización no solo mejora la eficiencia de los procesos actuales, sino que también puede extender las buenas prácticas a otras partes de la empresa, lo que contribuye al crecimiento y la optimización general.
    
          .div(titulo="Reflexión crítica")
            p Por otro lado, si los resultados no son los esperados y los objetivos no se han alcanzado, la fase de "Actuar" implica una reflexión crítica sobre lo sucedido. Es fundamental realizar un análisis detallado de las causas que han llevado a no cumplir con los objetivos, lo cual puede involucrar la revisión de la planificación inicial, los recursos asignados, la ejecución de los procesos o incluso factores externos que hayan afectado el desempeño. En esta etapa, es necesario rediseñar el plan de acción para corregir las deficiencias identificadas, tomar medidas correctivas y optimizar los procesos para asegurarse que los objetivos sean alcanzables en un nuevo ciclo.
    
          .div(titulo="Ajustes y corrección")
            p Los ajustes realizados pueden implicar la reestructuración de procesos, la reasignación de recursos, la actualización de procedimientos o la implementación de nuevas estrategias que mejoren la ejecución. Este proceso de corrección debe ser meticuloso y basado en la evidencia obtenida durante la fase de verificación, puesto que esto garantiza que las soluciones propuestas sean prácticas y estén alineadas con las necesidades y capacidades de la organización. Además, en esta etapa es importante involucrar a las partes interesadas relevantes, como empleados y proveedores, para asegurarse que las soluciones sean efectivas y sean aceptadas por todos los actores involucrados.
    
          .div(titulo="Flexibilidad")
            p Una de las características claves de esta fase es la flexibilidad. En lugar de seguir estrictamente el plan inicial, el ciclo PHVA invita a las organizaciones a adaptarse y evolucionar en función de lo aprendido durante el ciclo anterior. Esto fomenta un enfoque dinámico y proactivo en la mejora de los procesos, porque cada ciclo PHVA se convierte en una oportunidad para aprender y mejorar. Al tomar decisiones basadas en los resultados obtenidos, las organizaciones pueden fortalecer sus sistemas de gestión y aumentar su capacidad para enfrentar desafíos futuros.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/9.png", alt="").mb-4.mb-lg-0


    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 Además, la fase de "Actuar" no solo cierra el ciclo actual, sino que también da inicio a un nuevo ciclo de planificación. La retroalimentación obtenida durante esta etapa es crucial para el desarrollo de nuevos planes y objetivos que sean más realistas y estén mejor alineados con la realidad actual de la organización. Este ciclo continuo de evaluación, ajuste y mejora es lo que garantiza que la organización se mantenga en una constante evolución y pueda adaptarse a los cambios del entorno empresarial, las expectativas del cliente y las innovaciones tecnológicas.
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 La fase de "Actuar" es fundamental para asegurar que la organización aprenda de su desempeño, celebre los éxitos alcanzados y tome medidas correctivas cuando sea necesario. Esta etapa culmina el ciclo PHVA y abre la puerta a un nuevo ciclo, lo que garantiza que la organización continúe evolucionando, mejorando su eficacia y eficiencia en cada ciclo sucesivo. La capacidad para adaptarse, corregir y mejorar continuamente es lo que permite a las organizaciones mantenerse competitivas y sostenibles en un entorno empresarial dinámico. 
    
    h2 Interrelación entre los principios de gestión y el Ciclo PHVA
    p La implementación efectiva del ciclo PHVA (Planificar, Hacer, Verificar, Actuar) no solo depende de un enfoque sistemático en la gestión de procesos, sino que se ve profundamente potenciada y fortalecida por los principios fundamentales de los sistemas de gestión. Estos principios sirven como los cimientos que guían cada una de las fases del ciclo, asegurando que la organización no solo esté orientada a la eficiencia y efectividad, sino también a la mejora continua y al cumplimiento de sus objetivos estratégicos:

    .bg-full-width.bg-fondo-slider.mb-5#slyde-2
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-1-3.png", alt="Equipo de trabajo analizando necesidades del cliente")
            .col-lg-7
              h4 El enfoque en el cliente
              p Uno de los principios fundamentales, tiene un papel crucial en la fase de Planificación del ciclo PHVA. Al comprender las necesidades y expectativas del cliente, las organizaciones pueden diseñar acciones y objetivos alineados con la creación de valor para el cliente, lo que a su vez mejora la satisfacción y la lealtad del mismo. Este principio guía el diseño de los procesos, asegurando que cada acción tomada dentro del ciclo esté orientada a la mejora de la experiencia del cliente, y no solo al cumplimiento de los requisitos internos de la organización. Esto establece una dirección clara durante el ciclo PHVA, donde las decisiones se toman con el cliente en el centro de la estrategia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-2-3.png", alt="Equipo de liderazgo en reunión estratégica")
            .col-lg-7
              h4 El liderazgo
              p Otro principio clave, también es esencial para la correcta implementación del ciclo PHVA. En la fase de Hacer, el liderazgo efectivo motiva e involucra a todos los niveles de la organización en el proceso de ejecución. Los líderes no solo establecen la visión y los objetivos, sino que también impulsan a los equipos a trabajar de manera colaborativa y con compromiso, lo que facilita la implementación exitosa de los planes. El liderazgo proporciona la dirección necesaria para tomar decisiones críticas durante la fase de Verificar, donde es crucial que los líderes analicen los resultados y orienten a la organización hacia las correcciones o mejoras que deben implementarse. El liderazgo actúa como el motor que impulsa la ejecución del ciclo PHVA, de manera cohesiva y enfocada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3-3.png", alt="Equipo de trabajo colaborando en proyecto")
            .col-lg-7
              h4 La participación del personal
              p Es fundamental para asegurar que cada miembro de la organización esté alineado con los objetivos establecidos. La participación activa de los empleados, que se refleja en su involucramiento durante todas las fases del ciclo, aporta un conocimiento valioso y una perspectiva enriquecedora. Durante la fase de Actuar, los comentarios y sugerencias de los empleados pueden ser clave para identificar áreas de mejora o para aportar soluciones innovadoras a los problemas que surjan. El compromiso y la participación del personal en la toma de decisiones y en la mejora de procesos permiten que la organización sea más ágil y capaz de adaptarse a los cambios y desafíos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-4-3.png", alt="Equipo revisando indicadores de mejora")
            .col-lg-7
              h4 La mejora continua
              p Es un principio y un componente integral del ciclo PHVA que se convierte en el motor que impulsa la evolución constante de los procesos y prácticas dentro de la organización. A lo largo de cada ciclo, la organización se enfrenta a oportunidades de aprendizaje, donde las lecciones del pasado se convierten en acciones para el futuro. Este enfoque continuo de revisión y mejora, asegura que los resultados sean cada vez más eficientes, eficaces y alineados con los objetivos estratégicos de la empresa. La mejora continua no solo se aplica a los procesos internos, sino que también permite que la organización se mantenga flexible ante los cambios del mercado, la tecnología o las necesidades de los clientes, lo que se traduce en una mayor competitividad a largo plazo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-5-3.png", alt="Equipo analizando datos y tomando decisiones")
            .col-lg-7
              h4 La toma de decisiones
              p Basada en evidencias, también juega un papel clave al garantizar que las decisiones dentro del ciclo PHVA se fundamenten en datos y hechos objetivos, y no en suposiciones o intuiciones. Durante las fases de Verificar y Actuar, el análisis de los datos recolectados proporciona una base sólida para evaluar si los objetivos han sido alcanzados y para decidir qué acciones tomar a continuación. Esto permite a las organizaciones reducir la incertidumbre, minimizar riesgos y tomar decisiones más informadas que favorezcan al éxito sostenido.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-6-3.png", alt="Equipo en reunión con proveedores")
            .col-lg-7
              h4 La gestión de relaciones
              p Con los proveedores y otras partes interesadas, es otra parte vital de la interrelación entre los principios y el ciclo PHVA. En la fase de planificación, las organizaciones deben considerar las relaciones estratégicas con los proveedores como una forma de asegurar la calidad de los recursos necesarios para ejecutar los planes. Una vez que los procesos se han implementado, las relaciones con los proveedores siguen siendo fundamentales para garantizar que los productos y servicios sean de calidad, cumplan con los plazos establecidos y se ajusten a las expectativas de los clientes.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En conjunto, los principios de gestión y el ciclo PHVA no solo se complementan, sino que se refuerzan mutuamente. Los principios proporcionan un marco teórico y ético para la ejecución efectiva del ciclo, mientras que el ciclo PHVA ofrece la estructura práctica para llevar esos principios a la acción. Esta sinergia permite a las organizaciones adaptarse, innovar y mantenerse competitivas en un entorno cada vez más dinámico y exigente. Al adoptar ambos conceptos, las organizaciones tienen una ventaja clara: un enfoque sistemático, centrado en la mejora continua, que les permite no solo responder a los desafíos actuales, sino también anticiparse a las futuras oportunidades y mantener su relevancia en el mercado a largo plazo. 
    

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Estructura de alto nivel


    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 La estructura de alto nivel (HLS, por sus siglas en inglés) es un marco común que ha sido establecido por la Organización Internacional de Normalización (ISO) para facilitar la integración de diferentes sistemas de gestión. Esta estructura se ha adoptado en varias normas de gestión, incluyendo ISO 9001 (sistemas de gestión de la calidad), ISO 14001 (sistemas de gestión ambiental) e ISO 45001 (sistemas de gestión de la salud y la seguridad en el trabajo). A continuación, se presenta un análisis de esta estructura y sus principales componentes.
    
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p.mb-0 La estructura de alto nivel proporciona un esquema coherente que permite a las organizaciones implementar y gestionar de manera eficiente múltiples sistemas de gestión. Este enfoque facilita la alineación de objetivos y la optimización de recursos, promoviendo una cultura de mejora continua. 


        p La estructura de alto nivel se compone de diez cláusulas que se pueden describir de la siguiente manera:
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
    
    

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/info1.png', alt='', style="max-width: 1160px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="12%" y="11%" numero="1")
                h5 Contexto de la organización
                p Enmarca la necesidad de entender el entorno interno y externo en el que opera la organización, así como las partes interesadas y sus expectativas. Esto es crucial para establecer un sistema de gestión que sea relevante y efectivo.
    
              .bg-color-white.box-shadow.p-3(x="7%" y="30%" numero="2")
                h5 Liderazgo
                p La alta dirección debe demostrar liderazgo y compromiso con el sistema de gestión, asegurando que se integre en la estrategia y los procesos de la organización. Esto incluye la asignación de roles y responsabilidades claras y la promoción de una cultura que fomente la participación y el compromiso. Anteriormente lo habíamos mencionado.
    
              .bg-color-white.box-shadow.p-3(x="1%" y="49%" numero="3")
                h5 Planificación
                p Aquí se trata de establecer objetivos y determinar los riesgos y oportunidades que pueden afectar el logro de esos objetivos. Esta cláusula también abarca la planificación de cambios y la identificación de recursos necesarios.
    
              .bg-color-white.box-shadow.p-3(x="7%" y="68%" numero="4")
                h5 Apoyo
                p Se refiere a los recursos necesarios para implementar y mantener el sistema de gestión, incluyendo la infraestructura, el ambiente de trabajo, la competencia del personal y la comunicación. Un soporte adecuado es esencial para el éxito del sistema.
    
              .bg-color-white.box-shadow.p-3(x="12%" y="88%" numero="5")
                h5 Operación
                p Se aborda la implementación y el control de los procesos necesarios para cumplir con los requisitos y alcanzar los objetivos establecidos. Implica la gestión de riesgos y oportunidades en las operaciones diarias.
    
              .bg-color-white.box-shadow.p-3(x="88%" y="11%" numero="6")
                h5 Evaluación del desempeño
                p Se centra en la monitorización, medición, análisis y evaluación del desempeño del sistema de gestión. Esta cláusula es fundamental para identificar áreas de mejora y para asegurar la eficacia del sistema.
    
              .bg-color-white.box-shadow.p-3(x="93%" y="30%" numero="7")
                h5 Mejora
                p Aquí se establece la necesidad de mejorar continuamente el sistema de gestión. Esto incluye la gestión de no conformidades y la implementación de acciones correctivas y preventivas.
    
              .bg-color-white.box-shadow.p-3(x="99%" y="49%" numero="8")
                h5 Resultados de la evaluación
                p Se enfoca en la revisión de la eficacia del sistema de gestión y la toma de decisiones informadas basadas en datos y evidencias.
    
              .bg-color-white.box-shadow.p-3(x="93%" y="68%" numero="9")
                h5 Revisión por la dirección
                p Implica que la alta dirección debe evaluar regularmente el sistema de gestión para asegurar su adecuación, eficacia y alineación con los objetivos estratégicos de la organización.
    
              .bg-color-white.box-shadow.p-3(x="88%" y="88%" numero="10")
                h5 Documentación y registros
                p Aunque no se presenta como una cláusula independiente, la gestión de la documentación y los registros es un componente esencial que permite la trazabilidad y el control de los procesos.


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/105584" target="_blank" rel="noopener noreferrer") Gómez Martínez, J. A. (2019). Guía para la aplicación de UNE-EN ISO 9001:2015: ( ed.). AENOR - Asociación Española de Normalización y Certificación.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/114208" target="_blank" rel="noopener noreferrer") López Lemos, P. (2015). Cómo documentar un sistema de gestión de calidad según ISO 9001:2015: ( ed.). FC Editorial. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/273394" target="_blank" rel="noopener noreferrer") Dumar Rueda, J. E. (2022). Implementación de ISO 9001 2015: bajo la perspectiva de la enseñanza y aprendizaje: (1 ed.). Corporación Universitaria del Caribe - CECAR. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=uD4_J7t4IeQ" target="_blank" rel="noopener noreferrer") PROMPERÚ Oficial. (2018, 30 de julio). ISO 9001:2015 Gestión de la Calidad: LÓPEZ, Gary (18 de julio) 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=9cYEzKM4Mro" target="_blank" rel="noopener noreferrer") EUDE Business School. (2021, 30 de julio). 20140530 PATRICIA GONZALEZ MASTERCLASS SISTEMAS DE GESTIÓN DE LA CALIDAD II PARTE 1

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=3KSlhx9La7g" target="_blank" rel="noopener noreferrer") Flavio Welmer Reyes Rodas. (2020, 19 de junio). Interpretación de la Norma ISO 9001:2015. Módulo I, sesión 1, parte 1

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

    //////////////////////////
    //////////////////////////
    //////////////////////////
    //////////////////////////
    //////////////////////////
    //////////////////////////
    //////////////////////////
    
    
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema1',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Teorías y métodos de integración',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes es un principio fundamental de los sistemas de gestión?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Satisfacción del cliente',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Aumento de costos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Rigidez en los procesos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Falta de comunicación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El enfoque en el cliente es esencial para mejorar la satisfacción y fomentar la lealtad, lo cual es crucial para el éxito a largo plazo.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'La estructura de alto nivel (HLS) es importante porque:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aumenta la complejidad de los procesos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Facilita la integración de diferentes sistemas de gestión',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Ignora las normativas internacionales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Se centra únicamente en la gestión de calidad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La HLS proporciona un marco común que ayuda a las organizaciones a gestionar múltiples sistemas de manera eficiente y alineada.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: 'La gestión basada en riesgos ayuda a las organizaciones a:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ignorar los problemas potenciales',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Anticiparse a posibles incidentes y mitigarlos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aumentar la burocracia',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Reducir la comunicación entre departamentos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La gestión basada en riesgos es esencial para asegurar que las organizaciones tomen medidas proactivas ante posibles contingencias.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué se busca lograr a través de la mejora continua en los sistemas de gestión?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mantener prácticas antiguas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Aumentar la rigidez organizacional',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Buscar constantemente formas de aumentar el rendimiento y eficacia',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Reducir la participación del personal',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La mejora continua es un principio clave que impulsa a las organizaciones a adaptarse y optimizar sus procesos de manera sistemática.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Cuál es una de las ventajas de implementar el Ciclo PHVA?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Facilita la confusión en los procesos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Proporciona un método sistemático para la mejora continua',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aumenta los costos operativos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Promueve la falta de planificación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El Ciclo PHVA permite a las organizaciones evaluar y ajustar sus procesos regularmente, promoviendo un ambiente de aprendizaje y adaptación.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicitaciones! Has demostrado un buen entendimiento de los principios y métodos de integración de sistemas de gestión.',
        mensaje_final_reprobado:
          'Te recomendamos repasar los conceptos clave de la unidad, especialmente lo relacionado con los principios fundamentales y el ciclo PHVA.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
