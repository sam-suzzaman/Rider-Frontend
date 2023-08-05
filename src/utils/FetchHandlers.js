import axios from "axios";
import useFetchConfig from "./useFetchConfig";

export const getSingleHandler = async ({ url, id }) => {
    const config = useFetchConfig();
    const response = await axios.get(`${url}/${id}`, config);
    return response.data.cycle;
};
