import React, { useEffect, useState} from 'react';
import Background from '../img/background.jpg'
import ReactPaginate from 'react-paginate';


const Toxin = (props) => (
    <tr>            
        <td truncate>{props.toxin.LatinName}</td>
        <td truncate>{props.toxin.CommonName}</td>
        <td truncate>{props.toxin.Distribution}</td>
        <td truncate>{props.toxin.Location}</td>
        <td truncate>{props.toxin.ToxicPart}</td>
        <td truncate>{props.toxin.Phytotoxin}</td>
        <td truncate>{props.toxin.RelativeToxicity}</td>
        <td truncate>{props.toxin.PredictedLD50}</td>
        <td truncate>{props.toxin.HumanToxicity}</td>
        <td truncate>{props.toxin.AnimalToxicity}</td>                
    </tr>
);

    export default function ToxinList() {
        const [toxins, setToxins] = useState ([]);
        const [currentPage, setCurrentPage] = useState(0);
        const [totalPages, setTotalPages] = useState(0);
        
        const itemsPerPage = 35;
                      
        //this method fetches the list from the database.
        useEffect(() => {
           async function getToxins (){
                try {              

                    const response = await fetch(`http://localhost:5000/toxins`, {
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
                    
                    const toxins = await response.json();
                    setToxins(toxins);
                    setTotalPages(Math.ceil(toxins.length / itemsPerPage));
                    console.log(toxins);
                    

                    }
                    catch (err) {
                    console.log(err);
                }
            }
            getToxins();
            return;
        }, [toxins.length]);

        async function deleteToxin(id) {
            await fetch(`http://localhost:5000/${id}`, {
                method: "DELETE"
            });
            const newToxins = toxins.filter((el) => el._id !== id);
            setToxins(newToxins);
        }

        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const subset = toxins.slice(startIndex, endIndex);
      
        const handlePageChange = (selectedPage) => {
          setCurrentPage(selectedPage.selected);
        };

        //This method will map the list to the table
        function toxinList() {
            return subset.map((toxin) => {
                    return (                        
                            <Toxin
                            toxin={toxin}
                            key={toxin._id}             
                            /> 
                    );
            });
        }
        

        //this following section will display the table with the toxins
        return (       
            <div className='table'>
                <h1>Toxin List</h1>
                    <table name='Plant Toxins' action="http://localhost:5000/toxins" className="table table-striped" style={{ marginTop: 20 }}>
                        <thead> 
                            <tr>                                            
                                <th>Latin Name</th>
                                <th>Common Name</th>
                                <th>Distribution</th>
                                <th>Location</th>
                                <th>Toxic Part</th>
                                <th>Phytotoxin</th>
                                <th>Relative Toxicity</th>
                                <th>LD50</th>
                                <th>Human Toxicity</th>
                                <th>Animal Toxicity</th>                                 
                            </tr>
                        </thead>
                    <tbody > {toxinList()}</tbody>                                    
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
                            forcePage={currentPage}
                            renderOnZeroPageCount={null}
                        />
            </div>                                                                               
                       
    );
}

