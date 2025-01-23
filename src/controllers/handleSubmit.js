import { output } from "../utils/output";
import { Trivia } from "../utils/Trivia";

export function handleSubmit(event = new Event()) {
  event.preventDefault();
  debugger;
  const inputs = event.target;
  const options = inputs[0];
  const multiple = options[0];
  const boolean = options[1];
  const number = inputs[1];

  output(`${multiple.value}`);

  output(multiple.selected);

  output(boolean.value);
  output(boolean.selected);

  const trivia = new Trivia();
  trivia.amount = number.value;

  if (multiple.selected) trivia.type = multiple.value;
  if (boolean.selected) trivia.type = boolean.value;

  const baseURL = "http://opentdb.com/api.php";
  const thingProxy = "https://thingproxy.freeboard.io/fetch";
  const corsProxy = "https://corsProxy.com"
  const url = `${baseURL}?amount=${trivia.amount}&type=${trivia.type}`;
  
  const promise = fetch(url);
  promise.then(getServerResponse);
}

function getServerResponse(response = new Response()) {
  const promise = response.text();
  promise.then(getJsonString);
  debugger;
}

function getJsonString(stringifiedObject = "") {
  const openTdbObject = JSON.parse(stringifiedObject);
  const triviaQuestions = openTdbObject.results;
  const triviaDetails = triviaQuestions[0];
  const question = triviaDetails.question;
  const correctAnswer = triviaDetails.correct_answer;
  const incorrectAnswers = triviaDetails.incorrect_answers;

  console.log(openTdbObject);

  output(question);
  output(`Correct answer: ${correctAnswer}`);
  output(`Incorrect answer 1: ${incorrectAnswers[0]}`);
  output(`Incorrect answer 3: ${incorrectAnswers[1]}`);
  output(`Incorrect answer 2: ${incorrectAnswers[2]}`);



  debugger;


}