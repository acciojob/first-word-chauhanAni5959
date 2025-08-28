function firstWord(s) {
  // Trim leading spaces first
  str = str.trimStart();

  // Find index of first space
  let spaceIndex = str.indexOf(" ");

  // If no space found, return whole string
  if (spaceIndex === -1) {
    return str;
  }

  // Return substring from start till first space
  return str.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
