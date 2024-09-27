const axios = require("axios");
require("dotenv").config(); // загружаем переменные окружения из .env

const TOKEN = process.env.TOKEN;
const CHAT_ID = "-4589414007"; // Замените на реальный chat_id
const MESSAGE = "Тест!";

const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const sendMessage = async () => {
    try {
        const response = await axios.post(url, {
            chat_id: CHAT_ID,
            text: MESSAGE,
        });
        console.log("Сообщение отправлено:", response.data);
    } catch (error) {
        console.error("Ошибка при отправке сообщения:", error.response ? error.response.data : error.message);
    }
};

sendMessage();
