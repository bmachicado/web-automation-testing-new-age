import { test, expect } from '@playwright/test';
import { apiClient } from '../../utils/apiClient';

test('API - lista de usuarios', async () => {
  const api = await apiClient();
  const res = await api.get('/users?page=1');
  expect(res.status()).toBe(200);

  const json = await res.json();
  expect(json.data.length).toBeGreaterThan(0);
});
