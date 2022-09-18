import Head from 'next/head';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react'

const SnakeToCamel = () => {
    // 入力テキストエリアの状態
    const [inputText, setInputText] = useState("")

    // 出力テキストエリアの状態
    const [outputText, setOutputText] = useState("")

    // スネークキャメル変換
    const snakeToCamel = () => {

        // 変換結果文字列
        let result = "";

        // 入力を行ごとに分割
        let aryOutputText = inputText.split("\n");

        // 選択行数分処理を繰り返す
        for (let i = 0; i < aryOutputText.length; i++) {

            let aryWork = aryOutputText[i].split("_");
            let strTmp = "";

            for (let j = 0; j < aryWork.length; j++) {
                if (j == 0) {
                    strTmp = aryWork[j];
                } else {
                    strTmp = strTmp + aryWork[j].substring(0, 1).toUpperCase() + aryWork[j].substring(1);
                }
            }
            if (i+1 < aryOutputText.length) {
                result = result + strTmp + "\n";
            } else {
                result = result + strTmp;
            }
        }
        setOutputText(result)
    };

    useEffect(() => {
        const timer = setTimeout(() => {
          snakeToCamel()
        }, 500)
    
        return () => clearTimeout(timer)
    }, [inputText])

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
            <div className='flex flex-col md:flex-row my-5 justify-between'>
                <div className='flex flex-col w-full md:w-1/2 m-2'>
                    <label>入力</label>
                    <textarea rows={10} value={inputText} placeholder="Your Code Here"
                              className='bg-slate-700 rounded focus:ring-blue-500 caret-white'
                              onChange={(e) => setInputText(e.target.value)}>
                    </textarea>
                </div>
                <div className='flex flex-col w-full md:w-1/2 m-2'>
                    <label>出力</label>
                    <textarea rows={10} value={outputText} readOnly 
                              className='bg-slate-700 rounded  focus:ring-blue-500 caret-white'>
                    </textarea>
                </div>
            </div>
        </>

    );
};

export default SnakeToCamel;