import {
    CREATE_ROLE_REQUEST,
    CREATE_ROLE_SUCCESS,
    CREATE_ROLE_FAIL,
    CREATE_ROLE_RESET,
    LIST_ROLE_REQUEST,
    LIST_ROLE_SUCCESS,
    LIST_ROLE_FAIL,
} from "../Constants/RoleConstants";

//role craetion action

export const createRoleAction = (role) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_ROLE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post("/api/roles", role, config);

        dispatch({
            type: CREATE_ROLE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CREATE_ROLE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// // getting all the roles
export const getRoles = () => async (dispatch) => {
    dispatch({ type: ROLE_LIST_REQUEST });
    try {
        const { data } = await Axios.get("/api/roles");
        dispatch({ type: ROLE_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ROLE_LIST_FAIl,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
