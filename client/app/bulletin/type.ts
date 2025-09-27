export enum Scheme {
    VISA = "VISA",
    MASTERCARD = "MASTERCARD",
    DINNERS = "DINNERS"
}

export enum Category {
    CATEGORY_1 = "CATEGORY_1",
    CATEGORY_2 = "CATEGORY_2",
    CATEGORY_3 = "CATEGORY_3"
}

export type Bulletin = {
    title: string
    scheme: Scheme
    content: string
    categories: Category[]
    published: Date
}