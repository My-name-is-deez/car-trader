import Joi from "joi";
import { PrismaClient } from "~/generated/prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number().min(1886).max(new Date().getFullYear()+1).required(),
    price: Joi.number().positive().required(),
    miles: Joi.number().min(0).required(),
    city: Joi.string().required(),
    numberOfSeats: Joi.number().min(1).max(1000).required(),
    features: Joi.array().items(Joi.string()).required(),
    image: Joi.string().required(),
    listerId: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
})

export default defineEventHandler( async(event) => {
    const body = await readBody(event)
    const {error,value} = await schema.validate(body)

     if (error){
        throw createError({
            statusCode: 400,
            statusMessage: error.message,
            data: error.details
        });
     }
     const{
        make,
        model,
        year,
        price,
        miles,
        city,
        numberOfSeats,
        features,
        image,
        listerId,
        name,
        description
     } = body;

    const car = await prisma.car.create({
        data: {
            make,
            model,
            year,
            price,
            miles,
            city: city.toLowerCase(),
            numberOfSeats,
            features,
            image,
            listerId,
            name,
            description
        }
    })
  


    return car; 
});