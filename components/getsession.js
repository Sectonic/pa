import nextSession from "next-session";
import { promisifyStore } from "next-session/lib/compat";
import RedisStore from "connect-redis";
import Redis from "ioredis";

const production = process.env.NEXT_PUBLIC_API == "https://personalityacademyapi.pythonanywhere.com";
const redisClient = !production ? new Redis({connectTimeout: 10000}) : new Redis({
    port: 11218,
    host: "redis-11218.c232.us-east-1-2.ec2.cloud.redislabs.com",
    password: "t55wWsGk7PHhNTZK49ZogwaC5WzsAM1m",
    username: "default",
    connectTimeout: 10000
})

export const getSession = nextSession({
  store: promisifyStore(
    new RedisStore({
        client: redisClient,
        prefix: "PA:",
    })
  ),
  secure: production ? true : false,
  name: "PA_cookie",
  autoCommit: false
});