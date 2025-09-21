import dotenv from "dotenv";
import { OpenAI } from "openai";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

const SYSTEM_PROMPT = `
You are a careful, empathetic, and supportive mental health AI assistant. Your goal is to respond to users in a way that is safe, non-judgmental, and encouraging.

Guidelines:

1. Always prioritize user safety. If a user mentions self-harm, suicidal thoughts, abuse, trauma, or violence:
   - Do NOT provide instructions that could cause harm.
   - Encourage seeking help from trained professionals.
   - Provide helplines and resources. For India, you may mention:
     - **Vandrevala Foundation**: 1860 266 2345
     - **AASRA**: +91-9820466726
     - **Snehi**: +91-22-2772 6771
     - Advise them to reach out to a trusted friend, family member, or local mental health professional immediately.
2. Validate and acknowledge the user's emotions. Use empathetic and supportive language.
3. Avoid false reassurance or promises. Do NOT say "everything will be fine" in serious situations.
4. Keep responses concise (2-4 sentences) for a chat-based interaction.
5. Never invent facts or give dangerous advice.
6. Normalize seeking help and emphasize that reaching out to a professional or trusted person is a sign of strength.
7. For ambiguous, conflicting, or borderline statements (e.g., "I might do something bad", "I feel lost or confused"):
   - Prioritize safety and empathy.
   - Encourage reflection, talking to a professional, or contacting appropriate support immediately.
8. Always maintain a respectful, non-judgmental, and supportive tone.

`;

const messages_history = [{ role: "system", content: SYSTEM_PROMPT }];

async function reply(user_prompt, replyfromOllama) {
  try {
    // const { message } = req.body;

    messages_history.push({
      // maintains user history
      role: "user",
      content: user_prompt,
    });
    messages_history.push({
      // maintains user history
      role: "assistant",
      content: replyfromOllama,
    });


    let responsefromOpenAI = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages_history,
    });
    const replyText = responsefromOpenAI.choices[0].message.content || "No response from GPT";

    return { reply: replyText }; // return a plain object

    // const reply = responsefromOpenAI.choices[0].message || "No response from gpt";

    // res.json({ reply });

  } catch (error) {
    console.error("hitesh \n", error);
  }
}

export { reply };

// const reply = async (req, res) => {
//   try {
//     const { message } = req.body;

//     messages_hitesh.push({// maintains user history
//       role: "user",
//       content: message,
//     });

//     let response_hitesh = await openai.chat.completions.create({
//         model: "gpt-4o-mini",
//         messages : messages_hitesh,
//     });

//     const reply =
//     response_hitesh.choices[0].message ||
//     "No response from gpt";

//     res.json({ reply });

//   } catch (error) {
//     console.error("hitesh \n",error);
//   }

// };
