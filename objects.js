var hotelData = { 
  name: "Biltmore",
  city: 'Providence',
  number: 200, 
  totalrooms: 350,
  roomService: true,
  pool: false,
  roomsAvail: function(){
      return hotelData.totalrooms - hotelData.number;
  }
};

function click(){
    
    document.getElementById("hotelName").innerHTML = hotelData.name;
    // document.getElementById("hotelpool").innerHTML = hotelData.pool;
    // document.getElementById("hotelroomService").innerHTML = hotelData.roomService;
    // document.getElementById("hoteltotalrooms").innerHTML = hotel.roomsAvail();
    // document.getElementById("hotelroomsAvail").innerHTML = hotelData.roomsAvail;

}

           
         
   