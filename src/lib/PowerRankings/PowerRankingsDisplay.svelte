<script>
  import BarChart from "$lib/BarChart.svelte";
  import {
    generateGraph,
    round,
    predictScores,
    loadRankings,
    managers,
  } from "$lib/utils/helper";
  export let nflState, rostersData, users, players, leagueData;

  let week = nflState.week;
  if (week == 0) {
    week = 1;
  }

  const rosters = rostersData.rosters;
  const currentManagers = {};

  for (const roster of rosters) {
    const user = users[roster.owner_id];
    currentManagers[roster.roster_id] = {
      avatar: `https://sleepercdn.com/avatars/thumbs/${user.avatar}`,
      name: user.metadata.team_name
        ? user.metadata.team_name
        : user.display_name,
    };
  }

  const fprosWeeklyPower = loadRankings(week);
  let weeklyRankingData = {};

  // Add fantasypros weekly data to our array
  fprosWeeklyPower.then((data) => {
    weeklyRankingData = doWork(data, weeklyRankingData);
  });

  const rosterPowers = [];

  let validGraph = false;

  for (const roster of rosters) {
    // make sure the roster has players on it
    if (!roster.players) continue;
    // if at least one team has players, create the graph
    validGraph = true;

    let managerName = currentManagers[roster.roster_id].name;
    console.log(weeklyRankingData);
    console.log(Object.keys(weeklyRankingData));
    const rosterPower = {
      rosterID: roster.roster_id,
      manager: currentManagers[roster.roster_id],
      powerScore: weeklyRankingData[managerName].WeeklyPower,
    };

    rosterPowers.push(rosterPower);
  }

  function doWork(players) {
    let theObject = {};
    for (var i = 0; i < players.length; i++) {
      let jsonData = { WeeklyPower: players[i].Score };
      let managerName = players[i].Team;
      theObject[managerName] = jsonData;
    }

    return theObject;
  }

  console.log(rosterPowers);

  const powerGraph = {
    stats: rosterPowers,
    x: "Manager",
    y: "Power Ranking",
    stat: "",
    header: "Weekly Power Rankings",
    field: "powerScore",
    short: "Week Power Ranking",
  };

  const graphs = [generateGraph(powerGraph, 10)];

  let curGraph = 0;

  let el;
  let maxWidth = 620;

  const resize = (w) => {
    const left = el?.getBoundingClientRect()
      ? el?.getBoundingClientRect().left
      : 0;
    const right = el?.getBoundingClientRect()
      ? el?.getBoundingClientRect().right
      : 0;

    maxWidth = right - left;
  };
  let innerWidth;

  $: resize(innerWidth);
</script>

<svelte:window bind:innerWidth />

{#if validGraph}
  <div class="enclosure" bind:this={el}>
    <BarChart {maxWidth} {graphs} bind:curGraph />
  </div>
{/if}

<style>
  .enclosure {
    display: block;
    position: relative;
    width: 100%;
  }
</style>
