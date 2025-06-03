// stores/car.ts
import { defineStore } from 'pinia'
import { useSupabaseClient } from '#imports'

export const useCarStore = defineStore('car', {
  state: () => ({
    cars: [] as any[],
    favorite: {} as Record<string, boolean>,
  }),
  getters: {
    favoriteCars(state) {
      return state.cars.filter(car => state.favorite[car.id])
    },
  },
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
    toggleFavorite(id: string) {
      if (this.favorite[id]) {
        delete this.favorite[id]
      } else {
        this.favorite = {
          ...this.favorite,
          [id]: true,
        }
      }
      localStorage.setItem('favorite', JSON.stringify(this.favorite))
    },
    loadFavorites() {
      const stored = localStorage.getItem('favorite')
      this.favorite = stored ? JSON.parse(stored) : {}
    },
  },
})
