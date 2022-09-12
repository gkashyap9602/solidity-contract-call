const Web3 = require('web3')
const provider = new Web3(Web3.givenProvider)
console.log(provider);


const signer = provider.getSigner()
console.log(signer);

 provider.eth.getAccounts()
    .then((sucess)=>{
        console.log(sucess);
    })
// web3.eth.getBalance(address)
//     .then((sucess)=>{
//         console.log(sucess);
//     })
    