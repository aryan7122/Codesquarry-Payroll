import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { loginApi } from "../../../Services/login";

// Async thunk for creating or updating salary
export const login = createAsyncThunk(
    "login",
    async (queryParams, { rejectWithValue }) => {
        try {
            const response = await loginApi(queryParams);
            const { error, message, status, access_token, user } = response.data;

            if (status === 200 && !error) {
                toast.success(message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                localStorage.setItem('AccessToken', access_token);
                localStorage.setItem('UserData', user);
                localStorage.setItem('isLoggedIn', true);
                return response?.data
            }
            else {
                toast.error(message || "Something went wrong.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return rejectWithValue(message || "Something went wrong.");
            }
        } catch (error) {
            const message = error.response.data.message || "Something went wrong.";
            toast.error(message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return rejectWithValue(message);
        }
    }
);
