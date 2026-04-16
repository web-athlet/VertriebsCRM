'use client'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import type { ChildrenType } from '@/types/component-props'
import FallbackLoading from '../FallbackLoading'

const AuthProtectionWrapper = ({ children }: ChildrenType) => {
  const { status } = useSession()
  const { push } = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (status === 'unauthenticated') {
      push(`/auth/sign-in?redirectTo=${pathname}`)
    }
  }, [status, pathname, push])

  if (status === 'unauthenticated') {
    return <FallbackLoading />
  }

  return <>{children}</>
}

export default AuthProtectionWrapper
