import { supabase } from "./supabaseClient";

export async function fetchMaterials(materialType) {
    const { data, error } = await supabase
      .from("PDF")
      .select("*")
      .eq("material_type", materialType);
  
    if (error) {
      throw new Error(error.message || "Failed to fetch data from Database");
    }
  
    return data;
  }
  