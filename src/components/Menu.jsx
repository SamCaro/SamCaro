// export const Menu = ({ isMenuOpen, handleMenu }) => {
//   return (
//     <div
//       onClick={handleMenu}
//       className='w-[70px] left-[20px] h-[50px] cursor-pointer '
//     >
//       <div
//         className={`w-[70px] h-[10px] left-0 top-[20px] absolute bg-neutral-500
//        ${isMenuOpen && 'transition-transform rotate-45'}`}
//       />

//       {!isMenuOpen && (
//         <div className='w-[70px] h-[10px] left-0 top-[40px] absolute bg-zinc-300' />
//       )}

//       <div
//         className={`
//        w-[70px] h-[10px] left-0 top-[60px] absolute bg-zinc-300
//        ${isMenuOpen && 'transition-transform rotate-[-45deg] top-[22px]'}`}
//       />
//     </div>
//   );
// }
