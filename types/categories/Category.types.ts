export type CategoriesT = {
  typeName: 'photography'
    | 'food'
    | 'website'
    | 'video'
    | 'music'
    | 'lights'
    | 'decoration'
    | 'flowers'
    | 'invitations'
    | 'places'
    | 'tents'
    | 'cars'
    | 'livings'
}

export type CategoryT = {
  id: string,
  type: CategoriesT,
  description: string,
  currency: string,
  price: number,
  defaultImage?: string,
  gallery?: string[]
}