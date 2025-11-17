const openExternal = (url: string): void => {
    window.open(url, '_blank', 'noreferrer')
  }

  const downloadCv = (filePath: string): void => {
    window.open(filePath, '_blank')
  }