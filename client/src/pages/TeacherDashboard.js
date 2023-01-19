import React,{useEffect,useState} from 'react'
import Sidebar from './Sidebar'
import "../css/teacherdashboard.css"

function TeacherDashboard() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function getData() {
      const request = fetch('/member_details');
      const response = await request;
      const parsed = await response.json();
      setData(parsed);
    }

    getData();
  }, []);

  if (data === undefined) {
    return null;
  }
  console.log(Object.values(data))


  return (
    <div className='dashboard'>
            <Sidebar />
      <div className='teacherdashboard'>

        <h1> Welcome: {data.username}</h1>
        <h2>Email:{data.email}</h2>
        <h2>Role:{data.role}</h2>
      </div>

    



    </div>
  )
}

export default TeacherDashboard