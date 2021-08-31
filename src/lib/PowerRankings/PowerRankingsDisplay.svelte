<script>
  import BarChart from "$lib/BarChart.svelte";
  import weeklyRankings from "/static/rankings/weekly_power.json";
  import dynastyRankings from "/static/rankings/dynasty_power.json";
  import {
    generateGraph,
    round,
    predictScores,
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

  const fprosWeeklyPower = weeklyRankings;
  const fprosDynastyPower = dynastyRankings;
  let rankingData = {};

  // Sort our lists here so that we can hack later
  fprosWeeklyPower.sort((a, b) => (a.Team > b.Team ? 1 : -1));
  fprosDynastyPower.sort((a, b) => (a.Team > b.Team ? 1 : -1));

  // Loop through this and put all of our data in the correct spot
  for (let i = 0; i < fprosWeeklyPower.length; i++) {
    let jsonData = {
      WeeklyPower: fprosWeeklyPower[i].Score,
      DynastyPower: fprosDynastyPower[i].Score,
    };
    let managerName = fprosDynastyPower[i].Team;
    rankingData[managerName] = jsonData;
  }

  const weeklyRosterPowers = [];
  const dynastyRosterPowers = [];

  let validGraph = false;

  for (const roster of rosters) {
    // make sure the roster has players on it
    if (!roster.players) continue;
    // if at least one team has players, create the graph
    validGraph = true;

    let managerName = currentManagers[roster.roster_id].name;
    let weeklyPowerScore = rankingData[managerName.trim()].WeeklyPower;
    let dynastyPowerScore = rankingData[managerName.trim()].DynastyPower;

    const weeklyPowers = {
      rosterID: roster.roster_id,
      manager: currentManagers[roster.roster_id],
      powerScore: weeklyPowerScore,
    };

    const dynastyPowers = {
      rosterID: roster.roster_id,
      manager: currentManagers[roster.roster_id],
      powerScore: dynastyPowerScore,
    };

    weeklyRosterPowers.push(weeklyPowers);
    dynastyRosterPowers.push(dynastyPowers);
  }

  let weeklyHeader = "FPros Week " + week + " Power Rankings";
  const weeklyPowerGraph = {
    stats: weeklyRosterPowers,
    x: "Manager",
    y: "Power Ranking",
    stat: "",
    header: weeklyHeader,
    field: "powerScore",
    short: "Week Power Ranking",
  };

  let dynastyHeader = "Fpros Dynasty Power Rankings";
  const dynastyPowerGraph = {
    stats: dynastyRosterPowers,
    x: "Manager",
    y: "Power Ranking",
    stat: "",
    header: dynastyHeader,
    field: "powerScore",
    short: "Dynasty Power Ranking",
  };

  const graphs = [
    generateGraph(weeklyPowerGraph, 10),
    generateGraph(dynastyPowerGraph, 10),
  ];

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
