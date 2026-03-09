# Weel Admin Panel

Admin panel for Weel platform built with React, TypeScript, Vite, and shadcn/ui.

## Features

- 🔐 Admin authentication
- 📊 Dashboard with statistics
- 👥 Partner management
- 💬 Real-time chat with partners using WebSocket
- 🎨 Modern UI with shadcn/ui
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Backend API running on `http://localhost:8000`

### Installation

1. Install dependencies:

```bash
npm install
# or
bun install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Update `.env` with your backend URLs:

```env
VITE_API_URL=http://localhost:8000
VITE_WS_URL=ws://localhost:8000
```

### Development

```bash
npm run dev
# or
bun dev
```

The app will be available at `http://localhost:3001`

### Build

```bash
npm run build
# or
bun run build
```

## Project Structure

```
weel-admin/
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   └── Layout.tsx   # Main layout with sidebar
│   ├── hooks/
│   │   └── useChatWebSocket.ts  # WebSocket hook for chat
│   ├── lib/
│   │   ├── api.ts       # Axios instance with interceptors
│   │   └── utils.ts     # Utility functions
│   ├── pages/
│   │   ├── ChatPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── LoginPage.tsx
│   │   └── PartnersPage.tsx
│   ├── store/
│   │   ├── authStore.ts  # Zustand auth state
│   │   └── chatStore.ts  # Zustand chat state
│   ├── types/
│   │   └── index.ts     # TypeScript types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── components.json      # shadcn/ui configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **State Management:** Zustand
- **Data Fetching:** TanStack Query
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **WebSocket:** Native WebSocket API

## API Integration

The admin panel expects the following API endpoints:

- `POST /api/auth/login/` - Admin login
- `POST /api/auth/token/refresh/` - Refresh access token
- `GET /api/auth/me/` - Get current admin user
- `GET /api/partners/` - List all partners
- `GET /api/chat/conversations/` - Get chat conversations
- `GET /api/chat/messages/:partnerId/` - Get messages with a partner
- `WS /ws/chat/` - WebSocket connection for real-time chat

## WebSocket Protocol

The chat uses WebSocket for real-time communication with the following message types:

```typescript
{
  type: 'message' | 'read' | 'typing' | 'online' | 'offline',
  data: any
}
```

## License

MIT
