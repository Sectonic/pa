import {getSession} from '../../components/getsession';

export default async function handler(req, res) {
    const session = await getSession(req, res);
    const user = session.user ? JSON.parse(session.user) : undefined;
    const { session_id } = req.query;
    let requestOptions = {
        credentials: 'include',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            session_id: session_id,
            user_id: user.id
        })
    }
    const request = await fetch(`${process.env.NEXT_PUBLIC_API}/add/subscription`, requestOptions);
    if (request.ok) {
        res.status(200).json({'response': 'Customer Account Created'});
    } else {
        res.status(404).json({'response': "Account Already Exists"});
    }

}