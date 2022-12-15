import { useRouter } from "next/router";

const User = () => {
  const { query } = useRouter();
  console.log(query);
  return <div>User</div>;
};

export default User;
