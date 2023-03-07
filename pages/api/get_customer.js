import {getSession} from '../../components/getsession';

export default async function handler(req, res) {
    const session = await getSession(req, res);
    const user = session.user ? JSON.parse(session.user) : undefined;
    if (user) {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API}/get/customer_id?user_id=${user.id}`, {credentials: 'include'});
        const data = await request.json();
        if (data.customer_id) {
            res.status(200).send({'response': 'Previous Subscriptions'});
        } else {
            res.status(404).send({'response': 'No Previous Subscription'});
        }
    } else {
        res.status(404).end();
    }
}