// Withou a defined matcher, this one line apllies next-auth to thw entire website

export { default } from "next-auth/middleware"

//Applies next-auth only to matching rouites -  can be regex ref:
//https://next.je.org/docs/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/products" , "/dashboard"]}