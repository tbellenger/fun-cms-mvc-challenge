const toggleSignup = document.querySelector("#toggle-signup");

toggleSignup.addEventListener("click", toggleLoginSignup);

function toggleLoginSignup() {
  event.preventDefault();

  document.querySelector(".login-form").classList.toggle("hide");
  document.querySelector(".signup-form").classList.toggle("hide");

  toggleSignup.innerText =
    toggleSignup.innerText == "Sign up instead"
      ? "Login instead"
      : "Sign up instead";
}

async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    console.log(response.ok);
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      const json = await response.json();
      showModal("<h3>" + response.statusText + "</h3>" + json.message);
      //alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      const json = await response.json();
      showModal("<h3>" + response.statusText + "</h3>" + json.message);
      //alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
