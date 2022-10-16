import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const ListGenre = () => {

  const [allGenre, setAllGenre] = useState([]);
  

  useEffect(() => {

    const getApi = async () => {
       let getDataApi = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49');
       let getGenre = getDataApi.data.genres;
      setAllGenre(getGenre);
    }

    getApi();

  }, [])
  return (
    <div className='listGenre'>
    <h3 className='textGenre'> List Genre </h3>
    <div className='containerTable'> 

     <Table striped bordered hover>
      <thead>
        <tr>
          <th className='containerColumnNo'> No </th>
          <th className='containerColumnNo'> Id </th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
      { allGenre?.map((item, index) => (
    <tr>
          <td> {index} </td>
          <td> {item.id} </td>
          <td> {item.name} 
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
        </div>
         </div> 
  )
}

export default ListGenre
