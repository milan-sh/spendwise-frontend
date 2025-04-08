import React from 'react'
import walletBlue from '../../../assets/svg/walletBlue.svg'

interface PropType {
    balance: number
    title: string
    percent?:number,
    inProfit?:boolean
}

const WalletCard = ({balance, title, percent, inProfit=true}:PropType) => {
  return (
    <div className='bg-gray-100 w-full relative h-40 flex flex-col items-center justify-center p-2 rounded-sm'>
      <img className='absolute top-2 left-2 size-8 text-left' src={walletBlue} alt="wallet" />
      <h2 className='text-black text-3xl mt-8 font-semibold text-center'>Rs. {balance} {percent && <span className='text-sm leading-0 tracking-[.0em]' style={{color: inProfit? 'green' : 'red'}}>{inProfit? '+' : '-'} {percent}%</span>}</h2>
      <h3 className='text-gray-800 font-medium text-lg text-center'>{title}</h3>
    </div>
  )
}

export default WalletCard
