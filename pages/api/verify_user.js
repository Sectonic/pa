import {getSession} from '../../components/getsession';

export default async function handler(req, res) {
    const session = await getSession(req, res);
    const {email, username, password, confirm} = req.body;
    if (session.user) {
        res.status(500).send({error: 'Already Logged In'});
    }
    let requestOptions = {
        credentials: 'include',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email, username, password, confirm
        })
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/verify/user`, requestOptions);
    const data = await response.json();
    if (response.ok) {
        res.status(200).send({'success': 'Information Valid'});
    } else {
        res.status(response.status).send({ error: data.error });
    }
}