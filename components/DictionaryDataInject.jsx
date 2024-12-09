"use client"
import React, { useEffect } from 'react'
import useDictionaryContext from '@/context/dictionary/useDataContext'

export default function ClientDataInject({dictionary}) {

  const {setData} = useDictionaryContext()

useEffect(()=>{
  if(dictionary){
    setData(dictionary)
  }
}, [dictionary, setData])


  return 
}
