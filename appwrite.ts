import { Account, Client, Databases, ID, Storage } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_CLIENT_ID!);

const database = new Databases(client);
const account = new Account(client);
const storage = new Storage(client);

export { client, database, account, storage, ID };
