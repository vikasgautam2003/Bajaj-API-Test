require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getFibonacci, getPrimes, getHCF, getLCM } = require('./mathUtils');
const { getAIResponse } = require('./aiUtils');

const app = express();

app.use(express.json());
app.use(cors());

const OFFICIAL_EMAIL = process.env.OFFICIAL_EMAIL || "vikas1585.be23@chitkarauniversity.edu.in";

app.get('/health', (req, res) => {
    res.status(200).json({ 
        is_success: true,
        official_email: OFFICIAL_EMAIL,
    });
});

app.post('/bfhl', async (req, res) => {
    try {
        const body = req.body;
        let resultData;

        if (body.fibonacci !== undefined) {
            resultData = getFibonacci(body.fibonacci);
        }
        else if (body.prime !== undefined) {
            resultData = getPrimes(body.prime);
        }
        else if (body.lcm !== undefined) {
            resultData = getLCM(body.lcm);
        }
        else if (body.hcf !== undefined) {
            resultData = getHCF(body.hcf);
        }
        else if (body.AI !== undefined) {
            resultData = await getAIResponse(body.AI);
        }
        else {
            return res.status(400).json({
                is_success: false,
                official_email: OFFICIAL_EMAIL,
                message: "Invalid Request: No valid key (fibonacci, prime, lcm, hcf, AI) found."
            });
        }

        res.json({
            is_success: true,
            official_email: OFFICIAL_EMAIL,
            data: resultData
        });

    } catch (error) {
        console.error("Error processing request:", error.message);
        res.status(500).json({
            is_success: false,
            official_email: OFFICIAL_EMAIL,
            message: error.message || "Internal Server Error"
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
