import OpenAI from "openai";

export async function handler(event){

const {question}=JSON.parse(event.body);

const openai=new OpenAI({
apiKey:process.env.OPENAI_API_KEY
});

const response=await openai.chat.completions.create({
model:"gpt-4o-mini",
messages:[
{role:"user",content:question}
]
});

return{
statusCode:200,
body:JSON.stringify({
reply:response.choices[0].message.content
})
};

}
