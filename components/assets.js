// export type CryptoKey =
//   | "BTC"
//   | "ETH"
//   | "DOGE"
//   | "ALGO"
//   | "DOT"
//   | "UNI"
//   | "COMP";
import { Databases } from "appwrite";
import { useEffect, useState } from "react";
import { client } from "../config/appwrite";
import { iconsData } from "@/config/constants";

const AssetsTable = () => {
  const [assets, setassets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssets = async () => {
      const databases = new Databases(client);
      const assetsrResult = await databases.listDocuments(
        "66833379000e492f4fc2", // databaseId
        "66833384003465fe5929", // collectionId
        [] // queries (optional)
      );
      setassets(assetsrResult.documents);
      setLoading(false);
    };
    fetchAssets();
  }, []);

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-6xl bg-black opacity-90 px-8 py-4 rounded-md mb-8 border border-[#464646]">
        <p className="text-white">Loading Assets...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl bg-black opacity-90 px-8 py-4 rounded-md mb-8 border border-[#464646]">
      <table className="table table-lg">
        <tbody>
          <tr className="text-white  font-normal py-2 border-[#4F4F4F]">
            <td className="pl-0 text-xl">ASSETS</td>
            <td className="text-xl">LAST TRADE</td>
            <td className="text-xl">24H %</td>
            <td className="text-xl">24H CHANGE</td>
            <td className="w-10">
              <a className="text-[#3980FF] text-xl">MORE {">"}</a>
            </td>
          </tr>
          <p className="h-3"></p>
          {(assets ?? []).map((assetData) => {
            return (
              <tr key={assetData.symbol} className="border-b-0">
                <td className="py-2 pl-0 flex items-center gap-4">
                  <p
                    className="flex items-center justify-center w-16 h-16 rounded-lg"
                    style={{
                      backgroundColor: iconsData[assetData.symbol]?.bg,
                    }}
                  >
                    {iconsData[assetData.symbol]?.icon}
                  </p>
                  <p className="text-[#666666] flex">
                    <p className="text-white">
                      {assetData.name.split("/")[0]}/
                    </p>{" "}
                    {assetData.name.split("/")[1]}
                  </p>
                </td>
                <td className="">{assetData.last_trade}</td>
                <td
                  className={`${
                    assetData["24h_"].startsWith("-")
                      ? "text-[#FF5454]"
                      : assetData["24h_"].startsWith("+")
                      ? "text-[#6DFFDC]"
                      : assetData["24h_"].includes("0.00")
                      ? "text-[#666666]"
                      : ""
                  }`}
                >
                  {assetData["24h_"]}
                </td>
                <td
                  className={` ${
                    assetData["24h_change"].startsWith("-")
                      ? "text-[#FF5454]"
                      : assetData["24h_change"].startsWith("+")
                      ? "text-[#6DFFDC]"
                      : assetData["24h_change"].includes("0.00")
                      ? "text-[#666666]"
                      : ""
                  }`}
                >
                  {assetData["24h_change"]}
                </td>
                <td>
                  <p className="btn rounded-none text-lg text-[#00554B] bg-[#6DFF8B] font-semibold">
                    Trade
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
