import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Details from '../components/Details'

// eslint-disable-next-line import/no-webpack-loader-syntax
const webpackRequireContext = require.context(
  '!markdown-with-front-matter-loader!../_posts',
  false,
  /.md$/
)
const articles = webpackRequireContext
  .keys()
  .reduce(
    (memo, fileName) =>
      memo.set(
        fileName.match(/.\/([^.]+).*/)[1],
        webpackRequireContext(fileName)
      ),
    new Map()
  )

const reactRoutes = []

reactRoutes.push(
  <Route
    path="/"
    exact
    key="index"
    component={props => <Home articles={articles} {...props} />}
  />
)

reactRoutes.push(
  [...articles.keys()].map(path => {
    return (
      <Route
        path={'/' + path}
        key={path}
        component={props => <Details article={articles.get(path)} {...props} />}
      />
    )
  })
)

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <BrowserRouter>
        <Switch>{reactRoutes}</Switch>
      </BrowserRouter>
    </Switch>
  </BrowserRouter>
)

export default AppRouter
