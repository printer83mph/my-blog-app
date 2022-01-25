export interface PostData {
  title: string,
  body: string,
  image: string,
}

export interface IdentifiedPostData extends PostData {
  id: string
}

export interface IntroData {
  image: string,
  description: string
}
