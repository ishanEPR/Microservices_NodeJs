import React,{useState} from 'react';


export default function PostCreate() {

    const [title,setTitle]=useState('');

    const onSubmit =(event)=>{
        event.preventDefault();

        const requestOptions={
            method: 'POST',
            headers:{ 'Content-Type':'application/json'},
            body:JSON.stringify({title:title})
        };

        fetch('http://localhost:4000/posts',requestOptions);
        
        setTitle('');
    } 

    return (
        <div>
            <h1>Post Create</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                    className="form-control"
                    value={title}
                    onChange={e => setTitle(e.target.value)}    
                    />

                </div>
                <button className="btn btn-primary">Submit</button>

            </form>
            
        </div>
    )
}
