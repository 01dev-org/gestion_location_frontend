

/**
 * API client for making HTTP requests
 * @class Api
 *
 */


class Api {
  constructor() {
    this.baseUrl = process.env.API_URL || 'http://localhost:8000/api';
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  async get(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: this.headers
      });
      return await response.json();
    } catch (error) {
      throw new Error(`GET request failed: ${error.message}`);
    }
  }

  async post(endpoint, data) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error) {
      throw new Error(`POST request failed: ${error.message}`);
    }
  }

  async put(endpoint, data) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error) {
      throw new Error(`PUT request failed: ${error.message}`);
    }
  }

  async delete(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'DELETE',
        headers: this.headers
      });
      return await response.json();
    } catch (error) {
      throw new Error(`DELETE request failed: ${error.message}`);
    }
  }

  setAuthToken(token) {
    if (token) {
      this.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete this.headers['Authorization'];
    }
  }
}

export default new Api();