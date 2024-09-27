const getRandomImage = (): string => {
  const i = Math.floor(Math.random() * 10)

  return `https://picsum.photos/id/${i}/200/300`
}

export default getRandomImage
