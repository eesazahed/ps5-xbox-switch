const option1Btn = document.getElementById("option1Btn");
const option2Btn = document.getElementById("option2Btn");
const option3Btn = document.getElementById("option3Btn");
const option1Voters = document.getElementById("option1Voters");
const option2Voters = document.getElementById("option2Voters");
const option3Voters = document.getElementById("option3Voters");

const isWinning = document.getElementById("isWinning");
const vote = document.getElementById("vote");
const loading = document.getElementById("loading");

if (option1Btn && option2Btn && option3Btn) {
  option1Btn.onclick = async () => {
    loading.innerText = "Loading...";
    const response = await fetch("/vote/0", { method: "POST" });
    const data = await response.json();

    if (response.status === 200) {
      isWinning.innerText = data.winning;
      option1Voters.innerText = data.option1Voters;
      option2Voters.innerText = data.option2Voters;
      option3Voters.innerText = data.option3Voters;
      vote.innerHTML = "<h3>You've already voted!</h3>";
      loading.innerText = "";
    } else {
      loading.innerText = data.message;
    }
  };

  option2Btn.onclick = async () => {
    loading.innerText = "Loading...";
    const response = await fetch("/vote/1", { method: "POST" });
    const data = await response.json();

    if (response.status === 200) {
      isWinning.innerText = data.winning;
      option1Voters.innerText = data.option1Voters;
      option2Voters.innerText = data.option2Voters;
      option3Voters.innerText = data.option3Voters;
      vote.innerHTML = "<h3>You've already voted!</h3>";
      loading.innerText = "";
    } else {
      loading.innerText = data.message;
    }
  };

  option3Btn.onclick = async () => {
    loading.innerText = "Loading...";
    const response = await fetch("/vote/2", { method: "POST" });
    const data = await response.json();

    if (response.status === 200) {
      isWinning.innerText = data.winning;
      option1Voters.innerText = data.option1Voters;
      option2Voters.innerText = data.option2Voters;
      option3Voters.innerText = data.option3Voters;
      vote.innerHTML = "<h3>You've already voted!</h3>";
      loading.innerText = "";
    } else {
      loading.innerText = data.message;
    }
  };
}
