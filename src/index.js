import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/store'

import { Game, Main, Leader } from './modules/main/pages'
import { ErrorBoundary, Page404 } from './shared'

import './index.css'
import './assets/styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <ErrorBoundary>
          <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/game'} element={<Game />} />
            <Route path={'/leaderboard'} element={<Leader />} />
            <Route path={'*'} element={<Page404 />} />
          </Routes>
        </ErrorBoundary>
      </HashRouter>
    </PersistGate>
  </Provider>
)
