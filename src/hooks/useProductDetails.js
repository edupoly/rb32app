import products from "../components/products";
export function useProductDetails(id){
    console.log("usePrddetaial",id)
    return products.find((p)=>{
        return p.id===id
    })
}
