import { NextPage } from 'next';
import React, { ReactElement, ReactNode } from 'react'

type PageWithLayout = NextPage & {
    getLayout: (page: ReactElement) => ReactNode;
};

const Test = () => {
    return (
        <div className='flex h-full flex-col justify-center items-center'>
            <h1 className='text-4xl mb-5 font-bold'>About</h1>
            <span className='text-7xl'>💬</span>
        </div>
    );
};

// Test.getLayout = (page: ReactElement) => {
//     return (
//         <>
//             <h1>Test Layout</h1>
//             <>{page}</>
//             <footer>Test Footer</footer>
//         </>
//     );
// };
export default Test;