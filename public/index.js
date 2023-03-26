const optionBtns = document.querySelectorAll(".option-btn");

const option1Voters = document.getElementById("option1Voters");
const option2Voters = document.getElementById("option2Voters");
const option3Voters = document.getElementById("option3Voters");

const isWinning = document.getElementById("isWinning");
const vote = document.getElementById("vote");
const loading = document.getElementById("loading");

	optionBtns.forEach((optionBtn) => {
		optionBtn.onclick = async () => {
	    loading.innerText = "Loading...";
	    const response = await fetch(`/vote/${optionBtn.id}`, { method: "POST" });
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
		}
	})
