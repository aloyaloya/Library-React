import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Home from '../Home/Home';
import './App.css';
import { useState, useEffect } from 'react';

const API_key = 'AIzaSyBYH7LYFHq-QtB6kQDLHRsLNUfqSA5ER1A';

function App() {
  const [request, setRequest] = useState('');
  const [bookData, setData] = useState([]);

  return (
    <BrowserRouter>
      <Header takeRequest={temp => {
        setRequest(temp.split(' ').join('+'));
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${request}&${API_key}&maxResults=20`)
        .then(res => res.json())
        .then(data => setData(data.items))
      }}/>

      <Routes >
        <Route path='home' element={<Home/>} />
        <Route path='search-result' element={<Search request={request.split('+').join(' ')} data={bookData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;