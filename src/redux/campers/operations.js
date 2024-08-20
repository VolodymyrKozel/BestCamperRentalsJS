import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../services/instance';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (params, thunkAPI) => {
    console.log(params);
    try {
      console.log(params);
      const res = await instance.get(`/adverts`, { params });
      return {
        data: res.data,
        isLastPage: res.data.length < parseInt(params.limit),
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (id, thunkAPI) => {
    try {
      const res = await instance.get(`/adverts/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCamper = createAsyncThunk(
  'campers/addCamper',
  async (camper, thunkAPI) => {
    try {
      const res = await instance.post(`/campers`, camper);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCamper = createAsyncThunk(
  'campers/deleteCamper',
  async (camperId, thunkAPI) => {
    try {
      const res = await instance.delete(`/campers/${camperId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCamper = createAsyncThunk(
  'campers/editCamper',
  async (camper, thunkAPI) => {
    try {
      const res = await instance.patch(`/campers/${camper.id}`, camper);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
