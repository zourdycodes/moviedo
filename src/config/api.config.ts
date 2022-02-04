export const apiConfig = {
    baseURL: 'https://api.themoviedb.org/3',
    apiKey: '87f8919a00a8373494ab40b5ff6f64ca',
    originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}