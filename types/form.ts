import type {User} from "~/types/model";

export type FormSignIn = Pick<User, "email" | "password">