import { auth } from 'express-oauth2-jwt-bearer';

// Ensure environment variables are correctly loaded
if (!process.env.AUTH0_AUDIENCE || !process.env.AUTH0_ISSUER_BASE_URL) {
    throw new Error("Missing AUTH0_AUDIENCE or AUTH0_ISSUER_BASE_URL in environment variables.");
}

// Configure the JWT middleware
const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE, // Use environment variable
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL, // Use environment variable
    tokenSigningAlg: "RS256",
});

// Export the middleware
export default jwtCheck;
