// token : "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiQkVMTFNDT1JQIiwidmVyc2lvbiI6InYyLjIuMCIsInJlc2V0X2RhdGUiOiIyMDI0LTA3LTIxIiwiaWF0IjoxNzIyMzk1MzUwLCJzdWIiOiJhZ2VudC10b2tlbiJ9.iv7OIZGEwpvv1ZKzOv1nspZc8QGjMGIyVRWZZPBYIE-m7l46eM55o043TA7J450ih6IDtseD5QY0VNy6TTc_9zrpHf7hNVxnIVaSg9nYtObRERxJuwSpiufq73RpaKLqhSAE96H9yCvklssYs-ad4g6NKwLN456KBPP8-9bCuxUogi3tWgC2xAuCCH_iSAFQZDy0lhS-tYuwxzI5e2PNzKoyA3c7EnKT4Fe-kUnG6yFEb3PiJS8bOX2R4SRqp1ix8V17v9D9PnA2lF4QvQ7hbU2qt1BrPlEMaKThxH9eMA_xIyz2XalHgpvEga-IqNrj0Zb9pL5_q3C4s93lYfWOjA"

let shipDetails = null;
const url = "https://api.spacetraders.io/v2/my/agent"
const waypt = "https://api.spacetraders.io/v2/systems/X1-QA42/waypoints/"
const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiQkVMTFNDT1JQIiwidmVyc2lvbiI6InYyLjIuMCIsInJlc2V0X2RhdGUiOiIyMDI0LTA3LTIxIiwiaWF0IjoxNzIyMzk1MzUwLCJzdWIiOiJhZ2VudC10b2tlbiJ9.iv7OIZGEwpvv1ZKzOv1nspZc8QGjMGIyVRWZZPBYIE-m7l46eM55o043TA7J450ih6IDtseD5QY0VNy6TTc_9zrpHf7hNVxnIVaSg9nYtObRERxJuwSpiufq73RpaKLqhSAE96H9yCvklssYs-ad4g6NKwLN456KBPP8-9bCuxUogi3tWgC2xAuCCH_iSAFQZDy0lhS-tYuwxzI5e2PNzKoyA3c7EnKT4Fe-kUnG6yFEb3PiJS8bOX2R4SRqp1ix8V17v9D9PnA2lF4QvQ7hbU2qt1BrPlEMaKThxH9eMA_xIyz2XalHgpvEga-IqNrj0Zb9pL5_q3C4s93lYfWOjA'
    },
  };

document.addEventListener("DOMContentLoaded", async function(){

    main();

})
  
async function getShipInfo(data){

    let response = await axios.get(url,options);
    // console.log(response.data.data.symbol);
    // console.log(response.data.data.credits);
    return response.data;
}

async function getShipLocation(data){
    let wayptDetails = shipDetails.data.headquarters;
    let response = await axios.get(waypt+wayptDetails);

    
    console.log(response.data);
    
    console.log(response.data.data.systemSymbol);
    // console.log(wayptDetails.data.symbol);
    // console.log(wayptDetails.data.type);
    // console.log(wayptDetails.data.x);
    // console.log(wayptDetails.data.y)

}

async function main(){

    shipDetails  = await getShipInfo();

    let shipButton = document.querySelector("#shipStatus");
    shipButton.addEventListener("click", function(){

        let output = document.querySelector("#output");


        output.innerHTML = `            
            <div class="row">
                <div class="col-2"><img src="spaceship_200x200px.png"></div> 
                <div class="col-10 align-items-center"><div>symbol:${shipDetails.data.symbol}</div>
                <div>headquarters: ${shipDetails.data.headquarters}</div>
                <div>credits:${shipDetails.data.credits}</div>
                <div>Faction:${shipDetails.data.startingFaction}</div>
                <div>Shipcount:${shipDetails.data.shipCount}</div>
                </div>
            </div>   
                            `;
    })

    
    // console.log(waypt+wayptDetails);
    getShipLocation();

}






    




  