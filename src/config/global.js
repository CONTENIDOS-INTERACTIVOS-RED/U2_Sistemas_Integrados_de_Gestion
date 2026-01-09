export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Teorías y métodos de integración',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teorías y métodos de integración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Principios de los sistemas de gestión',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Ciclo PHVA',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estructura de alto nivel',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cortés, J. M. (2017). Sistemas de gestión de calidad (ISO 9001:2015): ( ed.). Editorial ICB.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/56053?page=84',
    },
    {
      referencia:
        'Vásquez Lema, M. R. (2020). Conociendo los Principios de Gestión ISO 9001: ( ed.). El Cid Editor.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/164539?page=24',
    },
    {
      referencia:
        'Zapata Gómez, A. (2015). Ciclo de la calidad PHVA: ( ed.). Editorial Universidad Nacional de Colombia.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/129837?page=64',
    },
    {
      referencia:
        'Vásquez Lema, M. R. (2020). Conociendo los Principios de Gestión ISO 9001: ( ed.). El Cid Editor.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/164539?page=94',
    },
    {
      referencia:
        'López Lemos, P. (2014). Novedades ISO 9001: 2015: ( ed.). FC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/114074',
    },
    {
      referencia:
        'Calso Morales, N. & Pardo Álvarez, J. M. (2018). Guía práctica para la integración de sistemas de gestión. ISO 9001, ISO 14001 e ISO 45001: ( ed.). AENOR - Asociación Española de Normalización y Certificación.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/53626',
    },
    {
      referencia:
        'Cienfuegos Gayo, S. & Millas Alonso, Y. (2019). Seguridad y salud en el trabajo para pymes según la Norma ISO 45001: ( ed.). AENOR - Asociación Española de Normalización y Certificación.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/123551',
    },
  ],
  glosario: [
    {
      termino: 'Actuar',
      significado:
        'Etapa final del ciclo PHVA donde se toman decisiones basadas en los resultados obtenidos para estandarizar procesos exitosos o corregir deficiencias.',
    },
    {
      termino: 'Ciclo PHVA',
      significado:
        'Método sistemático para la mejora continua que incluye las fases de Planificar, Hacer, Verificar y Actuar',
    },
    {
      termino: 'Compromiso de las personas',
      significado:
        'Importancia de la participación activa de todos los empleados en el sistema de gestión para lograr los objetivos organizacionales.',
    },
    {
      termino: 'Estructura de alto nivel',
      significado:
        'Marco común establecido por la ISO para facilitar la integración de diferentes sistemas de gestión.',
    },
    {
      termino: 'Enfoque al cliente',
      significado:
        'Principio que enfatiza la comprensión y satisfacción de las necesidades y expectativas de los clientes.',
    },
    {
      termino: 'Enfoque basado en procesos',
      significado:
        'Gestión de actividades como procesos interrelacionados para optimizar resultados y crear valor.',
    },
    {
      termino: 'Gestión Basada en Riesgos',
      significado:
        'Enfoque que permite anticipar y mitigar posibles incidentes, asegurando la resiliencia organizacional.',
    },
    {
      termino: 'Gestión Basada en Procesos',
      significado:
        'Estructura que permite definir, documentar y optimizar procesos clave en la organización.',
    },
    {
      termino: 'Integración de sistemas de gestión',
      significado:
        'Proceso que permite a las organizaciones cohesionar sus diferentes sistemas de gestión para mejorar eficiencia y efectividad.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'Compromiso de la alta dirección para guiar a la organización hacia el logro de objetivos estratégicos.',
    },
    {
      termino: 'Mejora Continua',
      significado:
        'Principio que impulsa a las organizaciones a buscar constantemente formas de aumentar su rendimiento y eficacia.',
    },
    {
      termino: 'Participación del personal',
      significado:
        'Involucramiento activo de los empleados en la toma de decisiones y procesos organizacionales.',
    },
    {
      termino: 'Pensamiento sistémico',
      significado:
        'Enfoque que permite entender las interrelaciones entre diferentes áreas de una organización y su impacto en el desempeño.',
    },
  ],
}
