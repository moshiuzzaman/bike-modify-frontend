import NextAuth from "next-auth";
import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import jwtDecode from "jwt-decode";

const providers = [
    CredentialsProvider({
        name: "Credentials",
        authorize: async (credentials) => {
            try {
                const result = await axios.post(
                    `https://demo-backend.studio-23.xyz/api/v1/auth/login`,

                    JSON.stringify(credentials),

                    {
                        headers: {
                            accept: "*/*",
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (result) {
                    const user = jwtDecode(result.data.data);
                    user.token = result.data.data;
                    return { status: "success", data: user };
                }
            } catch (e) {
                const errorMessage = e.response.data.message;
                // Redirecting to the login page with error messsage in the URL
                throw new Error(errorMessage + "&email=" + credentials.email);
            }
        },
    }),
];

const callbacks = {
    jwt: ({ token, user, trigger, session }) => {
        console.log("trigger", trigger);
        if (trigger === "update") {
            token = { ...token, ...session };
        }
        if (user) {
            token = { ...token, ...user.data };
        }

        return token;
    },
    session: ({ session, token }) => {
        if (token) {
            session = { ...session, user: token };
        }

        return session;
    },
};

const options = {
    providers,
    callbacks,

    pages: {
        signIn: "/login", // Changing the default signin page to our custom login pageS
        error: "/login", // Changing the error redirect page to our custom login page
    },
};

export default (req, res) => NextAuth(req, res, options);
