# Prodesk IT - Digital Marketing Agency Landing Page

A modern, highly responsive, and interactive landing page built for the Prodesk IT Week 1 Internship Assignment. 

This project was built aiming for the **Level 3 (Advanced)** requirements, featuring a fully functional Dark Mode, Glassmorphism UI effects, modern responsive layouts, and optimized for a 100/100 Google Lighthouse score.

👉 **[Live Demo on Vercel](https://prodesk-it-agency.vercel.app/)**

#### Important: Run lighthouse test on Incognito Window

---

## 📸 Screenshots

### Light Theme
| Hero Section | Services Section | Contact | About |
| :---: | :---: | :---: | :---: |
| ![Light Mode Hero](/screenshots/light1.png) | ![Light Mode Services](/screenshots/light2.png) | ![Light Mode Contact](/screenshots/light3.png) | ![Light Mode About](/screenshots/light4.png) |

### Dark Theme
| Hero Section | Services Section | Contact & Footer | Contact & Footer |
| :---: | :---: | :---: | :---: |
| ![Dark Mode Hero](/screenshots/dark1.png) | ![Dark Mode Services](/screenshots/dark2.png) | ![Dark Mode Contact](/screenshots/dark3.png) | ![Dark Mode About](/screenshots/dark4.png) |

---

## ✨ Features Built (Meeting Assignment Requirements)

### Level 1: Core Layout & Responsiveness
*   **Fully Responsive:** Fluid layouts adapting seamlessly from small mobile screens to large desktop monitors using Tailwind Grid and Flexbox.
*   **Navigation:** Left-aligned brand logo with right-aligned navigation links. Includes a custom-built, animated hamburger menu for mobile devices.
*   **Dynamic Sections:** Catchy Hero section, a 3-column Service Grid, an Information/Contact Form layout, and a structured Footer with dynamic copyright year.

### Level 2: Interactivity & UX
*   **Dark Mode Toggle:** User-triggered Dark/Light mode switch built with Vanilla JS. It also respects the user's system preferences (`prefers-color-scheme`).
*   **Micro-Interactions:** 
    *   Smooth hover scaling and color transitions on buttons.
    *   Service cards "lift up" elegantly upon mouse hover.
    *   Dynamic scroll-spy that highlights the current section in the Navbar.
*   **Sticky Navbar:** The header remains fixed at the top of the screen during scrolling for easy navigation.

### Level 3: Advanced UI & Performance
*   **Tech Stack:** Built using **Tailwind CSS** for rapid, utility-first styling.
*   **Glassmorphism:** The sticky navbar utilizes the `backdrop-filter` property to create a modern "frosted glass" aesthetic (`backdrop-blur-xl bg-blue-500/20`).
*   **Perfect Lighthouse Score:** Audited via Chrome DevTools to achieve **100/100** in Performance, Accessibility, Best Practices, and SEO. (Proper ARIA labels, semantic HTML, and optimized assets).

### Extra features

* **Scroll-Spy (Intersection Observer):** Implemented an IntersectionObserver that tracks which section the user is currently viewing and dynamically adds an underline to the corresponding link in the Navbar.

* **System Theme Detection:** Instead of just a manual Dark Mode toggle, my code uses window.matchMedia("(prefers-color-scheme: dark)") to detect the user's OS preference upon loading, and it even listens for system-level changes to update automatically.
* **Smart Mobile Menu Closing:** Added event listeners (touchstart and click) to detect if a user clicks outside the mobile menu or clicks a specific link, ensuring the menu closes automatically.
* **Dynamic Copyright Year:** Rather than hardcoding the year in the footer, I wrote a script (new Date().getFullYear()) to automatically display the current year.


---

## 🛠️ Tech Stack

*   **HTML5** (Semantic structuring)
*   **Tailwind CSS** (Styling, Layouts, Responsive Design, Dark Mode)
*   **Vanilla JavaScript** (DOM manipulation, Intersection Observer for scroll tracking, Theme toggling)
*   **Vite** (Build tool / Bundler)
*   **Vercel** (Deployment)

---

## 🚀 Running Locally

If you'd like to clone and run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/prodesk-it-agency.git
   ```
2. Navigate to the project directory:
    ```bash
    cd prodesk-it-agency
    ```

3. Install dependencies:
    ```bash
    npm install
4. Start the development server:
    ```bash
    npm run dev
    ```
  

Designed and developed by Harsh Kashyap for Prodesk IT.