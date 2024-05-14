// Code your solutions in this file
function writeCards(names, eventName) {
    const messages = []; // Create an empty array to hold the messages
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages; // Return the array of messages
  }
  
  // Example usage:
  const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(messages);

  function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--; // Decrement num on each iteration
    }
  }
  
  // Example usage:
  countDown(10);
  