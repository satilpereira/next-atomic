declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      NEXT_PUBLIC_API_URL_DEVELOPMENT: string
      NEXT_PUBLIC_API_URL_PRODUCTION: string
      NEXT_PUBLIC_CLIENT_URL_PRODUCTION: string
      NEXT_PUBLIC_CLIENT_URL_DEVELOPMENT: string
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string
      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
