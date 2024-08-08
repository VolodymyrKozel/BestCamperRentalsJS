import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../services/instance';

export const fetchCampers = createAsyncThunk(
  'Campers/fetchCampers',
  async (params, thunkAPI) => {
    try {
      const res = await instance.get(`/campers`, { params });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCamper = createAsyncThunk(
  'Campers/addCamper',
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
  'Campers/deleteCamper',
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
  'Campers/editCamper',
  async (camper, thunkAPI) => {
    const { name, number } = camper;
    try {
      const res = await instance.patch(`/campers/${camper.id}`, {
        name,
        number,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
