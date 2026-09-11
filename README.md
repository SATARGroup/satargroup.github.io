# SATAR Group - Academic Research Website

A modern, lightweight, and fully responsive static website developed for the **SATAR Group** . This platform is designed to showcase research areas, publications, team members, and facilitate academic collaborations without requiring a complex backend.

## 🚀 Features

*   **Persistent Dark/Light Mode:** A fully customized theme toggle that remembers user preferences using browser `localStorage`.
*   **Dynamic Branding:** The site logo (`siteLogo`) automatically switches between `darklogo.png` and `lightlogo.png` based on the active theme.
*   **Protected Resource Vault:** A custom JavaScript-based authentication page (`resource.html`) that guards internal lab datasets. Correct passkeys redirect to a secured Google Drive, while incorrect attempts are redirected playfully.
*   **Serverless Contact Form:** Fully functional inquiry form that forwards messages directly to the lab's email without needing PHP or a backend database.
*   **Responsive Design:** CSS Grid and Flexbox implementation ensuring seamless scaling across desktop, tablet, and mobile screens.

## 🛠️ Technologies Used

*   **HTML5:** Semantic structuring for accessibility and clear code organization.
*   **CSS3:** Custom properties (CSS variables) for theme management, modern layout techniques, and smooth transitions (No external CSS frameworks like Bootstrap/Tailwind were used).
*   **Vanilla JavaScript (ES6+):** Used for DOM manipulation, theme toggling logic, and passcode verification logic in the vault.
*   **Formspree:** API integration for handling form submissions.

## 📬 Form Submissions & Inquiries

The Contact page utilizes **Formspree** to process inquiries. When a user submits a message, it is automatically forwarded to the designated email address. 

**View Submissions Database:**
All collected inquiry data (Name, Email, Subject, Message) can be accessed and managed directly via the Formspree dashboard here:
👉 **[Formspree Submissions Dashboard](https://formspree.io/forms/xjyvzzwz/submissions)**

## 📂 Project Structure

```text
├── index.html           # Landing page & Hero section
├── research.html        # Core research areas and methodologies
├── publications.html    # Academic papers and DOI links
├── people.html          # PI and research team profiles
├── resource.html        # Passkey-protected data vault
├── contact.html         # Formspree integrated inquiry form
├── style.css            # Global stylesheet and theme variables
├── theme.js             # Logic for Dark/Light mode and dynamic logo
├── darklogo.png         # Logo for Dark Mode
└── lightlogo.png        # Logo for Light Mode

## 💻 How to Run Locally

Since this is a static website, no server installation is required.

1. Clone or download the repository.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).
3. Ensure JavaScript is enabled in your browser to test the Theme Toggle and Resource Vault.

---
*Developed for SATAR Group, 2026.*
