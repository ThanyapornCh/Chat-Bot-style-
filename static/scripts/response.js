function getBotResponse(input) {
  //rock paper scissors
  if (input == 'rock') {
    return 'paper';
  } else if (input == 'paper') {
    return 'scrissors';
  } else if (input == 'scrissors') {
    return 'rock';
  }

  // Simple responses
  if (input == 'hello' || input == 'Hello') {
    return 'Hello there';
  } else if (input == 'goodbye') {
    return 'Talk to you later';
  } else {
    return 'Try asking something else';
  }
}
