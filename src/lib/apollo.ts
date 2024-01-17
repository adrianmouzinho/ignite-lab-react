import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPH_URL,
  headers: {
    Auhorization: `Bearer ${import.meta.env.VITE_HYGRAPH_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
