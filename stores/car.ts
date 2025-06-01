import { defineStore } from 'pinia'
import { useSupabaseClient } from '#imports'

export const useCarStore = defineStore('car', {
  state: () => ({
    cars: [] as any[],
  }),
  actions: {
    async fetchCars() {
      const supabase = useSupabaseClient()

      const { data, error } = await supabase.from('Car').select('*')
      if (error) {
        console.error('Error fetching cars:', error)
      } else {
        this.cars = data || []
      }
    },
  },
})
