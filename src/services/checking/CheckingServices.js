import axios from "axios";
import qs from "qs";
import Settings from "../../Settings";

const CheckingServices = {
    getEvents: user => {
        const httpHeaders = {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            Authorization:user.Authorization
        };
        return axios.get(`${Settings.url}${Settings.events.get}`,   {headers: httpHeaders});
    },
    doChecking: (userContext,event_id) => {

        const httpHeaders = {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            Authorization:userContext.Authorization
        };
        const data =    {
            "event": event_id,
            "parent":userContext.user.id,
            "checkingDate":`${new Date().toISOString()}`
        }
        return axios.post(`${Settings.url}${Settings.checking.post}`, data, {headers: httpHeaders});
    }
};

export default CheckingServices;

