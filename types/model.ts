interface ObjCommon {
    _id: string;
}

export interface User extends ObjCommon {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    avatar: string;
    gender: number;
    isVerifiedEmail: boolean;
}

export interface Product extends ObjCommon {
    name: string;
    image: string;
    type: string;
    price: number;
    rating: number;
    description: string;
    discount: number;
    seller: number;
}