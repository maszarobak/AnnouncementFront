import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { listAnnouncement } from '../actions/announcementAction';
export default function List () {
    const dispatch = useDispatch();
    const announcementList = useSelector(state=>state.announcementList);
    const {loading,error,announcements} = announcementList;

    useEffect(()=>{
        dispatch(listAnnouncement([]));
    }, [dispatch]);
    return (
        <>
            <div>
                {loading ? 
                    <p>loading...</p>
                : 
                error ?
                     <p>error</p>
                : 
                <div>
                    <>
                    {announcements && announcements.map((announcement)=> (
                            <div key={announcement.id}>
                            <div>

                            
                            <h2>{announcement.tytul}</h2>
                            
                            <p>{announcement.wydzial}</p>
                        </div>
                        
                        </div>
                    ))}
                    </>
              </div>
            }
            </div>
            
        </>
    );
}