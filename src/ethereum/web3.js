import Web3 from "web3";

let web3;

if (window.ethereum && parseInt(window.ethereum.chainId) === 56) {
  web3 = new Web3(window.ethereum);
  web3.fromInfur = false;
  web3.chainname = window.ethereum.chainId;
} else {
  web3 = new Web3(process.env.REACT_APP_NODE_URL_RPC);
  web3.fromInfur = true;
  web3.inchain = false;
  web3.chainname = "999";
}
let a = {
  web3: web3,
};
export default a;
