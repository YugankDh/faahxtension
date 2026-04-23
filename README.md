# faahxtension 🔊

> A VS Code extension that plays a sound effect when your terminal throws an error. Because silent failures are boring.

---

## Demo

> run code → error → *faaaah* 💀

---

## Installation

### Manual (VSIX)

```bash
code --install-extension faahxtension-0.0.1.vsix
```

Or: Extensions panel → `...` → **Install from VSIX** → pick the file.

### Marketplace

Search `faahxtension` in the VS Code Extensions panel.

---

## Usage

Just install it. The extension activates automatically on startup.

If a terminal was already open before install, you'll get a prompt to restart it — or just close and reopen manually.

**To switch sound effects:**

`Ctrl+Shift+P` → `Select Sound Effect` → pick one:
- faaaah
- mkb aag
- chicken on tree
- kya cheda bhosdi
- anime ahh
- auughhh

---

## How It Works

Uses VS Code's shell integration API (`onDidEndTerminalShellExecution`) to listen for non-zero exit codes. Any failed command triggers the selected sound. Shell integration is auto-enabled on install — no manual settings needed.

---

## Project Structure

```
faahxtension/
├── extension.js       # main extension logic
├── package.json
├── sounds/
│   ├── faaaah.mp3
│   ├── mkb_aag.mp3
│   ├── chicken_on_tree.mp3
│   └── kya_cheda_bhosdi.mp3
└── icon.png
```

---

## Requirements

- VS Code `1.93+`
- Windows / macOS / Linux

---

## Local Development

```bash
git clone https://github.com/yourusername/faahxtension
cd faahxtension
npm install

# Press F5 in VS Code to launch Extension Development Host
```

---

## Contributing

Got a better sound effect idea? Open a PR or drop it in Issues.

---

## License

MIT

---

Made by [Yugank Dhanderiya](https://github.com/YugankDh)