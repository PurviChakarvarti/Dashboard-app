# 📊 Dashboarding App

Welcome to the **Dashboarding App** – a React-based cross-platform analytics application developed during my internship at CRSN. The app allows users to interactively view and configure dashboards with real-time-like chart visualizations.

---

## 🚀 Project Overview

This project is part of an internship assignment. It focuses on frontend implementation using **React**, **Material UI**, and **Recharts**, and it’s structured for future Spring Boot backend integration.

- **Frontend**: React (Material UI + Recharts)
- **Backend**: Spring Boot *(basic initialized structure only)*
- **Mock Data Source**: `src/data/mockData.json`

  ---

## 🖥️ Features

- ✅ **X Bar Chart**, **R Chart**, **Pareto Chart**, **Histogram + Normal Distribution**
- 🧩 **Layout Configurator** – toggle chart visibility and switch between one/two-column layout
- 🧭 **Sidebar Navigation**
- 🎨 Built with **Material UI**
- 📊 Charts powered by **Recharts**
- 🔌 Modular and mock-data-driven

---

## 🔧 Layout Configurator in Action

> Users can dynamically select which charts to show and choose between **One Column** or **Two Column** display modes.

![Layout Configurator](./assets/screenshots/Screenshot%202025-05-23%20191521.png)

---

## 📋 Sidebar Navigation

> Quick links to different charts using a sidebar menu.

![Sidebar Navigation](./assets/screenshots/Screenshot%202025-05-23%20191535.png)

---

## 📊 Sample Dashboard View

> Default dashboard showing all four charts in a two-column layout.

![Dashboard View](./assets/screenshots/Screenshot%202025-05-23%20191546.png)

---

## 🎥 Demo Videos

| Layout Configurator in Action | Sidebar Navigation Demo |
|-------------------------------|--------------------------|
| ![Layout GIF](./assets/videos/dashboard-layout.mp4) | ![Sidebar GIF](./assets/videos/dashboard-sidebar.mp4) |

> 🔁 Recommend converting these to `.gif` format for embedding directly or upload `.mp4` to GitHub Releases or YouTube for preview support.

---

## 📚 How to Run (Frontend Only)

```bash
# Clone the frontend repo
cd dashboard-frontend

# Install dependencies
npm install

# Start the development server
npm start

```
---

# 📌 Notes
- Backend (dashboard-backend/) is a placeholder and initialized via Spring Initializr
- All charts render based on mock data (src/data/mockData.json)
- Built with self-learning, documentation-first, and experimentation-first approach 🌱

# 🛠️ Tools & Libraries Used
- React
- Material UI
- Recharts
- React Router

---

# 🏁 Future Scope
- Integrate with Spring Boot backend
- Add live data source integration
- Export/Save dashboards feature
- Auth/user profile support
