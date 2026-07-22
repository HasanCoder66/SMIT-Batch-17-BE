import Link from "next/link";
import React from "react";

// interface UserObj {
//     id:number
// }
const getUsers = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/users`);

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async () => {
  const { users, total, skip, limit } = await getUsers();
  console.log(users);

  return (
    <div>
      This is a Server Component (SSR)
      <div>
        {users &&
          users.length > 0 &&
          users.map((user: any) => (
            <Link key={user.id} href={`/server/users/${user.id}`}>
              {" "}
              <p key={user.id}>
                {user.firstName} {user.lastName}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default page;
