// ---- Practice: Anagram Check ----
// Write isAnagram(str1, str2) that returns true if the two strings are
// anagrams of each other (same characters, same frequency), ignoring
// case and spaces.

function isAnagram(str1, str2) {
  // TODO: implement this
  return normalize(str1) === normalize(str2);
}

function normalize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "")
    .split("")
    .sort()
    .join("");
}

// ---- Test harness ----
function runTests() {
  const tests = [
    { a: "listen", b: "silent", expected: true },
    { a: "Astronomer", b: "Moon starer", expected: true },
    { a: "hello", b: "world", expected: false },
    { a: "", b: "", expected: true },
    { a: "a", b: "ab", expected: false }, // different lengths
    { a: "Dormitory", b: "Dirty Room", expected: true },
  ];

  tests.forEach((test, i) => {
    const result = isAnagram(test.a, test.b);
    const passed = result === test.expected;
    console.log(
      `Test ${i + 1}: ${passed ? "PASS ✅" : "FAIL ❌"}`,
      passed
        ? ""
        : `("${test.a}" vs "${test.b}", got ${result}, expected ${test.expected})`,
    );
  });
}

runTests();
