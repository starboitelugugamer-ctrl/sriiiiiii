import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Gemini Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "GEMINI_API_KEY is not configured. Please set it in Settings > Secrets."
        });
      }

      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid request. 'messages' array is required." });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = `You are the virtual AI Assistant of PNS Hostel & PG, located near the Main Highway, Nagaram, Secunderabad, Telangana. Your name is "PNS Warden Bot".
Your tone should be welcoming, professional, clear, and highly helpful.
PNS Hostel provides premier lodging accommodations for students and young working executives in Hyderabad.

Here are the accurate details about the hostel that you MUST adhere to:
- Room sharing styles and prices:
  1. Single Sharing: ₹6,000/month.
  2. 2-Sharing (Twin Sharing): ₹5,050/month (or ₹5,000/month in references, let's keep it strictly consistent as 2-Sharing is ₹5,000/month).
  3. 4-Sharing: ₹4,500/month.
- No Refundable Deposits: PNS Hostel does not charge any security deposits or lock/key deposits anymore. Pricing is simple and direct monthly rent.
- Washing Machine Access is completely free for all residents now. There are no additional or hidden charges!
- Amenities included in the rate for all rooms:
  1. Unlimited High-Speed Wi-Fi
  2. Three delicious, hygienic homestyle meals daily (Breakfast 7:30 AM - 9:30 AM, Lunch 12:30 PM - 2:30 PM, and Dinner 7:30 PM - 9:30 PM). Packable lunch boxes are available for occupants who leave early for classes or offices.
  3. Continuous RO drinking water filter system and warm milk accessories.
  4. Daily thorough cleaning & housekeeping.
  5. 24/7 CCTV security coverage and vigilant wardens.
  6. Generator backup power support.
  7. Dedicated parking block for vehicles (2-wheelers).
- NOTE: Room features do NOT include a private writing desk or study chair anymore (spacious general study tables, common dining halls, and lockable individual storage cupboards are provided instead).
- Gate Rules: Outer main gate closes at 10:30 PM daily. Digital card entries can be configured for working professionals with late schedules (simply pre-inform the warden).
- Direct Contact and Booking:
  - Phone / WhatsApp: +91 9550309728 (Direct Nagaram Branch Warden)
  - Location: Near Main Highway, Nagaram, Keera, Secunderabad, Telangana - 500083
  - Email: contact@pnshostel.com

Answer any questions accurately based ONLY on this information. If the user asks about booking, guide them to use our on-page Stay Estimator or the Booking Inquiry form, or prompt them to click the direct WhatsApp link to message the warden. Do not hallucinate or promise features we don't have. Maintain a helpful, respectful Indian hospitality tone.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: messages,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini Chat Error:", error);
      res.status(500).json({ error: error.message || "An error occurred with the AI assistant." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
