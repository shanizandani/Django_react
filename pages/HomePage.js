import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/notes/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authTokens.access}` // Add space after 'Bearer'
      },
    });
    const data = await response.json();
    if (response.status === 200) {
      setNotes(data);
    } else if(response.statusText === 'Unauthrozied'){
      logoutUser()
    }
  };

  return (
    <div>
      You are logged in.
      
      {notes.length > 0 ? (
        <ul>
          {notes.map((note) => (
            <li key={note.id}> {note.body}</li>
          ))}
        </ul>
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default HomePage;
