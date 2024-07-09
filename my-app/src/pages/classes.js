import { useEffect, useState } from 'react';
import { getAllClasses } from '../D&DHandler';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Classes() {
    const [myClasses, setClasses] = useState([]);

    // used to save once loaded to reduce load times
    useEffect( () => {
      const savedClasses = localStorage.getItem("classes");
      if (savedClasses) setClasses(JSON.parse(savedClasses));
      getAllClasses().then( (classes) => {
        setClasses(classes);
        localStorage.setItem("classes", JSON.stringify(classes));
      });
      
      }, []);

      return (
        <div>
            <ul>
                {myClasses.map((myClasses) => (
                    <li key={myClasses.index}> {myClasses.name} </li>
                ))}
            </ul>
        </div>
      );
}