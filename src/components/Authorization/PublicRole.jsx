import React from 'react'
const USER_TYPES = {
    PUBLIC: "public User",
    NORMAL_USER: "Normal User",
    ADMIN_USER: "Admin User",
};
const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER;
export default function PublicRole({ children }) {
    if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER || CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ||
        CURRENT_USER_TYPE === USER_TYPES.PUBLIC
    )
        return (
            <>{children}</>
        )

}