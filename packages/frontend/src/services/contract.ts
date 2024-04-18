import { Pagination } from "../@type/Pagination";
import { instance } from "../config/axios";


// type PaginationState = { data: Contract[] } & Pagination;




const uri = "/contract";


export const contractService = {
    get: async ({ skip, limit }: Pagination) => {
        const contractResponse = await instance.get(uri, { 
            params: {
                $skip: skip,
                $limit: limit
            }
        });
        return contractResponse.data;
    },
    import: async (data: FormData) => {
       const response = await instance.post('/upload', data);
       return response.data;
    }
}