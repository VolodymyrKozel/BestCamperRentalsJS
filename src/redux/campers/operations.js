import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_API = 'https://connections-api.herokuapp.com';

export const fetchCampers = createAsyncThunk(
  'Campers/fetchCampers',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${URL_API}/Campers`);
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
      const res = await axios.post(`${URL_API}/Campers`, camper);
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
      const res = await axios.delete(`${URL_API}/Campers/${camperId}`);
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
      const res = await axios.patch(`${URL_API}/Campers/${camper.id}`, {
        name,
        number,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
