//From the damn readline package we can take inputs

import "dotenv/config"
import readline from 'readline/promises';
import { ChatMistralAI } from "@langchain/mistralai";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

// rl.question("what is wtf?",(name)=>{
//     console.log(`Hello ${name}`);
//     rl.close();
// })

const model = new ChatMistralAI({
    model: "mistral-small-2603",
});

while(true){
    const userInput = await rl.question("You: ");

    const response = await model.invoke(userInput);

    console.log(response.text)

}

rl.close()

//All requests are stateless