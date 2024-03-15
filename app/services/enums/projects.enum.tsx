import Image from "next/image";
import chappy from "../../assets/chappy.png"
import marketplace from "../../assets/marketplace.png"
import github from "../../assets/github.png"
import Link from "next/link";
export const tabs = [
    {
        title:'Chappy',
        value: 'chappy', 
        content : (
            <Link href='https://app-chappy.ddns.net/'>
            <div className="w-full projects-card flex flex-col justify-center items-center h-full rounded-2xl p-10 font-semibold card-glass-2">
           <p className='flex justify-center small-caps text-base lg:text-2xl'>Construction management app for individuals.</p>
           <Image
                src={chappy}
                alt="Screem from Chappy App"
                className="object-scale-down rounded-xl py-5 w-[40rem] h-[30rem]"
                />
                <div className='flex flex-wrap justify-center'>
                <p className='text-sm font-semibold text-accent-1 mr-1'>Stack : </p><p className='text-sm'>TS | React | MS | NATS | AWS</p>
                </div>
         </div>
         </Link>
        ),
    },
    {
        title: 'NFT', 
        value: 'nft',
        content : (
            <Link href='https://team-west-coast-nft.vercel.app/'>
            <div className="w-full projects-card flex flex-col items-center h-full rounded-2xl p-10 font-semibold card-glass-2">
           <p className='flex justify-center small-caps text-base lg:text-2xl'>DApp for creating NFT collections.</p>
           <Image
                src={marketplace}
                alt="Screen for my Marketplace NFTS App"
                className="object-scale-down rounded-xl py-5 w-[40rem] h-[30rem]"
                />
                <div className='flex flex-wrap justify-center'>
                <p className='text-sm font-semibold text-accent-1 mr-1'>Stack : </p><p className='text-sm'>Solidity | React | Hardhat | Remix | Smart contracts</p>
                </div>
         </div>
         </Link>
        ),
    },
    {
        title: 'Github',
        value: 'github',
        content : (
            <Link href='https://github.com/mathieubourkel'>
            <div className="w-full projects-card flex flex-col items-center h-full rounded-2xl p-10 font-semibold card-glass-2">
           <p className='text-base small-caps flex justify-center lg:text-2xl'>Some MS projects on my Github.</p>
           <Image
                src={github}
                alt="Screen from my github account"
                className="object-scale-down rounded-xl py-5 w-[40rem] h-[30rem]"
                />
                <div className='flex flex-wrap justify-center'>
                <p className='text-sm font-semibold text-accent-1 mr-1'>Stack : </p><p className='text-sm'>MS | Go | TS | React | Solidity</p>
                </div>
         </div>
         </Link>
        ),
    },
]

// const tabs = [
//     {
//       title: "Product",
//       value: "product",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Product Tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Services",
//       value: "services",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Services tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Playground",
//       value: "playground",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Playground tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Content",
//       value: "content",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Content tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//     {
//       title: "Random",
//       value: "random",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Random tab</p>
//           <DummyContent />
//         </div>
//       ),
//     },
//   ];