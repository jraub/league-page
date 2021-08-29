<script context="module">
  export const prerender = true;
</script>

<script>
  let preamble;
  let one;
  let two, twoOne, twoTwo, twoThree, twoFour, twoFive, twoSix;
  let three, threeOne, threeTwo, threeThree;
  let four, fourOne, fourTwo;
  let five, fiveOne, fiveOneOne, fiveTwo, fiveThree;
  let six;
  let seven;

  const goToSection = (section) => {
    const top = section.getBoundingClientRect().top;
    window.scrollTo({ left: 0, top, behavior: "smooth" });
  };
</script>

<div class="constitution">
  <h1 class="noUnderscore">THE LONGEST YARD 2.0 LEAGUE CONSTITUTION</h1>
  <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
  <h3 class="noUnderscore clickable" on:click={() => goToSection(preamble)}>
    PREAMBLE
  </h3>
  <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>
    ARTICLE I: BASIC RULES
  </h3>
  <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>
    ARTICLE II: OWNERS
  </h3>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>
    Section 1: Expectations and Responsibilities
  </h4>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>
    Section 2: Inactivity
  </h4>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(twoThree)}>
    Section 3: Owner Removal
  </h4>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(twoFour)}>
    Section 4: Vacancies
  </h4>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(twoFive)}>
    Section 5: Commissioner
  </h4>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(twoSix)}>
    Section 6: Cheating
  </h4>
  <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>
    ARTICLE III: SCHEDULE, AND SEEDING
  </h3>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>
    Section 1: Divisions
  </h4>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(threeTwo)}>
    Section 2: Schedule
  </h4>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(threeThree)}>
    Section 3: Seeding
  </h4>
  <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>
    ARTICLE IV: ROSTERS AND SCORING
  </h3>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>
    Section 1: Scoring
  </h4>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>
    Section 2: Player Positions
  </h4>
  <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>
    ARTICLE V: PLAYER ACQUISITION
  </h3>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>
    Section 1: The First Draft
  </h4>
  <h5 class="noUnderscore clickable" on:click={() => goToSection(fiveOneOne)}>
    Section 1.1: The Rookie Draft of Following Seasons
  </h5>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveTwo)}>
    Section 2: Waivers and the FAAB
  </h4>
  <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveThree)}>
    Section 3: Trades
  </h4>
  <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>
    Section VI: AMENDMENT PROCESS AND RULES
  </h3>
  <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>
    Section VI: AMENDMENTS
  </h3>

  <h2 class="sectionHeading" bind:this={preamble}>PREAMBLE</h2>
  <p>
    The purpose of this league is to provide space for capable and willing
    owners to test their skills in a dynasty fantasy football league. It is
    hoped that this league will help to form many friendships.
  </p>
  <h2 class="sectionHeading" bind:this={one}>ARTICLE I: BASIC RULES</h2>
  <ul>
    <li>
      This document is intended to serve as the final authority on rules and
      regulations for the league mentioned above.
    </li>
    <li>
      The league commissioners shall have final authority for rules not
      specifically or insufficiently addressed herein until the offseason when a
      rules-change/amendment can be presented and voted upon.
    </li>
    <li>
      In general, if there is any apparent or obvious contradiction between
      rules in this document and its amendments, the last text shall take
      precedent.
    </li>
    <li>
      If there is an action desired unanimously by all active owners, that
      action can be taken immediately, even in violation of this document.
    </li>
    <li>
      Unless otherwise noted, owners shall have precisely 24 hours to cast their
      vote after the commissioner has officially called for one. If an owner's
      vote is not cast within this time, the owner forfeits their vote on the
      issue and formally abstains.
    </li>
    <li>
      In the event of a tie during a vote, and if the specific rules for that
      vote do not specify how to avoid or deal with ties, the league
      commissioners shall select the outcome as they see fit.
    </li>
    <li>League Service Provider: Sleeper</li>
    <li>League Type: Full PPR</li>
    <li>League Commissioners: Josh Raub and John Dykes</li>
    <li>Number of Owners/Teams: 12</li>
    <li>Dues: $25.00 Annually</li>
    <li>Payouts: 1st - $175, 2nd - $75, 3rd - $25, Most Points Scored - $25</li>
    <li>Communication Channel: Sleeper</li>
  </ul>
  <h2 class="sectionHeading" bind:this={two}>ARTICLE II: OWNERS</h2>
  <h3 class="subSectionHeading" bind:this={twoOne}>
    Section 1: Expectations and Responsibilities
  </h3>
  <ul>
    <li>
      There shall be up to two owners per team. As co-owners, the expectation is
      that decisions would be made together. If a co-owner is dissatisfied with
      the relationship, they should bring it to the league commissioner. If a
      co-owner needs to be kicked off, the owner at fault (chosen by the league
      by vote) will be kicked off. If both parties are to blame, the owner who
      has been a part of the league the longest shall stay. See <span
        class="noUnderscore clickable"
        on:click={() => goToSection(twoThree)}>Owner Removal.</span
      >
    </li>
    <li>
      Each owner shall be designated active by default unless otherwise stated
      in this document.
    </li>
    <li>Each owner is expected to:</li>
    <ul>
      <li>Manage their team actively and fairly.</li>
      <li>Participate in the Draft.</li>
      <li>Play only active and uninjured players.</li>
      <li>
        When a vote is called for, cast their vote or officially abstain
        promptly.
      </li>
      <li>Preserve the integrity of the league.</li>
      <li>Pay dues on time and in full.</li>
    </ul>
  </ul>
  <h3 class="subSectionHeading" bind:this={twoTwo}>Section 2: Inactivity</h3>
  <ul>
    <li>
      An owner shall be designated inactive for the current season and following
      offseason if they:
    </li>
    <ul>
      <li>
        Start inactive or injured players in 3 or more matches of the season and
        or postseason.
      </li>
      <li>
        Fail to participate in the draft either in person or virtually,
        <span style="text-decoration: underline">and</span> fail to make appropriate
        contingency plans before the draft.
      </li>
      <li>Fail to pay dues in full by August 1.</li>
    </ul>
    <li>
      Any team designated inactive forfeits all voting and veto rights for the
      current season and following offseason
      <span style="text-decoration: underline">and</span> becomes eligible for removal
      from the league (during the upcoming offseason, via the rules for owner removal
      detailed in this document).
    </li>
  </ul>
  <h3 class="subSectionHeading" bind:this={twoThree}>
    Section 3: Owner Removal
  </h3>
  <ul>
    <li>
      During the offseason, any active owner may request a vote to remove an
      inactive owner from the league.
    </li>
    <li>
      The inactive owner shall be permitted 24 hours to present their case (if
      they so wish).
    </li>
    <li>
      Twenty-four hours following the request for a vote, the commissioner shall
      officially call for a vote to remove the inactive owner from the league.
      Each active owner shall have 24 hours to vote either for or against the
      removal of the inactive owner.
    </li>
    <li>
      The vote shall pass, and the inactive owner shall immediately be removed
      if greater than 50% of the votes cast are for or in favor of removal, and
      the vote shall fail otherwise.
    </li>
    <li>
      Each inactive owner must be voted on individually and only if a vote is
      requested.
    </li>
    <li>
      Suppose an owner is removed via the rules of this document. In that case,
      the commissioner shall immediately remove them from the league and revoke
      any rights still possessed by the former owner through the league service
      provider.
    </li>
  </ul>
  <h3 class="subSectionHeading" bind:this={twoFour}>Section 4: Vacancies</h3>
  <ul>
    <li>
      When one or more owner vacancies are created via owner resignation, owner
      removal, or an increase in the number of nominal teams via league
      expansion, the vacancies must be filled during the offseason no later than
      one month before the scheduled rookie draft (if possible).
    </li>
    <li>
      Vacancies must be filled one at a time and can only be filled during the
      offseason.
    </li>
    <li>
      To fill a vacancy, the commissioner shall issue a request for candidates
      (RFC).
    </li>
    <li>
      Following the RFC, each active owner is permitted to submit one candidate
      to fill the vacancy and must do so within one week of the RFC.
    </li>
    <li>
      One week following the RFC, the commissioner shall present all candidates
      to the league and officially call for a vote.
    </li>
    <li>
      For the vote, each active owner shall submit their 1st and 2nd choice to
      fill the vacancy from among the list presented by the commissioner. The
      commissioner shall then count and officially fill the vacancy with the
      candidate who receives the most total 1st
      <span style="text-decoration: underline">and</span> 2nd place votes.
    </li>
    <ul>
      <li>
        An owner may not list the same candidate as their 1st and 2nd place
        choice or forfeit their vote.
      </li>
    </ul>
    <li>
      A newly added owner is considered neither active nor inactive until the
      rookie draft of their first season in which they participate. At this
      time, they become designated active until such a time as that designation
      should change according to the rules of this document.
    </li>
    <ul>
      <li>
        Not being active, a new owner has
        <span style="text-decoration: underline">no</span> voting rights during the
        offseason before their first season in the league.
      </li>
    </ul>
    <li>
      If a previous owner returns (who previously resigned, was removed, etc.),
      the owner shall immediately be granted active status and have full voting
      rights at the commissioner's discretion.
    </li>
  </ul>
  <h3 class="subSectionHeading" bind:this={twoFive}>Section 5: Commissioner</h3>
  <ul>
    <li>Two owner shall be designated the Commissioners</li>
    <li>
      The commissioners can only be replaced due to resignation or via unanimous
      vote by all active non-commissioner owners.
    </li>
    <li>
      The commissioners are expected to facilitate or appropriately delegate the
      following responsibilities personally:
    </li>
    <ul>
      <li>Enforce the rules of this document.</li>
      <li>
        Set up and handle all logistics of running the league utilizing the
        agreed-upon league Service Provider.
      </li>
      <li>
        Plan, set a date, make preparations, facilitate a live draft for all
        owners willing to attend, and provide a reliable means for quality
        virtual attendance.
      </li>
      <li>
        Serve as the tiebreaker for appropriate votes as described in the
        document.
      </li>
      <li>Collect dues and distribute prizes as described in this document.</li>
      <li>
        Call for votes and issue requests promptly to meet all time constraints
        as described in this document.
      </li>
      <li>
        Alter/Amend this document and carry out the results of any vote, per the
        rules of this document.
      </li>
      <li>
        Enact the collective will of the league, specifically the active owners.
      </li>
      <li>
        Rule on disputes according to the practices described in this document,
        where applicable.
      </li>
    </ul>
    <li>
      Suppose a commissioner resigns or is removed from the position and league.
      In that case, an immediate vote shall be held to elect a new commissioner
      from among the remaining active owners by the remaining active owners. A
      candidate must receive at least 50% of the votes cast to be elected
      commissioner.
    </li>
  </ul>
  <h3 class="subSectionHeading" bind:this={twoSix}>Section 6: Cheating</h3>
  <ul>
    <li>
      If one or more owners has engaged in any behavior that is
      <span style="text-decoration: underline">obviously</span> (in the commissioner's
      opinion) considered cheating or attempting to circumvent the rules of the league
      or trying to sabotage the integrity of the league and or the competition taking
      place therein:
    </li>
    <ul>
      <li>
        The commissioner has the option and duty to reverse or undo the illegal
        activity if possible.
      </li>
      <li>
        If the activity is especially egregious, or if the owner is a repeat
        offender, the commissioner may designate the owner inactive and or
        revoke all access to the league and the owner's team through the league
        service provider (to prevent further cheating).
      </li>
    </ul>
    <li>
      The following is a list of activities explicitly considered cheating (<span
        style="text-decoration: underline">not</span
      > an exhaustive list):
    </li>
    <ul>
      <li>
        Renting players (Team A trades a QB to team B, whose QB is on bye, then
        the next week trades back).
      </li>
      <li>
        They are deliberately helping another team win (throwing games, giving
        away players, etc.) when the action in no way has an immediate positive
        impact on the offending owner's ability to win the championship this
        season <span style="text-decoration: underline">or</span> win the championship
        in future seasons.
      </li>
    </ul>
    <li>
      Any owner may also petition the commissioner to alert them of a perceived
      cheating action.
    </li>
    <ul>
      <li>
        The commissioner will review the case and make a ruling within 24 hours
        of the petition.
      </li>
      <li>
        If an owner considers the commissioner guilty of cheating, the petition
        process will shift to the Vice Commissioner, following the same protocol
        and timeframe.
      </li>
    </ul>
  </ul>
  <h2 class="sectionHeading" bind:this={three}>
    ARTICLE III: SCHEDULE AND SEEDING
  </h2>
  <h3 class="subSectionHeading" bind:this={threeOne}>Section 1: Schedule</h3>
  <ul>
    <li>
      Each team's schedule shall consist of 14 regular season head-to-head
      matches against other teams/owners, each corresponding to 1 week of the
      NFL season.
    </li>
    <li>
      The regular season shall be followed by three post-season head-to-head
      matches (in either the playoff or consolation bracket) for each team.
      These matches shall also correspond to 1 week of the NFL season each.
    </li>
    <li>
      The first game of the season shall correspond to week 1 of the NFL regular
      season.
    </li>
    <li>
      The first game of the post-season shall correspond to week 14 of the NFL
      regular season.
    </li>
    <li>Each team must play each other team at least one time.</li>
    <ul>
      <li>
        Any changes to the schedule, number of nominal teams, or number and
        structure of divisions must be enacted in conjunction and in such a way
        as to meet this schedule constraint.
      </li>
    </ul>
    <li>
      The winner of each match is the team with the most points scored by their
      active roster, per the scoring and roster rules of this document.
    </li>
    <ul>
      <li>In the event of a tie, a tie will be added to your record.</li>
    </ul>
  </ul>
  <h3 class="subSectionHeading" bind:this={threeTwo}>Section 2: Seeding</h3>
  <ul>
    <li>The six teams with the best records will make the playoffs</li>
    <li>The remaining teams shall participate in the consolation bracket.</li>
    <li>The top 2 seeded teams shall receive a 1st round bye.</li>
    <li>
      Standing/Playoff seeding shall be determined head-to-head by the following
      measures:
    </li>
    <ul>
      <li>
        Record (total wins and losses in head-to-head regular season matches)
      </li>
      <li>
        Most Points For - 1st tiebreaker (total points scored throughout the
        regular season)
      </li>
      <li>
        Most Points Against - 2nd tiebreaker (total points scored against
        throughout the regular season)
      </li>
    </ul>
  </ul>
  <h2 class="sectionHeading" bind:this={four}>
    ARTICLE IV: ROSTERS AND SCORING
  </h2>
  <h3 class="subSectionHeading" bind:this={fourOne}>Section 1: Scoring</h3>
  <div>
    <table>
      <tbody>
        <tr>
          <td>Number of Passing TDs</td>
          <td>0-10</td>
          <td>4 points each</td>
        </tr>
        <tr>
          <td>Passing Yards</td>
          <td>-50-999</td>
          <td>1 point for every 25</td>
        </tr>
        <tr>
          <td>Pass Interceptions Thrown</td>
          <td>0-10</td>
          <td>-1 point each</td>
        </tr>
        <tr>
          <td>Passing 2 Pointers</td>
          <td>0-10</td>
          <td>2 points each</td>
        </tr>
        <tr>
          <td>Number of Rushing TDs</td>
          <td>0-10</td>
          <td>6 points each</td>
        </tr>
        <tr>
          <td>Rushing Yards</td>
          <td>-50-999</td>
          <td>1 point for every 10</td>
        </tr>
        <tr>
          <td>Rushing 2 Pointers</td>
          <td>0-10</td>
          <td>2 points each</td>
        </tr>
        <tr>
          <td>Number of Receiving TDs</td>
          <td>0-10</td>
          <td>6 points each</td>
        </tr>
        <tr>
          <td>Receiving Yards</td>
          <td>-50-999</td>
          <td>1 point for every 10</td>
        </tr>
        <tr>
          <td>Receptions</td>
          <td>0-99</td>
          <td>1 point each</td>
        </tr>
        <tr>
          <td>Receiving 2 Pointers</td>
          <td>0-10</td>
          <td>2 points each</td>
        </tr>
        <tr>
          <td>Number of Punt Return TDs</td>
          <td>0-10</td>
          <td>6 points each</td>
        </tr>
        <tr>
          <td>Number of Kickoff Return TDs</td>
          <td>0-10</td>
          <td>6 points each</td>
        </tr>
        <tr>
          <td>Fumbles-Lost</td>
          <td>0-10</td>
          <td>-2 points each</td>
        </tr>
      </tbody>
    </table>
  </div>
  <h3 class="subSectionHeading" bind:this={fourTwo}>
    Section 2: Player Positions
  </h3>
  <ul>
    <li>The league will have the following starting player positions:</li>
    <ul>
      <li>1 QB</li>
      <li>2 RB</li>
      <li>2 WR</li>
      <li>1 TE</li>
      <li>2 RB/WR/TE</li>
      <li>Total Roster size of 25 players</li>
    </ul>
  </ul>
  <h2 class="sectionHeading" bind:this={five}>ARTICLE V: PLAYER ACQUISITION</h2>
  <h3 class="subSectionHeading" bind:this={fiveOne}>
    Section 1: The First Draft
  </h3>
  <ul>
    <li>
      Upon the startup of the league, there will be a veteran and rookie snake
      draft.
    </li>
    <li>
      The Draft shall consist of some rounds corresponding to the total number
      of roster and bench spots per team, such that each of said spots would be
      filled for each team by the end of the draft.
    </li>
    <li>
      Each owner is expected to participate in the draft or make appropriate
      arrangements as described in this document.
    </li>
    <li>Draft order for the initial draft will be randomly assigned.</li>
    <li>
      Draft picks can be traded at any time after the draft order has been
      assigned.
    </li>
  </ul>
  <h4 class="subSectionHeading" bind:this={fiveOneOne}>
    Section 1.1: The Rookie Draft of Following Seasons
  </h4>
  <ul>
    <li>
      There will be a live or slow regular (non-snake) rookie draft following
      every NFL draft.
    </li>
    <li>
      Each owner is expected to participate in the draft or make appropriate
      arrangements as described in this document.
    </li>
    <ul>
      <li>
        An owner is permitted to submit a list of rankings and allow another
        owner to draft for them. However, if this option is used two seasons in
        a row, that owner shall be designated inactive starting after the draft
        of the second season.
      </li>
    </ul>
    <li>Draft Order will be determined as follows:</li>
    <ul>
      <li>1.01 - Team with least potential points from last season.</li>
      <li>1.02 - Team with 2nd least potential points from last season.</li>
      <li>...</li>
      <li>...</li>
      <li>1.11 - Champion Runner Up</li>
      <li>1.12 - Champion Team</li>
    </ul>
    <li>
      Draft picks for the following season's rookie draft can be traded in the
      previous season even with knowing a team's draft position.
    </li>
  </ul>
  <h3 class="subSectionHeading" bind:this={fiveTwo}>
    Section 2: Waivers and the FAAB
  </h3>
  <ul>
    <li>
      Each team shall begin with $100 of virtual/fake money every season,
      designated the Free Agent Acquisition Budget or FAAB for the regular
      season and the off-season.
    </li>
    <li>
      FAAB will reset to $100 after the championship game for the off-season
      budget. Any FAAB money remaining at the end of the season or the end of
      the off-season will be forfeited and not roll over.
    </li>
    <li>
      Owners submit a hidden bid for players on the waiver wire as they see fit,
      and each day at noon EST, the waivers are processed, and the owner with
      the highest (or only) bid on a given player shall have the player added to
      their team.
    </li>
    <li>
      Waivers will be processed every day other than Thursdays and Sundays. On
      Thursdays and Sundays, waivers will be unlocked, and eligible free agents
      can be claimed without delay. This schedule will allow managers to make
      last-minute roster adjustments before games start. A player is considered
      a free agent two days after he is dropped (after being held for 24 hours).
    </li>
    <li>
      Bids may only be submitted if processing would result in a valid roster
      configuration.
    </li>
    <li>
      Players can be dropped from an owner's team to the waiver wire (to free up
      roster spots) at any time.
    </li>
    <ul>
      <li>
        The only exception is players listed on the league service provider's
        default do not drop list, which shall be observed.
      </li>
    </ul>
    <li>Bids for $0.00 shall be permitted.</li>
    <li>
      If two or more teams bid the same amount, the tiebreaker comes down to
      waiver wire priority, which acts as rolling waivers. The waiver priority
      starts based on the draft order. So the team with the 1st overall pick
      would have the worst priority and the team that drafted last would have
      the best. If you successfully claim a player through waivers at any time,
      you go to the end of the list, while everybody else moves up by one. If
      you make any free agent acquisitions, it will not affect this priority
      order. The waiver wire priority can be found in our league's standings.
    </li>
    <li>
      There is no limit on the number of moves/transactions/pickups which an
      owner may attempt, and there is no fixed minimum cost per transaction or
      associated with making a move (beyond the FAAB bid placed).
    </li>
  </ul>
  <h3 class="subSectionHeading" bind:this={fiveThree}>Section 3: Trades</h3>
  <ul>
    <li>
      Trades consist of exchanging players (and only players) between
      owners/teams.
    </li>
    <li>
      Trades may be offered/accepted at any time during the season (after draft
      day and before the trade deadline).
    </li>
    <li>Trade Deadline: the 11th week of the NFL season.</li>
    <li>
      Trades may include any positions and number of players and any number of
      subsequent year's rookie draft picks, assuming that both teams involved
      still meet all roster restrictions following the trade.
    </li>
    <ul>
      <li>
        Trades can include dropping players to the waiver wire as necessary,
        following the rules for dropping players.
      </li>
    </ul>
    <li>
      Once a trade is accepted, it will automatically go into effect immediately
      - there will be no review period.
    </li>
    <li>
      The commissioners can invalidate or reverse a trade if, in the
      commissioners' opinion, it constitutes a blatant violation of the rules.
    </li>
    <li>
      Trades may <span style="text-decoration: underline">NOT</span> include anything
      except for the players involved in THIS league for the CURRENT year or rookie
      picks for NEXT year. To have anything else in terms of a trade, either implicitly
      or explicitly, shall constitute cheating. Cheating in this manner will be reversed
      if possible, and the owners involved shall be subject to the appropriate consequences
      as described in this document.
    </li>
    <ul>
      <li>
        Examples of things that a trade cannot include: Money, Favorable trades
        in another league, Draft picks from a future season, Promise of a future
        trade (renting).
      </li>
    </ul>
  </ul>
  <h2 class="sectionHeading" bind:this={six}>
    ARTICLE VI: AMENDMENT PROCESS AND RULES
  </h2>
  <ul>
    <li>
      Immediately following this section of the document shall be a list of
      amendments that replace, enhance, add to, or clarify previous articles and
      areas of this document and take precedence over anything coming before
      them.
    </li>
    <li>The following process shall be used to amend this document:</li>
    <ul>
      <li>
        Each active owner is permitted to submit one appropriately written
        amendment to a specific article or section of this document for
        consideration during each offseason.
      </li>
      <li>
        Submitted amendments cannot attempt to undo or circumvent the rules of
        any other amendment that has been in effect for fewer than three full
        seasons.
      </li>
      <li>
        No later than two months before the scheduled draft, the commissioner
        shall take all proposals, present them to the league, and then call for
        a vote on which of two proposals shall be individually voted on for
        enactment.
      </li>
      <li>
        Each active owner shall have 48 hours from when the vote is called to
        submit their 1st and 2nd choice for which amendments shall be voted on
        for enactment, and an owner's 1st and 2nd choice may not be the same, or
        else the owner forfeits their vote.
      </li>
      <li>
        The two submissions (amendments) receiving the most 1st and 2nd place
        votes shall be the ones voted on during that offseason for enactment,
        and in the event of a tie, the commissioner shall select.
      </li>
      <ul>
        <li>
          To be selected, a proposal must receive the support of at least 58% of
          the league's owners. (6/10 or 7/12).
        </li>
      </ul>
      <li>
        No later than one week after the two submissions requiring a vote for
        enactment have been determined, the commissioner shall call for two
        individual votes in succession, one for each of the submissions.
      </li>
      <li>
        The submission that received the most 1st and 2nd place votes shall be
        the amendment voted on for enactment first.
      </li>
      <li>
        Each active owner shall have 24 hours from the time that the
        commissioner officially calls for the vote to cast a vote either for or
        against adoption of the amendment. If an owner does not submit their
        vote within this time, they forfeit their vote and officially abstain.
      </li>
      <li>
        If greater than 58% of the votes cast are for or in favor of adoption,
        then the measure passes; otherwise, it fails. (6/10 or 7/12)
      </li>
      <li>
        If the measure passes, the amendment shall be officially adopted and
        immediately take effect. The commissioner shall immediately amend this
        document, adding a date and amendment number to the new amendment and
        then adding the latest amendment to the end of this document.
      </li>
    </ul>
  </ul>
  <h2 class="sectionHeading" bind:this={seven}>AMENDMENTS</h2>
