import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
import "./Main.css"
const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult?
            <>
                            <div className="greet">
                <p>
                    <span>
                        Hello Nithin
                    </span>
                </p>
                <p>How can I help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>id iusto necessitatibus facere architecto beatae dicta recusandae esse facilis. Fuga, distinctio!</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>consectetur adipisicing elit. Suscipit rem consectetur aperiam id iusto necessitatibus facere </p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>:

            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className='result-data'>
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    
                </div>
            </div>
            }

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt ...' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className='bottom-info'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut facere magnam eos odit iste, earum impedit eius fugit explicabo voluptatibus amet deleniti provident architecto, quidem nihil accusantium. Quisquam, et.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
