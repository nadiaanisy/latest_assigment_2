export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: any
  category: string
}