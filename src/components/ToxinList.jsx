import React, { useEffect, useState} from 'react';

const Toxin = (props) => (
    <tr>            
        <td>{props.toxin.LatinName}</td>
        <td>{props.toxin.CommonName}</td>
        <td>{props.toxin.Distribution}</td>
        <td>{props.toxin.Location}</td>
        <td>{props.toxin.ToxicPart}</td>
        <td>{props.toxin.Phytotoxin}</td>
        <td>{props.toxin.RelativeToxicity}</td>
        <td>{props.toxin.PredictedLD50}</td>
        <td>{props.toxin.HumanToxicity}</td>
        <td>{props.toxin.AnimalToxicity}</td>                
    </tr>
);
 /**<td>
    <Link className="btn btn-link" to={`/edit/${props.toxin._id}`}>Edit</Link> |
        <button className="btn btn-link"
        onClick={() => {
            props.deleteToxin(props.toxin._id);
        }}
        >
        Delete
        </button>
    </td>  
    <Pagination
                    */

    export default function ToxinList() {
        const [toxins, setToxins] = useState ([]); 
               
        //this method fetches the list from the database.
        useEffect(() => {
            async function getToxins(){
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

        //This method will map the list to the table
        function toxinList() {
            return toxins.map((toxin) => {
                    return (
                        <Toxin
                        toxin={toxin}
                        deleteToxin={() => deleteToxin(toxin._id)}
                        key={toxin._id}             
                        /> 
                    );
            });
        }
        /*const Toxin = useMemo(() => {
                
            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
            return  toxins.slice(firstPageIndex, lastPageIndex);
        }, [currentPage]);*/

        //this following section will display the table with the toxins
        return (       
            <div className='table'> 
                <h3>Toxin List</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
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
                    <tbody>{toxinList()}</tbody>
                </table>
            </div>                                                                               
                       
    );
}

