import { PrismaClient } from "~/generated/prisma/client";
const prisma = new PrismaClient();


export default defineEventHandler((event)=>{
    const{city}= event.context.params;
    const {make,minPrice,maxPrice}= getQuery(event);

    const filters={
        city:city.toLowerCase(),

    }

    if(make){
        filters.make = make.toLowerCase();
    }

    if(minPrice || maxPrice){
        filters.price = {};
    }

    if(maxPrice ){
        filters.price.lte = parseInt(maxPrice);
    }
    if(minPrice){
        filters.price.gte = parseInt(minPrice);
    }

 
    return prisma.car.findMany({
        where: filters,
    });
})