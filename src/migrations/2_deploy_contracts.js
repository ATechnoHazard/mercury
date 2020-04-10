var ChildERC20 = artifacts.require("ChildERC20");
var ChildERC721 = artifacts.require ("ChildERC721");
var Marketplace = artifacts.require ("Marketplace");

const owner = '0x7AAF1FD79329c3Ba3fEab3FBbfdA0eb9C01344Ad'
const token = '0x7AAF1FD79329c3Ba3fEab3FBbfdA0eb9C01344Ad'

module.exports = function(deployer) {
  deployer.deploy(ChildERC20, owner, token, "ChildERC20", "CHE", 18);
  deployer.deploy(ChildERC721, owner, token, "ChildERC721", "NFT");
  deployer.deploy(Marketplace);
};