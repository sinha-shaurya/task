export interface Member {
    id: number,
    name: string,
    role: string,
    email: string
}

export enum MemberRole {
    Admin = 'admin',
    Analyst = 'analyst',
    TechSupport = 'technical support'
}