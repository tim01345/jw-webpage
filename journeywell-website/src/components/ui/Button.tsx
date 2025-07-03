'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'medium', children, asChild, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg border-2 border-transparent cursor-pointer transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-center'
    
    const variantClasses = {
      'primary': 'bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg',
      'secondary': 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white',
      'outline': 'bg-transparent text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400',
      'ghost': 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }
    
    const sizeClasses = {
      'small': 'px-4 py-2 text-sm',
      'medium': 'px-6 py-3 text-base',
      'large': 'px-8 py-4 text-lg'
    }
    
    const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    if (asChild) {
      return <span className={allClasses}>{children}</span>
    }
    
    return (
      <button className={allClasses} ref={ref} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }