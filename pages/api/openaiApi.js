// pages/api/openai.js
import OpenAI from "openai";

export default async function handler(req, res) {

    const { prompt } = req.body;

    const aiOpen = new OpenAI({
        organization: process.env.OPENAI_ORG,
        project: process.env.OPENAI_PROJECT,
        apiKey: process.env.OPENAI_API_KEY
    });


    const stream = await aiOpen.chat.completions.create({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
    });

    console.log(stream.choices[0].message.content);

    res.status(200).json({result: stream.choices[0].message.content})
}
