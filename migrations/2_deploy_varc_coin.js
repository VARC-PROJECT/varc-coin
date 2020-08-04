var VARCCoin = artifacts.require("./VARCCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(VARCCoin).then(() => {});
};
