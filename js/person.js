var person = {
    firstname: "Isaac David",
    lastname: "Gadea",
    birth_date: "1981-04-27",
    email: "gadeaid@gmail.com",
    nationality: "Venezolano",
    image: "img/perfil.png",
    address: "Montevideo Uruguay",
    phone: "+598 98298618",
    education: [
        {
            institution: "Udemy, Educacion Online",
            course: "Desarrollo Web FullStack 2022",
            year_from: 2022,
            year_to: "En Curso"
        },
        {
            institution: "Bios Academy, Montevideo Uruguay",
            course: "Programador Web .NET",
            year_from: 2021,
            year_to: 2022
        },
        {
            institution: "Hack Academy, Montevideo Uruguay",
            course: "Desarrollo Web Front-End (Html, Css, Javascript)",
            year_from: 2019,
            year_to: 2019
        },
        {
            institution: "Instituto Universitario de Tecnologia Antonio José de Sucre, Barquisimeto Venezuela",
            course: "Técnico Superior Universitario en Informática",
            year_from: 2002,
            year_to: 2005
        },

    ],
    jobs: [
           {
            company: "Wallcoms del Uruguay S.R.L. ., Montevideo Uruguay",
            title: "Técnico de Telecomiunicaciones",
            year_from: 2022,
            year_to: "Actualmente",
            tareas: "Instalación de Equipos de transmisión y recepción de Telecomunicaciones (Antenas de Telefonía Móvil Celular, Gabinetes, Radios RRU) adecuación de salas de control de datos y Fibra Óptica, Tendido de Cableado estructurado, Relevamientos técnicos en las distintas instalaciones de telefonía existentes en todo el territorio del Uruguay, cumpliendo con los más altos estándares internacionales para la satisfacción del cliente .",
        },
        
        {     
            company: "Númina S.A., Montevideo Uruguay",
            title: "Asesor Comercial Jr.",
            year_from: 2021,
            year_to: 2022,
            tareas: "Gestión de la cartera de clientes existentes y generación constante de nuevos clientes potenciales identificando las necesidades y oportunidades de mejora en su gestión administrativa , asesorar al cliente en la venta consultiva de herramientas informáticas para la gestión administrativa promocionando el uso de sistemas ERP, (puntualmente en Sistema KORE ERP), Análisis de situación actual de la empresa y presentación de soluciones enmarcadas dentro del flujo de trabajo del Sistema KORE, Participación en reuniones con clientes para relevar situación actual y presentaciones de demostración del sistema KORE, Elaboración y presentación de propuestas económicas a cada cliente contemplando las funcionalidades, módulos y usuarios necesarios para optimizar la gestión administrativa de la empresa con el uso del sistema KORE ERP, seguimiento de necesidades de los clientes en cuanto a la seguridad informática ofreciendo el servicio de Administración de Seguridad Remota y el servicio de Mantenimiento de Infraestructura Informática, Administración y Virtualización de Servidores, Evaluar y Recomendar a los clientes en cuanto la renovación o adquisición del Hardware necesario para las actividades de la empresa (Pc, Servidores, Routers, UPS, Switchs, UTM, entre otros), Gestionar las Licencias de Software y Antivirus requeridas para cada cliente.",
        },
        // {
        //     company: "Seguridad Diferente, Montevideo Uruguay",
        //     title: "Guardia de Seguridad",
        //     year_from: 2019,
        //     year_to: 2020,
        //     tareas: "Vigilancia y protección de bienes muebles/inmuebles, establecidos por la compañía en los lugares que son prestados los servicios de vigilancia y seguridad; Controlar la identidad en el acceso a determinadas instalaciones, evitar la comisión de actos delictivos o infracciones, en las instalaciones puestas a resguardo; Poner a los delincuentes a disposición de las Fuerzas y los Cuerpos de Seguridad, Asimismo, los instrumentos, efectos y pruebas del delito; Proteger el almacenamiento, recuento, clasificación y transporte de dinero, valores u objetos valiosos; Prestar servicios de respuesta de las alarmas que se produzcan en las instalaciones.",
        // },
        {
            company: "“PDVSA” PETROLEOS DE VENEZUELA S.A., Anzoategui - Venezuela",
            title: "Supervisor de Administracion de Contratos",
            year_from: 2017,
            year_to: 2019,
            tareas: "Responsable de la gestión administrativa y servicios contratados, supervisión, seguimiento, control de desarrollo y consecución satisfactoria de los objetos contractuales, negociación, implementación y gestión de todos los aspectos contractuales de la organización, participar en los procesos de contratacion de servicios elaborando volumetrias de servicios y elaboracion de planes de contrtacion, velar por la correcta carga en Sistema SAP de las valuaciones de pagos para los diferentes contratos en ejecucion, atención a proveedores, atención al cliente, gestión de personal bajo el cargo.",
        },
        {
            company: "“PDVSA” PETROLEOS DE VENEZUELA S.A., Anzoategui - Venezuela",
            title: "Administrador de Contratos",
            year_from: 2010,
            year_to: 2017,
            tareas: "Administrador de contratos velando por el cumplimito de las obligaciones establecidas en la Ley de Contrataciones Publicas, control de ejecucion de proyectos y servicios contratados, modificaciones y cierres de contratos,  manejo de presupuesto, control de proyectos de obras civiles y servicios comerciales, carga en sistema SAP de las valuaciones de pagos para los diferentes contratos en ejecucion, atención a proveedores, atención al cliente.",
        },
        {
            company: "“PDVSA” PETROLEOS DE VENEZUELA S.A., Anzoategui - Venezuela",
            title: "Supervisor de Sistemas",
            year_from: 2010,
            year_to: 2010,
            tareas: "Gestion de implantacion de Sistemas de informacion que permiten el registro de Ordenes de Servicios de mantenimiento para controlar la volumetria del trabajo en actividades de mantenimiento de instalaciones y ejecucion de obras civiles mediante la generacion de tickets de servicios para el personal encargado de ejecutar dichas actividades, Control y Seguimiento de Proyectos y manejo de presupuesto.",
        },
        {
            company: "“PDVSA” PETROLEOS DE VENEZUELA S.A., Anzoategui - Venezuela",
            title: "Supervisor de Gestion de Personal y Recurso Humano",
            year_from: 2007,
            year_to: 2009,
            tareas: "Manejo del Recurso Humano, Desarrollo de Carrera, Planes de Desarrollo y Crecimiento personal, Captacion de Personal, elaboracion de plan de vacaciones del personal, gestionar planes de jubilacion y reemplazo de personal, elaboracion de estructura organizacional de la Gerencia.",
        },
        {
            company: "“PDVSA” PETROLEOS DE VENEZUELA S.A., Anzoategui - Venezuela",
            title: "Analista de Gestion",
            year_from: 2005,
            year_to: 2007,
            tareas: "Planificacion y seguimiento de Indicadores de Gestion Administrativa mediante el uso de tableros de control estadisticos (BALANCE SCORE CARD) apoyo directo a la Gerencia en la planificacion estrategica y cumplimiento de objetivos, evaluacion de resultados y ",
        },
    ],
    github: "https://github.com/GadeaDev",
    twitter: "https://twitter.com/Gadeaid",
    facebook: "https://www.facebook.com/Isaac.Gadea",
    linkedin: "https://www.linkedin.com/in/isaac-gadea/"
};
