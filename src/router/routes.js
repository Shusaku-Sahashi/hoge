export default {
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/login",
      meta: {
        requireAuth: false
      }
    },
    {
      path: "/tasks/:id",
      meta: {
        requireAuth: true
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
};
