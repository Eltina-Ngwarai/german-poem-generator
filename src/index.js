function displayPoem(response) {
  console.log("poem generate");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.getElementById("user-instructions");
  let apiKey = "45d862b440fa3dtc36ab8b0be0f20o60";
  let context =
    "You are a romantic German poett and love to write short poems.You should generate a 4 line poem in basic HTML and separate each line with a <br/>.Make sure to follow the instuctions.Do not include a title.";
  let prompt = `User instructions:Generate a German poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log(` Prompt: ${prompt} `);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElemnt = document.querySelector("#poem-form");
poemFormElemnt.addEventListener("submit", generatePoem);
