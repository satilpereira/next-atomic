# Next atomic

## Description
[Next atomic]('[README.md](https://github.com/satilpereira/next-atomic#readme)') is a Next.js boilerplate code generator that sets up a project using the atomic design pattern for React components. It provides a structured organization for components and includes useful folder configurations for a Next.js application.


## Installation
To use next-atomic, you can install it globally using npm:

```bash
npm install -g next-atomic
```

## Usage

Generate a new application using the specified directory or the current directory if not provided:

```bash
next-atomic create [directory]
```

Examples:

```bash
# Create a new application in the current directory
next-atomic create ./

# Create a new application in a specified directory
next-atomic create my-next-app
```

## Folder Structure
The folder structure is based on the atomic design pattern and includes the following directories:

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

## License
This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## Author
[Satil Pereira]()

## Issues
If you encounter any issues, please report them in the [Issues](https://github.com/satilpereira/next-atomic/issues)

## Contributing
If you would like to contribute to this project, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for details.