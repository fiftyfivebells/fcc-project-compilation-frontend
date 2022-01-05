
interface HttpResponse<T> extends Response {
  parsedBody?: T
}

export default async function fetchData<TResponse>(url: string): Promise<TResponse> {
  const response = await fetch(url);
  return response.json()
} 