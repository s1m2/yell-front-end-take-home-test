export type Job = {
  id: number
  classification: details
  location: details
  headline: string
  description: string
  date_added: string // Representing a date in ISO 8601 format
}

type details = {
  id: number
  name: string
}
