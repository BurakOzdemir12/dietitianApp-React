// src/hooks/useCrud.js

import { useState } from 'react';
import { postData, putData, deleteData } from '../services/apiServices';

const useCrud = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createData = async (endpoint, data) => {
    setLoading(true);
    try {
      const result = await postData(endpoint, data);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (endpoint, data) => {
    setLoading(true);
    try {
      const result = await putData(endpoint, data);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const removeData = async (endpoint) => {
    setLoading(true);
    try {
      const result = await deleteData(endpoint);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createData, updateData, removeData, loading, error };
};

export default useCrud;
