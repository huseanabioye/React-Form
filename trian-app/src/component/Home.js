import  Axios  from "axios";
import { useQuery } from "@tanstack/react-query";
const Home = () => {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    console.log('res');
  });
 
  if(isError){
    return<h1>Sorry</h1>
  }
 if(isLoading){
  return <h1>Loading....</h1>
 }
  return (
    <div>
      <h1>This is the home page and user is:{catData?.fact} </h1>
      <button onClick={refetch}>Refetct </button>
    </div>
  );
};

export default Home;
//"https://catfact.ninja/fact"