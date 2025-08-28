function firstWord(s) {
  // Trim leading spaces first
  s = s.trimStart();

  // Find index of first space
  let spaceIndex = s.indexOf(" ");

  // If no space found, return whole string
  if (spaceIndex === -1) {
    return s;
  }

  // Return substring from start till first space
  return s.substring(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
