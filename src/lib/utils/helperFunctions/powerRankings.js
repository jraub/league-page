export const loadRankings = async (week) => {
  let path = "/rankings/week" + week + "_power.json";

  const response = await fetch(path, {
    method: "GET",
    credentials: "same-origin",
  });
  const rankings = await response.json();

  return rankings;
};
