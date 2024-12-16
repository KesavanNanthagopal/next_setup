export default async function UserServerComponent(){
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    const user:any= await res.json(); 
    console.log(user,"check the data::::::")
    return(
        <div>
        <h1>Fetched Data</h1>
        <ul>
          {user.map((item:any, index:number) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    )
}