import NextAuth from "next-auth";
import { AuthOptions} from "@/util/authOptions";

export const handler = NextAuth( AuthOptions ) as never;

export { handler as GET, handler as POST };