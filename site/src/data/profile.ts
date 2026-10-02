export interface Stat {
  label: string;
  value: number;
  suffix: string;
  note: string;
}

export interface Project {
  title: string;
  org?: string;
  href: string;
  role: string;
  description: string;
  bullets: string[];
  tags: string[];
  featured: boolean;
  year: string;
  scale: string;
  mockup?: string;
  /** Added for the home-page work card fact rows (additive — optional). */
  problem?: string;
  solution?: string;
  results?: string;
}

/** One tile inside a tech-stack group card. */
export interface StackItem {
  label: string;
  /** Key passed to <Icon name={...} />. */
  icon: string;
}

/** One group card in the home page "Tech Stack" section. */
export interface StackGroup {
  id: string;
  title: string;
  items: StackItem[];
}

/** One repo card in the home page "Open Source" row. */
export interface OssRepo {
  name: string;
  href: string;
  description: string;
  /**
   * Star/like counts. Leave undefined when the figure is not known — the card
   * hides that metric rather than printing a misleading "0".
   */
  stars?: number;
  likes?: number;
  status: string;
}

export interface StackLayer {
  id: string;
  index: string;
  title: string;
  summary: string;
  items: string[];
}

export interface ExperienceBlock {
  id: string;
  index: string;
  title: string;
  items: string[];
}

export interface ContactLink {
  label: string;
  href: string;
  handle: string;
  kind: 'discord' | 'email' | 'github';
  note: string;
}

