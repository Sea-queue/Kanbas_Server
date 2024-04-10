import OpenAI from "openai";

const openai = new OpenAI();
const chat = ["hey"];

export default function ChatCompletionRoutes(app) {
  app.get("/api/openai/chat", (req, res) => {
    res.send(chat);
  });

  app.post("/api/openai/chat", async (req, res) => {
    const userMessage = req.body;
    chat.push(userMessage);
    try {
      const completion = await openai.chat.completions.create({
        messages: chat,
        model: "gpt-4",
      });
      const choice = completion.choices[0];
      chat.push(choice.message);
      res.json(choice.message);
    } catch (error) {
      res
        .status(404)
        .json({ message: "OpenAI API is not valid, Check your payment!" });
    }
  });
}
