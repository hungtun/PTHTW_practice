import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const LOGIN_URL = `${process.env.API_BASE_URL ?? "http://localhost:8080"}/api/auth/login`;

type LoginResponse = {
    accessToken?: string;
    token?: string;
    user?: {
        id?: string | number;
        email?: string;
        username?: string;
        fullName?: string;
        roles?: string[];
        role?: string;
    }
}