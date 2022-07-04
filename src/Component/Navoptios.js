import React from 'react'
import NavCard from "./NavCard.js"
function Navoptios({ miphone,redmiphones,tv,laptop,fitnessAndlifeStylehome,accessories,audio}) {
  return (
    <div  className="Navoptios">

      {miphoneToggle?  miphone.map((item)=>(
    < NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>    
    )): null}
    
    {redmiPhoneToggle?   redmiPhones.map((item)=>(

< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }


{tvToggle ?   tv.map((item)=>(

 < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }

{laptopToggle ?   laptop.map((item)=>(

< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }



{fitnessToggle ?   fitnessAndLifeStyle.map((item)=>(

< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }


{homeToggle ?   home.map((item)=>(

    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }



{audioToggle ?   audio.map((item)=>(

< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }


{accessoriesToggle ?   accessories.map((item)=>(

 < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null}
    </div>
  )
}

export default Navoptios