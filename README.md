# EcoPack Returns

Create a modern, responsive static website that I can deploy on an AWS EC2 instance using Apache HTTP Server.

Important technical requirements

This must be a static website.

Use only:

HTML

CSS

JavaScript

Do NOT require:

Node.js server

Express

Flask

PHP

Python backend

Database

API/backend server

The final website must work by simply placing the website files inside Apache's web root:
/var/www/html/

The website should work by opening the EC2 instance's public IPv4 address in a browser.

Make sure all CSS, JavaScript, images, fonts, and other assets use correct relative paths so there are no broken links after deployment.

Do not depend on localhost or development-server-specific functionality.

Include an index.html file as the main entry point.

Make sure the website can be served directly by Apache without any special server configuration.

Website concept

Create a professional "EcoPack – E-commerce Packaging Return & Recycling Management System" website.

The website represents a system that helps customers return used e-commerce packaging so it can be reused or recycled.

Design

Create a clean, modern, eco-friendly professional design.

Use:

Green and white as the primary visual theme

Soft neutral backgrounds

Modern typography

Rounded cards

Subtle shadows

Smooth hover effects

Clean spacing

Responsive layout

The design should look like a real startup/product website rather than a basic college project.

Pages / Sections

Create the following sections:

1. Navigation Bar

Include:

EcoPack logo/name

Home

How It Works

Benefits

Track Return

Contact

A prominent "Start a Return" button

Make the navigation responsive for mobile.

2. Hero Section

Heading:

"Return. Reuse. Recycle."

Supporting text explaining that EcoPack makes it easy for customers to return e-commerce packaging and help reduce packaging waste.

Include two buttons:

"Start a Return"

"Learn How It Works"

Add an attractive eco-friendly illustration or visual related to sustainable packaging/recycling.

3. Statistics Section

Display attractive statistics such as:

12,500+ Packages Returned

8,200 kg Packaging Saved

6,700+ Happy Users

92% Reusable Packaging

These are demonstration/project figures, so present them as sample statistics.

4. How It Works

Create a 4-step process:

Order Delivered

Save the Packaging

Schedule a Return

Reuse or Recycle

Use simple icons and clean cards.

5. Benefits Section

Show benefits such as:

Reduce Packaging Waste

Encourage Reuse

Easy Returns

Track Your Impact

Support Circular Economy

Environment-Friendly Delivery

6. Return Tracking Section

Create a visually appealing tracking form with:

"Track Your Packaging Return"

Input:
"Enter Return ID"

Button:
"Track Return"

This can be a front-end demonstration only. Do not connect it to a backend.

When the user submits the form, use JavaScript to display a simple demonstration tracking result such as:

"Return ID found — Packaging return is currently being processed."

Clearly keep this as a front-end demo.

7. Environmental Impact Section

Create a section showing how packaging returns contribute to sustainability.

Include visual indicators/cards for:

Packaging Reused

Waste Reduced

CO₂ Saved

Materials Recycled

Use animated counters or simple visual elements if appropriate, but keep everything client-side.

8. Call-to-Action Section

Add a strong section with text such as:

"Make Every Package Count."

Supporting text encouraging users to return their used packaging instead of throwing it away.

Button:
"Start Your Return"

9. Footer

Include:

EcoPack logo/name

Short description

Quick links

Contact information

Social media placeholder icons

Copyright notice

Functionality

Since this is a static website, implement only front-end interactions using JavaScript.

Include:

Smooth scrolling

Responsive mobile navigation

Button hover effects

Return tracking demo

Simple form validation

Animated statistics/counters if appropriate

Scroll animations if they can be implemented without requiring a backend

Do NOT implement actual authentication, payment processing, database storage, or backend APIs.

Responsive Design

The website must work properly on:

Desktop

Laptop

Tablet

Mobile

Make sure there is no horizontal scrolling.

Code quality

Keep the project simple and deployment-friendly.

Prefer a structure similar to:

/index.html
/css/style.css
/js/script.js
/assets/

If you use a framework internally, make sure the final project can be built/exported into completely static files that Apache can serve.

Most importantly, provide the final production-ready static files that can be copied directly into:

/var/www/html/

on an Amazon Linux 2023 EC2 instance running Apache.

Do not require any additional server-side setup.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1d681f20-3302-440e-937f-257224699775).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
