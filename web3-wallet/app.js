const connectButton = document.getElementById('connectButton');
const walletInfo = document.getElementById('walletInfo');
const addressSpan = document.getElementById('address');
const balanceSpan = document.getElementById('balance');

async function connectWallet() {
  if (typeof window.ethereum === 'undefined') {
    alert('No Ethereum provider detected. Please install MetaMask.');
    return;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  const balance = await provider.getBalance(address);
  addressSpan.textContent = address;
  balanceSpan.textContent = ethers.utils.formatEther(balance);
  walletInfo.classList.remove('hidden');
}

connectButton.addEventListener('click', connectWallet);
