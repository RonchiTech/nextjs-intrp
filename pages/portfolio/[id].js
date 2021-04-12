import { useRouter } from 'next/router';

const PortfolioPage = () => {
  const router = useRouter();
  console.log(router)
  return (
    <div>
      <h1>Portfolio Page of {router.query.id} </h1>
    </div>
  );
};
export default PortfolioPage;
