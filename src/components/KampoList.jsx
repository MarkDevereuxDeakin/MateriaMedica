import React, { useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';


const Kampo = (props) => (
    <tr>            
        <td >{props.kampo.LatinName}</td>
        <td >{props.kampo.LatinPart}</td>
        <td >{props.kampo.CommonName}</td>
        <td >{props.kampo.Kanji}</td>
        <td >{props.kampo.Katakana}</td>
        <td >{props.kampo.Pinyin}</td>
        <td >{props.kampo.TraditionalChinese}</td>
        <td >{props.kampo.SimplifiedChinese}</td>                
    </tr>
);

    export default function KampoList(props) {
        const [kampos, setKampos] = useState ([]);
        const [currentPage, setCurrentPage] = useState(0);
        const [totalPages, setTotalPages] = useState(0);
        
        const itemsPerPage = 29;
                      
        //this method fetches the list from the database.
        useEffect(() => {
           async function getKampos (){
                try {              

                    const response = await fetch(`http://localhost:5000/kampo`, {
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                        }                        
                    })

                    if(!response.ok) {
                        const message =`An error occurred: ${response.statusText}`;
                        window.alert(message);
                        return;
                        
                    }
                    
                    const kampos = await response.json();
                    setKampos(kampos);
                    setTotalPages(Math.ceil(kampos.length / itemsPerPage));
                    console.log(kampos);
                    

                    }
                    catch (err) {
                    console.log(err);
                }
            }
            getKampos();
            return;
        }, [kampos.length]);

        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const subset = kampos.slice(startIndex, endIndex);
      
        const handlePageChange = (selectedPage) => {
          setCurrentPage(selectedPage.selected);
        };

        //This method will map the list to the table
        function kampoList() {
            return subset.map((kampo) => {
                    return (                        
                            <Kampo                            
                            kampo={kampo}
                            key={kampo._id}             
                            /> 
                    );
            });
        }
        

        //this following section will display the table with the kampos
        return (       
            <div className={props.className} >
                <h2>Kampo: Traditional Japanese Medicine</h2>
                    <table name='Kampo' action="http://localhost:5000/kampo" className={props.className} style={{ marginTop: 20 }}>
                        <thead> 
                            <tr>                                            
                                <th>Latin Name</th>
                                <th>Latin Part</th>
                                <th>Common Name</th>
                                <th>Kanji</th>
                                <th>Katakana</th>
                                <th>Pinyin</th>
                                <th>Traditional Chinese</th>
                                <th>Simplified Chinese</th>                                                               
                            </tr>
                        </thead>
                    <tbody > {kampoList()}</tbody>                                    
                </table>               
                <ReactPaginate
                        className="pagination-container"
                        pageClassName ='pagination-item'
                        breakLabel="..."
                        previousLabel={"< Previous"}
                        nextLabel={"Next >"}
                        previousClassName='pagination-item'
                        nextClassName='pagination-item'
                        breakClassName='pagination-item'
                        pageRangeDisplayed={3}                           
                        pageCount={totalPages}
                        onPageChange={handlePageChange}
                        renderOnZeroPageCount={null}
                    />
            </div>                                                                               
                       
    );
}

