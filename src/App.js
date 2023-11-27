
import { useState, useEffect } from 'react';

import View from "./View"

const getDataFromls = () =>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data)
  }else{
    return [];
  }
}

function App() {

  const [books, setBooks] = useState(getDataFromls());
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [number, setNumber] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let book ={
      title,
      author,
      number
    }
    setBooks([...books,book])
  }
  const deleteBooks =(number)=>{
    const filterBooks = books.filter((elements, index)=>{
      return elements.number !== number;
    })
    setBooks(filterBooks)

  }

  useEffect(()=>{
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  

  return (
    <div className="wrapper">
      <h1>لیست کتاب ها</h1>
      <p>کتاب جدید خود را به کتابخانه اضافه کنید.</p>
      <div className="main">
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">عنوان</label>
              <input 
                type="text"
                className="form-control"
                required
                onChange={(e)=> setTitle(e.target.value)}
                />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="">نویسنده</label>
              <input 
              type="text" 
              className="form-control" 
              required
              onChange={(e)=> setAuthor(e.target.value)}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="">شماره #</label>
              <input 
              type="text" 
              className="form-control" 
              required
              onChange={(e)=> setNumber(e.target.value)}
              />
            </div>
            <div className="form-grou mt-4">
              <button type="submit" className="btn btn-success btn-md">افزودن</button>
            </div>
          </form>
        </div>
        <div className="view-container">
          {
            books.length > 0 &&
          <>
            <div className="table-responsive w-100">
            <table className="table">
               <thead>
                  <tr>
                    <th>شماره#</th>
                    <th>عنوان</th>
                    <th>نویسنده</th>
                    <th>حذف</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books} deleteBooks ={deleteBooks}/>

                  
                </tbody>
            </table>
          </div>
          <button className='btn btn-danger btn-md'onClick={()=>setBooks([])}>حذف همه</button>
          </>
          }

          
          {
            books.length < 1 && <div> کتاب در کتابخانه نیست.</div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
