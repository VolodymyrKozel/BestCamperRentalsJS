import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../services/instance';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (params, thunkAPI) => {
    try {
      const res = await instance.get(`/campers`, { params });
      console.log(
        'params',
        parseInt(params.limit) + 'res.data',
        res.data.length + 'params.limit',
        res.data.length < parseInt(params.limit)
      );
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
      const res = await instance.get(`/campers/${id}`);
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
