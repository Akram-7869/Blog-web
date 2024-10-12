import z from "zod";
export const signUPInput=z.object({
    username:z.string().email(),
    password:z.string().min(6),
    name:z.string()
})

export type SignUPInput=z.infer<typeof signUPInput>


export const signInInput=z.object({
    username:z.string().email(),
    password:z.string().min(6)
})
export type SignInInput=z.infer<typeof signInInput>


export const createBlogInput=z.object({
    title:z.string(),
    content:z.string(),
})

export type CreateBlogInput=z.infer<typeof createBlogInput>


export const updateBlogInput=z.object({
    title:z.string(),
    content:z.string(),
    id:z.number(),
})
export type UpdateBlogInput=z.infer<typeof updateBlogInput>
