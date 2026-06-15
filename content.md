# Karutoil — Personal Content

## Identity
- **Name:** karutoil
- **Title:** Systems Engineer / Infrastructure Operations / AI Tooling Engineer
- **Tagline:** Infrastructure, game-server operations, and AI-native developer tooling for high-stakes environments.
- **Location:** Remote · UTC-7
- **Availability:** Available for contracts

## Stats / Key Figures
- 500+ Servers Managed
- 5+ Years Uptime
- 24/7 On-Call Ready
- Accepting Work

## Quick Specs
- **OS:** Infrastructure Focused
- **Kernel:** 5+ years production
- **Shell:** bash / python / go
- **Uptime:** 1,826+ days
- **Status:** Accepting work

## Bio
I run the parts most people never see. **Proxmox clusters**, custom PXE boot environments, and automated provisioning through **VirtFusion** and **Tenantos**. When something breaks at 3 AM, I am the one who gets the page.

Game servers are a specialty — **Minecraft** JVM tuning, **FiveM** resource optimization, **Factorio** headless deployment, **Space Engineers** Torch integration. Players should never know how much work keeps their world online.

Recently, I have moved heavily into **AI engineering**: extending coding agents, building agent-native UIs, designing prompt/tool call patterns, and automating development workflows around LLMs.

## Stack / Packages
proxmox, virtfusion, tenantos, whmcs, docker, linux, bash, python, go, rust, nginx, mysql, redis, ansible, terraform, node, typescript, hono, fastify, react, tailwind, sqlite, postgresql, websocket, containerd

## AI Engineering, Prompt Engineering & AI Automation

### Core Skills
- **Agent architecture** — tool-use loops, streaming RPC, real-time UI binding
- **Prompt engineering** — context shaping, few-shot examples, structured output schemas, error-driven retry prompts
- **LLM-native dev tools** — extensions for PI, Codex, Continue; custom agent commands
- **Automation** — CI pipeline agents, auto-diagnostic injection, multi-file refactor orchestration
- **Observability** — thinking/reasoning visibility, live tool-call tracing, session replay

### Approach
I treat LLMs as unreliable-but-powerful coworkers. The work is not the prompt; it is the scaffolding around the prompt: validation hooks, fallbacks, structured output parsing, and tight feedback loops so the agent sees its own errors and recovers.

## AI / Agent Projects

### PI Web — https://github.com/karutoil/pi-web
A real-time browser interface for the **PI coding agent**. Built with Bun, Hono, React 19, Tailwind v4, SQLite.

Examples of what it exposes:
- Project/session management with live WebSocket streaming
- Real-time tool-call display (`read`, `bash`, `edit`, `write`, `grep`, `find`, `ls`)
- Toggleable thinking/reasoning visibility
- In-stream steering and abort controls
- GFM markdown rendering with syntax highlighting
- Historical session replay

### pi-lsp — https://github.com/karutoil/pi-lsp
PI extension that adds **instant tree-sitter LSP emulation + compiler-backed type checking** to the agent.

Examples:
- Parses changed files after every `edit`/`write` and injects diagnostics back into the agent context
- 80+ languages via in-process WASM parser
- Go-to-definition, references, hover, document symbols
- Two-tier validation: tree-sitter (instant) + compiler (type accurate)
- Zero external binaries; auto-installs npm deps and bundled grammars

### pi-enhanced-tools — https://github.com/karutoil/pi-enhanced-tools
Replacement/augmentation tools for the PI coding agent.

Examples:
- `patch` — unified-diff apply with auto-locate
- `outline` — file structure without implementation noise
- `rg` / `find` — structured code search
- `test` / `validate` / `build` — detect, run, and report failures
- `git` — semantic git ops (status, diff, log, blame, archeology)
- `refactor` — multi-file rename orchestration
- `scan` — security scanner with semgrep or regex fallback
- `ask` — pause to ask user clarifying questions

### pi-powershell-native — https://github.com/karutoil/pi-powershell-native
PI extension that replaces the built-in `bash` tool with native PowerShell on Windows and routes `!command` / `!!command` shortcuts through PowerShell.

## Infrastructure & Operations Experience

### 01 — Server Admin
Proxmox HA clusters, VM/LXC orchestration, Ceph storage
- VirtFusion automated provisioning, API workflows, billing hooks
- Tenantos bare-metal business automation for hosting providers
- PXE/Netboot custom image pipelines for rack-scale deployment
- WHMCS client lifecycle automation, module development
- Bare-metal IPMI, RAID config, firmware management

### 02 — Game Ops
Minecraft, FiveM, Factorio, Space Engineers
- Minecraft Java/Bedrock, plugin ecosystems, JVM GC tuning, world migration
- FiveM resource optimization, MariaDB tuning, framework deployment
- Factorio headless dedicated, mod sync, save compression and rotation
- Space Engineers Torch integration, mod management, world persistence
- Automated backups, DDoS mitigation, custom mod deployment, latency optimization

### 03 — Consulting
Infrastructure audits, cost optimization, automation
- Infrastructure audits — finding bottlenecks before they become outages
- Cost optimization — right-sizing without cutting reliability
- Automation design — reducing toil through scripting and orchestration
- Security hardening — attack surface reduction and monitoring
- Team workflows — documentation, runbooks, knowledge transfer

## Major Project: Catalyst — https://github.com/catalystctl/catalyst
An experimental game-server management platform in early testing, aimed at enterprise hosts and game communities.

**Tech Stack:** TypeScript 5.9, Fastify, React 18, Vite, TanStack Query, Radix UI, Rust 1.70, Tokio, containerd, PostgreSQL, Redis

**Examples of work / features:**
- Docker/Podman Compose deployment with one-line install
- Rust game-node agent talking to the backend over WebSocket
- Multi-node server lifecycle with container isolation
- Live console streaming via WebSockets (<10ms target latency)
- RBAC with 20+ granular permissions, API keys, rate limiting, audit logging
- SFTP file access + web-based file editor
- Plugin system for backend routes, WebSocket handlers, scheduled tasks
- 60+ REST endpoints for billing-panel integrations (WHMCS examples)
- Automatic backup/restore and crash detection/recovery

## Journal Snippet
Completed infrastructure audit for client. Identified 3 bottlenecks, reduced cloud spend by 34%. Client range: one-person shops to providers running thousands of nodes.

## Contact
- **Discord:** karutoil — https://discord.com/users/96676726397997056 (Fastest response)
- **Email:** contact@karutoil.site (Formal inquiries)
- **GitHub:** karutoil — https://github.com/karutoil

## Site Notes
- No cookies · No trackers · No analytics
- Static site
