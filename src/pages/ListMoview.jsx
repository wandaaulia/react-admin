import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


const ListMoview = () => {

    const [getAllM, setGetAllM] = useState([]);

    const btnDetail = () => {
        return (
            <button> Detail </button>
        )
    }

const columns = [
  {
    dataField: "id",
    text: "id Movie",
    sort: true
  },
  {
    dataField: "title",
    text: "Title Movie",
    sort: true
  },

];

const rowEvents = {
  onClick: (e, row, rowIndex) => {
    <p> cilck </p>
  }
};

 useEffect(() => {

    const getApi = async () => {
        let getData = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1');
        setGetAllM(getData.data.results);
    }

    getApi();

 }, [])


  return (
    <div className='listGenre '>
    <h2 className='textGenre'> List Movie </h2>
     {
        getAllM.length > 0 && (
<BootstrapTable
        bootstrap4
        keyField="id"
        data={getAllM}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
        rowEvents={ rowEvents } 
            />
        )
     }
         

    </div>
  )
}

export default ListMoview
