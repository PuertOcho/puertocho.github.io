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
    pipeline: string[];
    stats: { value: string; label: string }[];
  };
  about: {
    heading: string;
    lead: string;
    paragraphs: string[];
    edge: { title: string; text: string };
    timelineHeading: string;
    timeline: { year: string; text: string }[];
  };
  services: { heading: string; lead: string; items: Service[] };
  projects: { heading: string; lead: string; items: Project[]; allLabel: string; allHref: string };
  contact: { heading: string; lead: string; emailLabel: string; email: string; cta: string };
  footer: { tagline: string; rights: string };
}

const sharedEmail = 'info@antoniopuerto.com';
const github = 'https://github.com/PuertOcho';
const linkedin = 'https://www.linkedin.com/in/antonio-puerto-borreguero/';

const projectsBase = {
  tony: github + '/tony',
  puertocho: github + '/puertocho-assistant',
  nuka: github + '/nuka',
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
      pipeline: ['LLM', 'agentes', 'microservicios', 'firmware'],
      stats: [
        { value: '−94 %', label: 'latencia de eventos en un sistema en producción' },
        { value: '9/9', label: 'módulos migrados y verificados en hardware real' },
        { value: '3', label: 'generaciones de asistentes propios desde 2023' },
        { value: '20+', label: 'servidores MCP construidos y operando' },
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
      timelineHeading: 'Trayectoria',
      timeline: [
        { year: '2020', text: 'Fundamentos de IA en la universidad: algoritmos genéticos, MCTS, árboles de decisión.' },
        { year: '2023', text: 'nuka — 1ª generación de asistente propio: GPT, Whisper, TTS y RAG, en la primera ola de la IA generativa.' },
        { year: '2025', text: 'puertocho-assistant — 2ª generación: microservicios y pipeline de voz E2E con votación de modelos (MoE).' },
        { year: 'hoy', text: 'tony — 3ª generación: plataforma agéntica con 20+ MCPs, evaluación continua y hardware propio. Y consultoría de IA aplicada en entornos industriales.' },
      ],
    },
    services: {
      heading: 'En qué ayudo a las empresas',
      lead: 'De pilotos de IA que impresionan en una demo, a sistemas que funcionan de verdad en producción.',
      items: [
        {
          icon: 'agentes',
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
          icon: 'hardware',
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
          icon: 'contenido',
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
            'Multi-proveedor (OpenAI, Anthropic, Google) con MoE propio: votación paralela de modelos con consenso. Cerebro bio-inspirado sobre LangGraph, 20+ servicios MCP, evaluación semántica continua (122 casos con juez LLM), observabilidad con Langfuse/Grafana y hardware propio (ESP32-S3). 1.001 commits, 36 releases.',
          tags: ['Agentes', 'LangGraph', 'MCP', 'MoE', 'Langfuse', 'ESP32'],
          href: projectsBase.tony,
          featured: true,
        },
        {
          name: 'puertocho-assistant',
          tagline: 'Asistente de IA de voz (2ª gen)',
          description:
            'Microservicios Spring Boot + Eureka con capa de voz E2E: Whisper local, gestor de intenciones LLM-RAG con votación MoE de 3 modelos, descomposición dinámica de tareas y cadena TTS con fallbacks. Desplegado sobre Raspberry Pi.',
          tags: ['Microservicios', 'Whisper', 'MoE', 'Spring Boot', 'Edge'],
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
          name: 'nuka',
          tagline: 'Donde empezó la serie (1ª gen, 2023)',
          description:
            'Asistente multimodal construido en la primera ola de la IA generativa: GPT, Whisper, Azure TTS, DALL-E y RAG sobre Obsidian. App Ionic/Angular + servidor Spring Boot. 485 commits.',
          tags: ['GPT', 'Whisper', 'RAG', 'Ionic', 'Spring Boot'],
          href: projectsBase.nuka,
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
      pipeline: ['LLM', 'agents', 'microservices', 'firmware'],
      stats: [
        { value: '−94%', label: 'event latency in a production system' },
        { value: '9/9', label: 'modules migrated and verified on real hardware' },
        { value: '3', label: 'generations of self-built assistants since 2023' },
        { value: '20+', label: 'MCP servers built and operating' },
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
      timelineHeading: 'Track record',
      timeline: [
        { year: '2020', text: 'AI foundations at university: genetic algorithms, MCTS, decision trees.' },
        { year: '2023', text: 'nuka — 1st self-built assistant generation: GPT, Whisper, TTS and RAG, in the first wave of generative AI.' },
        { year: '2025', text: 'puertocho-assistant — 2nd generation: microservices and an E2E voice pipeline with model voting (MoE).' },
        { year: 'now', text: 'tony — 3rd generation: an agentic platform with 20+ MCPs, continuous evaluation and its own hardware. Plus applied-AI consulting in industrial environments.' },
      ],
    },
    services: {
      heading: 'How I help companies',
      lead: 'From AI pilots that dazzle in a demo, to systems that actually work in production.',
      items: [
        {
          icon: 'agents',
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
          icon: 'hardware',
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
          icon: 'content',
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
            'Multi-provider (OpenAI, Anthropic, Google) with a custom MoE: parallel model voting with consensus. Bio-inspired brain on LangGraph, 20+ MCP services, continuous semantic evaluation (122 cases with an LLM judge), Langfuse/Grafana observability and its own hardware (ESP32-S3). 1,001 commits, 36 releases.',
          tags: ['Agents', 'LangGraph', 'MCP', 'MoE', 'Langfuse', 'ESP32'],
          href: projectsBase.tony,
          featured: true,
        },
        {
          name: 'puertocho-assistant',
          tagline: 'Voice AI assistant (2nd gen)',
          description:
            'Spring Boot + Eureka microservices with an E2E voice layer: local Whisper, an LLM-RAG intent manager with 3-model MoE voting, dynamic task decomposition and a TTS chain with fallbacks. Deployed on Raspberry Pi.',
          tags: ['Microservices', 'Whisper', 'MoE', 'Spring Boot', 'Edge'],
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
          name: 'nuka',
          tagline: 'Where the series began (1st gen, 2023)',
          description:
            'A multimodal assistant built in the first wave of generative AI: GPT, Whisper, Azure TTS, DALL-E and RAG over Obsidian. Ionic/Angular app + Spring Boot server. 485 commits.',
          tags: ['GPT', 'Whisper', 'RAG', 'Ionic', 'Spring Boot'],
          href: projectsBase.nuka,
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
