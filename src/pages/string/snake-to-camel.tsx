import Head from 'next/head';
import React, { useEffect, useState } from 'react'


const toCamel = (inputText:string) => {

    // 入力文字列を1行ごとに分割
    let inputLines:Array<string> = inputText.split("\n");

    // 変換結果文字列格納配列
    let cameledLines:Array<string> = [];

    inputLines.map((inputLine) => {
        let lineSplitByUnderScore = inputLine.split("_");
        let cameledLine = "";

        for (let j = 0; j < lineSplitByUnderScore.length; j++) {
            if (j == 0) {
                // 最初の要素はそのまま出力
                cameledLine = lineSplitByUnderScore[j];
            } else {
                // アンダースコアの直後の文字を大文字にし、残りはそのまま出力
                let firstCharaToUpper = lineSplitByUnderScore[j].substring(0, 1).toUpperCase();
                let afterSecondCharas = lineSplitByUnderScore[j].substring(1)
                cameledLine = cameledLine + firstCharaToUpper + afterSecondCharas;
            }
        }
        cameledLines.push(cameledLine);
    });

    let cameledText = cameledLines.join("\n");

    return cameledText;
};

const SnakeToCamel = () => {
    // 入力テキストエリアの状態
    const [inputText, setInputText] = useState("")

    // 出力テキストエリアの状態
    const [outputText, setOutputText] = useState("")

    useEffect(() => {
        const timer = setTimeout(() => {
            setOutputText(toCamel(inputText));
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
                              className='bg-slate-700 rounded focus:ring-blue-500 focus:outline-none p-1 caret-white'
                              onChange={(e) => setInputText(e.target.value)}>
                    </textarea>
                </div>
                <div className='flex flex-col w-full md:w-1/2 m-2'>
                    <label>出力</label>
                    <textarea rows={10} value={outputText} readOnly 
                              className='bg-slate-700 rounded focus:ring-blue-500 focus:outline-none p-1 caret-white'>
                    </textarea>
                </div>
            </div>
        </>

    );
};

export default SnakeToCamel;