import { NextResponse } from 'next/server';
import DiscordOauth2 from 'discord-oauth2';
import { getDiscordToken, revokeDiscordToken } from '@lib/discord';
import { loginUserEmail } from '@lib/login';

export async function GET(request) {
  const baseUrl = process.env.PRODUCTION === 'true' ? 'https://personalityacademy.vercel.app' : 'http://localhost:3000';
  const oauth = new DiscordOauth2();
  const code = request.nextUrl.searchParams.get('code');
  const decodedURI = decodeURIComponent(request.nextUrl.searchParams.get('state')) || '/';
  const callbackUrl = decodedURI === null || decodedURI === 'null' ? '/' : decodedURI;
  const errorUrl = new URL('/login?' + new URLSearchParams({callback: callbackUrl}), baseUrl);
  
  if (!code) {
    errorUrl.searchParams.set('error', 'Invalid Request to Discord');
    return NextResponse.redirect(errorUrl);
  }

  const access_token = await getDiscordToken(code, 'login');

  const { email } = await oauth.getUser(access_token);
  const { error } = await loginUserEmail(email);
  if (error) {
    errorUrl.searchParams.set('error', error);
    return NextResponse.redirect(errorUrl);
  }

  await revokeDiscordToken(access_token);

  return NextResponse.redirect(new URL(callbackUrl, baseUrl))
}