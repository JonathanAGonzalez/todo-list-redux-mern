export interface User {
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
}


export interface Task {
    id: string,
    title: string,
    description: string,
    status: boolean,
    createdAt: string,
    updatedAt: string,
    userId: string,
    user: User
    _id: string
}