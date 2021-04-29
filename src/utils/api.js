import axios from "axios";

export const user = {
    getUsers: function() {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    },
};