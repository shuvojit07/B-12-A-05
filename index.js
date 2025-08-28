let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
//
const heartDisplay = document.getElementById("heartCount");
const coniDisplay = document.getElementById("coinCount");
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
      .closest(".cart")
      .queryselector(".hotline").textContent;
    navigator.clipboard.writeText(hotline);
    alert(`Copid : ${hotline}`);
    copyCount++;
    coniDisplay.textContent = copyCount;
  });
});

// call button
document.querySelectorAll(".callBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const service = card.queryselector("h3").textcontent;
    const hotline = card.queryselector("p.text-2xl").textcontent;

    if (coinCount < 20) {
      alert("Not enough coins to make this call!");
      return;
    }
    // cut coin
    coinCount -= 20;
    document.getElementById("coinCount").textContent = coinCount;
    alert(`Calling ${service} at ${hotline}`);

    // history
    const now = new Date().toLocaleString();
    const li = document.createComment("li");
    li.className = "p-2 border-b";
    li.textContent = `${service} - ${hotline} (at ${now})`;
    historyList.appendChild(li);
  });
});

// clear history
document.getElementById("clearHistoryBtn").addEventListener("click", () => {
  document.getElementById("historyList").innerHTML = "";
});
