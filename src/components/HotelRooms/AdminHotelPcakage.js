import React, {Component } from 'react';
import axios from 'axios';

export default class AdminHotelBooking extends Component{

    constructor(props){
        super(props);
        this.state={
          posts:[]
        };
      }
      
      componentDidMount(){
        this.retrievePosts();
      }
      
      retrievePosts(){
        axios.get("http://localhost:8070/hotelpackage/").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingPackage
            });
          console.log(this.state.hotelpackage);
          }
        });
      } 


      onDelete=(id)=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Are you Sure you want to delete this item?")){

        axios.delete(`http://localhost:8070/hotelpackage/delete/${id}`).then((res)=>{
          alert("Delete Successfully");
          this.retrievePosts();
        })
      }
    }

    render(){
        return(
          <div className="info">
            <div class="addbttn">
              <button className="btn btn-success">
                <a href="/adminaddhotelpackage" style={{textDecoration:'none' ,color:'white'}}>
                  <i class="fas fa-plus mr-2"></i>Add New Package
                </a>
              </button>&nbsp;  
              <button className="btn btn-success">
                <a href="/adminhotelbooking" style={{textDecoration:'none' ,color:'white'}} >
                  <i class="fas fa-book mr-2"></i>Hotel Booking
                </a>
              </button>      
            </div>

            <br></br>
            <hr/>
            <br></br>
            
            {this.state.posts.map((posts,index)=>( 
              <section class="ad">
                <figure class="adcard">
                 <div class="ad_card">
                   <img class="card_img" src={`/uploads/${posts.packageImage}`}/>
                 </div>
                 <div class="ad_content">
                   <div class="card_info">
                     <h4 class="cardtopic">{posts.roomType}</h4>
                     <p class="cardprice">Per Day: Rs {posts.price}</p>
                     <p class="cardmax">max Person: {posts.maxCapacity}</p>
                   </div>
                   <div class="cd_bttn">
                    <button class="btn btn-dark">
                      <a href ={`/adminhotelpackagedetails/${posts._id}`} style={{textDecoration:'none' ,color:'white'}}>
                        Details
                      </a>
                    </button>&nbsp;
                   </div> 
                 </div>
                </figure>
              </section>
            ))}            
          </div>
        )
    }
}
