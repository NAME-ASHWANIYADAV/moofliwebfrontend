import axios from "axios";

const API = axios.create({ baseURL: "http://93.127.172.217:2024" });

export const createChat = (data) => {
    const token = localStorage.getItem("skilloptoken");

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        withCredentials: true,
    };
    return API.post("/api/chat/", data, config);
};

export const userChats = (id) => {
    const token = localStorage.getItem("skilloptoken");

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        withCredentials: true,
    };
    return API.get(`/api/chat/${id}`, config);
};

export const findChat = (firstId, secondId) => {
    const token = localStorage.getItem("skilloptoken");

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        withCredentials: true,
    };
    return API.get(`/chat/find/${firstId}/${secondId}`, config);
};
