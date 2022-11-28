export const routes = {
  LANDING: {
    title: "swapi.dev",
    route: "/",
  },
  CHARACTERS: {
    title: "Characters",
    route: "/characters",
  },
};

type LINK = {
  id: string;
  label: string;
};

export const links: LINK[] = Object.keys(routes)
  .filter((key) => key !== "LANDING")
  .map((key) => ({
    id: routes[key as keyof typeof routes].route,
    label: routes[key as keyof typeof routes].title,
  }));

export default routes;
