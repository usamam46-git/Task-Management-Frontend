/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import toast from 'react-hot-toast';

export const showToast = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  loading: (message) => toast.loading(message),
  dismiss: () => toast.dismiss()
};

export const Toast = () => {
  return null; // Handled by Toaster in App.jsx
};