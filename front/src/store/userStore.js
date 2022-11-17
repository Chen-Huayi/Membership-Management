import {makeAutoObservable} from "mobx";
import {http} from "../utils";

class UserStore {
    constructor() {
        makeAutoObservable(this)
    }

    // For club member users information
    getMemberInfo = async (member_id) => await http.get(`/api/member/profile/${member_id}`)
    getActiveMemberList = async ({params}) => await http.get('/api/member/active-list', {params})
    getInactiveMemberList = async ({params}) => await http.get('/api/member/inactive-list', {params})

    // For club staff users information
    getStaffInfo = async (staff_id) => await http.get(`/api/staff/profile/${staff_id}`)
    getActiveStaffList = async ({params}) => await http.get('/api/staff/active-list', {params})
    getInactiveStaffList = async ({params}) => await http.get('/api/staff/inactive-list', {params})

    // Functional processes
    sendGroupEmail = async (values) => await http.post('/api/member/send-email', values)
    getNotificationEmail = async (member_id) => await http.get(`/api/member/receive-email/${member_id}`)
    deleteNotification = async (values) => await http.put('/api/member/delete-email', values)
    getSendCardList = async ({params}) => await http.get('/api/member/send-card-list', {params})
    getReplaceCardList = async ({params}) => await http.get('/api/member/replace-card-list', {params})
    sendToEligibleMember = (values) => http.put('/api/member/deliver-card', values)

    // membership record
    getMembershipRecord=({params})=>http.get('/api/membership/record', {params})

}
export default UserStore
