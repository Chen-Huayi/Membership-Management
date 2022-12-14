import {secretKey} from '../config'

// Set to local storage with stringify values
const setValue = (values) => {
    return window.localStorage.setItem(secretKey, JSON.stringify(values))
}

const getValue = () => {
    return window.localStorage.getItem(secretKey)
}

const removeToken = () => {
    return window.localStorage.removeItem(secretKey)
}

const {
    token,
    member_id,
    staff_id,
    firstname,
    lastname,
    user_role,
    membership_status,
    expire_date
} = getValue() ? JSON.parse(getValue()) : ''

export {
    token, member_id, staff_id, firstname, lastname, user_role, membership_status, expire_date,
    setValue, removeToken
}
