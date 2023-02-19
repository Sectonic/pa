import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../components/config";

export default withIronSessionApiRoute(createUser, ironOptions);

async function createUser(req, res) {
    const {email, username, password, confirm} = req.body;
    if (req.session.user) {
        res.status(500).json({error: 'Already Logged In'});
    }
    let requestOptions = {
        credentials: 'include',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email, username, password, confirm
        })
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/create/user`, requestOptions);
    const data = await response.json();
    req.session.user = {
        id: data.user_id,
        email: data.email,
        username: data.username
    };
    await req.session.save();
    res.send({ ok: true });
}