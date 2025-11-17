export const openExternal = (url: string): void => {
    window.open(url, '_blank', 'noreferrer')
}

export const downloadCv = (filePath: string): void => {
    window.open(filePath, '_blank')
}