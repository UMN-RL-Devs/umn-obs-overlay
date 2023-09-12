interface StatfeedTarget {
  id: string;
  name: string;
  team_num: number;
}

export interface Statfeed {
  event_name: string;
  main_target: StatfeedTarget;
  secondary_target: StatfeedTarget;
  type: string;
}
