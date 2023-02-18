import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../components/config";

export default withIronSessionApiRoute(getUser, ironOptions);

async function getUser(req, res) {
    const user = req.session.user;
    if (user) {
        res.status(200).json({ username: user.username, email: user.email });
    } else {
        res.status(409).json({error: 'No User'});
    }
}