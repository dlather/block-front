import { Roboto } from "next/font/google";
import {
  DescriptionComponent,
  SwapTokens,
  NavigationBar,
  AssetsTable,
} from "../components";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div
        data-theme="dark"
        className="text-white bg-no-repeat bg-top"
        style={{
          backgroundImage: `url('/bg.png')`,
          backgroundColor: "black",
          width: "100%",
        }}
      >
        <NavigationBar />
        <DescriptionComponent />
        <AssetsTable />
        <SwapTokens />
        <div className="flex-grow h-32 bg-black"></div>
      </div>
    </main>
  );
}
