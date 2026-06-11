// Fuente de verdad bilingüe del sitio. Edita aquí los textos.
// Cada idioma comparte exactamente la misma estructura.

export type Lang = 'es' | 'en';

export interface Project {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  featured?: boolean;
}

export interface Service {
  icon: string; // emoji o glifo
  title: string;
  description: string;
  bullets: string[];
}

export interface Content {
  meta: { title: string; description: string };
  nav: { about: string; services: string; projects: string; contact: string; cvLabel: string; cvHref: string };
  hero: {
    kicker: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  about: { heading: string; lead: string; paragraphs: string[]; edge: { title: string; text: string } };
  services: { heading: string; lead: string; items: Service[] };
  projects: { heading: string; lead: string; items: Project[]; allLabel: string; allHref: string };
  contact: { heading: string; lead: string; emailLabel: string; email: string; cta: string };
  footer: { tagline: string; rights: string };
}

const sharedEmail = 'antoniopuerto8@gmail.com';
const github = 'https://github.com/PuertOcho';
const linkedin = 'https://www.linkedin.com/in/antonio-puerto-borreguero/';

const projectsBase = {
  tony: github + '/tony',
  puertocho: github + '/puertocho-assistant',
  e2mcp: github + '/e2studio-mcp',
  industry: github + '/tfg-industry-4',
};

export const content: Record<Lang, Content> = {
  es: {
    meta: {
      title: 'Antonio Puerto — AI Engineer | Del LLM al firmware',
      description:
        'Ingeniero de IA. Diseño y despliego soluciones de inteligencia artificial de extremo a extremo: del modelo de lenguaje y los agentes al hardware donde corren.',
    },
    nav: {
      about: 'Sobre mí',
      services: 'Servicios',
      projects: 'Proyectos',
      contact: 'Contacto',
      cvLabel: 'CV',
      cvHref: '/cv-antonio-puerto.pdf',
    },
    hero: {
      kicker: 'AI Engineer · Consultor de IA',
      titleLead: 'Llevo la IA a producción,',
      titleAccent: 'del LLM al firmware.',
      subtitle:
        'Diseño y despliego soluciones de inteligencia artificial de extremo a extremo: del modelo de lenguaje y los agentes, a los microservicios que los sirven y el hardware donde corren.',
      ctaPrimary: 'Hablemos',
      ctaSecondary: 'Ver proyectos',
      stats: [
        { value: '2020', label: 'trabajando con IA' },
        { value: '3', label: 'generaciones de agentes' },
        { value: 'E2E', label: 'del modelo al silicio' },
        { value: 'MCP', label: 'integraciones a medida' },
      ],
    },
    about: {
      heading: 'Sobre mí',
      lead: 'Ingeniero informático que no se queda en el prototipo.',
      paragraphs: [
        'Trabajo con IA desde 2020 — de los fundamentos académicos (algoritmos genéticos, MCTS, árboles de decisión) a construir plataformas agénticas reales: asistentes de voz e IA generativa con arquitectura de microservicios, pipelines de STT/TTS/NLU, servidores MCP a medida y observabilidad de LLMs con Langfuse, Grafana y Prometheus.',
        'No me quedo en la demo: orquesto, monitorizo y opero. Hoy aplico IA a flujos de trabajo de ingeniería e industria, incluyendo entornos donde la inteligencia artificial convive con el hardware.',
      ],
      edge: {
        title: 'Mi diferencial',
        text:
          'Mi base son los sistemas empotrados (firmware sobre Renesas/STM32, FreeRTOS, CAN, protocolos industriales). Eso me da algo poco común en perfiles de IA: entiendo el dispositivo físico de punta a punta, no solo la nube.',
      },
    },
    services: {
      heading: 'En qué ayudo a las empresas',
      lead: 'De pilotos de IA que impresionan en una demo, a sistemas que funcionan de verdad en producción.',
      items: [
        {
          icon: '🤖',
          title: 'Despliegue y gobierno de agentes',
          description:
            'Tu empresa quiere usar agentes de IA, pero el salto del notebook a producción es donde casi todo el mundo se atasca. Yo lo cierro.',
          bullets: [
            'Arquitectura de agentes y de integraciones MCP',
            'Observabilidad y trazabilidad de LLMs (Langfuse)',
            'Control de costes, latencia y fiabilidad',
          ],
        },
        {
          icon: '⚙️',
          title: 'IA en entornos con hardware',
          description:
            'Integro IA en flujos industriales y de dispositivo: del backend al firmware. Si tu producto tiene electrónica, no necesitas dos proveedores.',
          bullets: [
            'IA aplicada a procesos de ingeniería e industria',
            'Puente software ↔ dispositivo (CAN, protocolos industriales)',
            'Microservicios y arquitecturas distribuidas',
          ],
        },
        {
          icon: '✨',
          title: 'Contenido e IA generativa',
          description:
            'Sistemas para generar y gestionar contenido con IA — desde guiones a publicación — con criterio de ingeniería, no solo prompts sueltos.',
          bullets: [
            'Pipelines de IA generativa a medida',
            'Agentes de contenido y automatización',
            'Asesoría de adopción de IA generativa',
          ],
        },
      ],
    },
    projects: {
      heading: 'Proyectos destacados',
      lead: 'I+D propia en IA que sostiene mi práctica profesional. El código está abierto.',
      allLabel: 'Ver todo en GitHub',
      allHref: github,
      items: [
        {
          name: 'tony',
          tagline: 'Plataforma agéntica de 3ª generación',
          description:
            'Sistema agéntico de grado producción: servidor de agentes, cliente de escritorio, servidor MCP propio, proxy de modelos, observabilidad de LLMs con Langfuse y monitorización con Grafana/Prometheus. +1.000 commits.',
          tags: ['Agentes', 'MCP', 'Langfuse', 'Docker', 'Observabilidad'],
          href: projectsBase.tony,
          featured: true,
        },
        {
          name: 'puertocho-assistant',
          tagline: 'Asistente de IA de voz (2ª gen)',
          description:
            'Arquitectura de microservicios completa (Spring Boot + Eureka) con capa de IA de voz E2E: STT, NLU, comprensión de diálogo, gestor de intenciones y varios microservicios de TTS. Desplegado sobre Raspberry Pi.',
          tags: ['Microservicios', 'STT/TTS', 'NLU', 'Spring Boot', 'Edge'],
          href: projectsBase.puertocho,
          featured: true,
        },
        {
          name: 'e2studio-mcp',
          tagline: 'Servidor MCP para ingeniería embedded',
          description:
            'Servidor MCP que controla e2 Studio / Renesas RX desde un agente: build, debug y análisis de memoria. El puente exacto entre LLMs y herramientas reales de hardware.',
          tags: ['MCP', 'Renesas RX', 'Python', 'Embedded'],
          href: projectsBase.e2mcp,
          featured: true,
        },
        {
          name: 'tfg-industry-4',
          tagline: 'Digitalización para Industria 4.0',
          description:
            'Proyecto de digitalización empresarial orientado a Industria 4.0: captura, procesado y explotación de datos para la toma de decisiones.',
          tags: ['Industria 4.0', 'Datos', 'Python'],
          href: projectsBase.industry,
        },
      ],
    },
    contact: {
      heading: '¿Tienes un piloto de IA que quieres llevar a producción?',
      lead: 'Hablemos. Cuéntame el problema y te digo con franqueza si puedo ayudarte y cómo.',
      emailLabel: 'Escríbeme',
      email: sharedEmail,
      cta: 'Enviar email',
    },
    footer: {
      tagline: 'AI Engineer · Del LLM al firmware',
      rights: 'Hecho con Astro.',
    },
  },

  en: {
    meta: {
      title: 'Antonio Puerto — AI Engineer | From the LLM to the firmware',
      description:
        'AI Engineer. I design and ship end-to-end artificial-intelligence solutions: from the language model and agents to the hardware they run on.',
    },
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      cvLabel: 'CV',
      cvHref: '/cv-antonio-puerto-en.pdf',
    },
    hero: {
      kicker: 'AI Engineer · AI Consultant',
      titleLead: 'I take AI to production,',
      titleAccent: 'from the LLM to the firmware.',
      subtitle:
        'I design and ship end-to-end AI solutions: from the language model and agents, to the microservices that serve them and the hardware they run on.',
      ctaPrimary: "Let's talk",
      ctaSecondary: 'See projects',
      stats: [
        { value: '2020', label: 'working with AI' },
        { value: '3', label: 'agent generations' },
        { value: 'E2E', label: 'from model to silicon' },
        { value: 'MCP', label: 'custom integrations' },
      ],
    },
    about: {
      heading: 'About me',
      lead: "A computer engineer who doesn't stop at the prototype.",
      paragraphs: [
        "I've worked with AI since 2020 — from academic foundations (genetic algorithms, MCTS, decision trees) to building real agentic platforms: voice and generative-AI assistants on microservice architectures, STT/TTS/NLU pipelines, custom MCP servers, and LLM observability with Langfuse, Grafana and Prometheus.",
        "I don't stop at the demo: I orchestrate, monitor and operate. Today I apply AI to engineering and industrial workflows, including environments where AI lives alongside hardware.",
      ],
      edge: {
        title: 'My edge',
        text:
          'My foundation is embedded systems (firmware on Renesas/STM32, FreeRTOS, CAN, industrial protocols). That gives me something rare among AI profiles: I understand the physical device end to end, not just the cloud.',
      },
    },
    services: {
      heading: 'How I help companies',
      lead: 'From AI pilots that dazzle in a demo, to systems that actually work in production.',
      items: [
        {
          icon: '🤖',
          title: 'Agent deployment & governance',
          description:
            'Your company wants to use AI agents, but the jump from notebook to production is where almost everyone gets stuck. I close that gap.',
          bullets: [
            'Agent and MCP integration architecture',
            'LLM observability and tracing (Langfuse)',
            'Cost, latency and reliability under control',
          ],
        },
        {
          icon: '⚙️',
          title: 'AI in hardware environments',
          description:
            'I integrate AI into industrial and device workflows: from backend to firmware. If your product has electronics, you don\'t need two vendors.',
          bullets: [
            'AI applied to engineering and industrial processes',
            'Software ↔ device bridge (CAN, industrial protocols)',
            'Microservices and distributed architectures',
          ],
        },
        {
          icon: '✨',
          title: 'Content & generative AI',
          description:
            'Systems to generate and manage content with AI — from scripts to publishing — built with engineering rigor, not just loose prompts.',
          bullets: [
            'Custom generative-AI pipelines',
            'Content agents and automation',
            'Generative-AI adoption advisory',
          ],
        },
      ],
    },
    projects: {
      heading: 'Selected projects',
      lead: 'Personal AI R&D that underpins my professional practice. The code is open.',
      allLabel: 'See everything on GitHub',
      allHref: github,
      items: [
        {
          name: 'tony',
          tagline: '3rd-generation agentic platform',
          description:
            'Production-grade agentic system: agent server, desktop client, custom MCP server, model proxy, LLM observability with Langfuse and Grafana/Prometheus monitoring. 1,000+ commits.',
          tags: ['Agents', 'MCP', 'Langfuse', 'Docker', 'Observability'],
          href: projectsBase.tony,
          featured: true,
        },
        {
          name: 'puertocho-assistant',
          tagline: 'Voice AI assistant (2nd gen)',
          description:
            'Full microservice architecture (Spring Boot + Eureka) with an end-to-end voice AI layer: STT, NLU, dialogue understanding, intent manager and multiple TTS microservices. Deployed on Raspberry Pi.',
          tags: ['Microservices', 'STT/TTS', 'NLU', 'Spring Boot', 'Edge'],
          href: projectsBase.puertocho,
          featured: true,
        },
        {
          name: 'e2studio-mcp',
          tagline: 'MCP server for embedded engineering',
          description:
            'An MCP server that drives e2 Studio / Renesas RX from an agent: build, debug and memory analysis. The exact bridge between LLMs and real hardware tooling.',
          tags: ['MCP', 'Renesas RX', 'Python', 'Embedded'],
          href: projectsBase.e2mcp,
          featured: true,
        },
        {
          name: 'tfg-industry-4',
          tagline: 'Industry 4.0 digitalization',
          description:
            'A business-digitalization project oriented to Industry 4.0: capturing, processing and exploiting data for decision-making.',
          tags: ['Industry 4.0', 'Data', 'Python'],
          href: projectsBase.industry,
        },
      ],
    },
    contact: {
      heading: 'Got an AI pilot you want to take to production?',
      lead: "Let's talk. Tell me the problem and I'll be straight about whether I can help and how.",
      emailLabel: 'Email me',
      email: sharedEmail,
      cta: 'Send email',
    },
    footer: {
      tagline: 'AI Engineer · From the LLM to the firmware',
      rights: 'Built with Astro.',
    },
  },
};

export const social = { github, linkedin };
