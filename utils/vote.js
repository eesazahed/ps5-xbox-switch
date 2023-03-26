import Vote from "../models/Vote.js";
import encrypted from "./encrypted.js";

const vote = async (userid, option) => {
  const userAlreadyVoted = await encrypted(userid);

  if (userAlreadyVoted === null) {
    return false;
  }

  if (option !== 1 && option !== 2 && option !== 3) {
    return false;
  }

  await Vote.create({ userid: userAlreadyVoted, option });

  return true;
};

export default vote;
