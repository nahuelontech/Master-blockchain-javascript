//Una vez hemos puesto la libreria web3 y también ya nos hemos conectado a la blockchain,
//NOW create an instance of the SC in web3, we wanna create a JAVASCRIPT representation of that. OFC we need the SC ABI and an address.
//In ethscan we´ll do it with OMISEGO, and copy its ABI. Once we have the ABI, we go to the terminal and -> var abi = (paste the ABI)
//Having done so, we can check the address of the token in ethscan and cmd -> var address = (paste the address)
//If we wanna get a connection to this SC with web 3 we do cmd -> var contract = new web3.eth.Contract(abi, contractAdress)
//From here in the tutorial he does tons of codes to read specific stuffs, I won´t put much eeffort in how to read the web3js to talk to a smart contract.Por q hizo cositas simple como ver cuanta plata tiene este, ver las transacciones...
//Aunque en conclusión está bien esta parte de como leer un sc en el blockchain.
//mira el doc de web3js.readthedocs.io
//--------------------------PART 3---------------------------------------------------------------------------
app.js ---web3.examples                                       //and ofc u need node -v , libreria web3 ...
//WE START
const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io...')
//With web3 u can get average price gas of the net
web3.eth.getGasPrice().then(console.log)             //-> se corre en cmd con ' node app ' nos daria 40000000000
//If I want the price in eth:
web3.eth.getGasPrice().then((result) => {
  console.log(web3.utils.fromWei(result, 'ether'))   //-> 0.00000000blabla
})
console.log(web3.utils.sha3('Dapp University'))   //-> hashasndjsanmcjasmdcjasdca3319e0diddm1, see how it changes if u change the name
//But if u put keccack256... another hash. And also if we try with.randomHex(change number) it´ll give differents hashes
console.log(web3.utils.keccak256('Dapp University')) 

//--------------------------------PART 4----------------------------------------------------------------------
//Esto es muy core de blockchain. No hace falta q t lo aprendas de memoria, simplemente esta bien verlo, ya q solo hace manualmente como
//deployar unsmartcontract a la blockchain.(un poco de mineria)  Y tampoco me voy a dedicar a blockchain core, o mineria.
//DEPLOW A SC WITH WEB3 UTILITIES. Imma create a raw TX that deploys the SC data and its gonna sign the TX with a 
//private key and we´re going to broadcast that TX to the network and deploy the SC. 
//en realidad esto es una manera de hacerlo manual.
var Tx = require('ethereumjs-tx')
const Web3 = require('web3)
const web3 = new Web3('https://ropsten.infura.io....') //this is gonna be and RPC connection to a remote node hosted by infura on the robsten test network

const account1 = 'address'
const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
  //SmartContract data.(esta en el contrato) el contrato es de remix pero lo he puesto en el file 
  //the data from web3deplow, is just the compiled down bytecode converted into hexadecimal value that we need
  const data = '0x60806040526040805190810160405280600a81526020017f4441707020546f6b656e000000000000000000000000000000000000000000008152506000908051906020019061004f929190610168565b506040805190810160405280600481526020017f44415050000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b929190610168565b506040805190810160405280600f81526020017f4441707020546f6b656e2076312e300000000000000000000000000000000000815250600290805190602001906100e7929190610168565b503480156100f457600080fd5b50604051602080610db58339810180604052810190808051906020019092919050505080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806003819055505061020d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101a957805160ff19168380011785556101d7565b828001600101855582156101d7579182015b828111156101d65782518255916020019190600101906101bb565b5b5090506101e491906101e8565b5090565b61020a91905b808211156102065760008160009055506001016101ee565b5090565b90565b610b998061021c6000396000f300608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde031461009e578063095ea7b31461012e57806318160ddd1461019357806323b872dd146101be5780635a3b7e421461024357806370a08231146102d357806395d89b411461032a578063a9059cbb146103ba578063dd62ed3e1461041f575b600080fd5b3480156100aa57600080fd5b506100b3610496565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f35780820151818401526020810190506100d8565b50505050905090810190601f1680156101205780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561013a57600080fd5b50610179600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610534565b604051808215151515815260200191505060405180910390f35b34801561019f57600080fd5b506101a8610626565b6040518082815260200191505060405180910390f35b3480156101ca57600080fd5b50610229600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061062c565b604051808215151515815260200191505060405180910390f35b34801561024f57600080fd5b5061025861089b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561029857808201518184015260208101905061027d565b50505050905090810190601f1680156102c55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102df57600080fd5b50610314600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610939565b6040518082815260200191505060405180910390f35b34801561033657600080fd5b5061033f610951565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561037f578082015181840152602081019050610364565b50505050905090810190601f1680156103ac5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103c657600080fd5b50610405600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109ef565b604051808215151515815260200191505060405180910390f35b34801561042b57600080fd5b50610480600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b48565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561052c5780601f106105015761010080835404028352916020019161052c565b820191906000526020600020905b81548152906001019060200180831161050f57829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60035481565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561067c57600080fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561070757600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109315780601f1061090657610100808354040283529160200191610931565b820191906000526020600020905b81548152906001019060200180831161091457829003601f168201915b505050505081565b60046020528060005260406000206000915090505481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109e75780601f106109bc576101008083540402835291602001916109e7565b820191906000526020600020905b8154815290600101906020018083116109ca57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610a3f57600080fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60056020528160005260406000206020528060005260406000206000915091505054815600a165627a7a72305820f8803c8dc7d33d85b14c4eaf6c572dd8a1476c8aae7ab49faebdd5989e5db9be0029'
  // Create transaction object
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(1000000), //Raise this
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    data: data
  }
  //sign the transaction
  const tx = new Tx(txObject)
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.ToString('hex')
  //Broadcast the Tx
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('err:', err, 'txHash:', txHash)
  })
})
//Si le damos a correr en cmd node app.js -> node app.js nos dará un txHASH, ahora podemos ver el estado
// dela tx en ropsten ethscan . Now that we have the SC created(from remix), we can interact with it reading it like we did in previous chapters.
//we would have to follow the same steps, with ABI... I would copy it down below
const contractABI = [{"constant":true,"inputs", , "name":"name","outputs":[{:................
const contractAddress = 'hash'
var dapptokenContract = new web3.eth.Contract(conotractABI, contractAddress)
console.log(dapptokenContract) // and run it in the cmd/node or whatever it is
//and if we want to also read the name of this SC we can say:             and the same with symbol, supply, balance of.....
dapptokenContract methods.name().call((err, result) => { console.log(result) }) 

//-----------------------------------------PART5-----------------------------------
//dice q es high level, y q con entender el concepto ya basta.
//hasta aki lo importante del tutorial...














