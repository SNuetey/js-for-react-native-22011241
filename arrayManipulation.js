

function processArray(numbers) {
  const answer = numbers.map((value) => {
    if (value % 2 === 0) {
      //squared Even number
      return value ** 2;
    } else {
      //tripled Odd number
      return value * 3;
    }
  });

  return answer;
}


function formatArrayStrings(strings, answer) {
  const formattedStrings = strings.map((str, index) => {
    const num = answer[index];
    if (num % 2 === 0) {
      //capitalized Even number
      return str.toUpperCase();
    } else {
      //capitalized Odd number
      return str.toLowerCase();
    }
  });

  return formattedStrings;
}

