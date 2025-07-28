import type { Actions } from './$types';

export const actions = {
  default: async ({ request }) => {
    try {
      const form = await request.formData();
      const params = {
        race: form.get('race'),
        class: form.get('class'),
        background: form.get('background'),
        alignment: form.get('alignment'),
      };

      const res = await fetch(
        'http://localhost:8000/api/ai/name-generator?' +
          new URLSearchParams(params),
      );

      if (!res.ok) {
        return {
          success: false,
          error: `API Error: ${res.status}`,
          data: null,
        };
      }

      const data = await res.json();
      console.log('API Response:', data);

      return {
        success: true,
        data: data,
        originalParams: params,
      };
    } catch (error) {
      console.error('Error in action:', error);
      return {
        success: false,
        error: 'Network error or server unavailable',
        data: null,
      };
    }
  },
} satisfies Actions;
