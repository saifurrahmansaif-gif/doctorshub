# 🏥 Doctors Hub - Bangladesh

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)

**Live Demo:** [Click here to find a doctor](https://saifurrahmansaif-gif.github.io/doctors-hub/)

## The Motivation: A Personal Journey
This project was born not from a technical challenge, but from a personal crisis. When my grandmother suffered a minor stroke, I witnessed firsthand the frantic, stressful search my family endured to find a suitable specialist. My father went from hospital to hospital, struggling to gather information and find the right doctor in a time of urgent need.

I was inspired to build a solution. This platform is my answer to that problem—a centralized, fast, and easy-to-use directory of medical specialists in Dhaka, designed to ensure no other family has to endure that same anxiety during a medical emergency. It is a testament to using technology for social good.

## The Solution: Doctors Hub
Doctors Hub is a lightning-fast, client-side web application that allows patients to instantly search and filter a database of over 300+ specialists across 20+ medical fields. 

**Key Features:**
*   **Instant Search:** An O(N) time-complexity algorithm filters by doctor's name or hospital on every keystroke.
*   **Dynamic Filtering:** Users can narrow down results by both specialty and major city locations.
*   **One-Click Contact:** Each doctor's card features a "Call to Book" button that opens the phone's dialer, removing friction for patients in need.

## 🧠 Technical Architecture & CS Concepts
This application was built entirely from scratch with Vanilla JavaScript, demonstrating a deep understanding of core web fundamentals without relying on heavy frameworks.

*   **Algorithmic Efficiency:** The search and filter functions operate in `O(N)` time complexity by filtering a local in-memory array, ensuring an instantaneous user experience.
*   **Dynamic Filter Generation:** The "Specialty" dropdown is not hard-coded. On page load, the JavaScript dynamically parses the entire JSON database, extracts all unique specialties, and builds the filter options automatically. This makes the system scalable and easy to update.
*   **Asynchronous Data Fetching:** Utilizes modern `async/await` to fetch and parse the large `data.json` file without freezing the browser, ensuring a smooth loading experience.
*   **Clean & Clinical UI/UX:** The design intentionally uses a "Healthcare Trust" aesthetic—clean whites, medical blues, and highly readable typography (WCAG compliant) to build trust and ensure accessibility for all users, including the elderly.

## 🗂️ Project Structure
```text
📦 doctors-hub
 ┣ 📜 index.html   # The structural skeleton with a focus on accessibility.
 ┣ 📜 style.css    # A clean, professional, and mobile-responsive design system.
 ┣ 📜 script.js    # The dynamic engine for search, filtering, and DOM rendering.
 ┗ 📜 data.json    # The comprehensive, hand-curated database of specialists.
