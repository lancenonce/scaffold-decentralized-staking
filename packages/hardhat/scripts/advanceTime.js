async function main() {
  console.log("mining next block...");
  await hre.network.provider.send("evm_increaseTime", [3600]);
  await hre.network.provider.send("evm_mine");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
