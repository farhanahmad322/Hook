import { useEffect, useState } from 'react';
import Card from './Card';
import Loading from './Loading';

const UseEffectApi = () => {
  const [users, setUsers] = useState([]); 
  const [loading,setLoading]=useState(true)

    const getUsers = async () => {
 
      try{
        setLoading(false);
         const response = await fetch("https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=6a96e7f626b04a23855d709be7ba4035");
        
        setUsers((await response.json()).articles); 

      }catch(error){
        setLoading(false)
        
        

      }
    
   
  };

  useEffect(() => {
    getUsers();

    setTimeout(() => {
      setLoading(false);
    }, 1000); // 10 seconds
  }, []);

  if(loading){
    return <Loading/>
  }

  return (
    <>
      <Card users={users}/>
    </>
  );
};

export default UseEffectApi;