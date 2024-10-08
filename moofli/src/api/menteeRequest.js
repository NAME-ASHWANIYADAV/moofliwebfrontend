import axios from "axios";

const API = axios.create({ baseURL: "http://93.127.172.217:2024" });

export const getAcceptedBookings = () => {
    const token = localStorage.getItem("skilloptoken");
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        withCredentials: true,
    };

    return API.get(`api/mentee/meet/accepted`, config);
};

export const getPendingMeet = () => {
    const token = localStorage.getItem("skilloptoken");
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        withCredentials: true,
    };

    return API.get(`api/mentee/meet/pending`, config);
};

export const getCompletedMeet = () => {
    const token = localStorage.getItem("skilloptoken");
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        withCredentials: true,
    };

    return API.get(`api/mentee/meet/completed`, config);
};
