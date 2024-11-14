export default class DesignerApiClient {
  constructor(baseUrl) {
      this.baseUrl = baseUrl;
  }

  async getImagesData() {
    return await this.fetchRequest('/images', 'GET');
  }

  async sendImagesData(data) {
    return await this.fetchRequest('/images', 'POST', data);
  }

  async fetchRequest(endpoint, method, body = null) {
      const options = {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: body ? JSON.stringify(body) : null
      };

      const response = await fetch(`${this.baseUrl}${endpoint}`, options);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      return await response.json();
  }
}