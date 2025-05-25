# AI Video Idea Generator for Premiere Pro

This project is a proof-of-concept for an AI-powered idea generator that analyzes video transcripts and suggests interesting points or highlights. It is designed as a backend service and a simple web panel, and can be extended for use as a Premiere Pro extension.

## Features
- Node.js/Express backend with OpenAI GPT integration
- Receives video transcripts and returns creative ideas
- Simple HTML/JS panel for testing the workflow
- Secure API key management with `.env` file

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- An OpenAI API key ([get one here](https://platform.openai.com/))

### Installation
1. Clone this repository:
   ```sh
   git clone <your-repo-url>
   cd potetially
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the project root and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=sk-...your-key-here...
   ```

### Running the Backend
Start the backend server:
```sh
npm start
```
The server will run on `http://localhost:3000`.

### Testing the Panel
Open `panel.html` in your web browser. Click the "Analyze Selected Video" button to send a sample transcript to the backend and receive AI-generated ideas.

## Project Structure
```
ai-backend.js    # Node.js backend server
panel.html       # Simple web panel UI
panel.js         # Panel JavaScript logic
.env             # Environment variables (not committed)
.gitignore       # Git ignore rules
```

## Security
- **Never commit your `.env` file or API keys to public repositories.**
- The `.gitignore` is set up to exclude `.env` and other sensitive files.

## Extending
- Integrate real audio transcription (e.g., with Whisper, Google, or Azure Speech-to-Text)
- Package as a Premiere Pro extension using Adobe CEP/UXP
- Enhance the UI and workflow for production use

## License
MIT
