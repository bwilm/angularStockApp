export interface  NewsItem {

    id: number,
    publisher: {
        name: string,
        homepage_url: string,
        logo_url: string,
        favicon_url: string,
    },
    title: string,
    author: string,
    published_utc: Date,
    article_url: string,
    tickers: [],
    amp_url: string,
    image_url: string,
    description: string
  }