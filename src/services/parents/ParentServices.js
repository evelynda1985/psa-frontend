import axios from "axios";
import qs from "qs";
import Settings from "../../Settings";

const ParentServices = {
    getChildren: userContext => {
        const httpHeaders = {

            Authorization:userContext.Authorization
        };
        return axios.get(`${Settings.url}${Settings.children.get}?parent=${userContext.user.id}`,   {headers: httpHeaders});
    }

};

export default ParentServices;

