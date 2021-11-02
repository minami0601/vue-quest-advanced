import axios from "axios";

const backendURL = process.env.VUE_APP_BACKEND_URL;

// イベント一覧取得
export const getEventAll = () => {
    const response = axios.get(`${backendURL}/events`);
    return response;
};

export const getEvent = id => {
    const response = axios.get(`${backendURL}/events/${id}`);
    return response;
};

export const createEvent = data => {
    const response = axios.post(`${backendURL}/events`, data);
    return response;
}

export const deleteEvent = id => {
    const response = axios.put(`${backendURL}/events/${id}/delete`);
    return response;
}
export const updateEvent = (id, data) => {
    const response = axios.put(`${backendURL}/events/${id}`, data);
    return response;
};
