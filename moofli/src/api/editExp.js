import axios from "axios";

const API = axios.create({ baseURL: "http://93.127.172.217:2024" });

const editExp = (expId, data) => {
    const token = localStorage.getItem("skilloptoken");
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        withCredentials: true,
    };
    return API.put(`/api/user/edit/experence/${expId}`, data, config);
};

export default editExp;
