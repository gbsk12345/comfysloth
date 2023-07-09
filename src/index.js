import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider, User } from '@auth0/auth0-react'
import { AuthWrapper } from './pages'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AuthWrapper>
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </AuthWrapper>
  </Auth0Provider>
)

// dev-fxhiwys1jefae3bc.us.auth0.com
// rH0mPbyY6iaTWy6EzE3vMMxi22LeYQLl
