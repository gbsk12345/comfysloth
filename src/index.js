import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider, User } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Auth0Provider
    // domain="dev-pu8wyk-g.us.auth0.com"
    // clientId="GYsVn60CkUU6fa4yiwpRrT1KVL5KuzPh"
    // redirectUri={window.location.origin}
    // cacheLocation="localstorage"

    domain="dev-pu8wyk-g.us.auth0.com"
    clientId="GYsVn60CkUU6fa4yiwpRrT1KVL5KuzPh"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
)

// dev-fxhiwys1jefae3bc.us.auth0.com
// rH0mPbyY6iaTWy6EzE3vMMxi22LeYQLl
