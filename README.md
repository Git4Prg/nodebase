# Nodebase

A powerful and visual node-based workflow automation platform built with Next.js. Connect your favorite apps, AI models, and services to automate tasks effortlessly.

## 🚀 Features

- **Visual Workflow Builder:** An intuitive drag-and-drop interface powered by React Flow to build complex automations.
- **Multiple Triggers:** Start your workflows via Manual Triggers, HTTP Webhooks, Google Forms, or Stripe events.
- **AI & Integrations:** Seamlessly integrate with leading LLMs (OpenAI, Anthropic, Gemini) and communication platforms (Slack, Discord).
- **Credential Management:** Securely store and manage API keys for your third-party integrations.
- **Robust Executions:** Reliable workflow execution, event tracking, and error monitoring powered by Inngest.
- **Modern Tech Stack:** Built on top of Next.js 15, Prisma (PostgreSQL), tRPC, Better Auth, and Tailwind CSS + Radix UI.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- Inngest (Local Dev Server or Cloud)

### Installation

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory and configure your database and authentication variables (refer to `.env.example` if available):
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/nodebase"
   # Depending on your setup, you'll also need keys for Better Auth, Inngest, Sentry, etc.
   ```

3. **Initialize the database:**
   Generate the Prisma client and sync your schema:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   *Your app should now be running on [http://localhost:3000](http://localhost:3000).*

5. **Start Inngest Dev Server (in a separate terminal):**
   ```bash
   npx inngest-cli@latest dev
   ```

## 💡 How to Use

1. **Sign Up / Log In:** Create an account to access the dashboard.
2. **Add Credentials:** Head to the credentials section to add API keys for the integrations you want to use (e.g., OpenAI, Anthropic, Discord).
3. **Create a Workflow:** Navigate to your workflows and create a new project.
4. **Drag & Drop Nodes:** Use the visual canvas to add a **Trigger** node (e.g., Manual Trigger) and any subsequent **Action** nodes. Connect them by dragging lines between node handles.
5. **Configure Nodes:** Click on any node to configure its specific data, prompt, or parameters.
6. **Run & Monitor:** Execute the workflow manually or via webhooks, and monitor real-time progress and history in the Executions tab.
