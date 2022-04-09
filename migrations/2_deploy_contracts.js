const CashFlash = artifacts.require("CashFlash");
module.exports = async function (deployer) {
  const accounts = await web3.eth.getAccounts();
  const feeAccount = accounts[0];
  console.log(feeAccount);
  await deployer.deploy("CashFlash");
};
