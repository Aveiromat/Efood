class Clothing {
  category: string
  description: string
  image: string
  infos: string[]
  type?: string
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    type: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.type = type
    this.title = title
  }
}

export default Clothing
