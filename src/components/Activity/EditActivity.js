import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";

const EditActivity = (props) => {
    const [aname, setActivityName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [message, setMessage] = useState("");
    const [fileName, setFileName] = useState("");

    const onChangeFile = (e) => {
        setFileName(e.target.files[0]);
    }


    const changeOnClick = e => {
        e.preventDefault();


        const formData = new FormData();

        formData.append("aname", aname);
        formData.append("category", category);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("activityImage", fileName);



        setActivityName("");
        setCategory("");
        setDescription("");
        setPrice("");
        setFileName("");

        axios
            .put(`http://localhost:8070/activities/update/${props.match.params.id}`, formData)
            .then(res => setMessage(res.data))
            .catch(err => {
                console.log(err);
            });
    };


 useEffect(() => {
        axios
        .get(`http://localhost:8070/activities/${props.match.params.id}`)
        .then(res => [
            setActivityName(res.data.aname),
            setCategory(res.data.category),
            setDescription(res.data.description),
            setPrice(res.data.price),
            setFileName(res.data.articleImage),
        ])
        .catch(error => console.log(error));
    }, []);

    return (
        <AddActivityContainer>
            <div className="info">
            <div className="container">
                <h1>Update Activity </h1>
                <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
  <div className="form-group">
    <label htmlFor="aname">Activity Name</label>
    <input 
    type="text" 
    value={aname}
    onChange={e => setActivityName(e.target.value)}
    className="form-control" 
    placeholder="Activity Name"/>
  </div>

  <div className="form-group">
    <label htmlFor="category">Category</label>
    <input 
    type="text" 
    value={category}
    onChange={e => setCategory(e.target.value)}
    className="form-control" placeholder="Category"/>
  </div>

  <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea 
    value={description}
    onChange={e => setDescription(e.target.value)}
    className="form-control" rows="10"></textarea>
  </div>
  
  <div className="form-group">
    <label htmlFor="price">Price</label>
    <input 
    type="text"
    value={price} 
    onChange={e => setPrice(e.target.value)}
    className="form-control" placeholder="Price"/>
  </div>

  <div className="form-group">
            <label htmlFor="file">Choose activity image</label>
            <input type="file" filename="activityImage" className="form-control-file"
            onChange={onChangeFile}
            />
            </div>

  <div className="flex-parent jc-center">
  <button type="submit" className="btn btn-primary">Update Activity</button>
  </div>

  <div className="flex-parent jc-center">
  <Link to="/" type="submit" className="btn btn-outline-secondary">Back to Activity</Link>
  </div>
</form>
</div>
</div>
</AddActivityContainer>
    );
};

export default EditActivity;

//MAIN CONTAINER
const AddActivityContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 40.25rem;
    margin: 3rem auto;
    padding: 4rem;
    width: 40.25rem;
    background: linear-gradient(to bottom, #00ffff 0%, #ff99ff 100%);

    h1 {
        font-weight: 900;
        color: #339966;
    }

    .btn-primary {
        margin-top: 2rem;
        background: #008000;
        width: 8.25rem;
        height: 2.25rem;
        border:none;     
        &:hover {
            background: #00ff99;
            justify-content: center;
        }
    }

    .btn-outline-secondary {
        margin-top: 2rem;
        width: 9.25rem;
        height: 2.25rem; 
        align: right; 
        &:hover {
            background: #00ff99;
            display: flex;
        }
    }

    .message {
        font-weight: 900;
        color: #cc0000;
        padding: 1rem 1rem 1rem 0;
    }

    h1 {
        font-weight: 900;
        color: #339966;
    }

    .btn-primary {
        margin-top: 2rem;
        background: #008000;
        width: 10.25rem;
        height: 2.25rem;
        border:none;     
        &:hover {
            background: #00ff99;
            justify-content: center;
        }
    }

    .btn-outline-secondary {
        margin-top: 2rem;
        width: 9.25rem;
        height: 2.25rem; 
        align: right; 
        &:hover {
            background: #00ff99;
            display: flex;
        }
    }

    .message {
        font-weight: 900;
        color: #cc0000;
        padding: 1rem 1rem 1rem 0;
    }
`;