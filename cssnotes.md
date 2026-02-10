## Day 2 – CSS Basics

- CSS is used for styling websites
- HTML = structure, CSS = design
- CSS syntax: selector { property: value; }
- Used external CSS file (style.css)

### Selectors Used
- body, h1, h2, p, a
- ul, li
- input, textarea, button

### Work Done
- Styled profile page
- Styled contact form

### Status
Day 3 completed ✅  

## Day 3 – CSS + UL Styling

### What I Built
- Styled navbar using Flexbox
- Clean layout using container
- Styled unordered list (ul)

### Concepts Learned
- display: flex
- justify-content & align-items
- Removing default ul styles
- Linking external CSS

### Status
Day 3 completed ✅

📘 Day 4 – Notes (Responsive Design)
1️⃣ What is Responsive Design?

Responsive design means making a website that looks good on mobile, tablet, and desktop automatically.

👉 Screen size change → layout adjusts

2️⃣ Why Responsive Design is Important?

Most users use mobile phones

Website looks professional

Required in real projects

Improves user experience

3️⃣ What are Media Queries?

Media queries are used in CSS to apply styles for different screen sizes.

They help change layout based on:

Screen width

Device type

4️⃣ Media Query Syntax
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}


👉 This code works only when screen size is 768px or smaller

5️⃣ Common Screen Sizes

Desktop → above 1024px

Tablet → 768px to 1024px

Mobile → below 768px

6️⃣ Example Use Case
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}


👉 On mobile screen, items come one below another

7️⃣ Tools Used

HTML

CSS

Media Queries

Chrome Inspect Tool

8️⃣ One-Line Interview Answer

Responsive design makes websites work properly on all screen sizes using media queries.
