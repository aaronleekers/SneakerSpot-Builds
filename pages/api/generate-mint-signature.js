import { ThirdwebSDK } from "@thirdweb-dev/sdk";

export default async function generateMintSignature(req, res) {
  // De-construct body from request
  let { address, name, description, image } = JSON.parse(req.body);
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "polygon");

  const nftContract = await sdk.getContract(
    "0xcC5f16F30132Cf6cAc7728768cC8562dEb46C6F3",
    "nft-collection"
  );

  const signedPayload = await nftContract.signature.generate({
    metadata: {
      name: name,
      description: description,
      image: image,
    },
    to: address,
    mintStartTime: new Date(0),
  });

  // return 200 and signedpayload
  res.status(200).json({
    signedPayload: JSON.parse(JSON.stringify(signedPayload)),
  });
}
