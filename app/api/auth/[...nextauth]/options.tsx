// import type { NextAuthOptions } from 'next-auth'
// import GitHubProvider from 'next-auth/providers/github'
// import Credentials from 'next-auth/providers/credentials'
// //import { type } from 'os'

// export const options: NextAuthOptions = {
//     providers:[
//         GitHubProvider({
//             clientId: process.env.GITHUB_ID as string,
//             clientSecret: process.env.GITHUB_SECRET as string,
//         }),
//         Credentials({
//             name: "Credentials",
//             credentials: {
//                 username: {
//                     label: "Username:",
//                     type: "text",
//                     placeholder: "Placeholder unsername"
//                 },
//                 password: {
//                     label: "Password",
//                     type: "password"
//                 }
//             },
//             async authorize(credentials) {
//                 // This is where you need to retrieve data
//                 // to verify with credentials
//                 // docs: https://next-auth.js.org/configuration/providers/credentials
//                 const user ={ id: "42" , name: "Dave" , password: "nextauth"}
                
//                 if (credentials?.username===user.name && credentials?.password===user.password)
//                 {
//                     return user
//                 } else {
//                     return null
//                 }
//             }
//         })
//     ],
//     // this how to add custom sign in pages
//     // pages: {
//     //     signIn: "/Signin"
//     // }
// }

// function CredentialsProvider(arg0: { name: string; credentials: { username: { label: string; type: string; placeholder: string }; password: { label: string; type: string } }; authorize(credentials: any): Promise<{ id: string; name: string; password: string } | null> }): import("next-auth/providers").Provider {
//     throw new Error('Function not implemented.')
// }
