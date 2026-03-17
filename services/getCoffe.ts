import { Cafe } from "../interface/Cafe";
import supabase from "./client";

const getCoffee = async (): Promise<Cafe[]> => {
    
    let { data: preparados, error } = await supabase.from('preparados').select('*');
    if (error) {
        console.error('Error fetching coffee data:', error);
        return []; 
    }
    return preparados as Cafe[];
};

const getImgCoffeById = async (id: number): Promise<string | null> => {
  const { data, error } = await supabase
    .from('preparados')
    .select(`
      id,
      nombreCafe,
      imgCoffe ( imgUrl )
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Error fetching image for coffee ID ${id}:`, error);
    return null;
  }

  return data.imgCoffe?.[0]?.imgUrl ?? null;
};


export { getImgCoffeById, getCoffee };
export type { Cafe };