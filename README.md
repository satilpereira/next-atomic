# Next atomic

<span class="badge-npmdownloads"><a href="https://npmjs.org/package/next-atomic" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/next-atomic" alt="NPM downloads" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/next-atomic" title="View this project on NPM"><img src="https://img.shields.io/npm/v/next-atomic" alt="NPM version" /></a></span>
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Socket Badge](https://socket.dev/api/badge/npm/package/next-atomic)](https://socket.dev/npm/package/next-atomic)

## Elevate Your Next.js Experience with next-atomic!

[next-atomic]('[README.md](https://github.com/satilpereira/next-atomic#readme)') is not just a boilerplate, it's your launchpad into the future of Next.js development. Unleash the power of atomic design patterns for React components and effortlessly organize your project for success.

## 🎨 Features

- **Atomic Design Structure**: Organize your components into atoms, molecules, organisms, templates, and pages.
- **Next.js API Routes**: Create API routes for your Next.js app.
- **TypeScript**: Utilize TypeScript for type-safe development.
- **Tailwind CSS**: Utilize the power of Tailwind CSS for styling.
- **Shadcn/ui**: Already integrated with shadcn/ui for faster and clean ui development.
- **Dark Mode**: Toggle between light and dark mode with ease.


## 🚀 Quick Start

Next atomic works on top of create-next-app, but it comes with presets for typescript, tailwind, and some configurations already made for you. You can change it later. Install next-atomic globally and create your project:

```bash
npm install -g next-atomic
```

## 🚦 Usage

Generate a new application effortlessly:

```bash
# Create a new application in the current directory
next-atomic create ./
```

Or specify a folder:


```bash
# Create a new application in a specified directory
next-atomic create my-next-app
```

## 🏗️ Atomic Design Structure

[next-atomic]('[README.md](https://github.com/satilpereira/next-atomic#readme)') follows the atomic design pattern, breaking down components into atoms, molecules, organisms, templates, and pages. Your project's structure is optimized for scalability and maintainability. Want to learn more about atomic design? Check out [Brad Frost's Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/).

```bash
/app # Next.js app router
-- /api # Next.js API routes
-- layout.tsx # Next.js layout component
-- page.tsx # Next.js page component
/components
-- /atoms # Atomic design atoms
-- /molecules # Atomic design molecules
-- /organisms # Atomic design organisms
-- /templates # Atomic design templates
/contexts # React context providers
/helpers # Helper functions
/hooks # Custom React hooks
/public # Public assets
/styles # Global styles
/utils # Utility functions
```

## 📜 License
This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 🌈 Contribute
If you would like to contribute to this project, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for details.

## 🐞 Issues
Encountering any issues? Report them on the [Github Issues](https://github.com/satilpereira/next-atomic/issues) page. We're here to help!

## 📝 Author
- [Satil Pereira](https://github.com/satilpereira)

## What to expect in the near future?
This project is mainly aimed for my own personal projects. But I find it frustating setting up authentication, payment gateways such as stripe, Structuring project, and so on. So, I'll be setting up all the boilerplate code in this next app boilerplate, so you can just npm install and use them as you wish.  
- [x] Setup theme toggling provider
- [ ] Setup cookies management
- [ ] Setup Credentials providers
- [ ] Setup email sending function

---
Feel free to further customize the content or let me know if you have specific elements you'd like to emphasize! I'm happy to help. 😊
