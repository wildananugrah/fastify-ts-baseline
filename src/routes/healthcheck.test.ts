const routes = async (app: any, options: any) => {
  app.route({
    method: "GET",
    url: "/_/healthcheck",
    handler: (req: any, res: any) => {
      return { app: true };
    },
  });
};

export default routes;
