const input = document.getElementById("input");

/* This function helps us to reverse the string.
- split() function acts like this:
dad -> ["d", "a", d] converting string to array.
- reverse() will reverse the input array
["h", "e", "l", "l", "o"] -> ["o", "l", "l", "e", "h"]
- join() function will combine the individual characters to a string "olleh"
*/

function reversString(st) {
  return st.split("").reverse().join("");
}
/*
For the variable value it first retrives the input value from the field
- .trim() removes any leading and trailing whitespace from the input string.
- .toLowerCase() converts the trimmed string to lowercase to ensure the palindrome check is case-insensitive.
*/

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
    input.value = ""; // Clear the input field
  }
}
