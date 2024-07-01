import { BTCIcon, BNBIcon } from "./icons";

const SwapTokens = () => {
  return (
    <div className="mx-auto w-full max-w-6xl bg-black opacity-90 px-8 py-8 mt-20 rounded-md border border-[#464646]">
      <div className="flex justify-between items-center mb-6">
        <p>SWAP TOKENS</p>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.9996 1.97998C15.1223 1.97998 14.3596 2.54131 12.8356 3.66531L10.5409 5.35731C10.3009 5.53465 10.1809 5.62265 10.0516 5.69731C9.92228 5.77198 9.78495 5.83065 9.51161 5.95065L6.89961 7.09198C5.16361 7.85198 4.29561 8.23065 3.85694 8.98931C3.41961 9.74931 3.52361 10.6906 3.73561 12.5733L4.05294 15.4066C4.08628 15.7026 4.10228 15.8506 4.10228 16C4.10228 16.1493 4.08628 16.2973 4.05294 16.5933L3.73561 19.4266C3.52494 21.3093 3.41961 22.2506 3.85694 23.0106C4.29694 23.7706 5.16361 24.1493 6.89961 24.908L9.51295 26.0493C9.78495 26.1693 9.92228 26.228 10.0516 26.3026C10.1796 26.3773 10.3009 26.4653 10.5409 26.6426L12.8343 28.3346C14.3609 29.4586 15.1236 30.02 15.9996 30.02C16.8756 30.02 17.6396 29.4586 19.1636 28.3346L21.4583 26.6426C21.6983 26.4653 21.8183 26.3773 21.9476 26.3026C22.0769 26.228 22.2143 26.1693 22.4876 26.0493L25.0996 24.908C26.8356 24.148 27.7036 23.7693 28.1423 23.0106C28.5796 22.2506 28.4756 21.3093 28.2623 19.4266L27.9463 16.5933C27.9129 16.2973 27.8956 16.1493 27.8956 16C27.8956 15.8506 27.9129 15.7026 27.9463 15.4066L28.2636 12.5733C28.4743 10.6906 28.5796 9.74931 28.1423 8.98931C27.7023 8.22931 26.8356 7.85065 25.0996 7.09198L22.4863 5.95065C22.3023 5.87598 22.1225 5.79141 21.9476 5.69731C21.7785 5.59289 21.6151 5.47939 21.4583 5.35731L19.1649 3.66531C17.6369 2.54131 16.8743 1.97998 15.9996 1.97998ZM15.9996 21.3333C17.4141 21.3333 18.7707 20.7714 19.7708 19.7712C20.771 18.771 21.3329 17.4145 21.3329 16C21.3329 14.5855 20.771 13.2289 19.7708 12.2287C18.7707 11.2285 17.4141 10.6666 15.9996 10.6666C14.5851 10.6666 13.2286 11.2285 12.2284 12.2287C11.2282 13.2289 10.6663 14.5855 10.6663 16C10.6663 17.4145 11.2282 18.771 12.2284 19.7712C13.2286 20.7714 14.5851 21.3333 15.9996 21.3333Z"
            fill="#FAFAFA"
          />
        </svg>
      </div>

      <div className="relative flex items-between gap-2 justify-center bg-[#1E1E1E] ">
        <div className="flex flex-1 pl-4 pr-10 flex-col justify-center items-center py-2">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="0.00"
              className="input text-3xl text-white placeholder-white font-semibold input-ghost w-full"
            />
            <div className="btn bg-black rounded-none">
              <BTCIcon />
              <p className="text-lg ml-1 font-normal">BTC {" >"}</p>
            </div>
          </div>
          <div className="flex justify-between w-full py-2 items-center">
            <p className="text-[#666666] text-sm ml-4">$0.00</p>
            <div className="text-sm flex gap-2 mx-2">
              <p className="">Balance:</p>
              <p className="text-[#3980FF]">24,650</p>
            </div>
          </div>
        </div>
        <div className="w-1 bg-black"></div>
        <button className="absolute left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2 btn btn-circle bg-black z-20">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0257 11.9998C11.8895 10.2341 12.2975 8.46908 13.1948 6.94228C14.0921 5.41548 15.4356 4.20021 17.0445 3.46006C18.6534 2.7199 20.4504 2.49038 22.1936 2.8024C23.9369 3.11441 25.5427 3.95298 26.7949 5.20523C28.0472 6.45749 28.8858 8.06331 29.1978 9.80656C29.5098 11.5498 29.2803 13.3468 28.5401 14.9557C27.7999 16.5645 26.5847 17.908 25.0579 18.8053C23.5311 19.7026 21.766 20.1107 20.0003 19.9745"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.3337 22.6665C29.3337 23.7274 28.9122 24.7448 28.1621 25.4949C27.4119 26.2451 26.3945 26.6665 25.3337 26.6665H22.667M22.667 26.6665L25.3337 23.9998M22.667 26.6665L25.3337 29.3332M2.66699 9.33317C2.66699 8.2723 3.08842 7.25489 3.83857 6.50474C4.58871 5.7546 5.60613 5.33317 6.66699 5.33317H9.33366M9.33366 5.33317L6.66699 7.99984M9.33366 5.33317L6.66699 2.6665M11.3337 29.3332C9.03512 29.3332 6.83072 28.4201 5.2054 26.7948C3.58008 25.1694 2.66699 22.965 2.66699 20.6665C2.66699 18.368 3.58008 16.1636 5.2054 14.5382C6.83072 12.9129 9.03512 11.9998 11.3337 11.9998C13.6322 11.9998 15.8366 12.9129 17.4619 14.5382C19.0872 16.1636 20.0003 18.368 20.0003 20.6665C20.0003 22.965 19.0872 25.1694 17.4619 26.7948C15.8366 28.4201 13.6322 29.3332 11.3337 29.3332Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="flex flex-1 pr-10 pl-4 flex-col justify-center items-center py-2">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="0.00"
              className="input text-3xl text-white placeholder-white font-semibold input-ghost w-full"
            />
            <div className="btn bg-black rounded-none">
              <BNBIcon />
              <p className="text-lg ml-1 font-normal">BNB {" >"}</p>
            </div>
          </div>
          <div className="flex justify-between w-full py-2 items-center">
            <p className="text-[#666666] text-sm ml-4">$0.00</p>
            <div className="text-sm flex gap-2 mx-2">
              <p className="">Balance:</p>
              <p className="text-[#3980FF]">63,790</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto my-4 text-white btn btn-wide rounded-none rounded-tl-lg btn-primary rounded-br-lg">
        SWAP TOKENS
      </div>
      <div className="flex justify-between items-center text-sm">
        <div>
          <p className="text-white">1 BTC = 32.4039 ETH</p>
          <p className="text-[#3980FF]">Free exchange</p>
        </div>
        <p className="text-[#666666]">Updates in 4s</p>
      </div>
    </div>
  );
};

export default SwapTokens;
