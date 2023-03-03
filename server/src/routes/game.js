import express from "express";
import bcrypt from "bcrypt";
import { StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const api_key = "nv2zh5h8pmyh";
const api_secret =
  "gf4wmuf9rj9vzfpvrdjkwr7qapwty64jdrb48qv7dmqejhrfhc6z94zr2atzcw4q";

router.post("/create", async (req, res) => {
  try {
    const { userInvite } = req.body;
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const randomChannelId = uuidv4();
    const channel = serverClient.channel("game", randomChannelId);
    await channel.create();
    await channel.inviteMembers([userInvite]);
    res.json({ randomChannelName });
  } catch (error) {
    res.json(error);
  }
});
export {router}