export function output(
  message = "",
  outputTag = "outputTag",
  shouldAppend = false
) {
  const divElement = document.getElementById(outputTag);
  if (shouldAppend) divElement.innerHTML += message;
  else divElement.innerHTML = message;
}; 