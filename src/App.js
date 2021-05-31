import './App.css';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { listAnnouncement } from './actions/announcementAction';

function App() {
  const dispatch = useDispatch();
  const announcementList = useSelector(state=>state.announcementList);
  const {loading, error, announcement} = announcementList;

  useEffect(()=>{
      dispatch(listAnnouncement({}));
  }, [dispatch]);
  return (
    <div className="App">
    
          
             
                    {announcement.map((a)=> (
                            <div key={a.id}>
                            

                            
                            <h2>{a.tytul}</h2>
                            
                            <p>{a.wydzial}</p>
                        </div>
                    ))}
              
            
            
      
    </div>
  );
}

export default App;
