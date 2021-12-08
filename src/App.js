import {useEffect, useState} from 'react'
import axios from 'axios'
import {Routes,Route} from 'react-router-dom'

import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Watch from './Component/Watch'
import './App.css';

function App() {

  const [films,setFilms] = useState([])
  const [filter,setFilter] = useState([])
  const [search,setSearch] = useState('')

  // call API
  useEffect(()=>{
    axios.get('https://61a9915033e9df0017ea3e37.mockapi.io/film')
      .then(res=>{
        setFilms(res.data)
        setFilter(res.data)
      })
  },[])

  // Standard Srting
  function standardString(str) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D')
              .toUpperCase();
  }

  //Update Filter State
  useEffect(()=>{
    let str 
    let arr 
    arr = films.filter((item)=>{
      str=item.name
      str=str.slice(0,search.length)
      if(standardString(str)===standardString(search))
        return true
      return false
    })
    setFilter(arr)
  },[search,films])

  return (
    <div className="App">
      <Navbar search={search} setSearch={setSearch}/>
      <div className='body'>
        <Routes>
          <Route path='Film-Search/store/films/:slug' element={<Watch films={films} />}></Route>
          <Route path='Film-Search/' element={<Home filter={filter}/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
