import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "22fdo7qy",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
