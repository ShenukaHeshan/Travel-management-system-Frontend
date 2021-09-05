
import Header from './components/Header';
import Footer from './components/Footer';
import AddPayment from "./components/AddPayment";
import PackageDetails from './components/Travel_Packages/TravelPackageDetails';
import PackageDetailsAdmin from './components/Travel_Packages/TravelPackageDetailsAdmin';
import PackageBooking from './components/Travel_Packages/PackageBooking';
import AllPackagesAdmin from './components/Travel_Packages/TravelPackagesAdmin';
import CreatePackage from './components/Travel_Packages/AddTravelPackage';
import EditPackage from './components/Travel_Packages/EditTravelPackage';
import HomePage from './components/HomePage';
import AllPackages from './components/Travel_Packages/TravelPackages';
import AllBooking from './components/Travel_Packages/BookingAllDetails';
import adminhotelbooking from './components/AdminHotelBooking';
import userhotelbooking from './components/UserHotelBooking';
import hotelbookingdetails from './components/HotelBookingDetails';
import addnewhotelbooking from './components/AddNewHotelBooking';
import edithotelbooking from './components/EditHotelBooking';
import hotelpackage from './components/HotelPackage';
import adminhotelpackage from './components/AdminHotelPcakage';
import adminaddhotelpackage from './components/AdminAddHotelPackage';
import adminedithotelpackage from './components/AdminEditHotelPackage';
import adminhotelpackagedetails from './components/AdminHotelPackageDetails';
import DeletePackage from './components/Travel_Packages/DeleteTravelPackage'
import Display from './components/Kavindu/adminProfileView'
import admin from './components/Kavindu/adminLogin'
import EditDetails from './components/Kavindu/edit'
import UserProfile from './components/Kavindu/userprofile'
import RegisterUser from './components/Kavindu/RegForm';
import EditEquipment from './components/Travel_Equipments/EditEquipment';
import AddEquipment from './components/Travel_Equipments/AddEquipment';
import AdminEquipment from './components/Travel_Equipments/AdminEquipment';
import UserEquipment from './components/Travel_Equipments/UserEquipment';
import AddFeedback from './components/Feedback/AddFeedback';
import AllFeedback from './components/Feedback/AdminFeedback';
import Gallery from './components/Gallery';
import Aboutus from './components/AboutUs';
import ContactUs from './components/Contactus';



import {BrowserRouter as Router, Route} from "react-router-dom"



function App() {
  return (
    <Router>
    <div> 
      <Header/>
    
      <Route path ="/add" exact component={AddPayment}/>
      <Route path="/bookingpackage/:id" exact component = {PackageBooking}></Route>
       <Route path="/travelpackages/admin" exact component = {AllPackagesAdmin}></Route>
       <Route path="/travelpackage/admin/add" exact component ={CreatePackage}></Route>
       <Route path="/travelpackages/travelpackage/:id" exact component ={PackageDetails}></Route>
       <Route path="/travelpackages/travelpackage/admin/:id" exact component ={PackageDetailsAdmin}></Route>
       <Route path="/travelpackage/admin/edit/:id" exact component ={EditPackage}></Route>
      <Route path ="/" exact component={HomePage}></Route>
      <Route path="/travelpackages" exact component = {AllPackages}></Route>
      <Route path="/allbooking" exact component = {AllBooking}></Route>
      <Route path="/adminhotelbooking" exact component = {adminhotelbooking}></Route>
      <Route path="/userhotelbooking" exact component = {userhotelbooking}></Route>
      <Route path="/userhotelbooking/hotelbookingdetails/:id" exact component = {hotelbookingdetails}></Route>
      <Route path="/addnewhotelbooking" exact component = {addnewhotelbooking}></Route>
      <Route path="/edithotelbooking/:id" exact component = {edithotelbooking}></Route>
      <Route path="/hotelpackage" exact component = {hotelpackage}></Route>
      <Route path="/adminhotelpackage" exact component = {adminhotelpackage}></Route>
      <Route path="/adminaddhotelpackage" exact component = {adminaddhotelpackage}></Route>
      <Route path="/adminedithotelpackage/:id" exact component = {adminedithotelpackage}></Route>
      <Route path="/adminhotelpackagedetails/:id" exact component = {adminhotelpackagedetails}></Route>
      <Route path="/travelpackage/admin/delete/:id" exact component = {DeletePackage}></Route>
      <Route path ="/Register" exact component={RegisterUser}/>
      <Route path ="/get" exact component={Display}/>
      <Route path ="/admin" exact component={admin}/>
      <Route path ="/Profile" exact component={UserProfile}/>
      <Route path ="/edit/:id" exact component={EditDetails}/>
      <Route path ="/equipment/add" exact component={AddEquipment}/>
      <Route path ="/equipment/edit/:id" exact component={EditEquipment}/>
      <Route path ="/equipment/admin" exact component={AdminEquipment}/>
      <Route path ="/equipment" exact component={UserEquipment}/>
      <Route path ="/feedback" exact component={AddFeedback}/>
      <Route path = "/feedbacks/admin" exact component={AllFeedback}/>
      <Route path="/gallery" exact component={Gallery}/>
      <Route path="/aboutus" exact component={Aboutus}/>
      <Route path="/contactus" exact component ={ContactUs}/>

      




    <Footer/>
    </div>
    </Router>
    
    
  );
}

export default App;
