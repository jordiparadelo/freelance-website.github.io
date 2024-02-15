import { NextResponse } from 'next/server'
import { PROJECTS_ITEMS } from '@/constants'

export async function GET(request: Request, context: any) {
  const { params } = context
  console.log(params)
  const data = PROJECTS_ITEMS
  const res = data

  return NextResponse.json(res)
}