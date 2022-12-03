import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = process.env.NEXT_PUBLIC_PUSH_CHANNEL_PK; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

type sendNotificationType = {
  type: 3 | 1;
  title: string;
  body: string;
  recipientAddresses?: string[];
};

const sendNotification = async ({
  type,
  title,
  body,
  recipientAddresses,
}: sendNotificationType) => {
  try {
    // for broadcast notifs, recipientAddresses will be undefined
    const recipients =
      recipientAddresses === undefined
        ? undefined
        : "eip155:5:" + recipientAddresses[0];

    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type, // target - 3, broadcast - 1
      identityType: 2, // direct payload
      notification: {
        title,
        body,
      },
      payload: {
        title,
        body,
        cta: "",
        img: "",
      },
      recipients, // recipient address
      channel: "eip155:5:" + process.env.NEXT_PUBLIC_PUSH_CHANNEL_ADDRESS, // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};

export default sendNotification;
