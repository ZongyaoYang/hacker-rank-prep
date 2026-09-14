// ---- Practice: Palindrome Check ----
// Write isPalindrome(str) that returns true if the string reads the same
// forwards and backwards, ignoring case and non-alphanumeric characters.

function isPalindrome(str) {
  // TODO: implement this
  const cleaned = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  //   const reversed = cleaned.split("").reverse().join("");
  //   return cleaned === reversed;
  let left = 0;
  let right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}

// ---- Test harness ----
function runTests() {
  const tests = [
    { input: "racecar", expected: true },
    { input: "A man, a plan, a canal: Panama", expected: true },
    { input: "hello", expected: false },
    { input: "", expected: true },
    { input: "Was it a car or a cat I saw?", expected: true },
    { input: "ab", expected: false },
  ];

  tests.forEach((test, i) => {
    const result = isPalindrome(test.input);
    const passed = result === test.expected;
    console.log(
      `Test ${i + 1}: ${passed ? "PASS ✅" : "FAIL ❌"}`,
      passed
        ? ""
        : `(input: "${test.input}", got ${result}, expected ${test.expected})`,
    );
  });
}

runTests();
