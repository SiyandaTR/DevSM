import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider  from 'next-auth/providers/credentials';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

adapter: PrismaAdapter(prisma);

pages: {
    register: '/components/register.tsx ';
    signIn: '/component/logIn.tsx';
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  };

session: {
    strategy: 'jwt';
  };

secret: process.env.NEXTAUTH_SECRET;
debug: process.env.NODE_ENV === "development";

export const AuthOptions =  {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role ?? 'user'
        }
      }
      }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
        profile(profile){
            return{
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
                role: profile.role ?? 'user'
            }
        }
      }),
    // CredentialsProvider ({
    //     name: "Credentials",
    //     credentials: {
    //       username: { label: "Username", type: "text", placeholder: "username email" },
    //       password: { label: "Password", type: "password", placeholder : "Password"},
    //       email: { label :  'email', type:  'email' , placeholder : 'email'},
    //     },
    //     async authorize (Credentials) {
    //        if(!this.credentials.email || !this.credentials.password){
    //         return null;
    //        }

    //        const user = await prisma.user.findUnique({
    //         where: {
    //           email: this.credentials.email,
    //         }
    //        });

    //        if(!user){
    //         return null;
    //        }
          
    //        const passwordsmatch = await user.compare(this.credentials.password, user.password);
    //        if (!passwordsmatch){
    //         return null;
    //        }
    //        return user;
    //     }
    //   }),
  ],
};

// callbacks: {
    
//     async jwt({ token, user, trigger, session }) {
//       if (user) {
//         token.role = user.role
//       }

//       if (trigger === 'update' && session?.name) {
//         token.name = session.name
//       }

//       return token
//     };
//     async session({ session, token }) {
//       session.user.role = token.role
//       return session
//     }
//   };