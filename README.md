# Amazon Express Demo

Amazon-themed marketing site built with Express. Each route renders a full HTML page: a hero-driven home experience, an in-depth about page, and a contact hub with support options.

## Features

- Responsive landing page with product highlights, trust metrics, and newsletter form
- About page covering mission, principles, innovation timeline, and global scale
- Contact hub featuring support channels, detailed inquiry form, and FAQs
- Clean module structure with one handler per route for easy maintenance

## Available Routes

| Route | Description |
| --- | --- |
| `/` | Home page with curated product highlights and newsletter signup |
| `/about` | Company overview with leadership principles and innovation history |
| `/contact` | Support center with form, channel cards, and FAQ links |

## Getting Started

1. Install dependencies:

   ```powershell
   npm install
   ```

2. Start the development server:

   ```powershell
   npm start
   

3. Open `http://localhost:3000` in your browser to explore the pages.

Optional PowerShell smoke test:

```powershell
Invoke-WebRequest http://localhost:3000/ | Select-Object -ExpandProperty Content
Invoke-WebRequest http://localhost:3000/about | Select-Object -ExpandProperty Content
Invoke-WebRequest http://localhost:3000/contact | Select-Object -ExpandProperty Content
```

## Project Structure

```
app.js          # Express bootstrap that wires route handlers
home.js         # Serves Amazon home landing page
about.js        # Serves detailed company background page
contact.js      # Serves support hub with form and FAQs
package.json    # Scripts and dependencies
README.md       # Project overview and instructions
```

## Configuration

The server defaults to port 3000. Override by setting `PORT` before starting:

```powershell
$env:PORT = 5000
npm start
```

<img width="1913" height="971" alt="image" src="https://github.com/user-attachments/assets/a7e40c87-c57a-4428-8033-639eff38ffa1" />
<img width="1919" height="975" alt="image" src="https://github.com/user-attachments/assets/5754d266-5e19-4204-94d4-b31ac6f20eb9" />
<img width="1918" height="963" alt="image" src="https://github.com/user-attachments/assets/e842441b-5492-43e2-8ee6-cf2ba745b9f4" />




