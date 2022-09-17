import Head from 'next/head';
import React, { ReactElement, ReactNode } from 'react'

const SnakeToCamel = () => {
    return (
        <>
            <Head>
                <title>スネークキャメル変換</title>
            </Head>
            <div className='justify-center'>
                <h1 className='text-4xl mb-5 font-bold'>スネークキャメル変換</h1>
                <p>
                    入力した文字列のスネークケースをキャメルケースに変換します。
                </p>
                <p>
                    1. 入力欄に文字列を入れてください。<br />
                    2. 実行ボタンをクリックしてください。
                </p>
            </div>
        </>

    );
};

export default SnakeToCamel;