import Joi from "joi"
import { PrismaClient } from "~/generated/prisma/client";
const prisma = new PrismaClient();

const schema = Joi.object({
    email: Joi.string().email().required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    name: Joi.string().min(3).max(30).required(),
    message: Joi.string().min(10).max(500).required(),
})


export default defineEventHandler( async(event) => {
    const body = await readBody(event)
    const {listingId} = event.context.params;
    
    const {error} = await schema.validate(body)
    if (error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }

    const {message, name, phone, email} = body;

    return prisma.message.create({
        data: {
            message,
            name,
            phone,
            email,
            listingId: parseInt(listingId)
        }
    })

})