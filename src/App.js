import Navbar from "./Components/Navbar/Navbar";
import MarketPlacePage from "./Pages/MarketPlacePage";
import SingleNFTPage from "./Pages/SingleNFTPage";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserReq } from "./redux/actions/authedUserActions";
import { LOGGED_IN } from "./redux/ActionTypes";
import web3 from "./ethereum/web3";
import Web3 from "web3";
import UsernameModal from "./Components/UsernameModal/usernameModal";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateNFTPage from "./Pages/CreateNFTPage/CreateNFTPage";

function App() {
  // const [show, setShow] = useState(false);

  // const dispatch = useDispatch();

  // const connectMetamask = async () => {
  //   // console.log('here');
  //   if (!window.ethereum) {
  //     alert("Install metamask first!");
  //   } else if (
  //     parseInt(window.ethereum.chainId) !==
  //     parseInt(process.env.REACT_APP_CHAIN_ID)
  //   ) {
  //     alert("Connect to Binance Testnet");
  //   } else {
  //     console.log("herhehrehrhehr");
  //     web3.web3 = new Web3(window.ethereum);
  //     console.log(web3.web3);
  //     var accs = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     if (accs.length > 0) {
  //       dispatch(loginUserReq(accs[0])).then((r) => {
  //         if (r.type === LOGGED_IN) {
  //           if (!r.payload.name) {
  //             setShow(true);
  //           }
  //         } else {
  //           alert(r);
  //         }
  //       });
  //     } else {
  //       alert("Please connect to MetaMask.");
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (window.ethereum) {
  //     connectMetamask();
  //   } else {
  //     window.addEventListener("ethereum#initialized", connectMetamask, {
  //       once: true,
  //     });
  //     setTimeout(connectMetamask, 3000);
  //   }
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MarketPlacePage />} />
        <Route path="/*" element={<MarketPlacePage />} />
        <Route path="/marketplace" element={<MarketPlacePage />} />
        <Route path="/nft" element={<SingleNFTPage />} />
        <Route path="/create" element={<CreateNFTPage />} />
      </Routes>
      {/* <UsernameModal show={show} setShow={setShow} /> */}
    </div>
  );
}

export default App;
