import axios, { AxiosResponse } from "axios";

export interface ApiResponse<Items = unknown> {
  status: "failed" | "succeed";
  message: string;
  items: Items;
}

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "3b30b556f1msh0d53de73f64ef83p1c3454jsn65f10e7b2a9e",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export async function get<T extends ApiResponse>(
  url: string
): Promise<AxiosResponse<T>> {
  return axios.get(`${BASE_URL}/${url}`, options);
}
