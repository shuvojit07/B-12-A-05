let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// display element
const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");

// heart button
document.querySelectorAll(".heartBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartDisplay.textContent = heartCount;
  });
});

// copy Button
document.querySelectorAll(".copyBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const hotline = e.target
      .closest(".card")
      .querySelector(".hotline").textContent;
    navigator.clipboard.writeText(hotline);
    alert(`Copied : ${hotline}`);
    copyCount++;
    copyDisplay.textContent = copyCount;
  });
});

// call button
document.querySelectorAll(".callBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const service = card.querySelector("p.text-xl").textContent;
    const hotline = card.querySelector(".hotline").textContent;

    if (coinCount < 20) {
      alert("Not enough coins to make this call!");
      return;
    }

    // cut coin
    coinCount -= 20;
    coinDisplay.textContent = coinCount;
    alert(`Calling ${service} at ${hotline}`);

    // history
    const now = new Date().toLocaleTimeString();
    const li = document.createElement("li");
    li.className = "p-2 bg-gray-100 ";
    li.innerHTML = `
    <div class="flex justify-between">
    <div>
     <span class="text-2xl font-bold">${service}</span></br>
    <span class=" text-xl font-bold">${hotline} </span></div>
    <div><span>${now}</span></div>
    </div>`;
    historyList.appendChild(li);
  });
});

// clear history
document.getElementById("clearHistoryBtn").addEventListener("click", () => {
  historyList.innerHTML = "";
});
