import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../components/config";

export default withIronSessionApiRoute(getUser, ironOptions);

async function getUser(req, res) {
    const hash = req.session.hash;
    if (hash) {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API}/get/user?hash=${hash}`, {credentials: 'include'});
        const data = await request.json();
        if (request.ok) {
            res.status(200).json({ username: data.username, email: data.email, plus: data.plus });
        } else {
            req.session.destroy();
            res.status(409).json({error: 'No User'});
        }
    } else {
        res.status(409).json({error: 'No User'});
    }
}