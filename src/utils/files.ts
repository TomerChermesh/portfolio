export const loadJsonFile = async <T>(fileName: string): Promise<T> => {
  const response: Response = await fetch(`/${fileName}`)

  if (!response.ok) {
    throw new Error(`Failed to load JSON file: ${fileName}`)
  }

  const data = await response.json()
  return data as T
}
