// "use client";  I try to use this as the client component since the asyn functionality can only used in server side component
// which means default component

export default async function ProductDetails({params}:{params:{id:any}}){
    const paramsData = await params
    const {id}=paramsData
    return(
        <>
        <div>
            The Product is :{id}
        </div>
        </>
    )
}