</div>

<style>
  .constitution {
    position: relative;
    z-index: 1;
    width: 92%;
    max-width: 800px;
    margin: 8em auto 10em;
  }

  h1 {
    font-size: 2em;
    line-height: 1.2em;
    text-align: center;
    margin: 2em 0 1.5em;
  }

  h2 {
    font-size: 1.5em;
    line-height: 1.2em;
  }

  h3 {
    text-decoration: underline;
    font-size: 1.3em;
    line-height: 1.2em;
  }

  h4 {
    text-decoration: underline;
    margin-left: 2em;
    font-size: 1.2em;
    line-height: 1.2em;
  }

  h5 {
    margin-left: 6em;
    font-size: 0.8em;
    line-height: 1.1em;
  }

  .subBlock {
    margin-left: 2.4em;
  }

  .sectionHeading {
    margin: 4em 0 1.5em;
  }

  .subSectionHeading {
    margin: 1.5em 0 1.5em;
  }

  .underscore {
    text-decoration: underline;
  }

  .right {
    text-align: right;
  }

  .positionMaximums td {
    min-width: 3em;
  }

  .noUnderscore {
    text-decoration: none;
  }

  .clickable {
    cursor: pointer;
  }

  .clickable:hover {
    color: #00316b;
  }

  p {
    color: #777;
  }
</style>
