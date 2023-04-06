let biriyani = document.getElementById("biriyani");
const btn = document.getElementById("btn");

let getBiriyani = () => {
  fetch("https://biriyani.anoram.com/get")
    .then((response) => response.json())
    .then((data) => {
      biriyani.innerHTML = `<img src="${data.image}" class="img" alt="...">`;
    })
    .catch((error) => console.error(error));
};
getBiriyani();
btn.addEventListener("click", getBiriyani);
biriyani.addEventListener("click", getBiriyani);

// Dynamic year Footer
let year = new Date().getFullYear();
document.getElementById(
  "footer"
).innerHTML = `Developed and maintained by <a href="https://github.com/anubhavlal07" target="_blank">Anubhav Lal</a> | &copy; ${year} All Rights Reserved.`;

// Diable input from users
(document.onkeydown = function (event) {
  if (event.keyCode == 123) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 86) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 117) {
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    return false;
  }
}),
  false;
if (document.addEventListener) {
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );
} else {
  document.attachEvent("oncontextmenu", function () {
    window.event.returnValue = false;
  });
}
