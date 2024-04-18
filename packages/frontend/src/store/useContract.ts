import { create } from 'zustand';
import { Contract } from '../@type/Contract';
import { Pagination } from '../@type/Pagination';
import { contractService } from '../services/contract';


type State = {
  data?: Contract[]
  loading?: boolean;
  loadingSave?: boolean;
  error: boolean
  success: boolean
  totalSlantedLines: number
}


type PaginationState = State & Pagination;

type Actions = {
  get: ({skip, limit}: Pagination) => void;
  create: (data: FormData) => void
}

const initialDefault = {
  skip: 0,
  total: 0,
  limit: 0,
  loading: false,
  loadingSave: false,
  error: false,
  totalSlantedLines: 0,
  success: false,
  data: []
}

export const useContract = create<PaginationState & Actions>((set) => ({
  ...initialDefault,
  get: async ({ skip, limit }: Pagination) => {
    set(() => ({loading: true}));
    try{
      const contractResponse = await contractService.get({skip, limit});
      set({
        ...contractResponse,
      })
    }catch(e){
      console.log(e);
    }finally{
      set(() => ({loading: false}));
    }
  },
  create: async (data: FormData) => {
    set(() => ({loadingSave: true}))
    try{
      const contractResponse = await contractService.import(data);
      set( item => ({
        ...item,
        totalSlantedLines: contractResponse.totalSlantedLines,
        success: true,
        error: false
      }))
      
    }catch(e){
      set( item => ({
        ...item,
        success: false,
        error: true
      }))
    }finally{
      set(() => ({loadingSave: false}));
    }
  }
}))