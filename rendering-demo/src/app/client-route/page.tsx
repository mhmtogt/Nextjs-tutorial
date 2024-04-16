"use client";
import { ServerSideFunction } from '@/utils/server-utils';
import React from 'react'

export default function ClientRoutePage() {

    console.log("Client route rendered ");

    const result = ServerSideFunction();

  return (
   <>
     <h1>Client Route Page</h1>

     <p>{result}</p>
   </>
  )
}