export const profile = {
  name: 'karutoil',
  title: 'AI Systems Engineer',
  subtitle: 'Agent Infrastructure · LLM Gateways · Automation',
  tagline:
    'I build the scaffolding around AI models — gateways, agent runtimes, code intelligence, and the automation that makes them dependable in production.',
  headline: ['Agents that', 'actually work.'],
  location: 'Remote · UTC-7',
  availability: 'Available for contracts',
  email: 'contact@karutoil.site',

  bio: [
    'I build the infrastructure around AI models: the gateway every request routes through, the tool runtime an agent calls, the diagnostics that catch its mistakes, and the automation that ties it into real workflows.',
    'My work sits mostly in Go, Rust, and TypeScript, and centers on one idea — models are unreliable but powerful, so the value is in the scaffolding: protocol translation across providers, failover and budgets, structured validation, and tight feedback loops that let an agent see its own errors and recover.',
    'Underneath is a background in production systems and infrastructure: Proxmox clusters, bare-metal provisioning, and game-server operations at scale. That is where I learned that "it works on my machine" is not a shipping strategy, and it is why everything I build assumes it will eventually meet real traffic.'
  ],

  stats: [
    { label: 'Public repositories', value: 13, suffix: '', note: 'agent tooling, gateways, and developer tools' },
    { label: 'Languages in production', value: 6, suffix: '', note: 'TypeScript, Go, Rust, Python, JavaScript, Shell' },
    { label: 'Years in production', value: 5, suffix: '+', note: 'Linux, virtualization, and network operations' },
    { label: 'Servers managed', value: 500, suffix: '+', note: 'across game, hosting, and lab environments' }
  ] as Stat[],

  // Three-layer model that the hero's 3D stack visualises.
  layers: [
    {
      id: 'gateways',
      index: '01',
      title: 'LLM infrastructure',
      summary: 'The plumbing between a product and every model provider — routing, protocol translation, cost control, and observability.',
      items: ['Multi-provider gateways', 'Protocol translation', 'Routing + failover', 'Budgets & rate limits']
    },
    {
      id: 'agents',
      index: '02',
      title: 'Agent tooling',
      summary: 'Harnesses, interfaces, and extensions that keep a model useful — code intelligence, memory, and control over the loop.',
      items: ['Agent web UIs', 'Code intelligence', 'Agent memory', 'Provider plugins']
    },
    {
      id: 'platforms',
      index: '03',
      title: 'Platforms',
      summary: 'Full products that run for real users: provisioning, email, auth, realtime streams, and the operations layer beneath.',
      items: ['Game server panels', 'Service platforms', 'Bare metal & containers', 'Realtime systems']
    }
  ] as StackLayer[],

  stack: [
    'go',
    'rust',
    'typescript',
    'python',
    'javascript',
    'bash',
    'node',
    'bun',
    'react',
    'astro',
    'sqlite',
    'postgresql',
    'redis',
    'websocket',
    'docker',
    'containerd',
    'linux',
    'proxmox',
    'ansible',
    'nginx',
    'cloudflare'
  ],

  // Every entry below is a public repo on github.com/karutoil unless noted.
  projects: [
    {
      title: 'AI Gateway',
      org: 'infrastructure',
      href: 'https://github.com/karutoil/ai-gateway',
      role: 'One domain for every model',
      description:
        'A Go gateway that fronts OpenAI, Anthropic, Azure, and any OpenAI-compatible provider — exposing a single OpenAI/Anthropic/Responses-compatible surface with routing, budgets, caching, and an embedded admin UI.',
      bullets: [
        'Serves chat, completions, embeddings, messages, and responses — streaming included',
        'Automatic protocol translation between OpenAI, Anthropic, and Responses',
        'Routing strategies: round-robin, random, weighted, and failover',
        'Per-key rate limits, token and cost quotas, AES-GCM encrypted provider keys',
        '6k+ model catalog with pricing, virtual aliases, and model auto-discovery',
        'Single self-contained binary — web UI and SQLite embedded, systemd-ready'
      ],
      tags: ['go', 'gateway', 'routing', 'openai', 'anthropic'],
      featured: true,
      year: '2026',
      scale: 'Go · self-hosted',
      problem: 'Every provider speaks a different protocol, so each product re-implements auth, routing, and retries — and provider keys end up scattered across services.',
      solution: 'One Go binary that normalises OpenAI, Anthropic, Azure, and Responses behind a single surface, with strategy-based routing, budgets, and encrypted keys.',
      results: 'Six provider surfaces collapse into one endpoint; routing, failover, and per-key cost control are configured instead of coded.'
    },
    {
      title: 'Catalyst',
      org: 'catalystctl',
      href: 'https://github.com/catalystctl/catalyst',
      role: 'Game-server management platform · maintainer',
      description:
        'The modern open-source alternative to Pterodactyl: a Rust core with native containerd integration, multi-node lifecycle management, live console access, and one-line install for enterprise game hosts.',
      bullets: [
        'Rust core with direct containerd integration — no daemon tax',
        'Sub-10ms WebSocket console round-trips, streaming live output',
        'Multi-node server lifecycle with full container isolation',
        'RBAC with 20+ permissions, audit logging, API keys, and TLS by default',
        'Plugin system for custom routes, hooks, and scheduled tasks',
        'One-line install: panel, database, and reverse proxy in about a minute'
      ],
      tags: ['rust', 'typescript', 'containerd', 'react', 'websocket'],
      featured: true,
      year: '2024 — now',
      scale: 'Multi-node platform',
      mockup: '/mockups/catalyst.svg',
      problem: 'Existing game-server panels carry a separate daemon per node, so console latency, upgrades, and multi-node operations all become their own failure mode.',
      solution: 'A Rust core that drives containerd directly, with a WebSocket console, multi-node lifecycle management, RBAC, and a one-line installer.',
      results: 'Sub-10ms console round-trips; a single install brings up panel, database, and reverse proxy in about a minute.'
    },
    {
      title: 'PI Web',
      org: 'agent tooling',
      href: 'https://github.com/karutoil/pi-web',
      role: 'Real-time interface for a coding agent',
      description:
        'A real-time browser interface for the PI coding agent — project and session management, streamed chat, and live visibility into every tool call and reasoning step.',
      bullets: [
        'Live WebSocket streaming over PI native RPC mode',
        'Real-time tool-call display: read, bash, edit, write, grep, find, ls',
        'Toggleable thinking and reasoning visibility',
        'In-stream steering and abort controls',
        'Aggregate token and cost roll-up per project and per model'
      ],
      tags: ['bun', 'hono', 'react', 'websocket', 'agent-ui'],
      featured: true,
      year: '2026',
      scale: 'TypeScript · 9★',
      problem: 'A coding agent runs in a terminal, so long sessions are invisible: no way to see tool calls as they happen, steer mid-run, or total up what a project costs.',
      solution: 'A real-time browser front end over the agent\'s native RPC mode — project and session management, streamed chat, live tool-call display, and in-stream steering.',
      results: 'Every reasoning step and tool call is visible while it runs, with token and cost roll-up per project and per model.'
    },
    {
      title: 'pi-lsp',
      org: 'code intelligence',
      href: 'https://github.com/karutoil/pi-lsp',
      role: 'Instant LSP emulation for coding agents',
      description:
        'Brings in-process tree-sitter diagnostics and compiler-backed type checking into a coding agent, so it sees its own errors before it ever claims to be finished.',
      bullets: [
        'Sub-millisecond parses via in-process WASM — no daemon, no child processes',
        '80+ languages, with grammars bundled and npm deps auto-installed',
        'Auto-checks after every edit and injects diagnostics back into context',
        'Two-tier validation: tree-sitter for syntax, the real compiler for types'
      ],
      tags: ['typescript', 'tree-sitter', 'lsp', 'wasm'],
      featured: false,
      year: '2026',
      scale: 'TypeScript · 2★'
    },
    {
      title: 'Rust Codebase Search',
      org: 'code intelligence',
      href: 'https://github.com/karutoil/rust-codebase-search',
      role: 'Hybrid semantic code search with MCP',
      description:
        'A high-performance code search tool in Rust that indexes a codebase and searches it with hybrid vector similarity plus full-text search, built for AI-assisted development with full MCP support.',
      bullets: [
        'Hybrid retrieval: vector similarity combined with full-text search',
        'Native MCP server support for direct agent integration',
        'Written in Rust for fast indexing over large repositories',
        'Designed for AI-assisted development workflows'
      ],
      tags: ['rust', 'mcp', 'semantic-search', 'embeddings'],
      featured: false,
      year: '2026',
      scale: 'Rust · MCP server'
    },
    {
      title: 'Grok Build WebUI',
      org: 'agent tooling',
      href: 'https://github.com/karutoil/grok-build-webui',
      role: 'Persistent agent sessions in the browser',
      description:
        'Run persistent Grok Build CLI sessions in the browser — tabs and split panes per project, built to sit behind a Cloudflare Tunnel and survive refreshes, logouts, and network blips.',
      bullets: [
        'Terminal-per-tab with horizontal and vertical splits via xterm.js',
        'Sessions survive refreshes, logouts, and disconnects',
        'Git panel: status, per-file diffs, log, blame, stage, commit',
        'Preview panel that reverse-proxies a dev server including WebSockets',
        'Auth with bcrypt passwords, passkeys/WebAuthn, and JWT cookies'
      ],
      tags: ['go', 'xterm', 'git', 'webauthn'],
      featured: false,
      year: '2026',
      scale: 'Go · 24/7 sessions'
    },
    {
      title: 'catcode-engraphis-memory',
      org: 'agent plugin',
      href: 'https://github.com/karutoil/catcode-engraphis-memory',
      role: 'Persistent, explainable agent memory',
      description:
        'A Catalyst Code plugin that replaces the built-in markdown memory store with a self-hosted Engraphis server, giving an agent hybrid semantic search and cited, grounded recall.',
      bullets: [
        'Swaps flat markdown memory for a scoped, bi-temporal memory server',
        'Hybrid semantic search with cited, grounded answers',
        'Supersession history, decay, and cross-session recall',
        'Ships a memory provider plus ten agent-facing tools'
      ],
      tags: ['python', 'memory', 'plugin', 'search'],
      featured: false,
      year: '2026',
      scale: 'Python · 1★'
    },
    {
      title: 'catcode-chatgpt-provider',
      org: 'agent plugin',
      href: 'https://github.com/karutoil/catcode-chatgpt-provider',
      role: 'Subscription OAuth provider for an agent',
      description:
        'A Catalyst Code plugin that adds ChatGPT Plus/Pro (Codex) as a subscription-OAuth provider, owning the OpenAI device-code login while the agent keeps its own tools and loop.',
      bullets: [
        'Device-code OAuth flow driven from a single login command',
        'Refreshes Bearer tokens and account id per turn automatically',
        'Keeps tooling, approvals, and the agent loop under the host agent',
        'Ships as a drop-in plugin with no core changes'
      ],
      tags: ['shell', 'oauth', 'plugin', 'openai'],
      featured: false,
      year: '2026',
      scale: 'Shell plugin'
    },
    {
      title: 'umans-claude-vision',
      org: 'agent plugin',
      href: 'https://github.com/karutoil/umans-claude-vision',
      role: 'Vision handoff for text-only models',
      description:
        'A Claude Code plugin adding a view_image tool for providers whose main model cannot read images — it hands the image to a native-vision model and returns the description.',
      bullets: [
        'Adds image understanding to text-only provider routes',
        'Hands off to native-vision models with automatic fallback chain',
        'Fetches the live model list on every call so it never goes stale',
        'Exposes a single view_image MCP tool'
      ],
      tags: ['javascript', 'mcp', 'vision', 'plugin'],
      featured: false,
      year: '2026',
      scale: 'JS · MCP tool'
    },
    {
      title: 'pi-enhanced-tools',
      org: 'agent tooling',
      href: 'https://github.com/karutoil/pi-enhanced-tools',
      role: 'Tool suite for a coding agent',
      description:
        'A focused tool suite that extends a coding agent with structured code search, semantic git operations, security scanning, and multi-file refactor orchestration.',
      bullets: [
        'Unified-diff patch application with automatic locate',
        'Semantic git operations: status, diff, log, blame, archeology',
        'Security scanning with semgrep or regex fallback',
        'Multi-file rename and refactor orchestration'
      ],
      tags: ['typescript', 'git', 'security', 'refactoring'],
      featured: false,
      year: '2026',
      scale: 'TypeScript · 2★'
    },
    {
      title: 'pi-powershell-native',
      org: 'agent tooling',
      href: 'https://github.com/karutoil/pi-powershell-native',
      role: 'Native shell on Windows',
      description:
        'A coding-agent extension that replaces the built-in bash tool with native PowerShell on Windows and routes shell shortcuts through it.',
      bullets: [
        'Native PowerShell execution on Windows agents',
        'Shortcut routing for shell escape commands',
        'Drop-in compatibility with the existing tool-call schema'
      ],
      tags: ['typescript', 'powershell', 'windows'],
      featured: false,
      year: '2026',
      scale: 'TypeScript'
    },
    {
      title: 'aurmanager',
      org: 'developer tool',
      href: 'https://github.com/karutoil/aurmanager',
      role: 'AUR package management tooling',
      description:
        'Tooling for managing AUR packages on Arch Linux — built to make local package management and rebuilds more predictable.',
      bullets: [
        'Manages AUR package installs and updates',
        'Built for Arch Linux workflows',
        'Written in TypeScript'
      ],
      tags: ['typescript', 'arch', 'linux'],
      featured: false,
      year: '2026',
      scale: 'TypeScript'
    },
    {
      title: 'imagetobase64',
      org: 'developer tool',
      href: 'https://github.com/karutoil/imagetobase64',
      role: 'Client-side image encoder',
      description:
        'A tiny client-side tool that re-encodes images to WebP and exports Base64 entirely in the browser — nothing is ever uploaded.',
      bullets: [
        'Fully client-side via the Canvas API — no backend, no analytics',
        'Paste, drag and drop, or pick from disk',
        'Quality slider with compact, balanced, and high presets',
        'Live size comparison and Base64 length readout'
      ],
      tags: ['javascript', 'canvas', 'privacy'],
      featured: false,
      year: '2026',
      scale: 'Zero backend'
    }
  ] as Project[],

  /**
   * Home page "Tech Stack" section.
   * Six group cards; each tile is an icon key (see components/Icon.astro) plus a
   * short label. Every entry below is drawn from `stack`, the project tags, or
   * the experience blocks above — nothing here is invented.
   */
  stackGroups: [
    {
      id: 'languages',
      title: 'Languages',
      items: [
        { label: 'Go', icon: 'bolt' },
        { label: 'Rust', icon: 'cpu' },
        { label: 'TypeScript', icon: 'code' },
        { label: 'Python', icon: 'terminal' },
        { label: 'JavaScript', icon: 'code' },
        { label: 'Bash', icon: 'terminal' },
        { label: 'SQL', icon: 'database' }
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI / ML',
      items: [
        { label: 'LLM gateways', icon: 'radio' },
        { label: 'Agent runtimes', icon: 'brain' },
        { label: 'MCP servers', icon: 'puzzle' },
        { label: 'Embeddings', icon: 'sparkle' },
        { label: 'Semantic search', icon: 'search' },
        { label: 'Tree-sitter', icon: 'layers' },
        { label: 'Vision handoff', icon: 'eye' },
        { label: 'Agent memory', icon: 'book' }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      items: [
        { label: 'Linux', icon: 'terminal' },
        { label: 'Proxmox', icon: 'server' },
        { label: 'Docker', icon: 'box' },
        { label: 'containerd', icon: 'package' },
        { label: 'Ansible', icon: 'wrench' },
        { label: 'nginx', icon: 'globe' },
        { label: 'Cloudflare', icon: 'cloud' },
        { label: 'Bare metal', icon: 'cpu' }
      ]
    },
    {
      id: 'databases',
      title: 'Databases',
      items: [
        { label: 'PostgreSQL', icon: 'database' },
        { label: 'SQLite', icon: 'database' },
        { label: 'Redis', icon: 'bolt' },
        { label: 'Ceph', icon: 'layers' },
        { label: 'Vector stores', icon: 'search' }
      ]
    },
    {
      id: 'observability',
      title: 'Observability',
      items: [
        { label: 'Prometheus', icon: 'chart' },
        { label: 'Audit trails', icon: 'book' },
        { label: 'Cost tracking', icon: 'chart' },
        { label: 'Tracing', icon: 'radio' },
        { label: 'Structured logs', icon: 'terminal' },
        { label: 'Metrics', icon: 'waveform' }
      ]
    },
    {
      id: 'frontend-tooling',
      title: 'Frontend & Tooling',
      items: [
        { label: 'React', icon: 'box' },
        { label: 'Astro', icon: 'rocket' },
        { label: 'Node', icon: 'hexagon' },
        { label: 'Bun', icon: 'bolt' },
        { label: 'Hono', icon: 'globe' },
        { label: 'xterm.js', icon: 'terminal' },
        { label: 'WebSocket', icon: 'waveform' },
        { label: 'WebAuthn', icon: 'lock' }
      ]
    }
  ] as StackGroup[],

  /** Home page "Open Source" row — four flagship public repos. */
  oss: [
    {
      name: 'ai-gateway',
      href: 'https://github.com/karutoil/ai-gateway',
      description:
        'One self-contained Go binary fronting every model provider — routing, budgets, caching, and an embedded admin UI.',
      status: 'Active'
    },
    {
      name: 'catalyst',
      href: 'https://github.com/catalystctl/catalyst',
      description:
        'Open-source game-server platform: Rust core, native containerd, live console, and multi-node lifecycle management.',
      status: 'Active'
    },
    {
      name: 'pi-web',
      href: 'https://github.com/karutoil/pi-web',
      description:
        'Real-time browser interface for a coding agent, with streamed chat and live visibility into every tool call.',
      stars: 9,
      status: 'Active'
    },
    {
      name: 'pi-lsp',
      href: 'https://github.com/karutoil/pi-lsp',
      description:
        'In-process tree-sitter diagnostics and compiler-backed type checking, so an agent sees its own errors early.',
      stars: 2,
      status: 'Active'
    }
  ] as OssRepo[],

  experience: [
    {
      id: 'llm-infrastructure',
      index: '01',
      title: 'LLM Infrastructure',
      items: [
        'Multi-provider gateways with routing, failover, and weighted selection',
        'Protocol translation across OpenAI, Anthropic, Azure, and Responses APIs',
        'Per-key quotas, rate limits, cost tracking, and encrypted credential storage',
        'Caching, resilience, and observability with Prometheus and audit trails',
        'Self-hosted deployment: single binaries, systemd, Docker, and Cloudflare',
        'Model catalogues, pricing data, and virtual aliases for stable routing'
      ]
    },
    {
      id: 'agent-tooling',
      index: '02',
      title: 'Agent Tooling',
      items: [
        'Real-time agent interfaces with streamed tool calls and reasoning visibility',
        'Code intelligence: tree-sitter and compiler-backed diagnostics for agents',
        'Agent memory: semantic retrieval, consolidation, and cross-session recall',
        'Provider and capability plugins: OAuth, vision handoff, and new backends',
        'Structured tool design with validation, retries, and error-driven recovery',
        'Token and cost observability across sessions, projects, and models'
      ]
    },
    {
      id: 'platforms-ops',
      index: '03',
      title: 'Platforms & Operations',
      items: [
        'Game-server platforms on a Rust core with direct containerd integration',
        'Multi-node container lifecycle, isolation, and live console streaming',
        'Bare-metal provisioning: PXE/netboot pipelines, IPMI, RAID, firmware',
        'Proxmox HA clusters, VM/LXC orchestration, and Ceph storage',
        'Production service platforms: OAuth, mail ingestion, realtime, and RBAC',
        'Network operations, observability, and DDoS mitigation'
      ]
    }
  ] as ExperienceBlock[],

  journal: {
    snippet:
      'Built a multi-provider LLM gateway that serves OpenAI, Anthropic, and Responses protocols from one binary — with routing, failover, per-key budgets, and an embedded admin UI. No external database, no runtime dependencies.'
  },

  contact: [
    {
      label: 'Discord',
      href: 'https://discord.com/users/96676726397997056',
      handle: '@karutoil',
      kind: 'discord',
      note: 'Fastest response'
    },
    {
      label: 'Email',
      href: 'mailto:contact@karutoil.site',
      handle: 'contact@karutoil.site',
      kind: 'email',
      note: 'Formal inquiries'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/karutoil',
      handle: '@karutoil',
      kind: 'github',
      note: '13 public repositories'
    }
  ] as ContactLink[],

  siteNote: 'No cookies · No trackers · No analytics · Static site'
};
