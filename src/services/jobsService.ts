/**
 * API Service for Jobs
 */

import axios from 'axios';
import type { Job, PaginatedResponse } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const jobsService = {
  /**
   * Get all jobs with pagination
   */
  async getJobs(page = 1, limit = 10, filters?: Record<string, any>) {
    try {
      const response = await apiClient.get<PaginatedResponse<Job>>('/jobs', {
        params: { page, limit, ...filters },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch jobs');
    }
  },

  /**
   * Get job by ID
   */
  async getJobById(id: string) {
    try {
      const response = await apiClient.get<{ success: boolean; data: Job }>(`/jobs/${id}`);
      return response.data.data;
    } catch (error) {
      throw new Error('Failed to fetch job');
    }
  },

  /**
   * Search jobs
   */
  async searchJobs(query: string, page = 1, limit = 10) {
    try {
      const response = await apiClient.get<PaginatedResponse<Job>>('/jobs', {
        params: { q: query, page, limit },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to search jobs');
    }
  },

  /**
   * Create job (admin/company only)
   */
  async createJob(jobData: Partial<Job>) {
    try {
      const response = await apiClient.post<{ success: boolean; data: Job }>('/jobs/create', jobData);
      return response.data.data;
    } catch (error) {
      throw new Error('Failed to create job');
    }
  },

  /**
   * Update job
   */
  async updateJob(id: string, jobData: Partial<Job>) {
    try {
      const response = await apiClient.put<{ success: boolean; data: Job }>(`/jobs/${id}/update`, jobData);
      return response.data.data;
    } catch (error) {
      throw new Error('Failed to update job');
    }
  },

  /**
   * Delete job
   */
  async deleteJob(id: string) {
    try {
      await apiClient.delete(`/jobs/${id}/delete`);
      return true;
    } catch (error) {
      throw new Error('Failed to delete job');
    }
  },

  /**
   * Apply for job
   */
  async applyForJob(jobId: string, applicationData: any) {
    try {
      const response = await apiClient.post(`/jobs/${jobId}/apply`, applicationData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to apply for job');
    }
  },
};
