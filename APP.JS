//HOW TO USE WEB3.JS? Habalremos de como hablar con el smart contract con javascript.
//First u need node -v (enviroment) cmd-> node -v
//And second u need web3.js libary cmd-> npm install web3
Having done so , we are gonna open de node console. cmd -> node
and we will require the web3 library cmd -> var Web3 = require('web3')
and we need to get an instance from web 3; cmd-> var web3 = new Web3('copy eth address,so u can connect with the eth net : https://mainnet.infura.io/dckemdcoekmcececec inventado')
Now lets ensure that our connections works with cmd -> web3
NOW create an instance of the SC in web3, we wanna create a JAVASCRIPT representation of that. OFC we need the SC ABI and an address.
In ethscan we´ll do it with OMISEGO, and copy its ABI
Once we have the ABI, we go to the terminal and -> var abi = (paste the ABI)
Having done so, we can check the address of the token in ethscan and cmd -> var address = (paste the address)
If we wanna get a connection to this SC with web 3 we do cmd -> var contract = new web3.eth.Contract(abi, contractAdress)
From here in the tutorial he does tons of codes to read specific stuffs, I won´t put much eeffort in how to read the web3js to talk to a smart contract.Por q hizo cositas simple como ver cuanta plata tiene este, ver las transacciones...
Aunque en conclusión está bien esta parte de como leer un sc en el blockchain.

--------------------------PART 3------------------------------------------------------------
app.js ---web3.examples                                       and ofc u need node -v , libreria web3 ...
//WE START
const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io...')
//With web3 u can get average price gas of the net
web3.eth.getGasPrice().then(console.log)             //-> se corre en cmd con ' node app ' nos daria 40000000000
//If I want the price in eth:

