export interface Survey {
  id: number
  order_id: string
  source: string
  reclamation: number
  product_rating: number
  consultant_rating: string
  dispatcher_rating: string
  assemblers_rating: string
  recommend_rating: number
  comment: string
  status: string
  dateTime: string
}

export interface StatusMessageProps {
  message: string
  type?: 'error' | 'info' | 'success'
}

export type ApiResponse = Survey[]
