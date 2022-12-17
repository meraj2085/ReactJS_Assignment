import React from 'react';

const Buttons = () => {
     return (
          <div className='grid grid-cols-2 gap-5'>
               <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100">Button 1</button>
               <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100">Button 2</button>
               <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100">Button 3</button>
               <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100">Button 4</button>
          </div>
     );
};

export default Buttons;