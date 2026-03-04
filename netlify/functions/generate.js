import OpenAI from "openai";

export async function handler(event){

const {prompt}=JSON.parse(event.body);

const openai=new OpenAI({
apiKey:process.env.OPENAI_API_KEY
});

const result=await openai.images.generate({
model:"gpt-image-1",
prompt:prompt,
size:"1024x1024",
n:4
});

return{
statusCode:200,
body:JSON.stringify(result)
};

}
