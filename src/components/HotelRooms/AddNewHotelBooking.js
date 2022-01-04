import React, { Component } from "react";
import axios from "axios";
import "../../Styles/HotelRoomStyle.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../Header";
import Footer from "../Footer";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";

export default class AddNewHotelBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      validated: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8070/hotelpackage/read/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.HotelPackage,
        });
      }
    });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } 
    else {
      e.preventDefault();

      const { capacity, name, email, arrivalDate, departureDate } = this.state;
      const { roomType, details, price, size, maxCapacity } = this.state.post;

      const data = {
        roomType: roomType,
        capacity: maxCapacity,
        name: name,
        email: email,
        arrivalDate: arrivalDate,
        departureDate: departureDate,
      };

      console.log(data);

      axios.post("http://localhost:8070/hotelbooking/add", data).then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line no-restricted-globals
          if (confirm(
              "Your reservation was Successfull, please select OK to pay!"
            )
          ) {
            window.location.href = `/payment/add-room/${this.props.match.params.id}`;
          } 
          else {
            window.location.href = "/userhotelbooking/View";
          }
        }
      });
    }
    this.setState({ validated: true });
  };

  disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  render() {
    const { roomType, details, price, size, maxCapacity } = this.state.post;

    return (
      <div>
        <Header />
        <div className="info">
          <div id="booking" class="section">
            <div class="section-center">
              <div class="container">
                <div class="row" id="bokrow">
                  <div class="col-md-7 col-md-push-5">
                    <div class="booking-cta">
                      <h1>Make Your</h1>
                      <h1>Reservation</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi facere, soluta magnam consectetur molestias itaque
                        ad sint fugit architecto incidunt iste culpa
                        perspiciatis possimus voluptates aliquid consequuntur
                        cumque quasi. Perspiciatis.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 col-md-pull-7">
                    <div class="booking-form">
                      <Form
                        onSubmit={this.onSubmit}
                        noValidate
                        validated={this.state.validated}
                      >
                        <div class="row" id="bokrow">
                          <div class="col-sm-7">
                            <div class="form-group">
                              <span class="form-label">Your Room Type</span>
                              <input
                                type="text"
                                className="form-control"
                                name="roomType"
                                placeholder=""
                                value={roomType}
                                disabled
                                onChange={this.handleInputChange}
                              />
                            </div>
                          </div>
                          <div class="col-sm-5">
                            <div class="form-group">
                              <span class="form-label">Max Person</span>
                              <input
                                type="text"
                                className="form-control"
                                name="capacity"
                                placeholder=""
                                value={maxCapacity}
                                disabled
                                onChange={this.handleInputChange}
                              />
                              <span class="select-arrow"></span>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <span class="form-label">Full Name</span>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please Enter Your Full Name!
                          </Form.Control.Feedback>
                        </div>
                        <div class="form-group">
                          <span class="form-label">Email</span>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please Enter Valid Email Address!
                          </Form.Control.Feedback>
                        </div>
                        <div class="row" id="bokrow">
                          <div class="col-sm-6">
                            <div class="form-group">
                              <span class="form-label">Check In</span>
                              <input
                                type="date"
                                required
                                className="form-control"
                                name="arrivalDate"
                                placeholder="YY/MM/DD"
                                min={this.disablePastDate()}
                                value={this.state.arrivalDate}
                                onChange={this.handleInputChange}
                              />
                              <Form.Control.Feedback type="invalid">
                                Please Select Your Arrival Date!
                              </Form.Control.Feedback>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <span class="form-label">Check out</span>
                              <input
                                type="date"
                                required
                                className="datepicker form-control"
                                name="departureDate"
                                placeholder="YY/MM/DD"
                                min={this.disablePastDate()}
                                value={this.state.departureDate}
                                onChange={this.handleInputChange}
                              />
                              <Form.Control.Feedback type="invalid">
                                Please Select Your Departure Date!
                              </Form.Control.Feedback>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="">
                            <button
                              class="btn btn-secondary"
                              type="submit"
                              style={{
                                backgroundColor: "#192c3e",
                                width: "100%",
                              }}
                            >
                              Confirm booking
                            </button>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
