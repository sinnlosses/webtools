import Head from 'next/head';
import React, { ReactElement, ReactNode } from 'react'

const SnakeToCamel = () => {
    return (
        <>
            <Head>
                <title>スネークキャメル変換</title>
            </Head>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl my-5 font-bold'>スネークキャメル変換</h1>
                <p>
                    入力したコードのスネークケースをキャメルケースに変換します。
                </p>
            </div>
            <div className='flex flex-col md:flex-row my-5'>
                <textarea rows={5} placeholder="Your Code Here" className='bg-slate-700 m-2 rounded w-full md:w-1/2 focus:ring-blue-500'></textarea>
                <textarea rows={8} className='bg-slate-700 m-2 rounded w-full md:w-1/2 focus:ring-blue-500'></textarea>
            </div>
        </>

    );
};

export default SnakeToCamel;