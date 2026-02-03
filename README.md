# 🚚 New Booking Entry – React + Vite 

A dedicated **New Booking Entry** interface built for a **Logistics ERP system**. This is a standalone frontend application designed for speed, accuracy, and ease of use for internal office staff.

---

## 🧱 Tech Stack

* **UI Library:** React.js
* **Build Tool:** Vite
* **Language:** JavaScript
* **Styling:** Tailwind

---

src/
├── assets/             # Static assets (images, SVGs)
├── components/
│   ├── ui/             # Atomic UI elements (Button.jsx)
│   ├── OutPut.jsx      # Display JSON out
│   ├── PackageDetails.jsx
│   ├── ReceiverDetails.jsx
│   └── SenderDetails.jsx
├── hooks/              # Custom logic handler functions (useBookingForm.js)
├── page/               # Main view (NewBooking.jsx)
├── utils/              # Helper validation functions (validation.js)
├── App.jsx             # Root component
└── main.jsx            # Application entry point

## 🚀 Getting Started

No backend setup is required. Follow these steps to launch the frontend:

### 1. Installation
Navigate to the project directory and install the necessary node modules:
```bash
npm install
npm run dev

