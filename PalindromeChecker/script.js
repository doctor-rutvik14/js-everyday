const input = document.getElementById("input");

function reversString(st) {
  return st.split("").reverse().join("");
}

function check() {
  const value = input.value.trim().toLowerCase();
  const reverse = reversString(value);
  if (value === "") {
    alert("No text entered.");
  } else {
    if (value === reverse) {
      alert("Entered text is Palindrome.");
    } else {
      alert("Entered text is Not a Palindrome.");
    }
    input.value = "";
  }
}
