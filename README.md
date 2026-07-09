# 🏛️ CivicPulse – Municipal Operations Dashboard

A modern React-based municipal operations dashboard designed to provide operational officers with a centralized view of city-wide activities, service requests, anomalies, and daily operational metrics.

Built as part of the **Potens IT Services & Consultancy 2026 Internship Take-Home Assessment**.

---

# 🚀 Project Overview

CivicPulse is a frontend dashboard prototype that simulates how municipal officers can monitor and manage day-to-day civic operations from a single interface.

The dashboard focuses on improving operational awareness by presenting live metrics, actionable service requests, anomaly detection summaries, and recent operational updates in a clean and responsive interface.

The project emphasizes usability, modular React architecture, responsive design, and multilingual accessibility.

---

# ✨ Features

- Operational dashboard for municipal officers
- Action Queue with approval workflow
- Anomaly monitoring panel
- Operations Pulse (live operational metrics)
- Recent Activity timeline
- Live updating operational counter
- Live header clock
- Bilingual support (English / Marathi)
- Responsive dashboard layout
- Reusable component-based architecture
- Mock operational dataset

---

# 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Internationalization | react-i18next |
| Language | JavaScript |

---

# 📂 Project Structure

```
src/
│
├── components/
│   ├── Header/
│   ├── Layout/
│   ├── ActionQueue/
│   ├── Anomalies/
│   ├── OperationsPulse/
│   └── RecentActivity/
│
├── data/
│
├── hooks/
│   └── useLiveCounter.js
│
├── locales/
│   ├── en/
│   └── mr/
│
├── i18n.js
├── App.jsx
└── main.jsx
```

---

# ▶ Running the Project

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

---

# 📊 Dashboard Modules

## Action Queue

Displays operational requests that require officer decisions.

Each request includes:

- Priority
- Task
- Ward
- Reported Time
- SLA
- Action Buttons

Users can:

- Approve requests
- Hold requests

Approved and held actions are reflected in the Recent Activity panel.

---

## Anomalies

Displays system-detected operational anomalies requiring manual review.

Each anomaly includes:

- Severity
- Category
- Issue description
- Confidence score
- Detection time

Reviewing an anomaly updates the Recent Activity panel.

---

## Operations Pulse

Provides a live operational overview through KPI cards.

Metrics include:

- Open Requests
- Active Incidents
- Resolved Today
- Response Rate

The Open Requests metric updates dynamically to simulate live operational data.

---

## Recent Activity

Maintains a timeline of operational events generated through dashboard interactions.

Examples include:

- Approved requests
- Assigned/Held requests
- Completed anomaly reviews

---

# 🌍 Bilingual Support

The dashboard supports both English and Marathi using **react-i18next**.

The language can be switched without refreshing the application, allowing users to continue interacting with the dashboard seamlessly.

---

# 📱 Responsive Design

The dashboard is designed to adapt across different screen sizes while maintaining readability and usability.

Responsive improvements include:

- Flexible dashboard layout
- Optimized information hierarchy
- Responsive anomaly grid
- Responsive operational panels
- Adaptive spacing for different viewport sizes

---

# 🎯 Design Decisions

Several design decisions were made to improve operational usability instead of focusing only on visual appearance.

### Information-first interface

The dashboard prioritizes quick scanning of operational information over decorative UI elements.

---

### Action Queue redesign

The Action Queue was redesigned from vertically stacked cards into a structured operational table.

This allows officers to compare:

- Priority
- Ward
- Reported time
- SLA

more efficiently.

---

### Compact anomaly presentation

The anomaly section was organized into a responsive grid to reduce scrolling while improving visibility of active alerts.

---

### Modular component architecture

Each dashboard module was implemented as an independent React component to improve maintainability and encourage code reuse.

---

### Live operational feedback

A lightweight custom React hook simulates live operational updates without requiring a backend service.

---

### Internationalization

The application uses react-i18next to separate user-facing text from component logic, making future language expansion straightforward.

---

# ⚠ Known Limitations

- Dashboard uses mock data instead of a live backend.
- Operational metrics are simulated.
- Button interactions update the frontend state only.
- No authentication or role-based access control.
- No persistent data storage.

---

# 🚀 Future Improvements

Potential future enhancements include:

- Backend API integration
- WebSocket-based real-time updates
- GIS/Map integration
- Authentication and user roles
- Push notifications
- Dashboard analytics
- Report export functionality
- Progressive Web App (PWA) support
- Dark mode

---

# 🤖 AI Usage Log

The project was developed using AI tools as engineering assistants. AI was primarily used for discussing implementation approaches, reviewing UI decisions, debugging issues, and refining project documentation.

| Tool | Approximate Usage | Purpose |
|------|-------------------|---------|
| ChatGPT | ~80 development-focused prompts | UI/UX discussions, React & Tailwind debugging, component review, implementation guidance, code review, and README refinement. |
| Claude AI | ~10 prompts | UI refinement, layout review |
| Figma AI | 1 prompt | Generated an initial dashboard layout concept for UI inspiration. |

Final implementation decisions, feature integration, testing, responsiveness improvements, and validation were performed by the project author.

---

# 👨‍💻 Author

Prafull Satle

Built for the **Potens IT Services & Consultancy 2026 Internship Take-Home Assessment**.