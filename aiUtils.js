const Groq = require("groq-sdk");
require('dotenv').config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const getAIResponse = async (question) => {
    if (typeof question !== 'string') throw new Error("Input must be a string");

    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant. You must answer the user's question with a SINGLE WORD only. Do not use punctuation. Do not write a sentence."
                },
                {
                    role: "user",
                    content: question
                }
            ],
            model: "llama-3.1-8b-instant",
            temperature: 0.5,
            max_tokens: 10,
        });

        return chatCompletion.choices[0]?.message?.content?.trim() || "Unknown";
    } catch (error) {
        console.error("Groq API Error:", error.message);
        throw new Error("AI Service Unavailable");
    }
};

module.exports = { getAIResponse };
