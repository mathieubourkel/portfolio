import Image from "next/image";
import chappy from "../../assets/chappy.png"
import marketplace from "../../assets/marketplace.png"
import github from "../../assets/github.png"
export const tabs = [
    {
        title:'Chappy',
        value: 'chappy', 
        url: 'https://app-chappy.ddns.net/',
        content : (
            <div className="w-full projects-card flex flex-col items-center h-full rounded-2xl p-10 font-semibold card-glass-2">
           <p className='tabul small-caps'>Project realise in team with microservices</p>
           <Image
                src={chappy}
                alt="Screem from Chappy App"
                className="object-cover rounded-xl py-5 w-[40rem] h-[30rem]"
                />
         </div>
        ),
    },
    {
        title: 'Marketplace NFT', 
        value: 'nft',
        url: 'https://team-west-coast-nft.vercel.app/',
        content : (
            <div className="w-full projects-card flex flex-col items-center h-full rounded-2xl p-10 font-semibold card-glass-2">
           <p className='tabul small-caps'>DApps for creating NFTs collection</p>
           <Image
                src={marketplace}
                alt="Screen for my Marketplace NFTS App"
                className="object-cover rounded-xl py-5 w-[40rem] h-[30rem]"
                />
         </div>
        ),
    },
    {
        title: 'Github',
        value: 'github',
        url: 'https://github.com/mathieubourkel',
        content : (
            <div className="w-full projects-card flex flex-col items-center h-full rounded-2xl p-10 font-semibold card-glass-2">
           <h2 className='text-accent-1 font-semibold small-caps'>Github</h2>
           <p className='text-base'>Coucou les amis</p>
           <Image
                src={github}
                alt="Screen from my github account"
                className="object-cover rounded-xl py-5 w-[40rem] h-[30rem]"
                />
         </div>
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