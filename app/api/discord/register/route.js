import { NextResponse } from 'next/server';
import DiscordOauth2 from 'discord-oauth2';
import { getDiscordToken, revokeDiscordToken } from '@lib/discord';
import { createUserEmail } from '@lib/register';

export async function GET(request) {
  const oauth = new DiscordOauth2();
  const baseUrl = process.env.PRODUCTION === 'true' ? 'https://personality.academy' : 'http://localhost:3000';
  const code = request.nextUrl.searchParams.get('code');
  const decodedURI = decodeURIComponent(request.nextUrl.searchParams.get('state')) || '/';
  const callbackUrl = decodedURI === null || decodedURI === 'null' ? '/' : decodedURI;
  const errorUrl = new URL('/register?' + new URLSearchParams({callback: callbackUrl}), baseUrl);
  
  if (!code) {
    errorUrl.searchParams.set('error', 'Invalid Request to Discord');
    return NextResponse.redirect(errorUrl);
  }

  const access_token = await getDiscordToken(code, 'register');

  const { username, email } = await oauth.getUser(access_token);
  const { error } = await createUserEmail({ username, email, provider: 'discord'});
  if (error) {
    errorUrl.searchParams.set('error', error);
    return NextResponse.redirect(errorUrl);
  }

  await revokeDiscordToken(access_token);

  return NextResponse.redirect(new URL(callbackUrl, baseUrl))
}