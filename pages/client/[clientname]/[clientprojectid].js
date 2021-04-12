import { useRouter } from 'next/router';
const ClientName = () => {
  const router = useRouter();
  console.log(router);
  const { clientname, clientprojectid } = router.query;
  return (
    <div>
      <h1>
        Client name is {clientname} and project id is{' '}
        {clientprojectid}
      </h1>
    </div>
  );
};
export default ClientName;
