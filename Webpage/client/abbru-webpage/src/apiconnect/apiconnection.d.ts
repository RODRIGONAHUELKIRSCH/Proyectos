import { User } from "../../Types/types";
import { EventImage } from "../../Types/types";
export declare const getAllUsers: () => Promise<any>;
export declare const checkEmailExists: (Email: string) => Promise<any>;
export declare const createUser: (user: User) => Promise<any>;
export declare const getAllProduct: () => Promise<any>;
export declare const resetPassword: (token: string, newPassword: string) => Promise<any>;
export declare const login: (email: string, password: string) => Promise<any>;
export declare const fetchActiveImages: () => Promise<EventImage[]>;
export declare const fetchInactiveImages: () => Promise<EventImage[]>;
export declare const fetchImagesByState: (state: string) => Promise<EventImage[]>;
export declare const fetchMagazinesByYearRange: (startYear: String, endYear: String) => Promise<any>;
declare const _default: {
    fetchMagazinesByYearRange: (startYear: String, endYear: String) => Promise<any>;
};
export default _default;
export declare const subscribeToNewsletter: (email: String) => Promise<import("axios").AxiosResponse<any, any> | undefined>;
export declare const obtenerUltimaRevistaEnlace: () => Promise<string | null>;
export interface Revista {
    Nombre: string;
    enlace: string;
    ImageString: string;
}
export declare const obtenerUltimaRevista: () => Promise<Revista | null>;
export declare const obtenerProductoPorCategoria: (categoria: string) => Promise<any>;
