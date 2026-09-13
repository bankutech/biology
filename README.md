# biology

## Overview
A comprehensive, modern web application designed for health evaluation and test reporting. The dashboard features a premium, responsive "glassmorphism" user interface with a centralized design system.

## Features

- **Blood Test Evaluator**: A detailed tool that analyzes various health parameters (Liver & Kidney function, Lipid profile, Glucose, Vitamins, Thyroid, and Diabetes markers) to provide a health score and personalized recommendations.
- **Protein Report Analyzer**: Allows users to log and analyze protein tests (Total Protein, Albumin, Globulin, A/G Ratio) and prepare data for export.
- **Appointment Booking System**: A sleek, user-friendly form to easily schedule medical appointments.
- **Knowledge Base**: Detailed information regarding the importance of different health markers and the effects of abnormal levels (`aboutbloodtest.html`).
- **Premium UI/UX**: Built with a modern glassmorphism design system utilizing a dark elegant gradient, smooth CSS animations, and high-quality Google Fonts (Inter). 

## Technology Stack

- **HTML5**: Semantic and accessible page structure.
- **Vanilla CSS3**: A custom, centralized design system (`styles.css`) using CSS Variables, Flexbox, CSS Grid, and backdrop-filter for frosted glass effects.
- **Vanilla JavaScript**: Logic for health evaluation scoring, dynamic DOM updates, and form submissions. No heavy frameworks required.

## Setup and Running Locally

Since this is a static website (HTML, CSS, JS), you don't need any complex build tools to run it. You can simply serve the files using a local HTTP server.

**Option 1: Using Python (Recommended)**
If you have Python installed, open your terminal in the project directory and run:
```bash
python -m http.server 8000
```
Then open your browser and navigate to `http://localhost:8000`.

**Option 2: Using Node.js (http-server or live-server)**
If you prefer Node.js, you can install and run `live-server`:
```bash
npx live-server
```

## Project Structure

- `index.html`: The main dashboard connecting all the tests and tools.
- `styles.css`: The central stylesheet containing all global variables, typography, glass-panel components, and button styles.
- `blood-test.html`: The comprehensive blood evaluation form and logic.
- `protein-test.html`: The protein test reporting interface.
- `bookAppointment.html` & `BookNow.html`: The appointment scheduling form and success confirmation page.
- `login.html`, `login.js`, `login-animation.js`: The authentication interface with an animated background (using Three.js).
- `aboutbloodtest.html`: The educational knowledge base on blood parameters.
- `*.jpeg`: Various background images and visual assets.

## Design System

The application uses a unified styling approach across all pages:
- **Background**: Deep elegant gradient (`#0f2027` to `#2c5364`).
- **Containers**: Frosted `.glass-panel` components that blur the background behind them.
- **Typography**: Uses the 'Inter' sans-serif typeface.
- **Buttons**: Reusable `.btn` classes (`.btn-primary`, `.btn-red`, `.btn-blue`, `.btn-green`) with smooth hover state animations and scaling.

## Future Enhancements

- Integrate backend services to persist user logins, health test histories, and booked appointments.
- Add chart visualizations to map health marker trends over time.
- Implement the "Export to Sheets" functionality in the Protein Test analyzer.

## Getting Started
Please refer to the source files for specific installation and usage instructions. Ensure that your local environment meets the standard requirements for the associated technologies.

## Project Structure
This project is organized into standard directories. Key configuration files and primary source code are located in the root directory.
