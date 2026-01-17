# GitHub to MCP 🚀

> **Convert any GitHub repo into an MCP server in seconds** — Give Claude, ChatGPT, Cursor, Windsurf, Cline, and any AI assistant instant access to any codebase.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nirholas/github-to-mcp)
[![npm version](https://img.shields.io/npm/v/@nirholas/github-to-mcp.svg)](https://www.npmjs.com/package/@nirholas/github-to-mcp)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Downloads](https://img.shields.io/npm/dm/@nirholas/github-to-mcp.svg)](https://www.npmjs.com/package/@nirholas/github-to-mcp)

**🔥 Featured on:** [MCP Servers Registry](https://mcpservers.org) • [Awesome MCP Servers](https://github.com/wong2/awesome-mcp-servers)

<p align="center">
  <a href="https://github-to-mcp.vercel.app">🌐 Try the Web App</a> •
  <a href="https://github-to-mcp.vercel.app/docs">📚 Documentation</a> •
  <a href="#quick-start">⚡ Quick Start</a> •
  <a href="#use-cases">💡 Use Cases</a> •
  <a href="https://github.com/nirholas/github-to-mcp/discussions">💬 Community</a>
</p>

## What is this?

**GitHub to MCP** converts any GitHub repository into a [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server. MCP is the open standard that lets AI assistants like **Claude**, **ChatGPT**, **Cursor**, **Windsurf**, and **Cline** interact with external tools and data.

**In plain English:** Paste a GitHub URL → Get an MCP server → Your AI can now read files, search code, and use the repo's APIs.

### Why use this?

- 🚀 **Instant setup** — No manual configuration, just paste a URL
- 🤖 **Works with any AI** — Claude Desktop, ChatGPT, Cursor, VS Code Copilot, Cline, Continue, etc.
- 📦 **Zero config** — Generates a complete, runnable MCP server with all dependencies
- 🔍 **Smart extraction** — Automatically finds APIs, tools, and functions from OpenAPI, GraphQL, gRPC, code, and docs

## Quick Start

### Option 1: Web UI (Easiest)

👉 **[github-to-mcp.vercel.app](https://github-to-mcp.vercel.app)**

Paste any GitHub URL, click Generate, download your MCP server.

### Option 2: CLI (One command)

```bash
npx @nirholas/github-to-mcp https://github.com/stripe/stripe-node
```

### Option 3: Programmatic (For automation)

```typescript
import { generateFromGithub } from '@nirholas/github-to-mcp';

const result = await generateFromGithub('https://github.com/stripe/stripe-node');
console.log(`Generated ${result.tools.length} tools`);
await result.save('./my-mcp-server');
```

## Features

| Feature | Description |
|---------|-------------|
| 🔄 **Universal Conversion** | Every repo gets 4 base tools: `read_file`, `list_files`, `search_code`, `get_readme` |
| 🔍 **Smart Detection** | Extracts tools from OpenAPI/Swagger, GraphQL, gRPC/Protobuf, AsyncAPI, Python decorators, and README docs |
| 🏷️ **Auto Classification** | Identifies repo type (API, MCP server, CLI, library, docs) to optimize extraction |
| 🌐 **Multi-language Input** | Analyze code from TypeScript, Python, Go, Java, Kotlin, Rust, and more |
| 🐍 **Multi-language Output** | Generate TypeScript, Python, or Go MCP servers |
| ⚡ **Instant Deploy** | One-click Vercel deployment for hosted MCP servers |
| 🎮 **Interactive Playground** | Test generated tools instantly in the browser before downloading |

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                     GitHub Repository                        │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  1. Fetch & Classify  →  Detect repo type (API/CLI/Lib)     │
│  2. Extract Tools     →  OpenAPI, GraphQL, gRPC, Code, README│
│  3. Generate Server   →  TypeScript or Python MCP server    │
│  4. Bundle Output     →  Complete package with dependencies │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│              Ready-to-use MCP Server + Config               │
└─────────────────────────────────────────────────────────────┘
```

## What Tools Get Generated?

### Universal Tools (Always included)

| Tool | What it does |
|------|--------------|
| `get_readme` | Fetch the README for context |
| `list_files` | Browse the directory structure |
| `read_file` | Read any file's contents |
| `search_code` | Search for code patterns |

### Extracted Tools (Depends on repo type)

| Repo Type | What we extract |
|-----------|-----------------|
| **REST APIs** | All endpoints from OpenAPI/Swagger specs |
| **GraphQL APIs** | Queries and mutations from schema |
| **gRPC Services** | RPC methods from .proto files |
| **AsyncAPI** | Event-driven API operations |
| **Python packages** | Functions with `@mcp.tool` decorators |
| **Go packages** | HTTP handlers from Gin, Echo, Chi, Fiber, Gorilla |
| **Java/Kotlin** | Spring Boot, JAX-RS, Micronaut endpoints |
| **Rust** | Actix-web, Axum, Rocket route handlers |
| **MCP servers** | Existing `server.tool()` definitions |
| **CLIs** | Commands documented in README |

## Use Cases

- **"I want Claude to understand my codebase"** → Generate an MCP server, add to Claude Desktop
- **"I want to query the Stripe API from ChatGPT"** → Convert stripe/stripe-node, get typed tools
- **"I want Cursor to use my internal SDK"** → Point at your private repo (with token)
- **"I want to wrap any REST API for AI"** → Convert any repo with an OpenAPI spec

## Interactive Playground

After converting a repository, click **"Open in Playground"** to test your tools instantly:

- **Execute tools** — Run any generated tool with custom parameters
- **View responses** — See JSON results in real-time
- **Share links** — Generate shareable playground URLs

### Sharing Playground Links

Share your generated tools with others using URL parameters:

```
# Share with base64-encoded code
https://github-to-mcp.vercel.app/playground?code=<base64>&name=my-server

# Share via GitHub Gist
https://github-to-mcp.vercel.app/playground?gist=<gist-id>
```

## Configuration

### Environment Variables

```bash
# Optional: Increase GitHub API rate limits (anonymous = 60/hr, authenticated = 5000/hr)
GITHUB_TOKEN=ghp_xxxxxxxxxxxxx
```

### Claude Desktop Integration

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "my-repo": {
      "command": "node",
      "args": ["/path/to/generated/server.mjs"]
    }
  }
}
```

## Development

```bash
git clone https://github.com/nirholas/github-to-mcp
cd github-to-mcp
pnpm install
pnpm build
pnpm dev      # Start web UI at localhost:3000
pnpm test     # Run tests
```

## Project Structure

```
github-to-mcp/
├── packages/
│   ├── core/           # Conversion engine (npm package)
│   ├── openapi-parser/ # OpenAPI/GraphQL/gRPC parser
│   └── mcp-server/     # MCP server implementation
├── apps/
│   ├── web/            # Next.js web UI + documentation
│   └── vscode/         # VS Code extension
├── mkdocs/             # Documentation source (MkDocs)
└── tests/              # Integration tests
```

## FAQ

<details>
<summary><strong>Does this work with private repositories?</strong></summary>

Yes! Set the `GITHUB_TOKEN` environment variable with a token that has access to your private repos.
</details>

<details>
<summary><strong>What AI assistants support MCP?</strong></summary>

Claude Desktop, Cursor, Cline, Continue, Windsurf, and any tool that implements the Model Context Protocol. ChatGPT support varies by integration.
</details>

<details>
<summary><strong>Can I customize the generated tools?</strong></summary>

Yes! The generated code is plain TypeScript/Python — edit it however you want. Or use the programmatic API to modify tools before saving.
</details>

<details>
<summary><strong>Is this related to Anthropic's MCP?</strong></summary>

We implement the [Model Context Protocol](https://modelcontextprotocol.io) open standard created by Anthropic. This tool helps you create MCP servers without writing boilerplate.
</details>

## Related Projects

- [Model Context Protocol](https://modelcontextprotocol.io) — The protocol specification
- [MCP Servers](https://github.com/modelcontextprotocol/servers) — Official MCP server examples
- [Claude Desktop](https://claude.ai/download) — AI assistant with MCP support

## License

Apache 2.0 — See [LICENSE](LICENSE) for details.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and guidelines.

---

**Built by [nirholas](https://github.com/nirholas)** • [Website](https://github-to-mcp.vercel.app) • [npm](https://www.npmjs.com/package/@nirholas/github-to-mcp)
