import Vote from "../models/Vote.js";

const getAllVotes = async () => {
  try {
    const votes = await Vote.findAll({ raw: true });
    const option1Voters = votes.filter((vote) => vote.option === 1).length;
    const option2Voters = votes.filter((vote) => vote.option === 2).length;
    const option3Voters = votes.filter((vote) => vote.option === 3).length;

    let winning = "";

    const largest = Math.max(option1Voters, option2Voters, option3Voters);

    if (
      (option1Voters === largest && option2Voters === largest) ||
      (option1Voters === largest && option3Voters === largest) ||
      (option2Voters === largest && option3Voters === largest)
    ) {
      winning = "It's a tie!";
    } else if (option1Voters === largest) {
      winning = `PS5 is winning!`;
    } else if (option2Voters === largest) {
      winning = `Xbox is winning!`;
    } else {
      winning = `Switch is winning!`;
    }

    return { option1Voters, option2Voters, option3Voters, winning };
  } catch {
    return null;
  }
};

export default getAllVotes;
