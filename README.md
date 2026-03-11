# 🩺 Doctors Hub Bangladesh

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)

A fast, user-friendly portal to help patients find and connect with top specialist doctors in Dhaka, Bangladesh.

**Live Demo:** [Click here to view the live application](https://saifurrahmansaif-gif.github.io/doctorshub/)

## 💡 The Problem
Finding the right medical specialist in a large city like Dhaka can be overwhelming for patients. Information is often scattered across different hospital websites, and there is no single, easy-to-use directory. 

This project aims to solve that problem by providing a clean, fast, and accessible search engine for doctors across more than 20 specialties.

## 👨‍💻 My Role and Technical Implementation
As the sole developer, I was responsible for the entire project lifecycle, from data collection to deployment.

*   **Data Collection & Structuring:** I personally collected and curated a dataset of over 300 specialist doctors in Dhaka. I then structured this raw data into a clean, queryable `data.json` file.
*   **UI/UX Design:** I designed the user interface with a "Healthcare Trust" aesthetic, using a clean, clinical color palette (medical blues and whites) and highly readable typography to ensure accessibility for all users, including the elderly.
*   **Algorithmic Development:** The search engine is powered by a Vanilla JavaScript algorithm with **O(N) time complexity**. A key feature is the dynamic filter generation: the code automatically reads the entire JSON dataset, extracts all unique medical specialties, and builds the "Filter by Specialty" dropdown menu on its own. This makes the system scalable and easy to update.
*   **Deployment:** The entire static application is hosted for free using GitHub Pages.

## 🗂️ Project Structure
```text
📦 doctors-hub
 ┣ 📜 index.html   # The structural skeleton with a focus on accessibility.
 ┣ 📜 style.css    # A clean, clinical design system for building user trust.
 ┣ 📜 script.js    # The Brain: O(N) filtering and dynamic category generation.
 ┗ 📜 data.json    # The database of 300+ doctors I collected and formatted.
