import NextAuth, { User, NextAuthConfig } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const BASE_PATH = '/api/auth'

const authOptions: NextAuthConfig = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
