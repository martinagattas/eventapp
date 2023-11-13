export type CategoriesT = 'photography'
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
  | 'livings';

export type CategoryT = {
  id: number,
  name: CategoriesT,
  description?: string,
  defaultImage?: string,
}

export type ProviderCategoryT = {
  id: number,
  category: CategoryT,
  currency?: string,
  price?: number,
  gallery?: string[]
}