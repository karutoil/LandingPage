export const identity = {
  name: "karutoil",
  title: "Systems Engineer / Infrastructure Operations / AI Tooling Engineer",
  tagline:
    "Infrastructure, game-server operations, and AI-native developer tooling for high-stakes environments.",
  location: "Remote · UTC-7",
  availability: "Available for contracts",
  avatar: "/avatar.webp",
  bio: [
    "I run the parts most people never see. Proxmox clusters, custom PXE boot environments, and automated provisioning through VirtFusion and Tenantos. When something breaks at 3 AM, I am the one who gets the page.",
    "Game servers are a specialty — Minecraft JVM tuning, FiveM resource optimization, Factorio headless deployment, Space Engineers Torch integration. Players should never know how much work keeps their world online.",
    "Recently, I have moved heavily into AI engineering: extending coding agents, building agent-native UIs, designing prompt/tool call patterns, and automating development workflows around LLMs."
  ]
}

export const stats = [
  { label: "Servers Managed", value: "500+", suffix: "" },
  { label: "Years Uptime", value: "5+", suffix: "" },
  { label: "On-Call Ready", value: "24/7", suffix: "" },
  { label: "Accepting Work", value: "Open", suffix: "" }
]

export const specs = {
  os: "Infrastructure Focused",
  kernel: "5+ years production",
  shell: "bash / python / go",
  uptime: "1,826+ days",
  status: "Accepting work"
}

export const stack: string[] = [
  "proxmox",
  "virtfusion",
  "tenantos",
  "whmcs",
  "docker",
  "linux",
  "bash",
  "python",
  "go",
  "rust",
  "nginx",
  "mysql",
  "redis",
  "ansible",
  "terraform",
  "node",
  "typescript",
  "hono",
  "fastify",
  "react",
  "tailwind",
  "sqlite",
  "postgresql",
  "websocket",
  "containerd"
]

export const aiSkills = {
  core: [
    "Agent architecture — tool-use loops, streaming RPC, real-time UI binding",
    "Prompt engineering — context shaping, few-shot examples, structured output schemas, error-driven retry prompts",
    "LLM-native dev tools — extensions for PI, Codex, Continue; custom agent commands",
    "Automation — CI pipeline agents, auto-diagnostic injection, multi-file refactor orchestration",
    "Observability — thinking/reasoning visibility, live tool-call tracing, session replay"
  ],
  approach:
    "I treat LLMs as unreliable-but-powerful coworkers. The work is not the prompt; it is the scaffolding around the prompt: validation hooks, fallbacks, structured output parsing, and tight feedback loops so the agent sees its own errors and recovers."
}

export const projects = [
  {
    title: "PI Web",
    repo: "https://github.com/karutoil/pi-web",
    tech: "Bun · Hono · React 19 · Tailwind v4 · SQLite",
    description:
      "A real-time browser interface for the PI coding agent with WebSocket streaming, live tool-call display, thinking visibility, in-stream controls, and session replay.",
    bullets: [
      "Project/session management with live WebSocket streaming",
      "Real-time tool-call display (read, bash, edit, write, grep, find, ls)",
      "Toggleable thinking/reasoning visibility",
      "In-stream steering and abort controls",
      "GFM markdown rendering with syntax highlighting",
      "Historical session replay"
    ]
  },
  {
    title: "pi-lsp",
    repo: "https://github.com/karutoil/pi-lsp",
    tech: "TypeScript · Tree-sitter · WASM",
    description:
      "PI extension that adds instant tree-sitter LSP emulation + compiler-backed type checking to the agent.",
    bullets: [
      "Parses changed files after every edit/write and injects diagnostics",
      "80+ languages via in-process WASM parser",
      "Go-to-definition, references, hover, document symbols",
      "Two-tier validation: tree-sitter (instant) + compiler (type accurate)",
      "Zero external binaries; auto-installs npm deps and bundled grammars"
    ]
  },
  {
    title: "pi-enhanced-tools",
    repo: "https://github.com/karutoil/pi-enhanced-tools",
    tech: "TypeScript · Git · Semgrep",
    description:
      "Replacement/augmentation tools for the PI coding agent that turn raw LLM access into reliable engineering workflows.",
    bullets: [
      "patch — unified-diff apply with auto-locate",
      "outline — file structure without implementation noise",
      "rg / find — structured code search",
      "test / validate / build — detect, run, and report failures",
      "git — semantic git ops",
      "refactor — multi-file rename orchestration",
      "scan — security scanner with semgrep fallback",
      "ask — pause to ask user clarifying questions"
    ]
  },
  {
    title: "pi-powershell-native",
    repo: "https://github.com/karutoil/pi-powershell-native",
    tech: "TypeScript · PowerShell",
    description:
      "PI extension that replaces the built-in bash tool with native PowerShell on Windows and routes !command / !!command shortcuts through PowerShell."
  }
]

export const infra = [
  {
    id: "01",
    title: "Server Admin",
    items: [
      "Proxmox HA clusters, VM/LXC orchestration, Ceph storage",
      "VirtFusion automated provisioning, API workflows, billing hooks",
      "Tenantos bare-metal business automation for hosting providers",
      "PXE/Netboot custom image pipelines for rack-scale deployment",
      "WHMCS client lifecycle automation, module development",
      "Bare-metal IPMI, RAID config, firmware management"
    ]
  },
  {
    id: "02",
    title: "Game Ops",
    items: [
      "Minecraft Java/Bedrock, plugin ecosystems, JVM GC tuning, world migration",
      "FiveM resource optimization, MariaDB tuning, framework deployment",
      "Factorio headless dedicated, mod sync, save compression and rotation",
      "Space Engineers Torch integration, mod management, world persistence",
      "Automated backups, DDoS mitigation, custom mod deployment, latency optimization"
    ]
  },
  {
    id: "03",
    title: "Consulting",
    items: [
      "Infrastructure audits — finding bottlenecks before they become outages",
      "Cost optimization — right-sizing without cutting reliability",
      "Automation design — reducing toil through scripting and orchestration",
      "Security hardening — attack surface reduction and monitoring",
      "Team workflows — documentation, runbooks, knowledge transfer"
    ]
  }
]

export const majorProject = {
  name: "Catalyst",
  repo: "https://github.com/catalystctl/catalyst",
  stack:
    "TypeScript 5.9, Fastify, React 18, Vite, TanStack Query, Radix UI, Rust 1.70, Tokio, containerd, PostgreSQL, Redis",
  description:
    "An experimental game-server management platform in early testing, aimed at enterprise hosts and game communities.",
  features: [
    "Docker/Podman Compose deployment with one-line install",
    "Rust game-node agent talking to the backend over WebSocket",
    "Multi-node server lifecycle with container isolation",
    "Live console streaming via WebSockets (<10ms target latency)",
    "RBAC with 20+ granular permissions, API keys, rate limiting, audit logging",
    "SFTP file access + web-based file editor",
    "Plugin system for backend routes, WebSocket handlers, scheduled tasks",
    "60+ REST endpoints for billing-panel integrations (WHMCS examples)",
    "Automatic backup/restore and crash detection/recovery"
  ]
}

export const contact = {
  discord: { label: "Discord (fastest)", value: "karutoil", href: "https://discord.com/users/96676726397997056" },
  email: { label: "Email", value: "contact@karutoil.site", href: "mailto:contact@karutoil.site" },
  github: { label: "GitHub", value: "karutoil", href: "https://github.com/karutoil" }
}

export const siteNotes = {
  cookies: false,
  trackers: false,
  analytics: false
}
