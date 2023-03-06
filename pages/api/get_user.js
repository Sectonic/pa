import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../components/config";

export default withIronSessionApiRoute(getUser, ironOptions);

async function getUser(req, res) {
    const user = req.session.user;
    console.log(req.session.user);
    if (user) {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API}/get/subscription?user_id=${user.id}`, {credentials: 'include'});
        res.status(200).json({ username: user.username, email: user.email, plus: request.ok ? true : false });
    } else {
        res.status(409).json({error: 'No User'});
    }
}