// import NextAuth from 'next-auth'
// // import GoogleProvider from 'next-auth/providers/google'
// import GitHubProvider from 'next-auth/providers/github'


// import { MongoDBAdapter } from '@auth/mongodb-adapter'
// import clientPromise from '@/library/mongo/client'

// export const authOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//       profile(profile) {
//         return {
//           id: profile.sub,
//           name: profile.name,
//           email: profile.email,
//           image: profile.picture,
//           role: profile.role ?? 'user'
//         }
//       }
//     })
//   ],
//   callbacks: {
//     async jwt({ token, user, trigger, session }) {
//       if (user) {
//         token.role = user.role
//       }

//       if (trigger === 'update' && session?.name) {
//         token.name = session.name
//       }

//       return token
//     },
//     async session({ session, token }) {
//       session.user.role = token.role
//       return session
//     }
//   },
//   pages: {
//     signIn: '/signin'
//   },
//   adapter: MongoDBAdapter(clientPromise),
//   session: {
//     strategy: 'jwt'
//   }
// }

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }
