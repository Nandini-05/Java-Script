function checkInventory(items) {
    setTimeout(() => {
        console.log('checking the Inventory....')
        items()
    }, 2000)

}
function createOrder(items) {
    setTimeout(() => {
       console.log('Creating the Order....')
       const error = new Error('Error in Creating Order')
       items(error)
    }, 1000)
    
}
function chargePayment(items) {
       setTimeout(() => {
       console.log('Charging the Payment....')
      let  chargedAmount = 1000
       items(null,chargedAmount)
    }, 2000)
   
}
function sendInvoice(items) {
       setTimeout(() => {
      console.log('Sending the Invoice....')
      items()
    }, 1000)
   
}


function main() {
    // Callback Hell
    checkInventory(()=>{
        createOrder((error)=>{
            if(error){
                console.log(error)
            }
           chargePayment((error,chargedAmount)=>{
                if(error){
                   console.log("handling the error")
                   return
                }
                console.log('Charged Amount is: ', chargedAmount)
                sendInvoice(()=>{
                    console.log('All Task are Done')
                })
           })
        })
    })
    // createOrder()
    // chargePayment()
    // sendInvoice()
}
main()