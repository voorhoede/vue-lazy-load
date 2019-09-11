export default ({ router }) => {
  router.addRoutes([
    { path: '/', redirect: '/v1' },
  ])
}
