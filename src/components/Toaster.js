import React from 'react';
import { Toaster as HotToaster } from "react-hot-toast";

const Toaster = () => {
   return (
      <HotToaster
         position="bottom-center"
         reverseOrder={false}
         gutter={8}
         containerClassName=""
         containerStyle={{}}
         toastOptions={{
            className: '',
            duration: 100000000000,
            style: {
               background: '#363636',
               color: '#fff',
            },
            success: {
               duration: 10000,
               icon: "🎉",
               style: {
                  borderRadius: '10px',
                  background: 'rgb(50,255,68)',
                  color: '#000000',
               },
            },
            error: {
               duration: 10000,
               icon: "⛔️",
               style: {
                  borderRadius: '10px',
                  background: '#121212',
                  color: '#ff0e0e',
               },
            }
         }}
      />
   );
};

export default Toaster;
