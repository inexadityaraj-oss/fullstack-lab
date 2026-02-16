// -------- VALIDATION --------

document.getElementById("submitBtn").onclick = function () {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const msg = document.getElementById("message");

  // Empty check
  if (!username || !email || !phone || !password || !confirm) {
    msg.innerHTML = "All fields are required.";
    return;
  }

  // Phone validation (10 digits)
  if (!/^\d{10}$/.test(phone)) {
    msg.innerHTML = "Phone number must be 10 digits.";
    return;
  }

  // Email validation
  if (!/^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/.test(email)) {
    msg.innerHTML = "Invalid email format.";
    return;
  }

  // Password validation
  if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/.test(password)) {
    msg.innerHTML =
      "Password must be 7+ chars with capital letter, digit, and special (&,$,#,@).";
    return;
  }

  // Match password
  if (password !== confirm) {
    msg.innerHTML = "Passwords do not match.";
    return;
  }

  msg.style.color = "green";
  msg.innerHTML = "Registration Successful!";
};

// -------- DOM FUNCTIONS --------

// Change image
function changeImage() {
  document.getElementById("demoImg").src =
    "https://cdn-icons-png.flaticon.com/512/3135/3135755.png";
}

// Add text node
function addText() {
  const newNode = document.createTextNode("Hello Student! ");
  document.getElementById("textContainer").appendChild(newNode);
}

// Delete node
function deleteText() {
  const container = document.getElementById("textContainer");
  if (container.firstChild) container.removeChild(container.firstChild);
}

// -------- ACCESS METHODS DEMO --------

// getElementsByTagName
const inputs = document.getElementsByTagName("input");

// getElementsByClassName example (not used but required)
// document.getElementsByClassName("container");

// -------- jQuery --------

$(document).ready(function () {
  // Change button text
  $("#jqBtn").text("Clicked using jQuery");

  // Set background image
  $("body").css("background-image", "url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d')");

  // Access form data
  $("#submitBtn").click(function () {
    console.log("Username:", $("#username").val());
  });

  // Add attribute
  $("#jqBtn").attr("title", "This is a jQuery button");
});
