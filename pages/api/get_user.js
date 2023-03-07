import {getSession} from '../../components/getsession';

export default async function handler(req, res) {
    const session = await getSession(req, res);
    const user = session.user ? JSON.parse(session.user) : undefined;
    console.log(user);
    if (user) {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API}/get/subscription?user_id=${user.id}`, {credentials: 'include'});
        res.status(200).send({ username: user.username, email: user.email, plus: request.ok ? true : false });
    } else {
        res.status(409).send({error: 'No User'});
    }
} 