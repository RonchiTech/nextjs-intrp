import { useRouter } from 'next/router';
const ClientName = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Client name is {router.query.clientname}</h1>
    </div>
  );
};
export default ClientName;
