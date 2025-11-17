export const loadJsonFile = async <T>(fileName: string): Promise<T> => {
  const response: Response = await fetch(`/${fileName}`)

  if (!response.ok) {
    const text: string = await response.text()
    console.error('Failed to load JSON file', {
      fileName,
      status: response.status,
      bodyPreview: text.slice(0, 200),
    })
    throw new Error(`Failed to load JSON file: ${fileName}`)
  }

  try {
    const data = await response.json()
    return data as T
  } catch (err) {
    console.error('Failed to parse JSON file', {
      fileName,
      error: err,
    })
    throw err
  }
}
