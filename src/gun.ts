import Gun from "gun/gun";
import "gun/sea";
import "gun/axe";

// const relayPeer = process.env.RELAY_SERVER_URL
const gun = Gun(["http://3.236.91.71:8765/gun"]);
const user = gun.user().recall({ sessionStorage: true });

export { gun, user };
