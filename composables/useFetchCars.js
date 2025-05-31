export default  async (city,filters)=>{
    const {data,error,refresh} = await useFetch(`/api/cars/${city}`,{
        params:{
            ...filters
        }
    })

    if(error.value){
        console.error('Error fetching cars:', error.value)
    }

    return {data,refresh} ;
}