/**
 * API Service for Authentication
 */

import axios from 'axios';
import type { User } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authService = {
  /**
   * Login user
   */
  async login(email: string, password: string) {
    try {
      const response = await apiClient.post<{ success: boolean; data: User }>('/auth/login', {
        email,
        password,
      });
      return response.data.data;
    } catch (error) {
      throw new Error('Login failed');
    }
  },

  /**
   * Register new user
   */
  async register(userData: any) {
    try {
      const response = await apiClient.post<{ success: boolean; data: User }>('/auth/register', userData);
      return response.data.data;
    } catch (error) {
      throw new Error('Registration failed');
    }
  },

  /**
   * Logout user
   */
  async logout() {
    try {
      await apiClient.post('/auth/logout');
      return true;
    } catch (error) {
      throw new Error('Logout failed');
    }
  },

  /**
   * Get current user
   */
  async getCurrentUser() {
    try {
      const response = await apiClient.get<{ success: boolean; data: User }>('/auth/me');
      return response.data.data;
    } catch (error) {
      return null;
    }
  },

  /**
   * Refresh token
   */
  async refreshToken() {
    try {
      const response = await apiClient.post('/auth/refresh');
      return response.data;
    } catch (error) {
      throw new Error('Failed to refresh token');
    }
  },
};
