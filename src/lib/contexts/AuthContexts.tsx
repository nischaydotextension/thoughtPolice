'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { useSession } from '@/lib/auth-client'

interface AuthContextType {
  user: any
  isAuthenticated: boolean
  isLoading: boolean
  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Now this works as a normal React hook
  const { data: session, isPending: isLoading } = useSession()
  
  const handleSignIn = () => {
    window.location.href = '/api/auth/signin/reddit'
  }
  
  const handleSignOut = async () => {
    await fetch('/api/auth/signout', { method: 'POST' })
    window.location.href = '/'
  }

  const value = {
    user: session?.user || null,
    isAuthenticated: !!session?.user,
    isLoading,
    signIn: handleSignIn,
    signOut: handleSignOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}