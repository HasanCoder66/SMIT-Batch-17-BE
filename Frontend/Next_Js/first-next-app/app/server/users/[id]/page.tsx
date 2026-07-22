import React from 'react'

type userDetails = {
  params: Promise<{
    id: string;
  }>;
};

const apiCall = async (id:string) => {
try {
  const response = await fetch(`https://dummyjson.com/users/${id}`)
  return response.json();
} catch (error) {
  console.log(error);
  
}
}

const UserDetailsPage = async ({params}: userDetails) => {

    const {id} = await params;
    console.log("data mai kiya ayaa....",id);

  const data = await apiCall(id);

  console.log(data);
  
  
  
    
  return (
    <div>This is UserDetailsPage page.... {id}
    
    <div>
      <p>{data.firstName} {data.lastName}</p>
      </div>
      </div>
  )
}

export default UserDetailsPage