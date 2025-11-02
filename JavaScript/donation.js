function transaction(title) {
  // Create <details> element
  let time = new Date();
  const details = document.createElement("details");
  details.className =
    "collapse bg-base-100 border border-base-300 lg:text-center";
  details.setAttribute("name", "my-accordion-det-1");
  details.setAttribute("open", "");

//   Create <summary> element
  const summary = document.createElement("summary");
  summary.id = "history-heading";
  summary.className = "collapse-title font-semibold";
  summary.textContent = title; 

  // Create <div> element for content
  const content = document.createElement("div");
  content.id = "history-text";
  content.className = "collapse-content text-sm";
  content.textContent = time; 

  // Append summary and content to details
  details.appendChild(summary);
  details.appendChild(content);

  // Append details to body or any container
  document.getElementById('main-one').appendChild(details)
}

document
  .getElementById("first-donate-btn")
  .addEventListener("click", function () {
    let donate_amount = parseFloat(
      document.getElementById("first-donate-box").value
    );
    let balance = parseFloat(document.getElementById("main-balance").innerText);
    balance -= donate_amount;

    // check input number of string then append
    if (!isNaN(balance)) {
      // Main balance validation
      if (balance > 0) {
        // add to the transaction history
        let title = `${donate_amount} tk to ${document.getElementById("first-donate-title").innerText}`;
        transaction(title);

        document.getElementById("main-balance").innerText = balance;
      } else {
        document.getElementById("modal-heading").innerText = "Sorry!";
        document.getElementById("modal-text").innerText =
          "Your Main Balance is less your donate amount ";
        return;
      }
    }

    let donated_balance = parseFloat(
      document.getElementById("first-donated-balance").innerText
    );
    donate_amount += donated_balance;

    // Again check input number of string then append
    if (!isNaN(donate_amount)) {
      document.getElementById("first-donated-balance").innerText =
        donate_amount;
    } else {
      document.getElementById("modal-heading").innerText = "Sorry!";
      document.getElementById("modal-text").innerText =
        "Please input number with Positive!.";
      return;
    }
  });

document
  .getElementById("secend-donate-btn")
  .addEventListener("click", function () {
    let donate_amount = parseFloat(
      document.getElementById("secend-donate-box").value
    );
    let balance = parseFloat(document.getElementById("main-balance").innerText);
    balance -= donate_amount;

    // check input number of string then append
    if (!isNaN(balance)) {
      // Main balance validation
      if (balance > 0) {
        // add to the transaction history
        let title = `${donate_amount} tk to ${document.getElementById("second-donate-title").innerText}`;
        transaction(title);

        document.getElementById("main-balance").innerText = balance;
      } else {
        document.getElementById("modal-heading").innerText = "Sorry!";
        document.getElementById("modal-text").innerText =
          "Your Main Balance is less your donate amount ";
        return;
      }
    }

    let donated_balance = parseFloat(
      document.getElementById("secend-donated-balance").innerText
    );
    donate_amount += donated_balance;

    // Again check input number of string then append
    if (!isNaN(donate_amount)) {
      document.getElementById("secend-donated-balance").innerText =
        donate_amount;
    } else {
      document.getElementById("modal-heading").innerText = "Sorry!";
      document.getElementById("modal-text").innerText =
        "Please input number with Positive!.";
    }
  });

document
  .getElementById("third-donate-btn")
  .addEventListener("click", function () {
    let donate_amount = parseFloat(
      document.getElementById("third-donate-box").value
    );
    let balance = parseFloat(document.getElementById("main-balance").innerText);
    balance -= donate_amount;

    // check input number of string then append
    if (!isNaN(balance)) {
      // Main balance validation
      if (balance > 0) {
        // add to the transaction history
        let title = `${donate_amount} tk to ${document.getElementById("third-donate-title").innerText}`
        transaction(title);

        document.getElementById("main-balance").innerText = balance;
      } else {
        document.getElementById("modal-heading").innerText = "Sorry!";
        document.getElementById("modal-text").innerText =
          "Your Main Balance is less your donate amount ";
        return;
      }
    }

    let donated_balance = parseFloat(
      document.getElementById("third-donated-balance").innerText
    );
    donate_amount += donated_balance;

    // Again check input number of string then append
    if (!isNaN(donate_amount)) {
      document.getElementById("third-donated-balance").innerText =
        donate_amount;
    } else {
      document.getElementById("modal-heading").innerText = "Sorry!";
      document.getElementById("modal-text").innerText =
        "Please input number with Positive!.";
    }
  });

//   This is hidden setting on my web page
document.getElementById("history").addEventListener("click", function () {
  document.getElementById("main").classList.add("hidden");
  document.getElementById("main-one").classList.remove("hidden");
});

document.getElementById("donate").addEventListener("click", function () {
  document.getElementById("main-one").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
});
