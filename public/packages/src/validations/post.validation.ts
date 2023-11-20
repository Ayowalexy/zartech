import { object, string, boolean } from "yup"

export const PostValidationSchema = () => {
    return object().shape({
        author: string().required("Author's name is required"),
        title: string().required("Post title"),
        content: string().required("Post content is required"),
        description: string().required("Description is required")
    })
}