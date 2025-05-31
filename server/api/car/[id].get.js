import { PrismaClient } from "~/generated/prisma/client";
const prisma = new PrismaClient();


export default defineEventHandler( async(event) => {
    const {id}= event.context.params;

    const car= prisma.car.findUnique({
        where:{
            id: parseInt(id)
        }
    })
    if(!car){
        throw createError({
            statusCode: error.value.statusCode,
            statusMessage: error.value.statusMessage,
            message: 'Car not found'
        })
    }
    return car;
})