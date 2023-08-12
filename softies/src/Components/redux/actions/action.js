export const getProducts = ()=>async(dispatch)=>{
    try{//calling API
        const data = await fetch("/getproducts",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const res = await data.json();
        //console.log(res);
        dispatch({type:"SUCESS_GET_PRODUCTS",payload:res})//sending to reducer function
    }catch(error){
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response})
    }
}