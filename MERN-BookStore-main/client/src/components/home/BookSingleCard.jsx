// import { Link } from 'react-router-dom';
// import { PiBookOpenTextLight } from 'react-icons/pi';
// import { BiUserCircle, BiShow } from 'react-icons/bi';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { BsInfoCircle } from 'react-icons/bs';
// import { MdOutlineDelete } from 'react-icons/md';
// import { useState } from 'react';
// import BookModal from './BookModal';

// const BookSingleCard = ({ book }) => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
//       <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
//         {book.year}
//       </h2>
//       <h4 className='my-2 text-gray-500'>{book._id}</h4>
//       <div className='flex justify-start items-center gap-x-2'>
//         <PiBookOpenTextLight className='text-red-300 text-2xl' />
//         <h2 className='my-1'>{book.title}</h2>
//       </div>
//       <div className='flex justify-start items-center gap-x-2'>
//         <BiUserCircle className='text-red-300 text-2xl' />
//         <h2 className='my-1'>{book.author}</h2>
//       </div>
//       <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
//         <BiShow
//           className='text-3xl text-blue-800 hover:text-black cursor-pointer'
//           onClick={() => setShowModal(true)}
//         />
//         <Link to={`/book/${book._id}`}>
//           <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
//         </Link>
//         <Link to={`/update/${book._id}`}>
//           <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
//         </Link>
//         <Link to={`/delete/${book._id}`}>
//           <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
//         </Link>
//       </div>
//       {showModal && (
//         <BookModal book={book} onClose={() => setShowModal(false)} />
//       )}
//     </div>
//   );
// };

// export default BookSingleCard;


import { Link } from "react-router-dom";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative bg-white m-3 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-4">
      {/* Book Cover */}
      {/* <div className="h-48 bg-gray-200 flex items-center justify-center rounded-lg">
        <p className="text-gray-400 text-sm">Book Cover</p>
      </div> */}

      {/* Book Details */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
        <p className="text-gray-500 flex items-center mt-1">
          <BiUserCircle className="text-gray-600 mr-2" /> {book.author}
        </p>
      </div>

      {/* Year Tag */}
      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md mt-4">
        {book.year}
      </span>

      {/* Action Icons */}
      <div className="flex justify-between items-center mt-4 border-t pt-4">
        <BiShow
          className="text-xl text-blue-500 hover:text-blue-700 cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/book/${book._id}`}>
          <BsInfoCircle className="text-xl text-green-500 hover:text-green-700" />
        </Link>
        <Link to={`/update/${book._id}`}>
          <AiOutlineEdit className="text-xl text-yellow-500 hover:text-yellow-700" />
        </Link>
        <Link to={`/delete/${book._id}`}>
          <MdOutlineDelete className="text-xl text-red-500 hover:text-red-700" />
        </Link>
      </div>

      {/* Book Modal */}
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;