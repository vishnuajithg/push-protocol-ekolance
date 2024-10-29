import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { ethers } from "ethers";

const signer = ethers.Wallet.createRandom();

const admin = await PushAPI.initialize(signer,{
    env:CONSTANTS.ENV.STAGING,
})

// console.log(admin,"admin");

const adminInfo = await admin.info()

const adminProfile = await admin.profile.info()
// console.log(adminProfile,"adminProfile");

const updateAdminProfile = await admin.profile.update({
    name: "Vishnu AG",
    description: "Hello, I am Vishnu AG",
    image: "https://example.com/vishnu.jpg",
})

console.log(updateAdminProfile,"updateAdminProfile");

const ekolanceHangoutForum = await admin.chat.group.create(
    "Ekolance Hangout Forum",
    {
        name: "Ekolance Hangout Forum",
        description: "Ekolance Hangout Forum",
        image: "https://example.com/ekolance.jpg",
    }
)
console.log(ekolanceHangoutForum, "ekolanceHangoutForum");

const chatID = "abec88a09c6e1ebd20c03c86e4259b4530a4000a35c9e1496ef0efd90391ecaa"

const joinEkolanceHangoutForum = await admin.chat.group.join(chatID)

const leaveEkolanceHangoutForum = await admin.chat.group.leave(chatID)

const sendMessageToEkolanceHangoutForum = await admin.chat.send(
    chatID, {
    message: "Hello, I am Vishnu AG",
    type: "Text"
})

console.log(fetchGroupInfo,"fetchGroupInfo");

// const removeFromGroup = await admin.chat.group.remove(chatID, {
//     role: "MEMBER   ",
//     member: "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
// })

const updatedGroup = await userAlice.chat.group.update(chatID, {
    name:"Web3 Builders",
    description:"A place for Web3 enthusiasts",
    image:"https://example.com/web3.jpg",
})