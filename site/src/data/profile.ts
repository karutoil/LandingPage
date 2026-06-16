export interface Stat {
  label: string;
  value: string;
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
  mockup?: string;
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
}

export const profile = {
  name: 'karutoil',
  title: 'Systems Engineer',
  subtitle: 'Infrastructure Operations · AI Tooling Engineering',
  tagline:
    'Infrastructure, game-server operations, and AI-native developer tooling for high-stakes environments.',
  location: 'Remote · UTC-7',
  availability: 'Available for contracts',
  email: 'contact@karutoil.site',
  avatar: '/avatar.webp',
  bio: [
    "I run the parts most people never see. Proxmox clusters, custom PXE boot environments, and automated provisioning through VirtFusion and Tenantos. When something breaks at 3 AM, I am the one who gets the page.",
    'Game servers are a specialty — Minecraft JVM tuning, FiveM resource optimization, Factorio headless deployment, Space Engineers Torch integration. Players should never know how much work keeps their world online.',
    'Recently, I have moved heavily into AI engineering: extending coding agents, building agent-native UIs, designing prompt/tool call patterns, and automating development workflows around LLMs.'
  ],
  stats: [
    { label: 'Servers managed', value: '500+' },
    { label: 'Years production uptime', value: '5+' },
    { label: 'On-call ready', value: '24/7' },
    { label: 'Consecutive uptime days', value: '1,826+' }
  ] as Stat[],
  stack: [
    'proxmox',
    'virtfusion',
    'tenantos',
    'whmcs',
    'docker',
    'linux',
    'bash',
    'python',
    'go',
    'rust',
    'nginx',
    'mysql',
    'redis',
    'ansible',
    'terraform',
    'node',
    'typescript',
    'hono',
    'fastify',
    'react',
    'tailwind',
    'sqlite',
    'postgresql',
    'websocket',
    'containerd'
  ],
  projects: [
    {
      title: 'PI Web',
      org: 'karutoil',
      href: 'https://github.com/karutoil/pi-web',
      role: 'Real-time browser interface for the PI coding agent',
      description:
        'A live dashboard that streams the PI coding agent into the browser. Built with Bun, Hono, React 19, Tailwind v4, and SQLite.',
      bullets: [
        'Project/session management with live WebSocket streaming',
        'Real-time tool-call display: read, bash, edit, write, grep, find, ls',
        'Toggleable thinking/reasoning visibility',
        'In-stream steering and abort controls',
        'GFM markdown rendering with syntax highlighting',
        'Historical session replay'
      ],
      tags: ['bun', 'hono', 'react', 'websocket', 'sqlite'],
      featured: true,
      mockup: '/mockups/pi-web.svg'
    },
    {
      title: 'pi-lsp',
      org: 'karutoil',
      href: 'https://github.com/karutoil/pi-lsp',
      role: 'Instant tree-sitter LSP emulation',
      description:
        'PI extension that brings in-process tree-sitter diagnostics and compiler-backed type checking straight into the agent context.',
      bullets: [
        'Parses changed files after every edit/write and injects diagnostics',
        '80+ languages via in-process WASM parser',
        'Go-to-definition, references, hover, document symbols',
        'Two-tier validation: tree-sitter instant + compiler accurate',
        'Zero external binaries; auto-installs npm deps and bundled grammars'
      ],
      tags: ['typescript', 'tree-sitter', 'lsp', 'wasm'],
      featured: true,
      mockup: '/mockups/pi-lsp.svg'
    },
    {
      title: 'pi-enhanced-tools',
      org: 'karutoil',
      href: 'https://github.com/karutoil/pi-enhanced-tools',
      role: 'Replacement/augmentation tools for the PI coding agent',
      description:
        'A focused tool-suite that extends the agent with structured code search, semantic git ops, security scanning, and multi-file refactor orchestration.',
      bullets: [
        'patch — unified-diff apply with auto-locate',
        'outline — file structure without implementation noise',
        'rg / find — structured code search',
        'test / validate / build — detect, run, and report failures',
        'git — semantic git ops: status, diff, log, blame, archeology',
        'refactor — multi-file rename orchestration',
        'scan — security scanner with semgrep or regex fallback',
        'ask — pause to ask user clarifying questions'
      ],
      tags: ['agent-tooling', 'git', 'security', 'refactoring'],
      featured: true,
      mockup: '/mockups/pi-enhanced-tools.svg'
    },
    {
      title: 'pi-powershell-native',
      org: 'karutoil',
      href: 'https://github.com/karutoil/pi-powershell-native',
      role: 'Native PowerShell bridge for PI on Windows',
      description:
        'PI extension that replaces the built-in bash tool with native PowerShell on Windows and routes !command / !!command shortcuts through PowerShell.',
      bullets: [
        'Native PowerShell execution on Windows agents',
        'Shortcut routing for !command and !!command',
        'Seamless integration with existing tool-call schema'
      ],
      tags: ['powershell', 'windows', 'agent-extension'],
      featured: false,
      mockup: '/mockups/pi-powershell-native.svg'
    },
    {
      title: 'Catalyst',
      org: 'catalystctl',
      href: 'https://github.com/catalystctl/catalyst',
      role: 'Experimental game-server management platform',
      description:
        'An early-testing platform aimed at enterprise hosts and game communities. Multi-node lifecycle, Rust game-node agent, live console streaming, and a plugin system.',
      bullets: [
        'Docker/Podman Compose deployment with one-line install',
        'Rust game-node agent talking to the backend over WebSocket',
        'Multi-node server lifecycle with container isolation',
        'Live console streaming via WebSockets (<10ms target latency)',
        'RBAC with 20+ granular permissions, API keys, rate limiting, audit logging',
        'SFTP file access + web-based file editor',
        'Plugin system for backend routes, WebSocket handlers, scheduled tasks',
        '60+ REST endpoints for billing-panel integrations (WHMCS examples)',
        'Automatic backup/restore and crash detection/recovery'
      ],
      tags: ['typescript', 'rust', 'fastify', 'containerd', 'postgresql', 'redis'],
      featured: true,
      mockup: '/mockups/catalyst.svg'
    }
  ] as Project[],
  experience: [
    {
      id: 'server-admin',
      index: '01',
      title: 'Server Admin',
      items: [
        'Proxmox HA clusters, VM/LXC orchestration, Ceph storage',
        'VirtFusion automated provisioning, API workflows, billing hooks',
        'Tenantos bare-metal business automation for hosting providers',
        'PXE/Netboot custom image pipelines for rack-scale deployment',
        'WHMCS client lifecycle automation, module development',
        'Bare-metal IPMI, RAID config, firmware management'
      ]
    },
    {
      id: 'game-ops',
      index: '02',
      title: 'Game Ops',
      items: [
        'Minecraft Java/Bedrock, plugin ecosystems, JVM GC tuning, world migration',
        'FiveM resource optimization, MariaDB tuning, framework deployment',
        'Factorio headless dedicated, mod sync, save compression and rotation',
        'Space Engineers Torch integration, mod management, world persistence',
        'Automated backups, DDoS mitigation, custom mod deployment, latency optimization'
      ]
    },
    {
      id: 'consulting',
      index: '03',
      title: 'Consulting',
      items: [
        'Infrastructure audits — finding bottlenecks before they become outages',
        'Cost optimization — right-sizing without cutting reliability',
        'Automation design — reducing toil through scripting and orchestration',
        'Security hardening — attack surface reduction and monitoring',
        'Team workflows — documentation, runbooks, knowledge transfer'
      ]
    }
  ] as ExperienceBlock[],
  contact: [
    {
      label: 'Discord',
      href: 'https://discord.com/users/96676726397997056',
      handle: '@karutoil',
      kind: 'discord'
    },
    {
      label: 'Email',
      href: 'mailto:contact@karutoil.site',
      handle: 'contact@karutoil.site',
      kind: 'email'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/karutoil',
      handle: '@karutoil',
      kind: 'github'
    }
  ] as ContactLink[],
  journal: {
    snippet:
      'Completed infrastructure audit for client. Identified 3 bottlenecks, reduced cloud spend by 34%. Client range: one-person shops to providers running thousands of nodes.'
  },
  siteNote: 'No cookies · No trackers · No analytics · Static site'
};
