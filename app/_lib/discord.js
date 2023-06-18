"use server";

import DiscordOauth2 from 'discord-oauth2';
import { getSession } from './session';

const client_id = String(process.env.DISCORD_CLIENT_ID);
const client_secret = process.env.DICSORD_CLIENT_SECRET;
const redirect_uri = process.env.PRODUCTION === 'true' ? `https://pa-beryl.vercel.app/api/discord/` : `http://localhost:3000/api/discord/`;

export const getDiscordToken = async (code, location) => {
    const tokenOptions = {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          code, client_id, client_secret, redirect_uri: redirect_uri + location,
          grant_type: "authorization_code"
        }).toString()
      }
    
    const req = await fetch("https://discord.com/api/oauth2/token", tokenOptions);
    const data = await req.json();
    return data.access_token;
}

export const revokeDiscordToken = async (token) => {
    const revokeOptions = {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          client_id, client_secret, token
        }).toString()
    }
    await fetch("https://discord.com/api/oauth2/token/revoke", revokeOptions); 
}

export const getDiscordAuth = async (location, callback) => {
    const oauth = new DiscordOauth2();
    const session = await getSession();
    if (session) {
        return {error: 'Already Logged In'};
    } else {
        const url = oauth.generateAuthUrl({
            clientId: client_id,
            clientSecret: client_secret,
            redirectUri: redirect_uri + location,
            scope: ["identify", "guilds", "email"],
            state: encodeURIComponent(callback),
        });
        return {url}
    }
}