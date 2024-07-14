// pages/api/openai.js
import OpenAI from "openai";

export default async function handler(req, res) {
    const base64Img =req.body

    const aiOpen = new OpenAI({
        organization: process.env.OPENAI_ORG,
        project: process.env.OPENAI_PROJECT,
        apiKey: process.env.OPENAI_API_KEY
    });


    const stream = await aiOpen.chat.completions.create({
        model: "gpt-4o",
        messages: [{
            role: "user", "content": [
                {
                    "type": "text",
                    "text": "**Analyze the Nutritional Information in the Image**\n\n- **Image**: [Attach the image]\n\n**Information Needed**:\n**Overall Summary**:\n   - Provide a clear statement indicating if the food is **good**, **bad**, or **okay** for health, with a brief explanation.\n\n**Format the response as a JSON object** with the following structure:\n\n {\n  \"overallSummary\": {\n    \"healthRating\": \"okay\",\n    \"explanation\": \"This food has a balanced nutritional profile with moderate calories, protein, and minimal saturated fat. However, it contains a decent amount of total sugar and sodium. It is generally good for health if consumed in moderation and as part of a balanced diet.\"\n  }\n}"
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": base64Img,
                        "detail": "high"
                    }
                }
            ]
        }],
    });

    res.status(200).json({result: stream.choices[0].message.content})
}
