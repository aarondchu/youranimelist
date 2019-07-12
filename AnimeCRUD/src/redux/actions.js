export const UPDATE_USER = "UPDATE_USER";

export const updateUser = (userInfo) => {
    return {
        type: UPDATE_USER,
        info: userInfo
    }
}