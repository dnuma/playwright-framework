import { APIRequestContext } from "@playwright/test";
import { request } from "http";

export class ApiCalls {

  // Demo of any random data using the baseUrl
  async getSavedData(
    request: APIRequestContext,
    id: string
  ) {
    const response = await request.get(`/api/data/${id}`);
    return await response.json();
  }

  async randomQuote(request: APIRequestContext) {
    const response = await request.get("https://api.quotable.io/random");
    const data = await response.json();    
    return data;
}

  async swapiPeople(
    request: APIRequestContext,
    id: string
  ) {
    const response = await request.get(`https://swapi.dev/api/people/${id}/`);
    return await response.json();
  }

}