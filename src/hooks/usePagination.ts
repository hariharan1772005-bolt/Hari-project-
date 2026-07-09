'use client';

import { useCallback, useState } from 'react';
import { PAGINATION } from '@/constants';

interface PaginationState {
  page: number;
  limit: number;
  total: number;
}

/**
 * Hook for pagination management
 */
export function usePagination(initialLimit = PAGINATION.DEFAULT_LIMIT) {
  const [pagination, setPagination] = useState<PaginationState>({
    page: PAGINATION.DEFAULT_PAGE,
    limit: initialLimit,
    total: 0,
  });

  const goToPage = useCallback((page: number) => {
    setPagination(prev => ({ ...prev, page: Math.max(1, page) }));
  }, []);

  const goToNextPage = useCallback(() => {
    setPagination(prev => ({
      ...prev,
      page: Math.min(prev.page + 1, Math.ceil(prev.total / prev.limit)),
    }));
  }, []);

  const goToPreviousPage = useCallback(() => {
    setPagination(prev => ({ ...prev, page: Math.max(1, prev.page - 1) }));
  }, []);

  const setTotal = useCallback((total: number) => {
    setPagination(prev => ({ ...prev, total }));
  }, []);

  const setLimit = useCallback((limit: number) => {
    setPagination(prev => ({
      ...prev,
      limit: Math.min(limit, PAGINATION.MAX_LIMIT),
      page: 1,
    }));
  }, []);

  const totalPages = Math.ceil(pagination.total / pagination.limit);
  const hasNextPage = pagination.page < totalPages;
  const hasPreviousPage = pagination.page > 1;

  return {
    ...pagination,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    setTotal,
    setLimit,
  };
}
