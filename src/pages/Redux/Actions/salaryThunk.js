import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createSalary } from "../../../Services/salary";

// Async thunk for creating or updating salary
export const salaryCreate = createAsyncThunk(
  "salary/createOrUpdate",
  async (queryParams, { rejectWithValue }) => {
    try {
      const { data } = await createSalary(queryParams);
      const { message, status } = data;

      // Show toast notification
      if (status === 200) {
        toast.success(message || "Created successfully.");
      } else {
        toast.error(message || "Error occurred.");
      }

      return data;
    } catch (error) {
      toast.error("Error while creating salary components");
      return rejectWithValue(error.message);
    }
  }
);
