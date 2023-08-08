import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "match_players" */
export type Match_Players = {
  __typename?: 'match_players';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  match: Matches;
  match_id: Scalars['uuid']['output'];
  nickname: Scalars['String']['output'];
  /** An object relationship */
  person?: Maybe<Persons>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "match_players" */
export type Match_Players_Aggregate = {
  __typename?: 'match_players_aggregate';
  aggregate?: Maybe<Match_Players_Aggregate_Fields>;
  nodes: Array<Match_Players>;
};

export type Match_Players_Aggregate_Bool_Exp = {
  count?: InputMaybe<Match_Players_Aggregate_Bool_Exp_Count>;
};

export type Match_Players_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Match_Players_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Match_Players_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "match_players" */
export type Match_Players_Aggregate_Fields = {
  __typename?: 'match_players_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Match_Players_Max_Fields>;
  min?: Maybe<Match_Players_Min_Fields>;
};


/** aggregate fields of "match_players" */
export type Match_Players_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Match_Players_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "match_players" */
export type Match_Players_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Match_Players_Max_Order_By>;
  min?: InputMaybe<Match_Players_Min_Order_By>;
};

/** input type for inserting array relation for remote table "match_players" */
export type Match_Players_Arr_Rel_Insert_Input = {
  data: Array<Match_Players_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Match_Players_On_Conflict>;
};

