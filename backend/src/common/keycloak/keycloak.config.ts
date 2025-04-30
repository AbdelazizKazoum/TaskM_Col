/* eslint-disable prettier/prettier */
// src/keycloak/keycloak.config.ts
import { KeycloakConnectOptions } from 'nest-keycloak-connect';

export const keycloakConfig: KeycloakConnectOptions = {
  authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL, // Example: http://localhost:8080/auth
  realm: process.env.KEYCLOAK_REALM,
  clientId: process.env.KEYCLOAK_CLIENT_ID,
  secret: process.env.KEYCLOAK_CLIENT_SECRET,
  logLevels: ['warn'], // optional
};
