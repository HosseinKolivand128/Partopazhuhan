import axios from "axios";
const baseURL = "http://localhost:8000";
//createUser, getUserById, getAllUsers
const createUser = async (path, info) => {
    try {
        const result = await axios.post(baseURL + path, info);
        console.log(result);
        return result.data;

    } catch (error) {
        console.log(error);
    }
}
const getUserById = async (path, info) => {
    try {
        const result = await axios.post(baseURL + path, info)
        return result.data
    } catch (error) {
        console.log(error);
    }
}
const getAllUsers = async (path, id) => {
    try {
        const result = await axios.post(baseURL + path, id);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
export { getOrganOwner, getTeacher, getStudent, getOrganization }