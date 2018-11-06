const Test = artifacts.require("./Test.sol");

const BigNumber = web3.BigNumber;

require('chai').should()

contract("MyTest", accounts => {
    it("should set version here!", async () => {
        let version = 'V0.0.1';
        const testInstance = await Test.deployed()

        let txRes = await testInstance.setVersion(version, {from:accounts[1]})
        // console.log(txRes)

        const v = await testInstance.getVersion.call()
        console.log("current version is:", v);

        let aa = await testInstance.a.call()
        console.log("A's address is:", aa)

        let alist = await testInstance.alist.call(1)
        console.log(alist)

    })
})
