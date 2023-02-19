import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../components/config";

export default withIronSessionApiRoute(Logout, ironOptions);

async function Logout(req, res) {
    req.session.destroy();
    res.status(200).json({success: 'Successfully logged Out'});
}