/** Boolean expression to filter rows from the table "match_players". All fields are combined with a logical 'AND'. */
export type Match_Players_Bool_Exp = {
  _and?: InputMaybe<Array<Match_Players_Bool_Exp>>;
  _not?: InputMaybe<Match_Players_Bool_Exp>;
  _or?: InputMaybe<Array<Match_Players_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  match?: InputMaybe<Matches_Bool_Exp>;
  match_id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "match_players" */
export enum Match_Players_Constraint {
  /** unique or primary key constraint on columns "nickname", "match_id" */
  MatchPlayersMatchIdNicknameKey = 'match_players_match_id_nickname_key',
  /** unique or primary key constraint on columns "match_id", "person_id" */
  MatchPlayersMatchIdPersonIdKey = 'match_players_match_id_person_id_key',
  /** unique or primary key constraint on columns "id" */
  MatchPlayersPkey = 'match_players_pkey'
}

/** input type for inserting data into table "match_players" */
export type Match_Players_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  match?: InputMaybe<Matches_Obj_Rel_Insert_Input>;
  match_id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Match_Players_Max_Fields = {
  __typename?: 'match_players_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  match_id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "match_players" */
export type Match_Players_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  match_id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Match_Players_Min_Fields = {
  __typename?: 'match_players_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  match_id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "match_players" */
export type Match_Players_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  match_id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "match_players" */
export type Match_Players_Mutation_Response = {
  __typename?: 'match_players_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Match_Players>;
};

/** on_conflict condition type for table "match_players" */
export type Match_Players_On_Conflict = {
  constraint: Match_Players_Constraint;
  update_columns?: Array<Match_Players_Update_Column>;
  where?: InputMaybe<Match_Players_Bool_Exp>;
};

/** Ordering options when selecting data from "match_players". */
export type Match_Players_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  match?: InputMaybe<Matches_Order_By>;
  match_id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: match_players */
export type Match_Players_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "match_players" */
export enum Match_Players_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MatchId = 'match_id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "match_players" */
export type Match_Players_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  match_id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "match_players" */
export type Match_Players_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Match_Players_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Match_Players_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  match_id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "match_players" */
export enum Match_Players_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MatchId = 'match_id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Match_Players_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Match_Players_Set_Input>;
  /** filter the rows which have to be updated */
  where: Match_Players_Bool_Exp;
};

/** 試合 */
export type Matches = {
  __typename?: 'matches';
  created_at: Scalars['timestamptz']['output'];
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  is_aborted?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  match_players: Array<Match_Players>;
  /** An aggregate relationship */
  match_players_aggregate: Match_Players_Aggregate;
  name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  room: Rooms;
  room_id: Scalars['uuid']['output'];
  start_time: Scalars['timestamptz']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** 試合 */
export type MatchesMatch_PlayersArgs = {
  distinct_on?: InputMaybe<Array<Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Players_Order_By>>;
  where?: InputMaybe<Match_Players_Bool_Exp>;
};


/** 試合 */
export type MatchesMatch_Players_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Players_Order_By>>;
  where?: InputMaybe<Match_Players_Bool_Exp>;
};

/** aggregated selection of "matches" */
export type Matches_Aggregate = {
  __typename?: 'matches_aggregate';
  aggregate?: Maybe<Matches_Aggregate_Fields>;
  nodes: Array<Matches>;
};

export type Matches_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Matches_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Matches_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Matches_Aggregate_Bool_Exp_Count>;
};

export type Matches_Aggregate_Bool_Exp_Bool_And = {
  arguments: Matches_Select_Column_Matches_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Matches_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Matches_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Matches_Select_Column_Matches_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Matches_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Matches_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Matches_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Matches_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "matches" */
export type Matches_Aggregate_Fields = {
  __typename?: 'matches_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Matches_Max_Fields>;
  min?: Maybe<Matches_Min_Fields>;
};


/** aggregate fields of "matches" */
export type Matches_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Matches_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "matches" */
export type Matches_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Matches_Max_Order_By>;
  min?: InputMaybe<Matches_Min_Order_By>;
};

/** input type for inserting array relation for remote table "matches" */
export type Matches_Arr_Rel_Insert_Input = {
  data: Array<Matches_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Matches_On_Conflict>;
};

/** Boolean expression to filter rows from the table "matches". All fields are combined with a logical 'AND'. */
export type Matches_Bool_Exp = {
  _and?: InputMaybe<Array<Matches_Bool_Exp>>;
  _not?: InputMaybe<Matches_Bool_Exp>;
  _or?: InputMaybe<Array<Matches_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_aborted?: InputMaybe<Boolean_Comparison_Exp>;
  match_players?: InputMaybe<Match_Players_Bool_Exp>;
  match_players_aggregate?: InputMaybe<Match_Players_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  room?: InputMaybe<Rooms_Bool_Exp>;
  room_id?: InputMaybe<Uuid_Comparison_Exp>;
  start_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "matches" */
export enum Matches_Constraint {
  /** unique or primary key constraint on columns "id" */
  MatchesPkey = 'matches_pkey'
}

/** input type for inserting data into table "matches" */
export type Matches_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_aborted?: InputMaybe<Scalars['Boolean']['input']>;
  match_players?: InputMaybe<Match_Players_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  room?: InputMaybe<Rooms_Obj_Rel_Insert_Input>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Matches_Max_Fields = {
  __typename?: 'matches_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "matches" */
export type Matches_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Matches_Min_Fields = {
  __typename?: 'matches_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "matches" */
export type Matches_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "matches" */
export type Matches_Mutation_Response = {
  __typename?: 'matches_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Matches>;
};

/** input type for inserting object relation for remote table "matches" */
export type Matches_Obj_Rel_Insert_Input = {
  data: Matches_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Matches_On_Conflict>;
};

/** on_conflict condition type for table "matches" */
export type Matches_On_Conflict = {
  constraint: Matches_Constraint;
  update_columns?: Array<Matches_Update_Column>;
  where?: InputMaybe<Matches_Bool_Exp>;
};

/** Ordering options when selecting data from "matches". */
export type Matches_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_aborted?: InputMaybe<Order_By>;
  match_players_aggregate?: InputMaybe<Match_Players_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  room?: InputMaybe<Rooms_Order_By>;
  room_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: matches */
export type Matches_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "matches" */
export enum Matches_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  IsAborted = 'is_aborted',
  /** column name */
  Name = 'name',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "matches_aggregate_bool_exp_bool_and_arguments_columns" columns of table "matches" */
export enum Matches_Select_Column_Matches_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsAborted = 'is_aborted'
}

/** select "matches_aggregate_bool_exp_bool_or_arguments_columns" columns of table "matches" */
export enum Matches_Select_Column_Matches_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsAborted = 'is_aborted'
}

/** input type for updating data in table "matches" */
export type Matches_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_aborted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "matches" */
export type Matches_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Matches_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Matches_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_aborted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "matches" */
export enum Matches_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  IsAborted = 'is_aborted',
  /** column name */
  Name = 'name',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Matches_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Matches_Set_Input>;
  /** filter the rows which have to be updated */
  where: Matches_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "match_players" */
  delete_match_players?: Maybe<Match_Players_Mutation_Response>;
  /** delete single row from the table: "match_players" */
  delete_match_players_by_pk?: Maybe<Match_Players>;
  /** delete data from the table: "matches" */
  delete_matches?: Maybe<Matches_Mutation_Response>;
  /** delete single row from the table: "matches" */
  delete_matches_by_pk?: Maybe<Matches>;
  /** delete data from the table: "person_niconico_accounts" */
  delete_person_niconico_accounts?: Maybe<Person_Niconico_Accounts_Mutation_Response>;
  /** delete single row from the table: "person_niconico_accounts" */
  delete_person_niconico_accounts_by_pk?: Maybe<Person_Niconico_Accounts>;
  /** delete data from the table: "person_niconico_communities" */
  delete_person_niconico_communities?: Maybe<Person_Niconico_Communities_Mutation_Response>;
  /** delete single row from the table: "person_niconico_communities" */
  delete_person_niconico_communities_by_pk?: Maybe<Person_Niconico_Communities>;
  /** delete data from the table: "person_twitter_accounts" */
  delete_person_twitter_accounts?: Maybe<Person_Twitter_Accounts_Mutation_Response>;
  /** delete single row from the table: "person_twitter_accounts" */
  delete_person_twitter_accounts_by_pk?: Maybe<Person_Twitter_Accounts>;
  /** delete data from the table: "person_youtube_channels" */
  delete_person_youtube_channels?: Maybe<Person_Youtube_Channels_Mutation_Response>;
  /** delete single row from the table: "person_youtube_channels" */
  delete_person_youtube_channels_by_pk?: Maybe<Person_Youtube_Channels>;
  /** delete data from the table: "persons" */
  delete_persons?: Maybe<Persons_Mutation_Response>;
  /** delete single row from the table: "persons" */
  delete_persons_by_pk?: Maybe<Persons>;
  /** delete data from the table: "room_persons" */
  delete_room_persons?: Maybe<Room_Persons_Mutation_Response>;
  /** delete single row from the table: "room_persons" */
  delete_room_persons_by_pk?: Maybe<Room_Persons>;
  /** delete data from the table: "room_twitter_announcements" */
  delete_room_twitter_announcements?: Maybe<Room_Twitter_Announcements_Mutation_Response>;
  /** delete single row from the table: "room_twitter_announcements" */
  delete_room_twitter_announcements_by_pk?: Maybe<Room_Twitter_Announcements>;
  /** delete data from the table: "room_youtube_lives" */
  delete_room_youtube_lives?: Maybe<Room_Youtube_Lives_Mutation_Response>;
  /** delete single row from the table: "room_youtube_lives" */
  delete_room_youtube_lives_by_pk?: Maybe<Room_Youtube_Lives>;
  /** delete data from the table: "rooms" */
  delete_rooms?: Maybe<Rooms_Mutation_Response>;
  /** delete single row from the table: "rooms" */
  delete_rooms_by_pk?: Maybe<Rooms>;
  /** insert data into the table: "match_players" */
  insert_match_players?: Maybe<Match_Players_Mutation_Response>;
  /** insert a single row into the table: "match_players" */
  insert_match_players_one?: Maybe<Match_Players>;
  /** insert data into the table: "matches" */
  insert_matches?: Maybe<Matches_Mutation_Response>;
  /** insert a single row into the table: "matches" */
  insert_matches_one?: Maybe<Matches>;
  /** insert data into the table: "person_niconico_accounts" */
  insert_person_niconico_accounts?: Maybe<Person_Niconico_Accounts_Mutation_Response>;
  /** insert a single row into the table: "person_niconico_accounts" */
  insert_person_niconico_accounts_one?: Maybe<Person_Niconico_Accounts>;
  /** insert data into the table: "person_niconico_communities" */
  insert_person_niconico_communities?: Maybe<Person_Niconico_Communities_Mutation_Response>;
  /** insert a single row into the table: "person_niconico_communities" */
  insert_person_niconico_communities_one?: Maybe<Person_Niconico_Communities>;
  /** insert data into the table: "person_twitter_accounts" */
  insert_person_twitter_accounts?: Maybe<Person_Twitter_Accounts_Mutation_Response>;
  /** insert a single row into the table: "person_twitter_accounts" */
  insert_person_twitter_accounts_one?: Maybe<Person_Twitter_Accounts>;
  /** insert data into the table: "person_youtube_channels" */
  insert_person_youtube_channels?: Maybe<Person_Youtube_Channels_Mutation_Response>;
  /** insert a single row into the table: "person_youtube_channels" */
  insert_person_youtube_channels_one?: Maybe<Person_Youtube_Channels>;
  /** insert data into the table: "persons" */
  insert_persons?: Maybe<Persons_Mutation_Response>;
  /** insert a single row into the table: "persons" */
  insert_persons_one?: Maybe<Persons>;
  /** insert data into the table: "room_persons" */
  insert_room_persons?: Maybe<Room_Persons_Mutation_Response>;
  /** insert a single row into the table: "room_persons" */
  insert_room_persons_one?: Maybe<Room_Persons>;
  /** insert data into the table: "room_twitter_announcements" */
  insert_room_twitter_announcements?: Maybe<Room_Twitter_Announcements_Mutation_Response>;
  /** insert a single row into the table: "room_twitter_announcements" */
  insert_room_twitter_announcements_one?: Maybe<Room_Twitter_Announcements>;
  /** insert data into the table: "room_youtube_lives" */
  insert_room_youtube_lives?: Maybe<Room_Youtube_Lives_Mutation_Response>;
  /** insert a single row into the table: "room_youtube_lives" */
  insert_room_youtube_lives_one?: Maybe<Room_Youtube_Lives>;
  /** insert data into the table: "rooms" */
  insert_rooms?: Maybe<Rooms_Mutation_Response>;
  /** insert a single row into the table: "rooms" */
  insert_rooms_one?: Maybe<Rooms>;
  /** update data of the table: "match_players" */
  update_match_players?: Maybe<Match_Players_Mutation_Response>;
  /** update single row of the table: "match_players" */
  update_match_players_by_pk?: Maybe<Match_Players>;
  /** update multiples rows of table: "match_players" */
  update_match_players_many?: Maybe<Array<Maybe<Match_Players_Mutation_Response>>>;
  /** update data of the table: "matches" */
  update_matches?: Maybe<Matches_Mutation_Response>;
  /** update single row of the table: "matches" */
  update_matches_by_pk?: Maybe<Matches>;
  /** update multiples rows of table: "matches" */
  update_matches_many?: Maybe<Array<Maybe<Matches_Mutation_Response>>>;
  /** update data of the table: "person_niconico_accounts" */
  update_person_niconico_accounts?: Maybe<Person_Niconico_Accounts_Mutation_Response>;
  /** update single row of the table: "person_niconico_accounts" */
  update_person_niconico_accounts_by_pk?: Maybe<Person_Niconico_Accounts>;
  /** update multiples rows of table: "person_niconico_accounts" */
  update_person_niconico_accounts_many?: Maybe<Array<Maybe<Person_Niconico_Accounts_Mutation_Response>>>;
  /** update data of the table: "person_niconico_communities" */
  update_person_niconico_communities?: Maybe<Person_Niconico_Communities_Mutation_Response>;
  /** update single row of the table: "person_niconico_communities" */
  update_person_niconico_communities_by_pk?: Maybe<Person_Niconico_Communities>;
  /** update multiples rows of table: "person_niconico_communities" */
  update_person_niconico_communities_many?: Maybe<Array<Maybe<Person_Niconico_Communities_Mutation_Response>>>;
  /** update data of the table: "person_twitter_accounts" */
  update_person_twitter_accounts?: Maybe<Person_Twitter_Accounts_Mutation_Response>;
  /** update single row of the table: "person_twitter_accounts" */
  update_person_twitter_accounts_by_pk?: Maybe<Person_Twitter_Accounts>;
  /** update multiples rows of table: "person_twitter_accounts" */
  update_person_twitter_accounts_many?: Maybe<Array<Maybe<Person_Twitter_Accounts_Mutation_Response>>>;
  /** update data of the table: "person_youtube_channels" */
  update_person_youtube_channels?: Maybe<Person_Youtube_Channels_Mutation_Response>;
  /** update single row of the table: "person_youtube_channels" */
  update_person_youtube_channels_by_pk?: Maybe<Person_Youtube_Channels>;
  /** update multiples rows of table: "person_youtube_channels" */
  update_person_youtube_channels_many?: Maybe<Array<Maybe<Person_Youtube_Channels_Mutation_Response>>>;
  /** update data of the table: "persons" */
  update_persons?: Maybe<Persons_Mutation_Response>;
  /** update single row of the table: "persons" */
  update_persons_by_pk?: Maybe<Persons>;
  /** update multiples rows of table: "persons" */
  update_persons_many?: Maybe<Array<Maybe<Persons_Mutation_Response>>>;
  /** update data of the table: "room_persons" */
  update_room_persons?: Maybe<Room_Persons_Mutation_Response>;
  /** update single row of the table: "room_persons" */
  update_room_persons_by_pk?: Maybe<Room_Persons>;
  /** update multiples rows of table: "room_persons" */
  update_room_persons_many?: Maybe<Array<Maybe<Room_Persons_Mutation_Response>>>;
  /** update data of the table: "room_twitter_announcements" */
  update_room_twitter_announcements?: Maybe<Room_Twitter_Announcements_Mutation_Response>;
  /** update single row of the table: "room_twitter_announcements" */
  update_room_twitter_announcements_by_pk?: Maybe<Room_Twitter_Announcements>;
  /** update multiples rows of table: "room_twitter_announcements" */
  update_room_twitter_announcements_many?: Maybe<Array<Maybe<Room_Twitter_Announcements_Mutation_Response>>>;
  /** update data of the table: "room_youtube_lives" */
  update_room_youtube_lives?: Maybe<Room_Youtube_Lives_Mutation_Response>;
  /** update single row of the table: "room_youtube_lives" */
  update_room_youtube_lives_by_pk?: Maybe<Room_Youtube_Lives>;
  /** update multiples rows of table: "room_youtube_lives" */
  update_room_youtube_lives_many?: Maybe<Array<Maybe<Room_Youtube_Lives_Mutation_Response>>>;
  /** update data of the table: "rooms" */
  update_rooms?: Maybe<Rooms_Mutation_Response>;
  /** update single row of the table: "rooms" */
  update_rooms_by_pk?: Maybe<Rooms>;
  /** update multiples rows of table: "rooms" */
  update_rooms_many?: Maybe<Array<Maybe<Rooms_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Match_PlayersArgs = {
  where: Match_Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Match_Players_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MatchesArgs = {
  where: Matches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Matches_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Person_Niconico_AccountsArgs = {
  where: Person_Niconico_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_Niconico_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Person_Niconico_CommunitiesArgs = {
  where: Person_Niconico_Communities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_Niconico_Communities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Person_Twitter_AccountsArgs = {
  where: Person_Twitter_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_Twitter_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Person_Youtube_ChannelsArgs = {
  where: Person_Youtube_Channels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_Youtube_Channels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PersonsArgs = {
  where: Persons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Persons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Room_PersonsArgs = {
  where: Room_Persons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Room_Persons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Room_Twitter_AnnouncementsArgs = {
  where: Room_Twitter_Announcements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Room_Twitter_Announcements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Room_Youtube_LivesArgs = {
  where: Room_Youtube_Lives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Room_Youtube_Lives_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RoomsArgs = {
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Match_PlayersArgs = {
  objects: Array<Match_Players_Insert_Input>;
  on_conflict?: InputMaybe<Match_Players_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Match_Players_OneArgs = {
  object: Match_Players_Insert_Input;
  on_conflict?: InputMaybe<Match_Players_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MatchesArgs = {
  objects: Array<Matches_Insert_Input>;
  on_conflict?: InputMaybe<Matches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Matches_OneArgs = {
  object: Matches_Insert_Input;
  on_conflict?: InputMaybe<Matches_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Niconico_AccountsArgs = {
  objects: Array<Person_Niconico_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Person_Niconico_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Niconico_Accounts_OneArgs = {
  object: Person_Niconico_Accounts_Insert_Input;
  on_conflict?: InputMaybe<Person_Niconico_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Niconico_CommunitiesArgs = {
  objects: Array<Person_Niconico_Communities_Insert_Input>;
  on_conflict?: InputMaybe<Person_Niconico_Communities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Niconico_Communities_OneArgs = {
  object: Person_Niconico_Communities_Insert_Input;
  on_conflict?: InputMaybe<Person_Niconico_Communities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Twitter_AccountsArgs = {
  objects: Array<Person_Twitter_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Person_Twitter_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Twitter_Accounts_OneArgs = {
  object: Person_Twitter_Accounts_Insert_Input;
  on_conflict?: InputMaybe<Person_Twitter_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Youtube_ChannelsArgs = {
  objects: Array<Person_Youtube_Channels_Insert_Input>;
  on_conflict?: InputMaybe<Person_Youtube_Channels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_Youtube_Channels_OneArgs = {
  object: Person_Youtube_Channels_Insert_Input;
  on_conflict?: InputMaybe<Person_Youtube_Channels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PersonsArgs = {
  objects: Array<Persons_Insert_Input>;
  on_conflict?: InputMaybe<Persons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Persons_OneArgs = {
  object: Persons_Insert_Input;
  on_conflict?: InputMaybe<Persons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_PersonsArgs = {
  objects: Array<Room_Persons_Insert_Input>;
  on_conflict?: InputMaybe<Room_Persons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_Persons_OneArgs = {
  object: Room_Persons_Insert_Input;
  on_conflict?: InputMaybe<Room_Persons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_Twitter_AnnouncementsArgs = {
  objects: Array<Room_Twitter_Announcements_Insert_Input>;
  on_conflict?: InputMaybe<Room_Twitter_Announcements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_Twitter_Announcements_OneArgs = {
  object: Room_Twitter_Announcements_Insert_Input;
  on_conflict?: InputMaybe<Room_Twitter_Announcements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_Youtube_LivesArgs = {
  objects: Array<Room_Youtube_Lives_Insert_Input>;
  on_conflict?: InputMaybe<Room_Youtube_Lives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Room_Youtube_Lives_OneArgs = {
  object: Room_Youtube_Lives_Insert_Input;
  on_conflict?: InputMaybe<Room_Youtube_Lives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoomsArgs = {
  objects: Array<Rooms_Insert_Input>;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rooms_OneArgs = {
  object: Rooms_Insert_Input;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Match_PlayersArgs = {
  _set?: InputMaybe<Match_Players_Set_Input>;
  where: Match_Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Match_Players_By_PkArgs = {
  _set?: InputMaybe<Match_Players_Set_Input>;
  pk_columns: Match_Players_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Match_Players_ManyArgs = {
  updates: Array<Match_Players_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MatchesArgs = {
  _set?: InputMaybe<Matches_Set_Input>;
  where: Matches_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Matches_By_PkArgs = {
  _set?: InputMaybe<Matches_Set_Input>;
  pk_columns: Matches_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Matches_ManyArgs = {
  updates: Array<Matches_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Niconico_AccountsArgs = {
  _inc?: InputMaybe<Person_Niconico_Accounts_Inc_Input>;
  _set?: InputMaybe<Person_Niconico_Accounts_Set_Input>;
  where: Person_Niconico_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Niconico_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Person_Niconico_Accounts_Inc_Input>;
  _set?: InputMaybe<Person_Niconico_Accounts_Set_Input>;
  pk_columns: Person_Niconico_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Niconico_Accounts_ManyArgs = {
  updates: Array<Person_Niconico_Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Niconico_CommunitiesArgs = {
  _inc?: InputMaybe<Person_Niconico_Communities_Inc_Input>;
  _set?: InputMaybe<Person_Niconico_Communities_Set_Input>;
  where: Person_Niconico_Communities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Niconico_Communities_By_PkArgs = {
  _inc?: InputMaybe<Person_Niconico_Communities_Inc_Input>;
  _set?: InputMaybe<Person_Niconico_Communities_Set_Input>;
  pk_columns: Person_Niconico_Communities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Niconico_Communities_ManyArgs = {
  updates: Array<Person_Niconico_Communities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Twitter_AccountsArgs = {
  _set?: InputMaybe<Person_Twitter_Accounts_Set_Input>;
  where: Person_Twitter_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Twitter_Accounts_By_PkArgs = {
  _set?: InputMaybe<Person_Twitter_Accounts_Set_Input>;
  pk_columns: Person_Twitter_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Twitter_Accounts_ManyArgs = {
  updates: Array<Person_Twitter_Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Youtube_ChannelsArgs = {
  _set?: InputMaybe<Person_Youtube_Channels_Set_Input>;
  where: Person_Youtube_Channels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Youtube_Channels_By_PkArgs = {
  _set?: InputMaybe<Person_Youtube_Channels_Set_Input>;
  pk_columns: Person_Youtube_Channels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Person_Youtube_Channels_ManyArgs = {
  updates: Array<Person_Youtube_Channels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PersonsArgs = {
  _set?: InputMaybe<Persons_Set_Input>;
  where: Persons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Persons_By_PkArgs = {
  _set?: InputMaybe<Persons_Set_Input>;
  pk_columns: Persons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Persons_ManyArgs = {
  updates: Array<Persons_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Room_PersonsArgs = {
  _set?: InputMaybe<Room_Persons_Set_Input>;
  where: Room_Persons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Room_Persons_By_PkArgs = {
  _set?: InputMaybe<Room_Persons_Set_Input>;
  pk_columns: Room_Persons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Room_Persons_ManyArgs = {
  updates: Array<Room_Persons_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Room_Twitter_AnnouncementsArgs = {
  _inc?: InputMaybe<Room_Twitter_Announcements_Inc_Input>;
  _set?: InputMaybe<Room_Twitter_Announcements_Set_Input>;
  where: Room_Twitter_Announcements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Room_Twitter_Announcements_By_PkArgs = {
  _inc?: InputMaybe<Room_Twitter_Announcements_Inc_Input>;
  _set?: InputMaybe<Room_Twitter_Announcements_Set_Input>;
  pk_columns: Room_Twitter_Announcements_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Room_Twitter_Announcements_ManyArgs = {
  updates: Array<Room_Twitter_Announcements_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Room_Youtube_LivesArgs = {
  _set?: InputMaybe<Room_Youtube_Lives_Set_Input>;
  where: Room_Youtube_Lives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Room_Youtube_Lives_By_PkArgs = {
  _set?: InputMaybe<Room_Youtube_Lives_Set_Input>;
  pk_columns: Room_Youtube_Lives_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Room_Youtube_Lives_ManyArgs = {
  updates: Array<Room_Youtube_Lives_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RoomsArgs = {
  _set?: InputMaybe<Rooms_Set_Input>;
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rooms_By_PkArgs = {
  _set?: InputMaybe<Rooms_Set_Input>;
  pk_columns: Rooms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rooms_ManyArgs = {
  updates: Array<Rooms_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "person_niconico_accounts" */
export type Person_Niconico_Accounts = {
  __typename?: 'person_niconico_accounts';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  niconico_account_id: Scalars['Int']['output'];
  /** An object relationship */
  person: Persons;
  person_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "person_niconico_accounts" */
export type Person_Niconico_Accounts_Aggregate = {
  __typename?: 'person_niconico_accounts_aggregate';
  aggregate?: Maybe<Person_Niconico_Accounts_Aggregate_Fields>;
  nodes: Array<Person_Niconico_Accounts>;
};

export type Person_Niconico_Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Person_Niconico_Accounts_Aggregate_Bool_Exp_Count>;
};

export type Person_Niconico_Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "person_niconico_accounts" */
export type Person_Niconico_Accounts_Aggregate_Fields = {
  __typename?: 'person_niconico_accounts_aggregate_fields';
  avg?: Maybe<Person_Niconico_Accounts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Person_Niconico_Accounts_Max_Fields>;
  min?: Maybe<Person_Niconico_Accounts_Min_Fields>;
  stddev?: Maybe<Person_Niconico_Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Person_Niconico_Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Person_Niconico_Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Person_Niconico_Accounts_Sum_Fields>;
  var_pop?: Maybe<Person_Niconico_Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Person_Niconico_Accounts_Var_Samp_Fields>;
  variance?: Maybe<Person_Niconico_Accounts_Variance_Fields>;
};


/** aggregate fields of "person_niconico_accounts" */
export type Person_Niconico_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Person_Niconico_Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Person_Niconico_Accounts_Max_Order_By>;
  min?: InputMaybe<Person_Niconico_Accounts_Min_Order_By>;
  stddev?: InputMaybe<Person_Niconico_Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Person_Niconico_Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Person_Niconico_Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Person_Niconico_Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<Person_Niconico_Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Person_Niconico_Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<Person_Niconico_Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Person_Niconico_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Person_Niconico_Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Person_Niconico_Accounts_Avg_Fields = {
  __typename?: 'person_niconico_accounts_avg_fields';
  niconico_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Avg_Order_By = {
  niconico_account_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "person_niconico_accounts". All fields are combined with a logical 'AND'. */
export type Person_Niconico_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Niconico_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Niconico_Accounts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  niconico_account_id?: InputMaybe<Int_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "person_niconico_accounts" */
export enum Person_Niconico_Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemberNiconicoAccountsPkey = 'member_niconico_accounts_pkey',
  /** unique or primary key constraint on columns "niconico_account_id", "person_id" */
  PersonNiconicoAccountsPersonIdNiconicoAccountIdKey = 'person_niconico_accounts_person_id_niconico_account_id_key'
}

/** input type for incrementing numeric columns in table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Inc_Input = {
  niconico_account_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  niconico_account_id?: InputMaybe<Scalars['Int']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Person_Niconico_Accounts_Max_Fields = {
  __typename?: 'person_niconico_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  niconico_account_id?: Maybe<Scalars['Int']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  niconico_account_id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Person_Niconico_Accounts_Min_Fields = {
  __typename?: 'person_niconico_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  niconico_account_id?: Maybe<Scalars['Int']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  niconico_account_id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Mutation_Response = {
  __typename?: 'person_niconico_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Person_Niconico_Accounts>;
};

/** on_conflict condition type for table "person_niconico_accounts" */
export type Person_Niconico_Accounts_On_Conflict = {
  constraint: Person_Niconico_Accounts_Constraint;
  update_columns?: Array<Person_Niconico_Accounts_Update_Column>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "person_niconico_accounts". */
export type Person_Niconico_Accounts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  niconico_account_id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person_niconico_accounts */
export type Person_Niconico_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "person_niconico_accounts" */
export enum Person_Niconico_Accounts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NiconicoAccountId = 'niconico_account_id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  niconico_account_id?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Person_Niconico_Accounts_Stddev_Fields = {
  __typename?: 'person_niconico_accounts_stddev_fields';
  niconico_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Stddev_Order_By = {
  niconico_account_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Person_Niconico_Accounts_Stddev_Pop_Fields = {
  __typename?: 'person_niconico_accounts_stddev_pop_fields';
  niconico_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Stddev_Pop_Order_By = {
  niconico_account_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Person_Niconico_Accounts_Stddev_Samp_Fields = {
  __typename?: 'person_niconico_accounts_stddev_samp_fields';
  niconico_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Stddev_Samp_Order_By = {
  niconico_account_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Person_Niconico_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Niconico_Accounts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  niconico_account_id?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Person_Niconico_Accounts_Sum_Fields = {
  __typename?: 'person_niconico_accounts_sum_fields';
  niconico_account_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Sum_Order_By = {
  niconico_account_id?: InputMaybe<Order_By>;
};

/** update columns of table "person_niconico_accounts" */
export enum Person_Niconico_Accounts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NiconicoAccountId = 'niconico_account_id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Person_Niconico_Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Person_Niconico_Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Person_Niconico_Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Person_Niconico_Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Person_Niconico_Accounts_Var_Pop_Fields = {
  __typename?: 'person_niconico_accounts_var_pop_fields';
  niconico_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Var_Pop_Order_By = {
  niconico_account_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Person_Niconico_Accounts_Var_Samp_Fields = {
  __typename?: 'person_niconico_accounts_var_samp_fields';
  niconico_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Var_Samp_Order_By = {
  niconico_account_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Person_Niconico_Accounts_Variance_Fields = {
  __typename?: 'person_niconico_accounts_variance_fields';
  niconico_account_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "person_niconico_accounts" */
export type Person_Niconico_Accounts_Variance_Order_By = {
  niconico_account_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "person_niconico_communities" */
export type Person_Niconico_Communities = {
  __typename?: 'person_niconico_communities';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  niconico_community_id: Scalars['Int']['output'];
  /** An object relationship */
  person: Persons;
  person_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "person_niconico_communities" */
export type Person_Niconico_Communities_Aggregate = {
  __typename?: 'person_niconico_communities_aggregate';
  aggregate?: Maybe<Person_Niconico_Communities_Aggregate_Fields>;
  nodes: Array<Person_Niconico_Communities>;
};

export type Person_Niconico_Communities_Aggregate_Bool_Exp = {
  count?: InputMaybe<Person_Niconico_Communities_Aggregate_Bool_Exp_Count>;
};

export type Person_Niconico_Communities_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "person_niconico_communities" */
export type Person_Niconico_Communities_Aggregate_Fields = {
  __typename?: 'person_niconico_communities_aggregate_fields';
  avg?: Maybe<Person_Niconico_Communities_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Person_Niconico_Communities_Max_Fields>;
  min?: Maybe<Person_Niconico_Communities_Min_Fields>;
  stddev?: Maybe<Person_Niconico_Communities_Stddev_Fields>;
  stddev_pop?: Maybe<Person_Niconico_Communities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Person_Niconico_Communities_Stddev_Samp_Fields>;
  sum?: Maybe<Person_Niconico_Communities_Sum_Fields>;
  var_pop?: Maybe<Person_Niconico_Communities_Var_Pop_Fields>;
  var_samp?: Maybe<Person_Niconico_Communities_Var_Samp_Fields>;
  variance?: Maybe<Person_Niconico_Communities_Variance_Fields>;
};


/** aggregate fields of "person_niconico_communities" */
export type Person_Niconico_Communities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "person_niconico_communities" */
export type Person_Niconico_Communities_Aggregate_Order_By = {
  avg?: InputMaybe<Person_Niconico_Communities_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Person_Niconico_Communities_Max_Order_By>;
  min?: InputMaybe<Person_Niconico_Communities_Min_Order_By>;
  stddev?: InputMaybe<Person_Niconico_Communities_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Person_Niconico_Communities_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Person_Niconico_Communities_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Person_Niconico_Communities_Sum_Order_By>;
  var_pop?: InputMaybe<Person_Niconico_Communities_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Person_Niconico_Communities_Var_Samp_Order_By>;
  variance?: InputMaybe<Person_Niconico_Communities_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "person_niconico_communities" */
export type Person_Niconico_Communities_Arr_Rel_Insert_Input = {
  data: Array<Person_Niconico_Communities_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Person_Niconico_Communities_On_Conflict>;
};

/** aggregate avg on columns */
export type Person_Niconico_Communities_Avg_Fields = {
  __typename?: 'person_niconico_communities_avg_fields';
  niconico_community_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "person_niconico_communities" */
export type Person_Niconico_Communities_Avg_Order_By = {
  niconico_community_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "person_niconico_communities". All fields are combined with a logical 'AND'. */
export type Person_Niconico_Communities_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Niconico_Communities_Bool_Exp>>;
  _not?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Niconico_Communities_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  niconico_community_id?: InputMaybe<Int_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "person_niconico_communities" */
export enum Person_Niconico_Communities_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemberNiconicoCommunitiesPkey = 'member_niconico_communities_pkey',
  /** unique or primary key constraint on columns "niconico_community_id", "person_id" */
  PersonNiconicoCommunitiesPersonIdNiconicoCommunityIdKey = 'person_niconico_communities_person_id_niconico_community_id_key'
}

/** input type for incrementing numeric columns in table "person_niconico_communities" */
export type Person_Niconico_Communities_Inc_Input = {
  niconico_community_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "person_niconico_communities" */
export type Person_Niconico_Communities_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  niconico_community_id?: InputMaybe<Scalars['Int']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Person_Niconico_Communities_Max_Fields = {
  __typename?: 'person_niconico_communities_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  niconico_community_id?: Maybe<Scalars['Int']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "person_niconico_communities" */
export type Person_Niconico_Communities_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  niconico_community_id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Person_Niconico_Communities_Min_Fields = {
  __typename?: 'person_niconico_communities_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  niconico_community_id?: Maybe<Scalars['Int']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "person_niconico_communities" */
export type Person_Niconico_Communities_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  niconico_community_id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "person_niconico_communities" */
export type Person_Niconico_Communities_Mutation_Response = {
  __typename?: 'person_niconico_communities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Person_Niconico_Communities>;
};

/** on_conflict condition type for table "person_niconico_communities" */
export type Person_Niconico_Communities_On_Conflict = {
  constraint: Person_Niconico_Communities_Constraint;
  update_columns?: Array<Person_Niconico_Communities_Update_Column>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};

/** Ordering options when selecting data from "person_niconico_communities". */
export type Person_Niconico_Communities_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  niconico_community_id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person_niconico_communities */
export type Person_Niconico_Communities_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "person_niconico_communities" */
export enum Person_Niconico_Communities_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NiconicoCommunityId = 'niconico_community_id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "person_niconico_communities" */
export type Person_Niconico_Communities_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  niconico_community_id?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Person_Niconico_Communities_Stddev_Fields = {
  __typename?: 'person_niconico_communities_stddev_fields';
  niconico_community_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "person_niconico_communities" */
export type Person_Niconico_Communities_Stddev_Order_By = {
  niconico_community_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Person_Niconico_Communities_Stddev_Pop_Fields = {
  __typename?: 'person_niconico_communities_stddev_pop_fields';
  niconico_community_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "person_niconico_communities" */
export type Person_Niconico_Communities_Stddev_Pop_Order_By = {
  niconico_community_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Person_Niconico_Communities_Stddev_Samp_Fields = {
  __typename?: 'person_niconico_communities_stddev_samp_fields';
  niconico_community_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "person_niconico_communities" */
export type Person_Niconico_Communities_Stddev_Samp_Order_By = {
  niconico_community_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "person_niconico_communities" */
export type Person_Niconico_Communities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Person_Niconico_Communities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Niconico_Communities_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  niconico_community_id?: InputMaybe<Scalars['Int']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Person_Niconico_Communities_Sum_Fields = {
  __typename?: 'person_niconico_communities_sum_fields';
  niconico_community_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "person_niconico_communities" */
export type Person_Niconico_Communities_Sum_Order_By = {
  niconico_community_id?: InputMaybe<Order_By>;
};

/** update columns of table "person_niconico_communities" */
export enum Person_Niconico_Communities_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NiconicoCommunityId = 'niconico_community_id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Person_Niconico_Communities_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Person_Niconico_Communities_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Person_Niconico_Communities_Set_Input>;
  /** filter the rows which have to be updated */
  where: Person_Niconico_Communities_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Person_Niconico_Communities_Var_Pop_Fields = {
  __typename?: 'person_niconico_communities_var_pop_fields';
  niconico_community_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "person_niconico_communities" */
export type Person_Niconico_Communities_Var_Pop_Order_By = {
  niconico_community_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Person_Niconico_Communities_Var_Samp_Fields = {
  __typename?: 'person_niconico_communities_var_samp_fields';
  niconico_community_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "person_niconico_communities" */
export type Person_Niconico_Communities_Var_Samp_Order_By = {
  niconico_community_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Person_Niconico_Communities_Variance_Fields = {
  __typename?: 'person_niconico_communities_variance_fields';
  niconico_community_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "person_niconico_communities" */
export type Person_Niconico_Communities_Variance_Order_By = {
  niconico_community_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "person_twitter_accounts" */
export type Person_Twitter_Accounts = {
  __typename?: 'person_twitter_accounts';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  person: Persons;
  person_id: Scalars['uuid']['output'];
  twitter_screen_name: Scalars['String']['output'];
  twitter_user_id?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "person_twitter_accounts" */
export type Person_Twitter_Accounts_Aggregate = {
  __typename?: 'person_twitter_accounts_aggregate';
  aggregate?: Maybe<Person_Twitter_Accounts_Aggregate_Fields>;
  nodes: Array<Person_Twitter_Accounts>;
};

export type Person_Twitter_Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Person_Twitter_Accounts_Aggregate_Bool_Exp_Count>;
};

export type Person_Twitter_Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "person_twitter_accounts" */
export type Person_Twitter_Accounts_Aggregate_Fields = {
  __typename?: 'person_twitter_accounts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Person_Twitter_Accounts_Max_Fields>;
  min?: Maybe<Person_Twitter_Accounts_Min_Fields>;
};


/** aggregate fields of "person_twitter_accounts" */
export type Person_Twitter_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Person_Twitter_Accounts_Max_Order_By>;
  min?: InputMaybe<Person_Twitter_Accounts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Person_Twitter_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Person_Twitter_Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "person_twitter_accounts". All fields are combined with a logical 'AND'. */
export type Person_Twitter_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Twitter_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Twitter_Accounts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  twitter_screen_name?: InputMaybe<String_Comparison_Exp>;
  twitter_user_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "person_twitter_accounts" */
export enum Person_Twitter_Accounts_Constraint {
  /** unique or primary key constraint on columns "twitter_screen_name", "person_id" */
  PersonTwitterAccountsPersonIdTwitterScreenNameKey = 'person_twitter_accounts_person_id_twitter_screen_name_key',
  /** unique or primary key constraint on columns "twitter_user_id", "person_id" */
  PersonTwitterAccountsPersonIdTwitterUserIdKey = 'person_twitter_accounts_person_id_twitter_user_id_key',
  /** unique or primary key constraint on columns "id" */
  PersonTwitterAccountsPkey = 'person_twitter_accounts_pkey'
}

/** input type for inserting data into table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  twitter_screen_name?: InputMaybe<Scalars['String']['input']>;
  twitter_user_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Person_Twitter_Accounts_Max_Fields = {
  __typename?: 'person_twitter_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  twitter_screen_name?: Maybe<Scalars['String']['output']>;
  twitter_user_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  twitter_screen_name?: InputMaybe<Order_By>;
  twitter_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Person_Twitter_Accounts_Min_Fields = {
  __typename?: 'person_twitter_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  twitter_screen_name?: Maybe<Scalars['String']['output']>;
  twitter_user_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  twitter_screen_name?: InputMaybe<Order_By>;
  twitter_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Mutation_Response = {
  __typename?: 'person_twitter_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Person_Twitter_Accounts>;
};

/** on_conflict condition type for table "person_twitter_accounts" */
export type Person_Twitter_Accounts_On_Conflict = {
  constraint: Person_Twitter_Accounts_Constraint;
  update_columns?: Array<Person_Twitter_Accounts_Update_Column>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "person_twitter_accounts". */
export type Person_Twitter_Accounts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  twitter_screen_name?: InputMaybe<Order_By>;
  twitter_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person_twitter_accounts */
export type Person_Twitter_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "person_twitter_accounts" */
export enum Person_Twitter_Accounts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  TwitterScreenName = 'twitter_screen_name',
  /** column name */
  TwitterUserId = 'twitter_user_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  twitter_screen_name?: InputMaybe<Scalars['String']['input']>;
  twitter_user_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "person_twitter_accounts" */
export type Person_Twitter_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Person_Twitter_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Twitter_Accounts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  twitter_screen_name?: InputMaybe<Scalars['String']['input']>;
  twitter_user_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "person_twitter_accounts" */
export enum Person_Twitter_Accounts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  TwitterScreenName = 'twitter_screen_name',
  /** column name */
  TwitterUserId = 'twitter_user_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Person_Twitter_Accounts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Person_Twitter_Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Person_Twitter_Accounts_Bool_Exp;
};

/** columns and relationships of "person_youtube_channels" */
export type Person_Youtube_Channels = {
  __typename?: 'person_youtube_channels';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  person: Persons;
  person_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  youtube_channel_handle?: Maybe<Scalars['String']['output']>;
  youtube_channel_id: Scalars['String']['output'];
};

/** aggregated selection of "person_youtube_channels" */
export type Person_Youtube_Channels_Aggregate = {
  __typename?: 'person_youtube_channels_aggregate';
  aggregate?: Maybe<Person_Youtube_Channels_Aggregate_Fields>;
  nodes: Array<Person_Youtube_Channels>;
};

export type Person_Youtube_Channels_Aggregate_Bool_Exp = {
  count?: InputMaybe<Person_Youtube_Channels_Aggregate_Bool_Exp_Count>;
};

export type Person_Youtube_Channels_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "person_youtube_channels" */
export type Person_Youtube_Channels_Aggregate_Fields = {
  __typename?: 'person_youtube_channels_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Person_Youtube_Channels_Max_Fields>;
  min?: Maybe<Person_Youtube_Channels_Min_Fields>;
};


/** aggregate fields of "person_youtube_channels" */
export type Person_Youtube_Channels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "person_youtube_channels" */
export type Person_Youtube_Channels_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Person_Youtube_Channels_Max_Order_By>;
  min?: InputMaybe<Person_Youtube_Channels_Min_Order_By>;
};

/** input type for inserting array relation for remote table "person_youtube_channels" */
export type Person_Youtube_Channels_Arr_Rel_Insert_Input = {
  data: Array<Person_Youtube_Channels_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Person_Youtube_Channels_On_Conflict>;
};

/** Boolean expression to filter rows from the table "person_youtube_channels". All fields are combined with a logical 'AND'. */
export type Person_Youtube_Channels_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Youtube_Channels_Bool_Exp>>;
  _not?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Youtube_Channels_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  youtube_channel_handle?: InputMaybe<String_Comparison_Exp>;
  youtube_channel_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "person_youtube_channels" */
export enum Person_Youtube_Channels_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemberYoutubeChannelsPkey = 'member_youtube_channels_pkey',
  /** unique or primary key constraint on columns "youtube_channel_handle", "person_id" */
  PersonYoutubeChannelsPersonIdYoutubeChannelHandleKey = 'person_youtube_channels_person_id_youtube_channel_handle_key',
  /** unique or primary key constraint on columns "youtube_channel_id", "person_id" */
  PersonYoutubeChannelsPersonIdYoutubeChannelIdKey = 'person_youtube_channels_person_id_youtube_channel_id_key'
}

/** input type for inserting data into table "person_youtube_channels" */
export type Person_Youtube_Channels_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_channel_handle?: InputMaybe<Scalars['String']['input']>;
  youtube_channel_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Person_Youtube_Channels_Max_Fields = {
  __typename?: 'person_youtube_channels_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  youtube_channel_handle?: Maybe<Scalars['String']['output']>;
  youtube_channel_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "person_youtube_channels" */
export type Person_Youtube_Channels_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_channel_handle?: InputMaybe<Order_By>;
  youtube_channel_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Person_Youtube_Channels_Min_Fields = {
  __typename?: 'person_youtube_channels_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  youtube_channel_handle?: Maybe<Scalars['String']['output']>;
  youtube_channel_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "person_youtube_channels" */
export type Person_Youtube_Channels_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_channel_handle?: InputMaybe<Order_By>;
  youtube_channel_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "person_youtube_channels" */
export type Person_Youtube_Channels_Mutation_Response = {
  __typename?: 'person_youtube_channels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Person_Youtube_Channels>;
};

/** on_conflict condition type for table "person_youtube_channels" */
export type Person_Youtube_Channels_On_Conflict = {
  constraint: Person_Youtube_Channels_Constraint;
  update_columns?: Array<Person_Youtube_Channels_Update_Column>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};

/** Ordering options when selecting data from "person_youtube_channels". */
export type Person_Youtube_Channels_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_channel_handle?: InputMaybe<Order_By>;
  youtube_channel_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person_youtube_channels */
export type Person_Youtube_Channels_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "person_youtube_channels" */
export enum Person_Youtube_Channels_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeChannelHandle = 'youtube_channel_handle',
  /** column name */
  YoutubeChannelId = 'youtube_channel_id'
}

/** input type for updating data in table "person_youtube_channels" */
export type Person_Youtube_Channels_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_channel_handle?: InputMaybe<Scalars['String']['input']>;
  youtube_channel_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "person_youtube_channels" */
export type Person_Youtube_Channels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Person_Youtube_Channels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Person_Youtube_Channels_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_channel_handle?: InputMaybe<Scalars['String']['input']>;
  youtube_channel_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "person_youtube_channels" */
export enum Person_Youtube_Channels_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeChannelHandle = 'youtube_channel_handle',
  /** column name */
  YoutubeChannelId = 'youtube_channel_id'
}

export type Person_Youtube_Channels_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Person_Youtube_Channels_Set_Input>;
  /** filter the rows which have to be updated */
  where: Person_Youtube_Channels_Bool_Exp;
};

/** columns and relationships of "persons" */
export type Persons = {
  __typename?: 'persons';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  match_players: Array<Match_Players>;
  /** An aggregate relationship */
  match_players_aggregate: Match_Players_Aggregate;
  name: Scalars['String']['output'];
  /** An array relationship */
  person_niconico_accounts: Array<Person_Niconico_Accounts>;
  /** An aggregate relationship */
  person_niconico_accounts_aggregate: Person_Niconico_Accounts_Aggregate;
  /** An array relationship */
  person_niconico_communities: Array<Person_Niconico_Communities>;
  /** An aggregate relationship */
  person_niconico_communities_aggregate: Person_Niconico_Communities_Aggregate;
  /** An array relationship */
  person_twitter_accounts: Array<Person_Twitter_Accounts>;
  /** An aggregate relationship */
  person_twitter_accounts_aggregate: Person_Twitter_Accounts_Aggregate;
  /** An array relationship */
  person_youtube_channels: Array<Person_Youtube_Channels>;
  /** An aggregate relationship */
  person_youtube_channels_aggregate: Person_Youtube_Channels_Aggregate;
  /** An array relationship */
  room_persons: Array<Room_Persons>;
  /** An aggregate relationship */
  room_persons_aggregate: Room_Persons_Aggregate;
  /** An array relationship */
  room_youtube_lives: Array<Room_Youtube_Lives>;
  /** An aggregate relationship */
  room_youtube_lives_aggregate: Room_Youtube_Lives_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "persons" */
export type PersonsMatch_PlayersArgs = {
  distinct_on?: InputMaybe<Array<Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Players_Order_By>>;
  where?: InputMaybe<Match_Players_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsMatch_Players_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Players_Order_By>>;
  where?: InputMaybe<Match_Players_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Niconico_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Niconico_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Niconico_CommunitiesArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Communities_Order_By>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Niconico_Communities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Communities_Order_By>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Twitter_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Twitter_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Youtube_ChannelsArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPerson_Youtube_Channels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsRoom_PersonsArgs = {
  distinct_on?: InputMaybe<Array<Room_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Persons_Order_By>>;
  where?: InputMaybe<Room_Persons_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsRoom_Persons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Persons_Order_By>>;
  where?: InputMaybe<Room_Persons_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsRoom_Youtube_LivesArgs = {
  distinct_on?: InputMaybe<Array<Room_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsRoom_Youtube_Lives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
};

/** aggregated selection of "persons" */
export type Persons_Aggregate = {
  __typename?: 'persons_aggregate';
  aggregate?: Maybe<Persons_Aggregate_Fields>;
  nodes: Array<Persons>;
};

/** aggregate fields of "persons" */
export type Persons_Aggregate_Fields = {
  __typename?: 'persons_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Persons_Max_Fields>;
  min?: Maybe<Persons_Min_Fields>;
};


/** aggregate fields of "persons" */
export type Persons_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Persons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "persons". All fields are combined with a logical 'AND'. */
export type Persons_Bool_Exp = {
  _and?: InputMaybe<Array<Persons_Bool_Exp>>;
  _not?: InputMaybe<Persons_Bool_Exp>;
  _or?: InputMaybe<Array<Persons_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  match_players?: InputMaybe<Match_Players_Bool_Exp>;
  match_players_aggregate?: InputMaybe<Match_Players_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  person_niconico_accounts?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
  person_niconico_accounts_aggregate?: InputMaybe<Person_Niconico_Accounts_Aggregate_Bool_Exp>;
  person_niconico_communities?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
  person_niconico_communities_aggregate?: InputMaybe<Person_Niconico_Communities_Aggregate_Bool_Exp>;
  person_twitter_accounts?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
  person_twitter_accounts_aggregate?: InputMaybe<Person_Twitter_Accounts_Aggregate_Bool_Exp>;
  person_youtube_channels?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
  person_youtube_channels_aggregate?: InputMaybe<Person_Youtube_Channels_Aggregate_Bool_Exp>;
  room_persons?: InputMaybe<Room_Persons_Bool_Exp>;
  room_persons_aggregate?: InputMaybe<Room_Persons_Aggregate_Bool_Exp>;
  room_youtube_lives?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
  room_youtube_lives_aggregate?: InputMaybe<Room_Youtube_Lives_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "persons" */
export enum Persons_Constraint {
  /** unique or primary key constraint on columns "id" */
  MembersPkey = 'members_pkey'
}

/** input type for inserting data into table "persons" */
export type Persons_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  match_players?: InputMaybe<Match_Players_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  person_niconico_accounts?: InputMaybe<Person_Niconico_Accounts_Arr_Rel_Insert_Input>;
  person_niconico_communities?: InputMaybe<Person_Niconico_Communities_Arr_Rel_Insert_Input>;
  person_twitter_accounts?: InputMaybe<Person_Twitter_Accounts_Arr_Rel_Insert_Input>;
  person_youtube_channels?: InputMaybe<Person_Youtube_Channels_Arr_Rel_Insert_Input>;
  room_persons?: InputMaybe<Room_Persons_Arr_Rel_Insert_Input>;
  room_youtube_lives?: InputMaybe<Room_Youtube_Lives_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Persons_Max_Fields = {
  __typename?: 'persons_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Persons_Min_Fields = {
  __typename?: 'persons_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "persons" */
export type Persons_Mutation_Response = {
  __typename?: 'persons_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Persons>;
};

/** input type for inserting object relation for remote table "persons" */
export type Persons_Obj_Rel_Insert_Input = {
  data: Persons_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Persons_On_Conflict>;
};

/** on_conflict condition type for table "persons" */
export type Persons_On_Conflict = {
  constraint: Persons_Constraint;
  update_columns?: Array<Persons_Update_Column>;
  where?: InputMaybe<Persons_Bool_Exp>;
};

/** Ordering options when selecting data from "persons". */
export type Persons_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  match_players_aggregate?: InputMaybe<Match_Players_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  person_niconico_accounts_aggregate?: InputMaybe<Person_Niconico_Accounts_Aggregate_Order_By>;
  person_niconico_communities_aggregate?: InputMaybe<Person_Niconico_Communities_Aggregate_Order_By>;
  person_twitter_accounts_aggregate?: InputMaybe<Person_Twitter_Accounts_Aggregate_Order_By>;
  person_youtube_channels_aggregate?: InputMaybe<Person_Youtube_Channels_Aggregate_Order_By>;
  room_persons_aggregate?: InputMaybe<Room_Persons_Aggregate_Order_By>;
  room_youtube_lives_aggregate?: InputMaybe<Room_Youtube_Lives_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: persons */
export type Persons_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "persons" */
export enum Persons_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "persons" */
export type Persons_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "persons" */
export type Persons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Persons_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Persons_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "persons" */
export enum Persons_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Persons_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Persons_Set_Input>;
  /** filter the rows which have to be updated */
  where: Persons_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  match_players: Array<Match_Players>;
  /** An aggregate relationship */
  match_players_aggregate: Match_Players_Aggregate;
  /** fetch data from the table: "match_players" using primary key columns */
  match_players_by_pk?: Maybe<Match_Players>;
  /** An array relationship */
  matches: Array<Matches>;
  /** An aggregate relationship */
  matches_aggregate: Matches_Aggregate;
  /** fetch data from the table: "matches" using primary key columns */
  matches_by_pk?: Maybe<Matches>;
  /** An array relationship */
  person_niconico_accounts: Array<Person_Niconico_Accounts>;
  /** An aggregate relationship */
  person_niconico_accounts_aggregate: Person_Niconico_Accounts_Aggregate;
  /** fetch data from the table: "person_niconico_accounts" using primary key columns */
  person_niconico_accounts_by_pk?: Maybe<Person_Niconico_Accounts>;
  /** An array relationship */
  person_niconico_communities: Array<Person_Niconico_Communities>;
  /** An aggregate relationship */
  person_niconico_communities_aggregate: Person_Niconico_Communities_Aggregate;
  /** fetch data from the table: "person_niconico_communities" using primary key columns */
  person_niconico_communities_by_pk?: Maybe<Person_Niconico_Communities>;
  /** An array relationship */
  person_twitter_accounts: Array<Person_Twitter_Accounts>;
  /** An aggregate relationship */
  person_twitter_accounts_aggregate: Person_Twitter_Accounts_Aggregate;
  /** fetch data from the table: "person_twitter_accounts" using primary key columns */
  person_twitter_accounts_by_pk?: Maybe<Person_Twitter_Accounts>;
  /** An array relationship */
  person_youtube_channels: Array<Person_Youtube_Channels>;
  /** An aggregate relationship */
  person_youtube_channels_aggregate: Person_Youtube_Channels_Aggregate;
  /** fetch data from the table: "person_youtube_channels" using primary key columns */
  person_youtube_channels_by_pk?: Maybe<Person_Youtube_Channels>;
  /** fetch data from the table: "persons" */
  persons: Array<Persons>;
  /** fetch aggregated fields from the table: "persons" */
  persons_aggregate: Persons_Aggregate;
  /** fetch data from the table: "persons" using primary key columns */
  persons_by_pk?: Maybe<Persons>;
  /** An array relationship */
  room_persons: Array<Room_Persons>;
  /** An aggregate relationship */
  room_persons_aggregate: Room_Persons_Aggregate;
  /** fetch data from the table: "room_persons" using primary key columns */
  room_persons_by_pk?: Maybe<Room_Persons>;
  /** An array relationship */
  room_twitter_announcements: Array<Room_Twitter_Announcements>;
  /** An aggregate relationship */
  room_twitter_announcements_aggregate: Room_Twitter_Announcements_Aggregate;
  /** fetch data from the table: "room_twitter_announcements" using primary key columns */
  room_twitter_announcements_by_pk?: Maybe<Room_Twitter_Announcements>;
  /** An array relationship */
  room_youtube_lives: Array<Room_Youtube_Lives>;
  /** An aggregate relationship */
  room_youtube_lives_aggregate: Room_Youtube_Lives_Aggregate;
  /** fetch data from the table: "room_youtube_lives" using primary key columns */
  room_youtube_lives_by_pk?: Maybe<Room_Youtube_Lives>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
};


export type Query_RootMatch_PlayersArgs = {
  distinct_on?: InputMaybe<Array<Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Players_Order_By>>;
  where?: InputMaybe<Match_Players_Bool_Exp>;
};


export type Query_RootMatch_Players_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Players_Order_By>>;
  where?: InputMaybe<Match_Players_Bool_Exp>;
};


export type Query_RootMatch_Players_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMatchesArgs = {
  distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Matches_Order_By>>;
  where?: InputMaybe<Matches_Bool_Exp>;
};


export type Query_RootMatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Matches_Order_By>>;
  where?: InputMaybe<Matches_Bool_Exp>;
};


export type Query_RootMatches_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPerson_Niconico_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


export type Query_RootPerson_Niconico_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


export type Query_RootPerson_Niconico_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPerson_Niconico_CommunitiesArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Communities_Order_By>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


export type Query_RootPerson_Niconico_Communities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Communities_Order_By>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


export type Query_RootPerson_Niconico_Communities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPerson_Twitter_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


export type Query_RootPerson_Twitter_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


export type Query_RootPerson_Twitter_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPerson_Youtube_ChannelsArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


export type Query_RootPerson_Youtube_Channels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


export type Query_RootPerson_Youtube_Channels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPersonsArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Query_RootPersons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Query_RootPersons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRoom_PersonsArgs = {
  distinct_on?: InputMaybe<Array<Room_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Persons_Order_By>>;
  where?: InputMaybe<Room_Persons_Bool_Exp>;
};


export type Query_RootRoom_Persons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Persons_Order_By>>;
  where?: InputMaybe<Room_Persons_Bool_Exp>;
};


export type Query_RootRoom_Persons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRoom_Twitter_AnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<Room_Twitter_Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Twitter_Announcements_Order_By>>;
  where?: InputMaybe<Room_Twitter_Announcements_Bool_Exp>;
};


export type Query_RootRoom_Twitter_Announcements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Twitter_Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Twitter_Announcements_Order_By>>;
  where?: InputMaybe<Room_Twitter_Announcements_Bool_Exp>;
};


export type Query_RootRoom_Twitter_Announcements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRoom_Youtube_LivesArgs = {
  distinct_on?: InputMaybe<Array<Room_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
};


export type Query_RootRoom_Youtube_Lives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
};


export type Query_RootRoom_Youtube_Lives_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Query_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Query_RootRooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "room_persons" */
export type Room_Persons = {
  __typename?: 'room_persons';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  person: Persons;
  person_id: Scalars['uuid']['output'];
  /** An object relationship */
  room: Rooms;
  room_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "room_persons" */
export type Room_Persons_Aggregate = {
  __typename?: 'room_persons_aggregate';
  aggregate?: Maybe<Room_Persons_Aggregate_Fields>;
  nodes: Array<Room_Persons>;
};

export type Room_Persons_Aggregate_Bool_Exp = {
  count?: InputMaybe<Room_Persons_Aggregate_Bool_Exp_Count>;
};

export type Room_Persons_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Room_Persons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Room_Persons_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "room_persons" */
export type Room_Persons_Aggregate_Fields = {
  __typename?: 'room_persons_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Room_Persons_Max_Fields>;
  min?: Maybe<Room_Persons_Min_Fields>;
};


/** aggregate fields of "room_persons" */
export type Room_Persons_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Room_Persons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "room_persons" */
export type Room_Persons_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Room_Persons_Max_Order_By>;
  min?: InputMaybe<Room_Persons_Min_Order_By>;
};

/** input type for inserting array relation for remote table "room_persons" */
export type Room_Persons_Arr_Rel_Insert_Input = {
  data: Array<Room_Persons_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Room_Persons_On_Conflict>;
};

/** Boolean expression to filter rows from the table "room_persons". All fields are combined with a logical 'AND'. */
export type Room_Persons_Bool_Exp = {
  _and?: InputMaybe<Array<Room_Persons_Bool_Exp>>;
  _not?: InputMaybe<Room_Persons_Bool_Exp>;
  _or?: InputMaybe<Array<Room_Persons_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  room?: InputMaybe<Rooms_Bool_Exp>;
  room_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "room_persons" */
export enum Room_Persons_Constraint {
  /** unique or primary key constraint on columns "id" */
  RoomPersonsPkey = 'room_persons_pkey',
  /** unique or primary key constraint on columns "room_id", "person_id" */
  RoomPersonsRoomIdPersonIdKey = 'room_persons_room_id_person_id_key'
}

/** input type for inserting data into table "room_persons" */
export type Room_Persons_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  room?: InputMaybe<Rooms_Obj_Rel_Insert_Input>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Room_Persons_Max_Fields = {
  __typename?: 'room_persons_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "room_persons" */
export type Room_Persons_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Room_Persons_Min_Fields = {
  __typename?: 'room_persons_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "room_persons" */
export type Room_Persons_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "room_persons" */
export type Room_Persons_Mutation_Response = {
  __typename?: 'room_persons_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Room_Persons>;
};

/** on_conflict condition type for table "room_persons" */
export type Room_Persons_On_Conflict = {
  constraint: Room_Persons_Constraint;
  update_columns?: Array<Room_Persons_Update_Column>;
  where?: InputMaybe<Room_Persons_Bool_Exp>;
};

/** Ordering options when selecting data from "room_persons". */
export type Room_Persons_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  room?: InputMaybe<Rooms_Order_By>;
  room_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: room_persons */
export type Room_Persons_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "room_persons" */
export enum Room_Persons_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "room_persons" */
export type Room_Persons_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "room_persons" */
export type Room_Persons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Room_Persons_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Room_Persons_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "room_persons" */
export enum Room_Persons_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Room_Persons_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Room_Persons_Set_Input>;
  /** filter the rows which have to be updated */
  where: Room_Persons_Bool_Exp;
};

/** columns and relationships of "room_twitter_announcements" */
export type Room_Twitter_Announcements = {
  __typename?: 'room_twitter_announcements';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  room: Rooms;
  room_id: Scalars['uuid']['output'];
  tweet_embed_html?: Maybe<Scalars['String']['output']>;
  tweet_id: Scalars['String']['output'];
  tweet_image_index?: Maybe<Scalars['Int']['output']>;
  tweet_image_url?: Maybe<Scalars['String']['output']>;
  tweet_time?: Maybe<Scalars['timestamptz']['output']>;
  twitter_screen_name?: Maybe<Scalars['String']['output']>;
  twitter_user_id?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "room_twitter_announcements" */
export type Room_Twitter_Announcements_Aggregate = {
  __typename?: 'room_twitter_announcements_aggregate';
  aggregate?: Maybe<Room_Twitter_Announcements_Aggregate_Fields>;
  nodes: Array<Room_Twitter_Announcements>;
};

export type Room_Twitter_Announcements_Aggregate_Bool_Exp = {
  count?: InputMaybe<Room_Twitter_Announcements_Aggregate_Bool_Exp_Count>;
};

export type Room_Twitter_Announcements_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Room_Twitter_Announcements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Room_Twitter_Announcements_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "room_twitter_announcements" */
export type Room_Twitter_Announcements_Aggregate_Fields = {
  __typename?: 'room_twitter_announcements_aggregate_fields';
  avg?: Maybe<Room_Twitter_Announcements_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Room_Twitter_Announcements_Max_Fields>;
  min?: Maybe<Room_Twitter_Announcements_Min_Fields>;
  stddev?: Maybe<Room_Twitter_Announcements_Stddev_Fields>;
  stddev_pop?: Maybe<Room_Twitter_Announcements_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Room_Twitter_Announcements_Stddev_Samp_Fields>;
  sum?: Maybe<Room_Twitter_Announcements_Sum_Fields>;
  var_pop?: Maybe<Room_Twitter_Announcements_Var_Pop_Fields>;
  var_samp?: Maybe<Room_Twitter_Announcements_Var_Samp_Fields>;
  variance?: Maybe<Room_Twitter_Announcements_Variance_Fields>;
};


/** aggregate fields of "room_twitter_announcements" */
export type Room_Twitter_Announcements_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Room_Twitter_Announcements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Aggregate_Order_By = {
  avg?: InputMaybe<Room_Twitter_Announcements_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Room_Twitter_Announcements_Max_Order_By>;
  min?: InputMaybe<Room_Twitter_Announcements_Min_Order_By>;
  stddev?: InputMaybe<Room_Twitter_Announcements_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Room_Twitter_Announcements_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Room_Twitter_Announcements_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Room_Twitter_Announcements_Sum_Order_By>;
  var_pop?: InputMaybe<Room_Twitter_Announcements_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Room_Twitter_Announcements_Var_Samp_Order_By>;
  variance?: InputMaybe<Room_Twitter_Announcements_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Arr_Rel_Insert_Input = {
  data: Array<Room_Twitter_Announcements_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Room_Twitter_Announcements_On_Conflict>;
};

/** aggregate avg on columns */
export type Room_Twitter_Announcements_Avg_Fields = {
  __typename?: 'room_twitter_announcements_avg_fields';
  tweet_image_index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Avg_Order_By = {
  tweet_image_index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "room_twitter_announcements". All fields are combined with a logical 'AND'. */
export type Room_Twitter_Announcements_Bool_Exp = {
  _and?: InputMaybe<Array<Room_Twitter_Announcements_Bool_Exp>>;
  _not?: InputMaybe<Room_Twitter_Announcements_Bool_Exp>;
  _or?: InputMaybe<Array<Room_Twitter_Announcements_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  room?: InputMaybe<Rooms_Bool_Exp>;
  room_id?: InputMaybe<Uuid_Comparison_Exp>;
  tweet_embed_html?: InputMaybe<String_Comparison_Exp>;
  tweet_id?: InputMaybe<String_Comparison_Exp>;
  tweet_image_index?: InputMaybe<Int_Comparison_Exp>;
  tweet_image_url?: InputMaybe<String_Comparison_Exp>;
  tweet_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  twitter_screen_name?: InputMaybe<String_Comparison_Exp>;
  twitter_user_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "room_twitter_announcements" */
export enum Room_Twitter_Announcements_Constraint {
  /** unique or primary key constraint on columns "id" */
  RoomTwitterAnnouncementsPkey = 'room_twitter_announcements_pkey',
  /** unique or primary key constraint on columns "tweet_id", "room_id" */
  RoomTwitterAnnouncementsRoomIdTweetIdKey = 'room_twitter_announcements_room_id_tweet_id_key'
}

/** input type for incrementing numeric columns in table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Inc_Input = {
  tweet_image_index?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  room?: InputMaybe<Rooms_Obj_Rel_Insert_Input>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  tweet_embed_html?: InputMaybe<Scalars['String']['input']>;
  tweet_id?: InputMaybe<Scalars['String']['input']>;
  tweet_image_index?: InputMaybe<Scalars['Int']['input']>;
  tweet_image_url?: InputMaybe<Scalars['String']['input']>;
  tweet_time?: InputMaybe<Scalars['timestamptz']['input']>;
  twitter_screen_name?: InputMaybe<Scalars['String']['input']>;
  twitter_user_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Room_Twitter_Announcements_Max_Fields = {
  __typename?: 'room_twitter_announcements_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
  tweet_embed_html?: Maybe<Scalars['String']['output']>;
  tweet_id?: Maybe<Scalars['String']['output']>;
  tweet_image_index?: Maybe<Scalars['Int']['output']>;
  tweet_image_url?: Maybe<Scalars['String']['output']>;
  tweet_time?: Maybe<Scalars['timestamptz']['output']>;
  twitter_screen_name?: Maybe<Scalars['String']['output']>;
  twitter_user_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  tweet_embed_html?: InputMaybe<Order_By>;
  tweet_id?: InputMaybe<Order_By>;
  tweet_image_index?: InputMaybe<Order_By>;
  tweet_image_url?: InputMaybe<Order_By>;
  tweet_time?: InputMaybe<Order_By>;
  twitter_screen_name?: InputMaybe<Order_By>;
  twitter_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Room_Twitter_Announcements_Min_Fields = {
  __typename?: 'room_twitter_announcements_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
  tweet_embed_html?: Maybe<Scalars['String']['output']>;
  tweet_id?: Maybe<Scalars['String']['output']>;
  tweet_image_index?: Maybe<Scalars['Int']['output']>;
  tweet_image_url?: Maybe<Scalars['String']['output']>;
  tweet_time?: Maybe<Scalars['timestamptz']['output']>;
  twitter_screen_name?: Maybe<Scalars['String']['output']>;
  twitter_user_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  tweet_embed_html?: InputMaybe<Order_By>;
  tweet_id?: InputMaybe<Order_By>;
  tweet_image_index?: InputMaybe<Order_By>;
  tweet_image_url?: InputMaybe<Order_By>;
  tweet_time?: InputMaybe<Order_By>;
  twitter_screen_name?: InputMaybe<Order_By>;
  twitter_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Mutation_Response = {
  __typename?: 'room_twitter_announcements_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Room_Twitter_Announcements>;
};

/** on_conflict condition type for table "room_twitter_announcements" */
export type Room_Twitter_Announcements_On_Conflict = {
  constraint: Room_Twitter_Announcements_Constraint;
  update_columns?: Array<Room_Twitter_Announcements_Update_Column>;
  where?: InputMaybe<Room_Twitter_Announcements_Bool_Exp>;
};

/** Ordering options when selecting data from "room_twitter_announcements". */
export type Room_Twitter_Announcements_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room?: InputMaybe<Rooms_Order_By>;
  room_id?: InputMaybe<Order_By>;
  tweet_embed_html?: InputMaybe<Order_By>;
  tweet_id?: InputMaybe<Order_By>;
  tweet_image_index?: InputMaybe<Order_By>;
  tweet_image_url?: InputMaybe<Order_By>;
  tweet_time?: InputMaybe<Order_By>;
  twitter_screen_name?: InputMaybe<Order_By>;
  twitter_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: room_twitter_announcements */
export type Room_Twitter_Announcements_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "room_twitter_announcements" */
export enum Room_Twitter_Announcements_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  TweetEmbedHtml = 'tweet_embed_html',
  /** column name */
  TweetId = 'tweet_id',
  /** column name */
  TweetImageIndex = 'tweet_image_index',
  /** column name */
  TweetImageUrl = 'tweet_image_url',
  /** column name */
  TweetTime = 'tweet_time',
  /** column name */
  TwitterScreenName = 'twitter_screen_name',
  /** column name */
  TwitterUserId = 'twitter_user_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  tweet_embed_html?: InputMaybe<Scalars['String']['input']>;
  tweet_id?: InputMaybe<Scalars['String']['input']>;
  tweet_image_index?: InputMaybe<Scalars['Int']['input']>;
  tweet_image_url?: InputMaybe<Scalars['String']['input']>;
  tweet_time?: InputMaybe<Scalars['timestamptz']['input']>;
  twitter_screen_name?: InputMaybe<Scalars['String']['input']>;
  twitter_user_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Room_Twitter_Announcements_Stddev_Fields = {
  __typename?: 'room_twitter_announcements_stddev_fields';
  tweet_image_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Stddev_Order_By = {
  tweet_image_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Room_Twitter_Announcements_Stddev_Pop_Fields = {
  __typename?: 'room_twitter_announcements_stddev_pop_fields';
  tweet_image_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Stddev_Pop_Order_By = {
  tweet_image_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Room_Twitter_Announcements_Stddev_Samp_Fields = {
  __typename?: 'room_twitter_announcements_stddev_samp_fields';
  tweet_image_index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Stddev_Samp_Order_By = {
  tweet_image_index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Room_Twitter_Announcements_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Room_Twitter_Announcements_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  tweet_embed_html?: InputMaybe<Scalars['String']['input']>;
  tweet_id?: InputMaybe<Scalars['String']['input']>;
  tweet_image_index?: InputMaybe<Scalars['Int']['input']>;
  tweet_image_url?: InputMaybe<Scalars['String']['input']>;
  tweet_time?: InputMaybe<Scalars['timestamptz']['input']>;
  twitter_screen_name?: InputMaybe<Scalars['String']['input']>;
  twitter_user_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Room_Twitter_Announcements_Sum_Fields = {
  __typename?: 'room_twitter_announcements_sum_fields';
  tweet_image_index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Sum_Order_By = {
  tweet_image_index?: InputMaybe<Order_By>;
};

/** update columns of table "room_twitter_announcements" */
export enum Room_Twitter_Announcements_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  TweetEmbedHtml = 'tweet_embed_html',
  /** column name */
  TweetId = 'tweet_id',
  /** column name */
  TweetImageIndex = 'tweet_image_index',
  /** column name */
  TweetImageUrl = 'tweet_image_url',
  /** column name */
  TweetTime = 'tweet_time',
  /** column name */
  TwitterScreenName = 'twitter_screen_name',
  /** column name */
  TwitterUserId = 'twitter_user_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Room_Twitter_Announcements_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Room_Twitter_Announcements_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Room_Twitter_Announcements_Set_Input>;
  /** filter the rows which have to be updated */
  where: Room_Twitter_Announcements_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Room_Twitter_Announcements_Var_Pop_Fields = {
  __typename?: 'room_twitter_announcements_var_pop_fields';
  tweet_image_index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Var_Pop_Order_By = {
  tweet_image_index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Room_Twitter_Announcements_Var_Samp_Fields = {
  __typename?: 'room_twitter_announcements_var_samp_fields';
  tweet_image_index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Var_Samp_Order_By = {
  tweet_image_index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Room_Twitter_Announcements_Variance_Fields = {
  __typename?: 'room_twitter_announcements_variance_fields';
  tweet_image_index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "room_twitter_announcements" */
export type Room_Twitter_Announcements_Variance_Order_By = {
  tweet_image_index?: InputMaybe<Order_By>;
};

/** columns and relationships of "room_youtube_lives" */
export type Room_Youtube_Lives = {
  __typename?: 'room_youtube_lives';
  created_at: Scalars['timestamptz']['output'];
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  person?: Maybe<Persons>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  room: Rooms;
  room_id: Scalars['uuid']['output'];
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  youtube_video_id: Scalars['String']['output'];
};

/** aggregated selection of "room_youtube_lives" */
export type Room_Youtube_Lives_Aggregate = {
  __typename?: 'room_youtube_lives_aggregate';
  aggregate?: Maybe<Room_Youtube_Lives_Aggregate_Fields>;
  nodes: Array<Room_Youtube_Lives>;
};

export type Room_Youtube_Lives_Aggregate_Bool_Exp = {
  count?: InputMaybe<Room_Youtube_Lives_Aggregate_Bool_Exp_Count>;
};

export type Room_Youtube_Lives_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Room_Youtube_Lives_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "room_youtube_lives" */
export type Room_Youtube_Lives_Aggregate_Fields = {
  __typename?: 'room_youtube_lives_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Room_Youtube_Lives_Max_Fields>;
  min?: Maybe<Room_Youtube_Lives_Min_Fields>;
};


/** aggregate fields of "room_youtube_lives" */
export type Room_Youtube_Lives_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Room_Youtube_Lives_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "room_youtube_lives" */
export type Room_Youtube_Lives_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Room_Youtube_Lives_Max_Order_By>;
  min?: InputMaybe<Room_Youtube_Lives_Min_Order_By>;
};

/** input type for inserting array relation for remote table "room_youtube_lives" */
export type Room_Youtube_Lives_Arr_Rel_Insert_Input = {
  data: Array<Room_Youtube_Lives_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Room_Youtube_Lives_On_Conflict>;
};

/** Boolean expression to filter rows from the table "room_youtube_lives". All fields are combined with a logical 'AND'. */
export type Room_Youtube_Lives_Bool_Exp = {
  _and?: InputMaybe<Array<Room_Youtube_Lives_Bool_Exp>>;
  _not?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
  _or?: InputMaybe<Array<Room_Youtube_Lives_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<Persons_Bool_Exp>;
  person_id?: InputMaybe<Uuid_Comparison_Exp>;
  room?: InputMaybe<Rooms_Bool_Exp>;
  room_id?: InputMaybe<Uuid_Comparison_Exp>;
  start_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  youtube_video_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "room_youtube_lives" */
export enum Room_Youtube_Lives_Constraint {
  /** unique or primary key constraint on columns "id" */
  RoomYoutubeLivesPkey = 'room_youtube_lives_pkey',
  /** unique or primary key constraint on columns "youtube_video_id", "room_id", "person_id" */
  RoomYoutubeLivesRoomIdPersonIdYoutubeVideoIdKey = 'room_youtube_lives_room_id_person_id_youtube_video_id_key'
}

/** input type for inserting data into table "room_youtube_lives" */
export type Room_Youtube_Lives_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  room?: InputMaybe<Rooms_Obj_Rel_Insert_Input>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_video_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Room_Youtube_Lives_Max_Fields = {
  __typename?: 'room_youtube_lives_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  youtube_video_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "room_youtube_lives" */
export type Room_Youtube_Lives_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_video_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Room_Youtube_Lives_Min_Fields = {
  __typename?: 'room_youtube_lives_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  person_id?: Maybe<Scalars['uuid']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  youtube_video_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "room_youtube_lives" */
export type Room_Youtube_Lives_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_video_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "room_youtube_lives" */
export type Room_Youtube_Lives_Mutation_Response = {
  __typename?: 'room_youtube_lives_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Room_Youtube_Lives>;
};

/** on_conflict condition type for table "room_youtube_lives" */
export type Room_Youtube_Lives_On_Conflict = {
  constraint: Room_Youtube_Lives_Constraint;
  update_columns?: Array<Room_Youtube_Lives_Update_Column>;
  where?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
};

/** Ordering options when selecting data from "room_youtube_lives". */
export type Room_Youtube_Lives_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Persons_Order_By>;
  person_id?: InputMaybe<Order_By>;
  room?: InputMaybe<Rooms_Order_By>;
  room_id?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_video_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: room_youtube_lives */
export type Room_Youtube_Lives_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "room_youtube_lives" */
export enum Room_Youtube_Lives_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeVideoId = 'youtube_video_id'
}

/** input type for updating data in table "room_youtube_lives" */
export type Room_Youtube_Lives_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_video_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "room_youtube_lives" */
export type Room_Youtube_Lives_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Room_Youtube_Lives_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Room_Youtube_Lives_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  person_id?: InputMaybe<Scalars['uuid']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  youtube_video_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "room_youtube_lives" */
export enum Room_Youtube_Lives_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeVideoId = 'youtube_video_id'
}

export type Room_Youtube_Lives_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Room_Youtube_Lives_Set_Input>;
  /** filter the rows which have to be updated */
  where: Room_Youtube_Lives_Bool_Exp;
};

/** 連続した試合をまとめる単位 */
export type Rooms = {
  __typename?: 'rooms';
  created_at: Scalars['timestamptz']['output'];
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  matches: Array<Matches>;
  /** An aggregate relationship */
  matches_aggregate: Matches_Aggregate;
  name: Scalars['String']['output'];
  /** An array relationship */
  room_persons: Array<Room_Persons>;
  /** An aggregate relationship */
  room_persons_aggregate: Room_Persons_Aggregate;
  /** An array relationship */
  room_twitter_announcements: Array<Room_Twitter_Announcements>;
  /** An aggregate relationship */
  room_twitter_announcements_aggregate: Room_Twitter_Announcements_Aggregate;
  /** An array relationship */
  room_youtube_lives: Array<Room_Youtube_Lives>;
  /** An aggregate relationship */
  room_youtube_lives_aggregate: Room_Youtube_Lives_Aggregate;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** 連続した試合をまとめる単位 */
export type RoomsMatchesArgs = {
  distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Matches_Order_By>>;
  where?: InputMaybe<Matches_Bool_Exp>;
};


/** 連続した試合をまとめる単位 */
export type RoomsMatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Matches_Order_By>>;
  where?: InputMaybe<Matches_Bool_Exp>;
};


/** 連続した試合をまとめる単位 */
export type RoomsRoom_PersonsArgs = {
  distinct_on?: InputMaybe<Array<Room_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Persons_Order_By>>;
  where?: InputMaybe<Room_Persons_Bool_Exp>;
};


/** 連続した試合をまとめる単位 */
export type RoomsRoom_Persons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Persons_Order_By>>;
  where?: InputMaybe<Room_Persons_Bool_Exp>;
};


/** 連続した試合をまとめる単位 */
export type RoomsRoom_Twitter_AnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<Room_Twitter_Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Twitter_Announcements_Order_By>>;
  where?: InputMaybe<Room_Twitter_Announcements_Bool_Exp>;
};


/** 連続した試合をまとめる単位 */
export type RoomsRoom_Twitter_Announcements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Twitter_Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Twitter_Announcements_Order_By>>;
  where?: InputMaybe<Room_Twitter_Announcements_Bool_Exp>;
};


/** 連続した試合をまとめる単位 */
export type RoomsRoom_Youtube_LivesArgs = {
  distinct_on?: InputMaybe<Array<Room_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
};


/** 連続した試合をまとめる単位 */
export type RoomsRoom_Youtube_Lives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
};

/** aggregated selection of "rooms" */
export type Rooms_Aggregate = {
  __typename?: 'rooms_aggregate';
  aggregate?: Maybe<Rooms_Aggregate_Fields>;
  nodes: Array<Rooms>;
};

/** aggregate fields of "rooms" */
export type Rooms_Aggregate_Fields = {
  __typename?: 'rooms_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rooms_Max_Fields>;
  min?: Maybe<Rooms_Min_Fields>;
};


/** aggregate fields of "rooms" */
export type Rooms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
export type Rooms_Bool_Exp = {
  _and?: InputMaybe<Array<Rooms_Bool_Exp>>;
  _not?: InputMaybe<Rooms_Bool_Exp>;
  _or?: InputMaybe<Array<Rooms_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  matches?: InputMaybe<Matches_Bool_Exp>;
  matches_aggregate?: InputMaybe<Matches_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  room_persons?: InputMaybe<Room_Persons_Bool_Exp>;
  room_persons_aggregate?: InputMaybe<Room_Persons_Aggregate_Bool_Exp>;
  room_twitter_announcements?: InputMaybe<Room_Twitter_Announcements_Bool_Exp>;
  room_twitter_announcements_aggregate?: InputMaybe<Room_Twitter_Announcements_Aggregate_Bool_Exp>;
  room_youtube_lives?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
  room_youtube_lives_aggregate?: InputMaybe<Room_Youtube_Lives_Aggregate_Bool_Exp>;
  start_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rooms" */
export enum Rooms_Constraint {
  /** unique or primary key constraint on columns "id" */
  RoomsPkey = 'rooms_pkey'
}

/** input type for inserting data into table "rooms" */
export type Rooms_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  matches?: InputMaybe<Matches_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  room_persons?: InputMaybe<Room_Persons_Arr_Rel_Insert_Input>;
  room_twitter_announcements?: InputMaybe<Room_Twitter_Announcements_Arr_Rel_Insert_Input>;
  room_youtube_lives?: InputMaybe<Room_Youtube_Lives_Arr_Rel_Insert_Input>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Rooms_Max_Fields = {
  __typename?: 'rooms_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Rooms_Min_Fields = {
  __typename?: 'rooms_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "rooms" */
export type Rooms_Mutation_Response = {
  __typename?: 'rooms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms>;
};

/** input type for inserting object relation for remote table "rooms" */
export type Rooms_Obj_Rel_Insert_Input = {
  data: Rooms_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};

/** on_conflict condition type for table "rooms" */
export type Rooms_On_Conflict = {
  constraint: Rooms_Constraint;
  update_columns?: Array<Rooms_Update_Column>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

/** Ordering options when selecting data from "rooms". */
export type Rooms_Order_By = {
  created_at?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matches_aggregate?: InputMaybe<Matches_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  room_persons_aggregate?: InputMaybe<Room_Persons_Aggregate_Order_By>;
  room_twitter_announcements_aggregate?: InputMaybe<Room_Twitter_Announcements_Aggregate_Order_By>;
  room_youtube_lives_aggregate?: InputMaybe<Room_Youtube_Lives_Aggregate_Order_By>;
  start_time?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rooms */
export type Rooms_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "rooms" */
export enum Rooms_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rooms" */
export type Rooms_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "rooms" */
export type Rooms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rooms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rooms_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "rooms" */
export enum Rooms_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rooms_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rooms_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rooms_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  match_players: Array<Match_Players>;
  /** An aggregate relationship */
  match_players_aggregate: Match_Players_Aggregate;
  /** fetch data from the table: "match_players" using primary key columns */
  match_players_by_pk?: Maybe<Match_Players>;
  /** fetch data from the table in a streaming manner: "match_players" */
  match_players_stream: Array<Match_Players>;
  /** An array relationship */
  matches: Array<Matches>;
  /** An aggregate relationship */
  matches_aggregate: Matches_Aggregate;
  /** fetch data from the table: "matches" using primary key columns */
  matches_by_pk?: Maybe<Matches>;
  /** fetch data from the table in a streaming manner: "matches" */
  matches_stream: Array<Matches>;
  /** An array relationship */
  person_niconico_accounts: Array<Person_Niconico_Accounts>;
  /** An aggregate relationship */
  person_niconico_accounts_aggregate: Person_Niconico_Accounts_Aggregate;
  /** fetch data from the table: "person_niconico_accounts" using primary key columns */
  person_niconico_accounts_by_pk?: Maybe<Person_Niconico_Accounts>;
  /** fetch data from the table in a streaming manner: "person_niconico_accounts" */
  person_niconico_accounts_stream: Array<Person_Niconico_Accounts>;
  /** An array relationship */
  person_niconico_communities: Array<Person_Niconico_Communities>;
  /** An aggregate relationship */
  person_niconico_communities_aggregate: Person_Niconico_Communities_Aggregate;
  /** fetch data from the table: "person_niconico_communities" using primary key columns */
  person_niconico_communities_by_pk?: Maybe<Person_Niconico_Communities>;
  /** fetch data from the table in a streaming manner: "person_niconico_communities" */
  person_niconico_communities_stream: Array<Person_Niconico_Communities>;
  /** An array relationship */
  person_twitter_accounts: Array<Person_Twitter_Accounts>;
  /** An aggregate relationship */
  person_twitter_accounts_aggregate: Person_Twitter_Accounts_Aggregate;
  /** fetch data from the table: "person_twitter_accounts" using primary key columns */
  person_twitter_accounts_by_pk?: Maybe<Person_Twitter_Accounts>;
  /** fetch data from the table in a streaming manner: "person_twitter_accounts" */
  person_twitter_accounts_stream: Array<Person_Twitter_Accounts>;
  /** An array relationship */
  person_youtube_channels: Array<Person_Youtube_Channels>;
  /** An aggregate relationship */
  person_youtube_channels_aggregate: Person_Youtube_Channels_Aggregate;
  /** fetch data from the table: "person_youtube_channels" using primary key columns */
  person_youtube_channels_by_pk?: Maybe<Person_Youtube_Channels>;
  /** fetch data from the table in a streaming manner: "person_youtube_channels" */
  person_youtube_channels_stream: Array<Person_Youtube_Channels>;
  /** fetch data from the table: "persons" */
  persons: Array<Persons>;
  /** fetch aggregated fields from the table: "persons" */
  persons_aggregate: Persons_Aggregate;
  /** fetch data from the table: "persons" using primary key columns */
  persons_by_pk?: Maybe<Persons>;
  /** fetch data from the table in a streaming manner: "persons" */
  persons_stream: Array<Persons>;
  /** An array relationship */
  room_persons: Array<Room_Persons>;
  /** An aggregate relationship */
  room_persons_aggregate: Room_Persons_Aggregate;
  /** fetch data from the table: "room_persons" using primary key columns */
  room_persons_by_pk?: Maybe<Room_Persons>;
  /** fetch data from the table in a streaming manner: "room_persons" */
  room_persons_stream: Array<Room_Persons>;
  /** An array relationship */
  room_twitter_announcements: Array<Room_Twitter_Announcements>;
  /** An aggregate relationship */
  room_twitter_announcements_aggregate: Room_Twitter_Announcements_Aggregate;
  /** fetch data from the table: "room_twitter_announcements" using primary key columns */
  room_twitter_announcements_by_pk?: Maybe<Room_Twitter_Announcements>;
  /** fetch data from the table in a streaming manner: "room_twitter_announcements" */
  room_twitter_announcements_stream: Array<Room_Twitter_Announcements>;
  /** An array relationship */
  room_youtube_lives: Array<Room_Youtube_Lives>;
  /** An aggregate relationship */
  room_youtube_lives_aggregate: Room_Youtube_Lives_Aggregate;
  /** fetch data from the table: "room_youtube_lives" using primary key columns */
  room_youtube_lives_by_pk?: Maybe<Room_Youtube_Lives>;
  /** fetch data from the table in a streaming manner: "room_youtube_lives" */
  room_youtube_lives_stream: Array<Room_Youtube_Lives>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** fetch data from the table in a streaming manner: "rooms" */
  rooms_stream: Array<Rooms>;
};


export type Subscription_RootMatch_PlayersArgs = {
  distinct_on?: InputMaybe<Array<Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Players_Order_By>>;
  where?: InputMaybe<Match_Players_Bool_Exp>;
};


export type Subscription_RootMatch_Players_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Players_Order_By>>;
  where?: InputMaybe<Match_Players_Bool_Exp>;
};


export type Subscription_RootMatch_Players_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMatch_Players_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Match_Players_Stream_Cursor_Input>>;
  where?: InputMaybe<Match_Players_Bool_Exp>;
};


export type Subscription_RootMatchesArgs = {
  distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Matches_Order_By>>;
  where?: InputMaybe<Matches_Bool_Exp>;
};


export type Subscription_RootMatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Matches_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Matches_Order_By>>;
  where?: InputMaybe<Matches_Bool_Exp>;
};


export type Subscription_RootMatches_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMatches_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Matches_Stream_Cursor_Input>>;
  where?: InputMaybe<Matches_Bool_Exp>;
};


export type Subscription_RootPerson_Niconico_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Niconico_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Accounts_Order_By>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Niconico_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPerson_Niconico_Accounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Person_Niconico_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Niconico_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Niconico_CommunitiesArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Communities_Order_By>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


export type Subscription_RootPerson_Niconico_Communities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Niconico_Communities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Niconico_Communities_Order_By>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


export type Subscription_RootPerson_Niconico_Communities_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPerson_Niconico_Communities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Person_Niconico_Communities_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Niconico_Communities_Bool_Exp>;
};


export type Subscription_RootPerson_Twitter_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Twitter_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Twitter_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Twitter_Accounts_Order_By>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Twitter_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPerson_Twitter_Accounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Person_Twitter_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Twitter_Accounts_Bool_Exp>;
};


export type Subscription_RootPerson_Youtube_ChannelsArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


export type Subscription_RootPerson_Youtube_Channels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Youtube_Channels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Person_Youtube_Channels_Order_By>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


export type Subscription_RootPerson_Youtube_Channels_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPerson_Youtube_Channels_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Person_Youtube_Channels_Stream_Cursor_Input>>;
  where?: InputMaybe<Person_Youtube_Channels_Bool_Exp>;
};


export type Subscription_RootPersonsArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Subscription_RootPersons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Subscription_RootPersons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPersons_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Persons_Stream_Cursor_Input>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Subscription_RootRoom_PersonsArgs = {
  distinct_on?: InputMaybe<Array<Room_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Persons_Order_By>>;
  where?: InputMaybe<Room_Persons_Bool_Exp>;
};


export type Subscription_RootRoom_Persons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Persons_Order_By>>;
  where?: InputMaybe<Room_Persons_Bool_Exp>;
};


export type Subscription_RootRoom_Persons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRoom_Persons_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Room_Persons_Stream_Cursor_Input>>;
  where?: InputMaybe<Room_Persons_Bool_Exp>;
};


export type Subscription_RootRoom_Twitter_AnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<Room_Twitter_Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Twitter_Announcements_Order_By>>;
  where?: InputMaybe<Room_Twitter_Announcements_Bool_Exp>;
};


export type Subscription_RootRoom_Twitter_Announcements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Twitter_Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Twitter_Announcements_Order_By>>;
  where?: InputMaybe<Room_Twitter_Announcements_Bool_Exp>;
};


export type Subscription_RootRoom_Twitter_Announcements_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRoom_Twitter_Announcements_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Room_Twitter_Announcements_Stream_Cursor_Input>>;
  where?: InputMaybe<Room_Twitter_Announcements_Bool_Exp>;
};


export type Subscription_RootRoom_Youtube_LivesArgs = {
  distinct_on?: InputMaybe<Array<Room_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
};


export type Subscription_RootRoom_Youtube_Lives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Room_Youtube_Lives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Room_Youtube_Lives_Order_By>>;
  where?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
};


export type Subscription_RootRoom_Youtube_Lives_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRoom_Youtube_Lives_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Room_Youtube_Lives_Stream_Cursor_Input>>;
  where?: InputMaybe<Room_Youtube_Lives_Bool_Exp>;
};


export type Subscription_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootRooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRooms_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rooms_Stream_Cursor_Input>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetMatchPageQueryVariables = Exact<{
  matchId: Scalars['uuid']['input'];
}>;


export type GetMatchPageQuery = { __typename?: 'query_root', match?: { __typename?: 'matches', id: any, startTime: any, isAborted?: boolean | null, matchPlayers: Array<{ __typename?: 'match_players', id: any, nickname: string, person?: { __typename?: 'persons', id: any } | null }>, room: { __typename?: 'rooms', id: any, name: string, startTime?: any | null, roomYoutubeLives: Array<{ __typename?: 'room_youtube_lives', id: any, title?: string | null, youtubeVideoId: string, startTime?: any | null, person?: { __typename?: 'persons', id: any, name: string } | null }> } } | null };

export type GetMatchPageStaticParamQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMatchPageStaticParamQuery = { __typename?: 'query_root', matches: Array<{ __typename?: 'matches', id: any }> };

export type GetPersonPageQueryVariables = Exact<{
  personId: Scalars['uuid']['input'];
}>;


export type GetPersonPageQuery = { __typename?: 'query_root', person?: { __typename?: 'persons', id: any, name: string, personTwitterAccounts: Array<{ __typename?: 'person_twitter_accounts', id: any, twitter_screen_name: string, twitter_user_id?: string | null, name?: string | null }>, personNiconicoAccounts: Array<{ __typename?: 'person_niconico_accounts', id: any, niconico_account_id: number, name?: string | null }>, personNiconicoCommunities: Array<{ __typename?: 'person_niconico_communities', id: any, niconico_community_id: number, name?: string | null }>, personYoutubeChannels: Array<{ __typename?: 'person_youtube_channels', id: any, youtube_channel_id: string, youtube_channel_handle?: string | null, name?: string | null }>, roomPersons: Array<{ __typename?: 'room_persons', room: { __typename?: 'rooms', id: any, name: string, start_time?: any | null } }> } | null };

export type GetPersonPageStaticParamQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonPageStaticParamQuery = { __typename?: 'query_root', persons: Array<{ __typename?: 'persons', id: any }> };

export type GetRoomPageQueryVariables = Exact<{
  roomId: Scalars['uuid']['input'];
}>;


export type GetRoomPageQuery = { __typename?: 'query_root', room?: { __typename?: 'rooms', id: any, name: string, startTime?: any | null, endTime?: any | null, roomPersons: Array<{ __typename?: 'room_persons', person: { __typename?: 'persons', id: any, name: string } }>, roomYouTubeLives: Array<{ __typename?: 'room_youtube_lives', id: any, title?: string | null, youtubeVideoId: string, person?: { __typename?: 'persons', id: any, name: string } | null }>, matches: Array<{ __typename?: 'matches', id: any, start_time: any }> } | null };

export type GetRoomPageStaticParamQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoomPageStaticParamQuery = { __typename?: 'query_root', rooms: Array<{ __typename?: 'rooms', id: any }> };

export type GetRoomListPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoomListPageQuery = { __typename?: 'query_root', rooms: Array<{ __typename?: 'rooms', id: any, name: string, startTime?: any | null, endTime?: any | null }> };


export const GetMatchPageDocument = gql`
    query GetMatchPage($matchId: uuid!) {
  match: matches_by_pk(id: $matchId) {
    id
    startTime: start_time
    isAborted: is_aborted
    matchPlayers: match_players(order_by: {nickname: asc}) {
      id
      nickname
      person {
        id
      }
    }
    room {
      id
      name
      startTime: start_time
      roomYoutubeLives: room_youtube_lives {
        id
        youtubeVideoId: youtube_video_id
        startTime: start_time
        title
        person {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetMatchPageQuery__
 *
 * To run a query within a React component, call `useGetMatchPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMatchPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMatchPageQuery({
 *   variables: {
 *      matchId: // value for 'matchId'
 *   },
 * });
 */
export function useGetMatchPageQuery(baseOptions: Apollo.QueryHookOptions<GetMatchPageQuery, GetMatchPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMatchPageQuery, GetMatchPageQueryVariables>(GetMatchPageDocument, options);
      }
export function useGetMatchPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMatchPageQuery, GetMatchPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMatchPageQuery, GetMatchPageQueryVariables>(GetMatchPageDocument, options);
        }
export type GetMatchPageQueryHookResult = ReturnType<typeof useGetMatchPageQuery>;
export type GetMatchPageLazyQueryHookResult = ReturnType<typeof useGetMatchPageLazyQuery>;
export type GetMatchPageQueryResult = Apollo.QueryResult<GetMatchPageQuery, GetMatchPageQueryVariables>;
export const GetMatchPageStaticParamDocument = gql`
    query GetMatchPageStaticParam {
  matches {
    id
  }
}
    `;

/**
 * __useGetMatchPageStaticParamQuery__
 *
 * To run a query within a React component, call `useGetMatchPageStaticParamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMatchPageStaticParamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMatchPageStaticParamQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMatchPageStaticParamQuery(baseOptions?: Apollo.QueryHookOptions<GetMatchPageStaticParamQuery, GetMatchPageStaticParamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMatchPageStaticParamQuery, GetMatchPageStaticParamQueryVariables>(GetMatchPageStaticParamDocument, options);
      }
export function useGetMatchPageStaticParamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMatchPageStaticParamQuery, GetMatchPageStaticParamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMatchPageStaticParamQuery, GetMatchPageStaticParamQueryVariables>(GetMatchPageStaticParamDocument, options);
        }
export type GetMatchPageStaticParamQueryHookResult = ReturnType<typeof useGetMatchPageStaticParamQuery>;
export type GetMatchPageStaticParamLazyQueryHookResult = ReturnType<typeof useGetMatchPageStaticParamLazyQuery>;
export type GetMatchPageStaticParamQueryResult = Apollo.QueryResult<GetMatchPageStaticParamQuery, GetMatchPageStaticParamQueryVariables>;
export const GetPersonPageDocument = gql`
    query GetPersonPage($personId: uuid!) {
  person: persons_by_pk(id: $personId) {
    id
    name
    personTwitterAccounts: person_twitter_accounts(order_by: {twitter_user_id: asc}) {
      id
      twitter_screen_name
      twitter_user_id
      name
    }
    personNiconicoAccounts: person_niconico_accounts(
      order_by: {niconico_account_id: asc}
    ) {
      id
      niconico_account_id
      name
    }
    personNiconicoCommunities: person_niconico_communities(
      order_by: {niconico_community_id: asc}
    ) {
      id
      niconico_community_id
      name
    }
    personYoutubeChannels: person_youtube_channels(
      order_by: {youtube_channel_id: asc}
    ) {
      id
      youtube_channel_id
      youtube_channel_handle
      name
    }
    roomPersons: room_persons(order_by: {room: {start_time: desc}}) {
      room {
        id
        name
        start_time
      }
    }
  }
}
    `;

/**
 * __useGetPersonPageQuery__
 *
 * To run a query within a React component, call `useGetPersonPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonPageQuery({
 *   variables: {
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function useGetPersonPageQuery(baseOptions: Apollo.QueryHookOptions<GetPersonPageQuery, GetPersonPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonPageQuery, GetPersonPageQueryVariables>(GetPersonPageDocument, options);
      }
export function useGetPersonPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonPageQuery, GetPersonPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonPageQuery, GetPersonPageQueryVariables>(GetPersonPageDocument, options);
        }
export type GetPersonPageQueryHookResult = ReturnType<typeof useGetPersonPageQuery>;
export type GetPersonPageLazyQueryHookResult = ReturnType<typeof useGetPersonPageLazyQuery>;
export type GetPersonPageQueryResult = Apollo.QueryResult<GetPersonPageQuery, GetPersonPageQueryVariables>;
export const GetPersonPageStaticParamDocument = gql`
    query GetPersonPageStaticParam {
  persons {
    id
  }
}
    `;

/**
 * __useGetPersonPageStaticParamQuery__
 *
 * To run a query within a React component, call `useGetPersonPageStaticParamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonPageStaticParamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonPageStaticParamQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPersonPageStaticParamQuery(baseOptions?: Apollo.QueryHookOptions<GetPersonPageStaticParamQuery, GetPersonPageStaticParamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonPageStaticParamQuery, GetPersonPageStaticParamQueryVariables>(GetPersonPageStaticParamDocument, options);
      }
export function useGetPersonPageStaticParamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonPageStaticParamQuery, GetPersonPageStaticParamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonPageStaticParamQuery, GetPersonPageStaticParamQueryVariables>(GetPersonPageStaticParamDocument, options);
        }
export type GetPersonPageStaticParamQueryHookResult = ReturnType<typeof useGetPersonPageStaticParamQuery>;
export type GetPersonPageStaticParamLazyQueryHookResult = ReturnType<typeof useGetPersonPageStaticParamLazyQuery>;
export type GetPersonPageStaticParamQueryResult = Apollo.QueryResult<GetPersonPageStaticParamQuery, GetPersonPageStaticParamQueryVariables>;
export const GetRoomPageDocument = gql`
    query GetRoomPage($roomId: uuid!) {
  room: rooms_by_pk(id: $roomId) {
    id
    name
    startTime: start_time
    endTime: end_time
    roomPersons: room_persons(order_by: {person: {name: asc}}) {
      person {
        id
        name
      }
    }
    roomYouTubeLives: room_youtube_lives(order_by: {person: {name: asc}}) {
      id
      person {
        id
        name
      }
      youtubeVideoId: youtube_video_id
      title
    }
    matches(order_by: {start_time: asc}) {
      id
      start_time
    }
  }
}
    `;

/**
 * __useGetRoomPageQuery__
 *
 * To run a query within a React component, call `useGetRoomPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomPageQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useGetRoomPageQuery(baseOptions: Apollo.QueryHookOptions<GetRoomPageQuery, GetRoomPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRoomPageQuery, GetRoomPageQueryVariables>(GetRoomPageDocument, options);
      }
export function useGetRoomPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoomPageQuery, GetRoomPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRoomPageQuery, GetRoomPageQueryVariables>(GetRoomPageDocument, options);
        }
export type GetRoomPageQueryHookResult = ReturnType<typeof useGetRoomPageQuery>;
export type GetRoomPageLazyQueryHookResult = ReturnType<typeof useGetRoomPageLazyQuery>;
export type GetRoomPageQueryResult = Apollo.QueryResult<GetRoomPageQuery, GetRoomPageQueryVariables>;
export const GetRoomPageStaticParamDocument = gql`
    query GetRoomPageStaticParam {
  rooms {
    id
  }
}
    `;

/**
 * __useGetRoomPageStaticParamQuery__
 *
 * To run a query within a React component, call `useGetRoomPageStaticParamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomPageStaticParamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomPageStaticParamQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRoomPageStaticParamQuery(baseOptions?: Apollo.QueryHookOptions<GetRoomPageStaticParamQuery, GetRoomPageStaticParamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRoomPageStaticParamQuery, GetRoomPageStaticParamQueryVariables>(GetRoomPageStaticParamDocument, options);
      }
export function useGetRoomPageStaticParamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoomPageStaticParamQuery, GetRoomPageStaticParamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRoomPageStaticParamQuery, GetRoomPageStaticParamQueryVariables>(GetRoomPageStaticParamDocument, options);
        }
export type GetRoomPageStaticParamQueryHookResult = ReturnType<typeof useGetRoomPageStaticParamQuery>;
export type GetRoomPageStaticParamLazyQueryHookResult = ReturnType<typeof useGetRoomPageStaticParamLazyQuery>;
export type GetRoomPageStaticParamQueryResult = Apollo.QueryResult<GetRoomPageStaticParamQuery, GetRoomPageStaticParamQueryVariables>;
export const GetRoomListPageDocument = gql`
    query GetRoomListPage {
  rooms(order_by: {start_time: desc}) {
    id
    name
    startTime: start_time
    endTime: end_time
  }
}
    `;

/**
 * __useGetRoomListPageQuery__
 *
 * To run a query within a React component, call `useGetRoomListPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomListPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomListPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRoomListPageQuery(baseOptions?: Apollo.QueryHookOptions<GetRoomListPageQuery, GetRoomListPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRoomListPageQuery, GetRoomListPageQueryVariables>(GetRoomListPageDocument, options);
      }
export function useGetRoomListPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoomListPageQuery, GetRoomListPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRoomListPageQuery, GetRoomListPageQueryVariables>(GetRoomListPageDocument, options);
        }
export type GetRoomListPageQueryHookResult = ReturnType<typeof useGetRoomListPageQuery>;
export type GetRoomListPageLazyQueryHookResult = ReturnType<typeof useGetRoomListPageLazyQuery>;
export type GetRoomListPageQueryResult = Apollo.QueryResult<GetRoomListPageQuery, GetRoomListPageQueryVariables>;