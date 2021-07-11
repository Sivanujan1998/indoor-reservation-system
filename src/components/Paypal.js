import React,{useRef,useEffect, useState} from 'react'


export default function Paypal(props) {
    const paypal=useRef()
    const [value,setvalue]=useState(0)

    useEffect(()=>{
window.paypal.Buttons({
createOrder:(data,action,err)=>{

    if(props.courtname==="courta1"||props.courtname==="courta2"||props.courtname==="courtb1"||props.courtname==="courtb2"){
        setvalue(350)
  }else if(props.courtname==="courtc1"||props.courtname==="courtc2"||props.courtname==="courtc3"||props.courtname==="courtc4" || props.courtname==="courtd1"||props.courtname==="courtd2"||props.courtname==="courtd3"||props.courtname==="courtd4"){
      setvalue(200)
  }

    return action.order.create({
        intent:"Capture",
        purchase_units:[
            {
                
              
                discription: "Cool Looking table",
                amount:{
                    currency_code:"CAD",
                    value:350
                }
            }
        ]
        
    })
},
onApprove:async(data,actions)=>{
    const order=await actions.order.capture();
    console.log(order)
},
onError:(err)=>{
    console.log(err)
}
}).render(paypal.current)
    },[])

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}


