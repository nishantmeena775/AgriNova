# AgriNova — The Future of Farming 🌾
### Smart Precision Agriculture & Agronomic Intelligence Platform

[![Build Status](https://img.shields.io/badge/Build-Passing-10B981?style=for-the-badge&logo=vite&logoColor=white)](https://github.com)
[![Framework](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Styling](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Icons](https://img.shields.io/badge/Lucide-Icons-10B981?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev)
[![Deployment](https://img.shields.io/badge/Deploy-Netlify_Ready-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com)

---

## 📖 Overview

**AgriNova** is a modern, enterprise-grade smart agriculture platform designed to empower farmers, agronomists, and agricultural enterprises. Combining real-time IoT field telemetry, computer-vision plant disease diagnostics, dynamic rule-based crop recommendation, and closed-loop smart irrigation management, AgriNova maximizes farm yield while conserving vital natural resources.

The application features a nature-inspired aesthetic using forest greens (`#133E2B`), emerald leaves (`#2D6A4F`), sage greens (`#84A98C`), and warm earth tones (`#FAF8F5`). Built with high-performance glassmorphism, responsive navigation, micro-animations, interactive SVG trend visualizers, and state persistence via `localStorage`.

---

## 🌟 Core Features & Modules

### 1. 🌿 Hero & Live Telemetry Ribbon
- **Headline**: *"Grow Smarter. Farm Better."*
- **Live Hardware Pill**: Gateway connection status, 42 active LoRaWAN field nodes, 99.8% uptime indicator.
- **Key Statistics Strip**:
  - `+38%` Average Yield Boost
  - `42%` Water Conserved via micro-drip
  - `120,000+` Hectares Monitored
  - `98.4%` Diagnostic Precision (Demo Model)
- **Interactive Floating Telemetry Card**: Live canopy temperature, rootzone moisture, and NDVI vegetation index.

### 2. 📊 Smart Farm IoT Dashboard
- **Simulated Data Disclaimer**: Transparently labels telemetry data as simulated for demonstration.
- **Multi-Farm Profile Switcher**:
  - GreenValley Agro Estate (California, USA — 140 ha)
  - Narmada River Bio-Basin (Madhya Pradesh, India — 85 ha)
  - Tuscany Terra Bio-Estate (Siena, Italy — 62 ha)
- **Real-Time Sensor Telemetry**:
  - Air temperature (°C) with day range
  - Relative humidity (%) & Vapor Pressure Deficit (VPD)
  - Dual-depth rootzone moisture (15cm & 30cm)
  - NDVI Crop Vigour Index (0.81 Vigorous Canopy)
  - Rhizosphere N-P-K nutrient levels & soil pH
  - Solar PAR radiation & evapotranspiration (ET) rate
- **Interactive 24-Hour Trend Line Chart**:
  - Custom SVG visualization with smooth area gradients
  - Metric switching: Moisture (%), Temperature (°C), Solar (W/m²)
  - Time range toggle: 6h / 12h / 24h
  - Hover tooltip with time-stamped packet values
- **Live Simulation Sandbox**:
  - `Rain Event`: Increases moisture, lowers temperature
  - `Heatwave`: Spikes ambient temperature, increases evapotranspiration
  - `Drip Pulse`: Delivers targeted hydration pulse to Zone 1
  - `Reset All`: Restores calibrated sensor baselines
- **Automated Agronomic Alerts Panel**: Real-time dismissable field alerts.

### 3. 🧠 AI Crop Recommendation Engine
- **Transparent Agronomic Engine**: Rule-based decision algorithm modeled on FAO and ICAR benchmarks.
- **Configurable Input Parameters**:
  - Soil profile (Loam, Clay, Black Cotton Soil, Sandy Loam, Silt, Alluvial)
  - Planting season (Kharif/Monsoon, Rabi/Winter, Zaid/Summer, Spring/Autumn)
  - Water access (Canal, Deep Tube-Well, Rainfed)
  - Agro-climatic zone (Subtropical Humid, Semi-Arid, Tropical, Temperate)
  - Primary objective (Maximum Profit, Drought Resilience, Soil Regeneration)
  - Target farm area (1 - 100 Hectares)
- **Crop Recommendation Output Cards**:
  - Crop variety & category
  - Suitability match percentage (e.g. 96%)
  - Expected yield per hectare
  - Projected gross revenue ($/ha)
  - Growth duration & water requirement badge
  - Agronomist care & fertigation tip
  - **"Save to Farm Plan"**: Saves directly to `localStorage` with celebratory confetti effect.
- **Saved Plans Management**: Collapsible drawer to view, track, or delete saved cultivation strategies.

### 4. 🔬 Plant Disease & Foliar Pathology Scanner
- **Transparent Prototype Notice**: Clearly labeled interactive demonstration with simulated computer vision diagnostics.
- **Specimen Testing**:
  - Drag-and-drop or file upload for custom leaf images
  - **5 Pre-Loaded Certified Botanical Samples**:
    1. Tomato Early Blight (*Alternaria solani*)
    2. Corn Northern Leaf Blight (*Exserohilum turcicum*)
    3. Apple Cedar Rust (*Gymnosporangium*)
    4. Potato Late Blight (*Phytophthora infestans*)
    5. Healthy Soybean Leaf (*Clean / No Pathogens*)
- **Diagnostic Scanning Animation**: Laser line sweep effect over the specimen with real-time analysis steps.
- **Comprehensive Pathology Report**:
  - Detected pathogen & confidence score (e.g., 97.4%)
  - Severity level & infection risk meter
  - Detailed foliar symptom breakdown
  - **Actionable Treatment Protocol**:
    - Organic & biological controls (e.g. *Trichoderma*, *Bacillus subtilis*, copper soaps)
    - Chemical fungicide recommendations & dosages
    - Cultural sanitation & airflow prevention tips
- **Field Diagnostic Journal**: Log history stored locally.

### 5. 💧 Smart Precision Irrigation Controller
- **Zone Solenoid Controls**:
  - Zone 1: North Orchard (Fruit Trees — Subsurface Drip)
  - Zone 2: Greenhouse Alpha (Hydroponics — Emitters)
  - Zone 3: South Field (Durum Wheat — Center Pivot)
  - Zone 4: East Slope (Valley Vineyard — Micro-Drip)
- **Interactive Valve ON/OFF**: Toggle valves remotely; simulates live water flow (L/min) and updates consumption metrics.
- **Water Conservation Tracker**:
  - Daily consumption counter (Liters)
  - Water conserved vs traditional flood irrigation (+41.2% / 18,400 L saved)
  - Storage reservoir capacity gauge (84%)
- **Smart Rain Delay**: Automatic pause for all open valves during rain events.
- **Automated Timer Scheduler**: Add, configure, and remove programmed irrigation slots with `localStorage` persistence.

### 6. 🌤️ Farm Weather & Precision Spray Window
- **Multi-Station Selector**: Central Valley CA, Punjab India, Des Moines IA, Tuscany Italy.
- **Agricultural Meteorology**: Temperature, feel-like, humidity, wind velocity/vector, UV index, dew point, and soil temp at 10cm depth.
- **Precision Spray Window Advisory**:
  - Evaluates wind velocity (&lt; 15 km/h), humidity (&gt; 45%), rain probability (&lt; 20%), and thermal inversion risk.
  - Color-coded advisory: **OPTIMAL** (Green), **CAUTION** (Amber), **AVOID** (Red).
- **7-Day Agricultural Forecast**: High/low temperatures, precipitation probability, and daily evapotranspiration (ET) water loss rates.

### 7. 📈 AgriMarket Commodity Prices & Revenue Estimator
- **Live Simulated Commodity Ticker**: Spot prices for Milling Wheat, Basmati Rice, Soybean, Cotton, Yellow Corn, and Mustard Seed.
- **Price Analytics**: 24h price change %, 7-day high/low, trading volume, and market sentiment outlook.
- **Interactive 7-Day Price Trajectory Chart**: Custom SVG trend line for selected crop.
- **Harvest Profit & Revenue Estimator**:
  - Adjust cultivated acreage (ha), expected yield (MT/ha), and production input cost ($/ha).
  - Calculates estimated total harvest, gross revenue, net margin, and total profit in real time.

### 8. 📚 Sustainable Farming Knowledge Hub
- **Filterable Agronomy Guides**: Fertilizer & Nutrition, Regenerative Farming, Water Conservation, Pest Management.
- **Interactive NPK Fertilizer & Commercial Bag Calculator**:
  - Select crop and enter target harvest yield.
  - Automatically computes elemental N, P₂O₅, and K₂O requirements.
  - Calculates exact commercial 50kg bags of **Urea (46% N)**, **DAP (18% N, 46% P₂O₅)**, and **MOP (60% K₂O)** required per hectare!
  - Basal vs top-dressing split guidance.
- **Interactive Article Modals & Bookmarking**: Save guides to `localStorage`.

### 9. 📬 Contact & Agronomist Consultation
- **Interactive Booking Form**:
  - Client-side validation for Name, Email, Phone, Farm Size, Primary Crops, Inquiry Category, and Project Overview.
  - Real-time error messages and helpful input prompts.
  - Confirmation card with simulated reference token and confetti celebration.
- **Global Demonstration Hubs**: Offices and research stations in Americas, Asia-Pacific, and EMEA.
- **Interactive FAQ Accordion**: Clear explanations on telemetry, data privacy, and demo features.

### 10. ⚡ Instant Command Palette (Search Modal)
- Press <kbd>Ctrl</kbd> + <kbd>K</kbd> (or <kbd>Cmd</kbd> + <kbd>K</kbd>) anywhere on the site to trigger the instant search palette.
- Quickly search across all sensors, AI tools, crop guides, pathology samples, and market analytics with one-click navigation.

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 19](https://react.dev)
- **Build Tool & Bundler**: [Vite 8](https://vitejs.dev)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com) with custom nature-inspired color tokens, glassmorphism utilities, and micro-animations
- **Icons**: [Lucide React](https://lucide.dev)
- **Visual Micro-Interactions**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts
- **State & Storage**: React State Hooks + `localStorage` persistence
- **Deployment Platform**: [Netlify](https://www.netlify.com)

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher (v24+ recommended)
- **npm**: v9.0.0 or higher

### Installation

1. **Clone or navigate to the repository directory**:
   ```bash
   cd c:\Users\HP\Documents\Netlify
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production-optimized bundle will be generated in the `dist/` directory.

5. **Preview the production bundle locally**:
   ```bash
   npm run preview
   ```

---

## ☁️ Netlify Deployment Guide

This project includes pre-configured deployment files (`netlify.toml` and `public/_redirects`).

### Method 1: Git Integration (Recommended)
1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** → **"Import an existing project"**.
4. Select your Git repository.
5. Netlify will automatically detect configuration from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**. Your site will be live on a `*.netlify.app` domain in seconds!

### Method 2: Netlify CLI
1. Install Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```
2. Build the production bundle:
   ```bash
   npm run build
   ```
3. Deploy directly:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Method 3: Netlify Drag & Drop
1. Run `npm run build` locally.
2. Drag and drop the resulting `dist/` folder into the [Netlify Drop](https://app.netlify.com/drop) dashboard.

---

## 📁 Project Architecture

```
Netlify/
├── public/
│   └── _redirects              # Netlify SPA redirect rules
├── src/
│   ├── assets/                 # Agricultural assets and media
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphic header, live telemetry ticker, mobile menu
│   │   ├── Hero.jsx            # Atmospheric hero, live telemetry card, stats strip
│   │   ├── Dashboard.jsx       # IoT sensors, 24h trend SVG chart, simulation sandbox
│   │   ├── CropAdvisor.jsx     # Rule-based AI crop matching, farm plan persistence
│   │   ├── DiseaseDetector.jsx # Foliar pathology scanner, laser animation, treatment guides
│   │   ├── SmartIrrigation.jsx # Multi-zone valve controller, water tracker, scheduler
│   │   ├── WeatherAdvisory.jsx # Farm weather, 7-day ET forecast, spray window index
│   │   ├── MarketTracker.jsx   # Commodity spot prices, 7d trend SVG, profit estimator
│   │   ├── KnowledgeHub.jsx    # Agronomy guides, NPK fertilizer commercial bag calculator
│   │   ├── ContactSection.jsx  # Booking form, validation, confetti, FAQ accordion
│   │   ├── Footer.jsx          # Comprehensive footer, newsletter, compliance badges
│   │   └── SearchModal.jsx     # Quick command palette (Ctrl+K shortcut)
│   ├── data/
│   │   └── mockData.js         # Curated agronomic database, leaf library, sensor logs
│   ├── App.jsx                 # Main application layout & scroll-spy integration
│   ├── App.css                 # Clean application styling
│   ├── index.css               # Tailwind directives, glassmorphism, custom scrollbars
│   └── main.jsx                # React root mount
├── index.html                  # SEO tags, Google Fonts, sprout favicon
├── netlify.toml                # Netlify build command, headers, and redirects
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS Tailwind plugins
├── tailwind.config.js          # Nature-inspired palette, typography, custom shadows
└── vite.config.js              # Vite React configuration
```

---

## 🌿 Design Tokens & Aesthetic Standards

- **Forest Green** (`#133E2B`): Primary anchor color representing deep agronomic stability.
- **Emerald Green** (`#2D6A4F` / `#10B981`): Vibrant foliage accents and active status badges.
- **Sage Green** (`#84A98C` / `#95D5B2`): Secondary card borders, soft backgrounds, and badges.
- **Warm White / Cream** (`#F7FAF7` / `#FAFDF9`): Crisp, glare-free agricultural workspace background.
- **Earthy Amber & Gold** (`#DDA15E` / `#BC6C25`): Sun, harvest, and market price indicators.
- **Glassmorphism Panels**: `backdrop-blur-md bg-white/85 border border-white/60` for modern depth.

---

## 🔒 Security & Data Integrity

- Zero external secret leaks: No fabricated live keys or telemetry.
- All simulated telemetry is clearly disclaimed with user-friendly notices.
- Form inputs validate client-side to prevent malformed data.
- Netlify security headers included: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.

---

## 📄 License

This project is licensed under the MIT License. Built with ❤️ for the global agricultural community by AgriNova Technologies Inc.
