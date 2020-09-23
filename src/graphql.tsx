/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date | string;
};

export type Query = {
  __typename?: 'Query';
  GenerateManifest?: Maybe<Scalars['JSON']>;
  _?: Maybe<Scalars['Boolean']>;
  ConfigMap?: Maybe<Array<Maybe<ConfigMap>>>;
  DataSource?: Maybe<Array<Maybe<DataSource>>>;
  SimpleDataSource?: Maybe<Array<Maybe<SimpleDataSource>>>;
  SimpleConfigMap?: Maybe<Array<Maybe<SimpleConfigMap>>>;
  HelmChart?: Maybe<Array<Maybe<HelmChart>>>;
  Runnable?: Maybe<Array<Maybe<Runnable>>>;
  ConnectorConfig?: Maybe<Array<Maybe<ConnectorConfig>>>;
  Facility?: Maybe<Array<Maybe<Facility>>>;
  Organization?: Maybe<Array<Maybe<Organization>>>;
  FacilityGroup?: Maybe<Array<Maybe<FacilityGroup>>>;
  Address?: Maybe<Array<Maybe<Address>>>;
  NovozymesFacilityConfig?: Maybe<Array<Maybe<NovozymesFacilityConfig>>>;
  NovozymesDataSource?: Maybe<Array<Maybe<NovozymesDataSource>>>;
  BatchExtractorConfig?: Maybe<Array<Maybe<BatchExtractorConfig>>>;
  TagExtractorConfig?: Maybe<Array<Maybe<TagExtractorConfig>>>;
  UtilityAccount?: Maybe<Array<Maybe<UtilityAccount>>>;
  UtilityProvider?: Maybe<Array<Maybe<UtilityProvider>>>;
  UtilityStatement?: Maybe<Array<Maybe<UtilityStatement>>>;
  Asset?: Maybe<Array<Maybe<Asset>>>;
  UtilityMeter?: Maybe<Array<Maybe<UtilityMeter>>>;
  WmsDataSource?: Maybe<Array<Maybe<WmsDataSource>>>;
  Canonical?: Maybe<Array<Maybe<Canonical>>>;
  ExtractorConfigMap?: Maybe<Array<Maybe<ExtractorConfigMap>>>;
  CdtExtractorConfigMap?: Maybe<Array<Maybe<CdtExtractorConfigMap>>>;
  CdcExtractorConfigMap?: Maybe<Array<Maybe<CdcExtractorConfigMap>>>;
  CtExtractorConfigMap?: Maybe<Array<Maybe<CtExtractorConfigMap>>>;
};


export type QueryGenerateManifestArgs = {
  name: Scalars['String'];
};


export type QueryConfigMapArgs = {
  name?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ConfigMapOrdering>>>;
  filter?: Maybe<_ConfigMapFilter>;
};


export type QueryDataSourceArgs = {
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DataSourceOrdering>>>;
  filter?: Maybe<_DataSourceFilter>;
};


export type QuerySimpleDataSourceArgs = {
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SimpleDataSourceOrdering>>>;
  filter?: Maybe<_SimpleDataSourceFilter>;
};


export type QuerySimpleConfigMapArgs = {
  name?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SimpleConfigMapOrdering>>>;
  filter?: Maybe<_SimpleConfigMapFilter>;
};


export type QueryHelmChartArgs = {
  name?: Maybe<Scalars['String']>;
  repoUrl?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_HelmChartOrdering>>>;
  filter?: Maybe<_HelmChartFilter>;
};


export type QueryRunnableArgs = {
  name?: Maybe<Scalars['String']>;
  repository?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  command?: Maybe<Scalars['String']>;
  helmChartVersion?: Maybe<Scalars['String']>;
  upstream?: Maybe<Scalars['JSON']>;
  configTree?: Maybe<Scalars['JSON']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RunnableOrdering>>>;
  filter?: Maybe<_RunnableFilter>;
};


export type QueryConnectorConfigArgs = {
  name?: Maybe<Scalars['String']>;
  topicName?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ConnectorConfigOrdering>>>;
  filter?: Maybe<_ConnectorConfigFilter>;
};


export type QueryFacilityArgs = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_FacilityOrdering>>>;
  filter?: Maybe<_FacilityFilter>;
};


export type QueryOrganizationArgs = {
  tenantId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OrganizationOrdering>>>;
  filter?: Maybe<_OrganizationFilter>;
};


export type QueryFacilityGroupArgs = {
  name?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_FacilityGroupOrdering>>>;
  filter?: Maybe<_FacilityGroupFilter>;
};


export type QueryAddressArgs = {
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AddressOrdering>>>;
  filter?: Maybe<_AddressFilter>;
};


export type QueryNovozymesFacilityConfigArgs = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  contxtId?: Maybe<Scalars['Int']>;
  iotKey?: Maybe<Scalars['String']>;
  provisioningUrl?: Maybe<Scalars['String']>;
  extractSince?: Maybe<Scalars['DateTime']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_NovozymesFacilityConfigOrdering>>>;
  filter?: Maybe<_NovozymesFacilityConfigFilter>;
};


export type QueryNovozymesDataSourceArgs = {
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_NovozymesDataSourceOrdering>>>;
  filter?: Maybe<_NovozymesDataSourceFilter>;
};


export type QueryBatchExtractorConfigArgs = {
  name?: Maybe<Scalars['String']>;
  envName?: Maybe<Scalars['String']>;
  batchExtractor?: Maybe<Scalars['String']>;
  batchIndicatorTemplate?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BatchExtractorConfigOrdering>>>;
  filter?: Maybe<_BatchExtractorConfigFilter>;
};


export type QueryTagExtractorConfigArgs = {
  name?: Maybe<Scalars['String']>;
  tagExtractor?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TagExtractorConfigOrdering>>>;
  filter?: Maybe<_TagExtractorConfigFilter>;
};


export type QueryUtilityAccountArgs = {
  accountId?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UtilityAccountOrdering>>>;
  filter?: Maybe<_UtilityAccountFilter>;
};


export type QueryUtilityProviderArgs = {
  name?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UtilityProviderOrdering>>>;
  filter?: Maybe<_UtilityProviderFilter>;
};


export type QueryUtilityStatementArgs = {
  id?: Maybe<Scalars['ID']>;
  pdf?: Maybe<Scalars['String']>;
  statementDate?: Maybe<_Neo4jDateTimeInput>;
  startDate?: Maybe<_Neo4jDateTimeInput>;
  endDate?: Maybe<_Neo4jDateTimeInput>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UtilityStatementOrdering>>>;
  filter?: Maybe<_UtilityStatementFilter>;
};


export type QueryAssetArgs = {
  id?: Maybe<Scalars['ID']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AssetOrdering>>>;
  filter?: Maybe<_AssetFilter>;
};


export type QueryUtilityMeterArgs = {
  id?: Maybe<Scalars['ID']>;
  created?: Maybe<_Neo4jDateTimeInput>;
  is_activated?: Maybe<Scalars['Boolean']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UtilityMeterOrdering>>>;
  filter?: Maybe<_UtilityMeterFilter>;
};


export type QueryWmsDataSourceArgs = {
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['Int']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_WmsDataSourceOrdering>>>;
  filter?: Maybe<_WmsDataSourceFilter>;
};


export type QueryCanonicalArgs = {
  name?: Maybe<Scalars['String']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CanonicalOrdering>>>;
  filter?: Maybe<_CanonicalFilter>;
};


export type QueryExtractorConfigMapArgs = {
  query?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ExtractorConfigMapOrdering>>>;
  filter?: Maybe<_ExtractorConfigMapFilter>;
};


export type QueryCdtExtractorConfigMapArgs = {
  name?: Maybe<Scalars['String']>;
  upsertId?: Maybe<Scalars['String']>;
  deleteId?: Maybe<Scalars['String']>;
  cdtId?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CdtExtractorConfigMapOrdering>>>;
  filter?: Maybe<_CdtExtractorConfigMapFilter>;
};


export type QueryCdcExtractorConfigMapArgs = {
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CdcExtractorConfigMapOrdering>>>;
  filter?: Maybe<_CdcExtractorConfigMapFilter>;
};


export type QueryCtExtractorConfigMapArgs = {
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
  _properties?: Maybe<Scalars['JSON']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CtExtractorConfigMapOrdering>>>;
  filter?: Maybe<_CtExtractorConfigMapFilter>;
};


export enum _ConfigMapOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc'
}

export type _ConfigMapFilter = {
  AND?: Maybe<Array<_ConfigMapFilter>>;
  OR?: Maybe<Array<_ConfigMapFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
};

export type ConfigMap = {
  name: Scalars['String'];
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
};

export enum _DataSourceOrdering {
  url_asc = 'url_asc',
  url_desc = 'url_desc',
  host_asc = 'host_asc',
  host_desc = 'host_desc',
  port_asc = 'port_asc',
  port_desc = 'port_desc',
  username_asc = 'username_asc',
  username_desc = 'username_desc',
  password_asc = 'password_asc',
  password_desc = 'password_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc'
}

export type _DataSourceFilter = {
  AND?: Maybe<Array<_DataSourceFilter>>;
  OR?: Maybe<Array<_DataSourceFilter>>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Scalars['String']>>;
  url_not_in?: Maybe<Array<Scalars['String']>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  url_starts_with?: Maybe<Scalars['String']>;
  url_not_starts_with?: Maybe<Scalars['String']>;
  url_ends_with?: Maybe<Scalars['String']>;
  url_not_ends_with?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  host_not?: Maybe<Scalars['String']>;
  host_in?: Maybe<Array<Scalars['String']>>;
  host_not_in?: Maybe<Array<Scalars['String']>>;
  host_contains?: Maybe<Scalars['String']>;
  host_not_contains?: Maybe<Scalars['String']>;
  host_starts_with?: Maybe<Scalars['String']>;
  host_not_starts_with?: Maybe<Scalars['String']>;
  host_ends_with?: Maybe<Scalars['String']>;
  host_not_ends_with?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  port_not?: Maybe<Scalars['String']>;
  port_in?: Maybe<Array<Scalars['String']>>;
  port_not_in?: Maybe<Array<Scalars['String']>>;
  port_contains?: Maybe<Scalars['String']>;
  port_not_contains?: Maybe<Scalars['String']>;
  port_starts_with?: Maybe<Scalars['String']>;
  port_not_starts_with?: Maybe<Scalars['String']>;
  port_ends_with?: Maybe<Scalars['String']>;
  port_not_ends_with?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_not?: Maybe<Scalars['String']>;
  username_in?: Maybe<Array<Scalars['String']>>;
  username_not_in?: Maybe<Array<Scalars['String']>>;
  username_contains?: Maybe<Scalars['String']>;
  username_not_contains?: Maybe<Scalars['String']>;
  username_starts_with?: Maybe<Scalars['String']>;
  username_not_starts_with?: Maybe<Scalars['String']>;
  username_ends_with?: Maybe<Scalars['String']>;
  username_not_ends_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  password_not?: Maybe<Scalars['String']>;
  password_in?: Maybe<Array<Scalars['String']>>;
  password_not_in?: Maybe<Array<Scalars['String']>>;
  password_contains?: Maybe<Scalars['String']>;
  password_not_contains?: Maybe<Scalars['String']>;
  password_starts_with?: Maybe<Scalars['String']>;
  password_not_starts_with?: Maybe<Scalars['String']>;
  password_ends_with?: Maybe<Scalars['String']>;
  password_not_ends_with?: Maybe<Scalars['String']>;
};

export type DataSource = {
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
};

export enum _SimpleDataSourceOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  url_asc = 'url_asc',
  url_desc = 'url_desc',
  host_asc = 'host_asc',
  host_desc = 'host_desc',
  port_asc = 'port_asc',
  port_desc = 'port_desc',
  username_asc = 'username_asc',
  username_desc = 'username_desc',
  password_asc = 'password_asc',
  password_desc = 'password_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type _SimpleDataSourceFilter = {
  AND?: Maybe<Array<_SimpleDataSourceFilter>>;
  OR?: Maybe<Array<_SimpleDataSourceFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Scalars['String']>>;
  url_not_in?: Maybe<Array<Scalars['String']>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  url_starts_with?: Maybe<Scalars['String']>;
  url_not_starts_with?: Maybe<Scalars['String']>;
  url_ends_with?: Maybe<Scalars['String']>;
  url_not_ends_with?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  host_not?: Maybe<Scalars['String']>;
  host_in?: Maybe<Array<Scalars['String']>>;
  host_not_in?: Maybe<Array<Scalars['String']>>;
  host_contains?: Maybe<Scalars['String']>;
  host_not_contains?: Maybe<Scalars['String']>;
  host_starts_with?: Maybe<Scalars['String']>;
  host_not_starts_with?: Maybe<Scalars['String']>;
  host_ends_with?: Maybe<Scalars['String']>;
  host_not_ends_with?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  port_not?: Maybe<Scalars['String']>;
  port_in?: Maybe<Array<Scalars['String']>>;
  port_not_in?: Maybe<Array<Scalars['String']>>;
  port_contains?: Maybe<Scalars['String']>;
  port_not_contains?: Maybe<Scalars['String']>;
  port_starts_with?: Maybe<Scalars['String']>;
  port_not_starts_with?: Maybe<Scalars['String']>;
  port_ends_with?: Maybe<Scalars['String']>;
  port_not_ends_with?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_not?: Maybe<Scalars['String']>;
  username_in?: Maybe<Array<Scalars['String']>>;
  username_not_in?: Maybe<Array<Scalars['String']>>;
  username_contains?: Maybe<Scalars['String']>;
  username_not_contains?: Maybe<Scalars['String']>;
  username_starts_with?: Maybe<Scalars['String']>;
  username_not_starts_with?: Maybe<Scalars['String']>;
  username_ends_with?: Maybe<Scalars['String']>;
  username_not_ends_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  password_not?: Maybe<Scalars['String']>;
  password_in?: Maybe<Array<Scalars['String']>>;
  password_not_in?: Maybe<Array<Scalars['String']>>;
  password_contains?: Maybe<Scalars['String']>;
  password_not_contains?: Maybe<Scalars['String']>;
  password_starts_with?: Maybe<Scalars['String']>;
  password_not_starts_with?: Maybe<Scalars['String']>;
  password_ends_with?: Maybe<Scalars['String']>;
  password_not_ends_with?: Maybe<Scalars['String']>;
};

export type SimpleDataSource = DataSource & ConfigMap & {
  __typename?: 'SimpleDataSource';
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};

export enum _SimpleConfigMapOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type _SimpleConfigMapFilter = {
  AND?: Maybe<Array<_SimpleConfigMapFilter>>;
  OR?: Maybe<Array<_SimpleConfigMapFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
};

export type SimpleConfigMap = ConfigMap & {
  __typename?: 'SimpleConfigMap';
  name: Scalars['String'];
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};

export enum _HelmChartOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  repoUrl_asc = 'repoUrl_asc',
  repoUrl_desc = 'repoUrl_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type _HelmChartFilter = {
  AND?: Maybe<Array<_HelmChartFilter>>;
  OR?: Maybe<Array<_HelmChartFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  repoUrl?: Maybe<Scalars['String']>;
  repoUrl_not?: Maybe<Scalars['String']>;
  repoUrl_in?: Maybe<Array<Scalars['String']>>;
  repoUrl_not_in?: Maybe<Array<Scalars['String']>>;
  repoUrl_contains?: Maybe<Scalars['String']>;
  repoUrl_not_contains?: Maybe<Scalars['String']>;
  repoUrl_starts_with?: Maybe<Scalars['String']>;
  repoUrl_not_starts_with?: Maybe<Scalars['String']>;
  repoUrl_ends_with?: Maybe<Scalars['String']>;
  repoUrl_not_ends_with?: Maybe<Scalars['String']>;
};

export type HelmChart = ConfigMap & {
  __typename?: 'HelmChart';
  name: Scalars['String'];
  repoUrl?: Maybe<Scalars['String']>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};

export enum _RunnableOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  repository_asc = 'repository_asc',
  repository_desc = 'repository_desc',
  version_asc = 'version_asc',
  version_desc = 'version_desc',
  command_asc = 'command_asc',
  command_desc = 'command_desc',
  helmChartVersion_asc = 'helmChartVersion_asc',
  helmChartVersion_desc = 'helmChartVersion_desc',
  upstream_asc = 'upstream_asc',
  upstream_desc = 'upstream_desc',
  configTree_asc = 'configTree_asc',
  configTree_desc = 'configTree_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type _RunnableFilter = {
  AND?: Maybe<Array<_RunnableFilter>>;
  OR?: Maybe<Array<_RunnableFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  repository?: Maybe<Scalars['String']>;
  repository_not?: Maybe<Scalars['String']>;
  repository_in?: Maybe<Array<Scalars['String']>>;
  repository_not_in?: Maybe<Array<Scalars['String']>>;
  repository_contains?: Maybe<Scalars['String']>;
  repository_not_contains?: Maybe<Scalars['String']>;
  repository_starts_with?: Maybe<Scalars['String']>;
  repository_not_starts_with?: Maybe<Scalars['String']>;
  repository_ends_with?: Maybe<Scalars['String']>;
  repository_not_ends_with?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  version_not?: Maybe<Scalars['String']>;
  version_in?: Maybe<Array<Scalars['String']>>;
  version_not_in?: Maybe<Array<Scalars['String']>>;
  version_contains?: Maybe<Scalars['String']>;
  version_not_contains?: Maybe<Scalars['String']>;
  version_starts_with?: Maybe<Scalars['String']>;
  version_not_starts_with?: Maybe<Scalars['String']>;
  version_ends_with?: Maybe<Scalars['String']>;
  version_not_ends_with?: Maybe<Scalars['String']>;
  command?: Maybe<Scalars['String']>;
  command_not?: Maybe<Scalars['String']>;
  command_in?: Maybe<Array<Scalars['String']>>;
  command_not_in?: Maybe<Array<Scalars['String']>>;
  command_contains?: Maybe<Scalars['String']>;
  command_not_contains?: Maybe<Scalars['String']>;
  command_starts_with?: Maybe<Scalars['String']>;
  command_not_starts_with?: Maybe<Scalars['String']>;
  command_ends_with?: Maybe<Scalars['String']>;
  command_not_ends_with?: Maybe<Scalars['String']>;
  helmChart?: Maybe<_HelmChartFilter>;
  helmChart_not?: Maybe<_HelmChartFilter>;
  helmChart_in?: Maybe<Array<_HelmChartFilter>>;
  helmChart_not_in?: Maybe<Array<_HelmChartFilter>>;
  helmChartVersion?: Maybe<Scalars['String']>;
  helmChartVersion_not?: Maybe<Scalars['String']>;
  helmChartVersion_in?: Maybe<Array<Scalars['String']>>;
  helmChartVersion_not_in?: Maybe<Array<Scalars['String']>>;
  helmChartVersion_contains?: Maybe<Scalars['String']>;
  helmChartVersion_not_contains?: Maybe<Scalars['String']>;
  helmChartVersion_starts_with?: Maybe<Scalars['String']>;
  helmChartVersion_not_starts_with?: Maybe<Scalars['String']>;
  helmChartVersion_ends_with?: Maybe<Scalars['String']>;
  helmChartVersion_not_ends_with?: Maybe<Scalars['String']>;
  configs?: Maybe<_ConfigMapFilter>;
  configs_not?: Maybe<_ConfigMapFilter>;
  configs_in?: Maybe<Array<_ConfigMapFilter>>;
  configs_not_in?: Maybe<Array<_ConfigMapFilter>>;
  configs_some?: Maybe<_ConfigMapFilter>;
  configs_none?: Maybe<_ConfigMapFilter>;
  configs_single?: Maybe<_ConfigMapFilter>;
  configs_every?: Maybe<_ConfigMapFilter>;
  facility?: Maybe<_FacilityFilter>;
  facility_not?: Maybe<_FacilityFilter>;
  facility_in?: Maybe<Array<_FacilityFilter>>;
  facility_not_in?: Maybe<Array<_FacilityFilter>>;
  inlets?: Maybe<_ConnectorConfigFilter>;
  inlets_not?: Maybe<_ConnectorConfigFilter>;
  inlets_in?: Maybe<Array<_ConnectorConfigFilter>>;
  inlets_not_in?: Maybe<Array<_ConnectorConfigFilter>>;
  inlets_some?: Maybe<_ConnectorConfigFilter>;
  inlets_none?: Maybe<_ConnectorConfigFilter>;
  inlets_single?: Maybe<_ConnectorConfigFilter>;
  inlets_every?: Maybe<_ConnectorConfigFilter>;
  outlets?: Maybe<_ConnectorConfigFilter>;
  outlets_not?: Maybe<_ConnectorConfigFilter>;
  outlets_in?: Maybe<Array<_ConnectorConfigFilter>>;
  outlets_not_in?: Maybe<Array<_ConnectorConfigFilter>>;
  outlets_some?: Maybe<_ConnectorConfigFilter>;
  outlets_none?: Maybe<_ConnectorConfigFilter>;
  outlets_single?: Maybe<_ConnectorConfigFilter>;
  outlets_every?: Maybe<_ConnectorConfigFilter>;
};

export type _FacilityFilter = {
  AND?: Maybe<Array<_FacilityFilter>>;
  OR?: Maybe<Array<_FacilityFilter>>;
  runnables?: Maybe<_RunnableFilter>;
  runnables_not?: Maybe<_RunnableFilter>;
  runnables_in?: Maybe<Array<_RunnableFilter>>;
  runnables_not_in?: Maybe<Array<_RunnableFilter>>;
  runnables_some?: Maybe<_RunnableFilter>;
  runnables_none?: Maybe<_RunnableFilter>;
  runnables_single?: Maybe<_RunnableFilter>;
  runnables_every?: Maybe<_RunnableFilter>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  id_not_in?: Maybe<Array<Scalars['String']>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  id_starts_with?: Maybe<Scalars['String']>;
  id_not_starts_with?: Maybe<Scalars['String']>;
  id_ends_with?: Maybe<Scalars['String']>;
  id_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<_AddressFilter>;
  address_not?: Maybe<_AddressFilter>;
  address_in?: Maybe<Array<_AddressFilter>>;
  address_not_in?: Maybe<Array<_AddressFilter>>;
  organization?: Maybe<_OrganizationFilter>;
  organization_not?: Maybe<_OrganizationFilter>;
  organization_in?: Maybe<Array<_OrganizationFilter>>;
  organization_not_in?: Maybe<Array<_OrganizationFilter>>;
  groups?: Maybe<_FacilityGroupFilter>;
  groups_not?: Maybe<_FacilityGroupFilter>;
  groups_in?: Maybe<Array<_FacilityGroupFilter>>;
  groups_not_in?: Maybe<Array<_FacilityGroupFilter>>;
  groups_some?: Maybe<_FacilityGroupFilter>;
  groups_none?: Maybe<_FacilityGroupFilter>;
  groups_single?: Maybe<_FacilityGroupFilter>;
  groups_every?: Maybe<_FacilityGroupFilter>;
  assets?: Maybe<_AssetFilter>;
  assets_not?: Maybe<_AssetFilter>;
  assets_in?: Maybe<Array<_AssetFilter>>;
  assets_not_in?: Maybe<Array<_AssetFilter>>;
  assets_some?: Maybe<_AssetFilter>;
  assets_none?: Maybe<_AssetFilter>;
  assets_single?: Maybe<_AssetFilter>;
  assets_every?: Maybe<_AssetFilter>;
  meters?: Maybe<_UtilityMeterFilter>;
  meters_not?: Maybe<_UtilityMeterFilter>;
  meters_in?: Maybe<Array<_UtilityMeterFilter>>;
  meters_not_in?: Maybe<Array<_UtilityMeterFilter>>;
  meters_some?: Maybe<_UtilityMeterFilter>;
  meters_none?: Maybe<_UtilityMeterFilter>;
  meters_single?: Maybe<_UtilityMeterFilter>;
  meters_every?: Maybe<_UtilityMeterFilter>;
};

export type _AddressFilter = {
  AND?: Maybe<Array<_AddressFilter>>;
  OR?: Maybe<Array<_AddressFilter>>;
  address1?: Maybe<Scalars['String']>;
  address1_not?: Maybe<Scalars['String']>;
  address1_in?: Maybe<Array<Scalars['String']>>;
  address1_not_in?: Maybe<Array<Scalars['String']>>;
  address1_contains?: Maybe<Scalars['String']>;
  address1_not_contains?: Maybe<Scalars['String']>;
  address1_starts_with?: Maybe<Scalars['String']>;
  address1_not_starts_with?: Maybe<Scalars['String']>;
  address1_ends_with?: Maybe<Scalars['String']>;
  address1_not_ends_with?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address2_not?: Maybe<Scalars['String']>;
  address2_in?: Maybe<Array<Scalars['String']>>;
  address2_not_in?: Maybe<Array<Scalars['String']>>;
  address2_contains?: Maybe<Scalars['String']>;
  address2_not_contains?: Maybe<Scalars['String']>;
  address2_starts_with?: Maybe<Scalars['String']>;
  address2_not_starts_with?: Maybe<Scalars['String']>;
  address2_ends_with?: Maybe<Scalars['String']>;
  address2_not_ends_with?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  city_not?: Maybe<Scalars['String']>;
  city_in?: Maybe<Array<Scalars['String']>>;
  city_not_in?: Maybe<Array<Scalars['String']>>;
  city_contains?: Maybe<Scalars['String']>;
  city_not_contains?: Maybe<Scalars['String']>;
  city_starts_with?: Maybe<Scalars['String']>;
  city_not_starts_with?: Maybe<Scalars['String']>;
  city_ends_with?: Maybe<Scalars['String']>;
  city_not_ends_with?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  state_not?: Maybe<Scalars['String']>;
  state_in?: Maybe<Array<Scalars['String']>>;
  state_not_in?: Maybe<Array<Scalars['String']>>;
  state_contains?: Maybe<Scalars['String']>;
  state_not_contains?: Maybe<Scalars['String']>;
  state_starts_with?: Maybe<Scalars['String']>;
  state_not_starts_with?: Maybe<Scalars['String']>;
  state_ends_with?: Maybe<Scalars['String']>;
  state_not_ends_with?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  zip_not?: Maybe<Scalars['String']>;
  zip_in?: Maybe<Array<Scalars['String']>>;
  zip_not_in?: Maybe<Array<Scalars['String']>>;
  zip_contains?: Maybe<Scalars['String']>;
  zip_not_contains?: Maybe<Scalars['String']>;
  zip_starts_with?: Maybe<Scalars['String']>;
  zip_not_starts_with?: Maybe<Scalars['String']>;
  zip_ends_with?: Maybe<Scalars['String']>;
  zip_not_ends_with?: Maybe<Scalars['String']>;
};

export type _OrganizationFilter = {
  AND?: Maybe<Array<_OrganizationFilter>>;
  OR?: Maybe<Array<_OrganizationFilter>>;
  tenantId?: Maybe<Scalars['ID']>;
  tenantId_not?: Maybe<Scalars['ID']>;
  tenantId_in?: Maybe<Array<Scalars['ID']>>;
  tenantId_not_in?: Maybe<Array<Scalars['ID']>>;
  tenantId_contains?: Maybe<Scalars['ID']>;
  tenantId_not_contains?: Maybe<Scalars['ID']>;
  tenantId_starts_with?: Maybe<Scalars['ID']>;
  tenantId_not_starts_with?: Maybe<Scalars['ID']>;
  tenantId_ends_with?: Maybe<Scalars['ID']>;
  tenantId_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  facilities?: Maybe<_FacilityFilter>;
  facilities_not?: Maybe<_FacilityFilter>;
  facilities_in?: Maybe<Array<_FacilityFilter>>;
  facilities_not_in?: Maybe<Array<_FacilityFilter>>;
  facilities_some?: Maybe<_FacilityFilter>;
  facilities_none?: Maybe<_FacilityFilter>;
  facilities_single?: Maybe<_FacilityFilter>;
  facilities_every?: Maybe<_FacilityFilter>;
};

export type _FacilityGroupFilter = {
  AND?: Maybe<Array<_FacilityGroupFilter>>;
  OR?: Maybe<Array<_FacilityGroupFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
};

export type _AssetFilter = {
  AND?: Maybe<Array<_AssetFilter>>;
  OR?: Maybe<Array<_AssetFilter>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
};

export type _UtilityMeterFilter = {
  AND?: Maybe<Array<_UtilityMeterFilter>>;
  OR?: Maybe<Array<_UtilityMeterFilter>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  created?: Maybe<_Neo4jDateTimeInput>;
  created_not?: Maybe<_Neo4jDateTimeInput>;
  created_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  created_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  created_lt?: Maybe<_Neo4jDateTimeInput>;
  created_lte?: Maybe<_Neo4jDateTimeInput>;
  created_gt?: Maybe<_Neo4jDateTimeInput>;
  created_gte?: Maybe<_Neo4jDateTimeInput>;
  is_activated?: Maybe<Scalars['Boolean']>;
  is_activated_not?: Maybe<Scalars['Boolean']>;
  account?: Maybe<_UtilityAccountFilter>;
  account_not?: Maybe<_UtilityAccountFilter>;
  account_in?: Maybe<Array<_UtilityAccountFilter>>;
  account_not_in?: Maybe<Array<_UtilityAccountFilter>>;
  facility?: Maybe<_FacilityFilter>;
  facility_not?: Maybe<_FacilityFilter>;
  facility_in?: Maybe<Array<_FacilityFilter>>;
  facility_not_in?: Maybe<Array<_FacilityFilter>>;
  statements?: Maybe<_UtilityStatementFilter>;
  statements_not?: Maybe<_UtilityStatementFilter>;
  statements_in?: Maybe<Array<_UtilityStatementFilter>>;
  statements_not_in?: Maybe<Array<_UtilityStatementFilter>>;
  statements_some?: Maybe<_UtilityStatementFilter>;
  statements_none?: Maybe<_UtilityStatementFilter>;
  statements_single?: Maybe<_UtilityStatementFilter>;
  statements_every?: Maybe<_UtilityStatementFilter>;
};

export type _Neo4jDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _UtilityAccountFilter = {
  AND?: Maybe<Array<_UtilityAccountFilter>>;
  OR?: Maybe<Array<_UtilityAccountFilter>>;
  accountId?: Maybe<Scalars['String']>;
  accountId_not?: Maybe<Scalars['String']>;
  accountId_in?: Maybe<Array<Scalars['String']>>;
  accountId_not_in?: Maybe<Array<Scalars['String']>>;
  accountId_contains?: Maybe<Scalars['String']>;
  accountId_not_contains?: Maybe<Scalars['String']>;
  accountId_starts_with?: Maybe<Scalars['String']>;
  accountId_not_starts_with?: Maybe<Scalars['String']>;
  accountId_ends_with?: Maybe<Scalars['String']>;
  accountId_not_ends_with?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  contact_not?: Maybe<Scalars['String']>;
  contact_in?: Maybe<Array<Scalars['String']>>;
  contact_not_in?: Maybe<Array<Scalars['String']>>;
  contact_contains?: Maybe<Scalars['String']>;
  contact_not_contains?: Maybe<Scalars['String']>;
  contact_starts_with?: Maybe<Scalars['String']>;
  contact_not_starts_with?: Maybe<Scalars['String']>;
  contact_ends_with?: Maybe<Scalars['String']>;
  contact_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<_AddressFilter>;
  address_not?: Maybe<_AddressFilter>;
  address_in?: Maybe<Array<_AddressFilter>>;
  address_not_in?: Maybe<Array<_AddressFilter>>;
  provider?: Maybe<_UtilityProviderFilter>;
  provider_not?: Maybe<_UtilityProviderFilter>;
  provider_in?: Maybe<Array<_UtilityProviderFilter>>;
  provider_not_in?: Maybe<Array<_UtilityProviderFilter>>;
};

export type _UtilityProviderFilter = {
  AND?: Maybe<Array<_UtilityProviderFilter>>;
  OR?: Maybe<Array<_UtilityProviderFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  accounts?: Maybe<_UtilityAccountFilter>;
  accounts_not?: Maybe<_UtilityAccountFilter>;
  accounts_in?: Maybe<Array<_UtilityAccountFilter>>;
  accounts_not_in?: Maybe<Array<_UtilityAccountFilter>>;
  accounts_some?: Maybe<_UtilityAccountFilter>;
  accounts_none?: Maybe<_UtilityAccountFilter>;
  accounts_single?: Maybe<_UtilityAccountFilter>;
  accounts_every?: Maybe<_UtilityAccountFilter>;
};

export type _UtilityStatementFilter = {
  AND?: Maybe<Array<_UtilityStatementFilter>>;
  OR?: Maybe<Array<_UtilityStatementFilter>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  pdf?: Maybe<Scalars['String']>;
  pdf_not?: Maybe<Scalars['String']>;
  pdf_in?: Maybe<Array<Scalars['String']>>;
  pdf_not_in?: Maybe<Array<Scalars['String']>>;
  pdf_contains?: Maybe<Scalars['String']>;
  pdf_not_contains?: Maybe<Scalars['String']>;
  pdf_starts_with?: Maybe<Scalars['String']>;
  pdf_not_starts_with?: Maybe<Scalars['String']>;
  pdf_ends_with?: Maybe<Scalars['String']>;
  pdf_not_ends_with?: Maybe<Scalars['String']>;
  statementDate?: Maybe<_Neo4jDateTimeInput>;
  statementDate_not?: Maybe<_Neo4jDateTimeInput>;
  statementDate_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  statementDate_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  statementDate_lt?: Maybe<_Neo4jDateTimeInput>;
  statementDate_lte?: Maybe<_Neo4jDateTimeInput>;
  statementDate_gt?: Maybe<_Neo4jDateTimeInput>;
  statementDate_gte?: Maybe<_Neo4jDateTimeInput>;
  startDate?: Maybe<_Neo4jDateTimeInput>;
  startDate_not?: Maybe<_Neo4jDateTimeInput>;
  startDate_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  startDate_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  startDate_lt?: Maybe<_Neo4jDateTimeInput>;
  startDate_lte?: Maybe<_Neo4jDateTimeInput>;
  startDate_gt?: Maybe<_Neo4jDateTimeInput>;
  startDate_gte?: Maybe<_Neo4jDateTimeInput>;
  endDate?: Maybe<_Neo4jDateTimeInput>;
  endDate_not?: Maybe<_Neo4jDateTimeInput>;
  endDate_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  endDate_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  endDate_lt?: Maybe<_Neo4jDateTimeInput>;
  endDate_lte?: Maybe<_Neo4jDateTimeInput>;
  endDate_gt?: Maybe<_Neo4jDateTimeInput>;
  endDate_gte?: Maybe<_Neo4jDateTimeInput>;
  meter?: Maybe<_UtilityMeterFilter>;
  meter_not?: Maybe<_UtilityMeterFilter>;
  meter_in?: Maybe<Array<_UtilityMeterFilter>>;
  meter_not_in?: Maybe<Array<_UtilityMeterFilter>>;
};

export type _ConnectorConfigFilter = {
  AND?: Maybe<Array<_ConnectorConfigFilter>>;
  OR?: Maybe<Array<_ConnectorConfigFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  topicName?: Maybe<Scalars['String']>;
  topicName_not?: Maybe<Scalars['String']>;
  topicName_in?: Maybe<Array<Scalars['String']>>;
  topicName_not_in?: Maybe<Array<Scalars['String']>>;
  topicName_contains?: Maybe<Scalars['String']>;
  topicName_not_contains?: Maybe<Scalars['String']>;
  topicName_starts_with?: Maybe<Scalars['String']>;
  topicName_not_starts_with?: Maybe<Scalars['String']>;
  topicName_ends_with?: Maybe<Scalars['String']>;
  topicName_not_ends_with?: Maybe<Scalars['String']>;
  source?: Maybe<_RunnableFilter>;
  source_not?: Maybe<_RunnableFilter>;
  source_in?: Maybe<Array<_RunnableFilter>>;
  source_not_in?: Maybe<Array<_RunnableFilter>>;
  destination?: Maybe<_RunnableFilter>;
  destination_not?: Maybe<_RunnableFilter>;
  destination_in?: Maybe<Array<_RunnableFilter>>;
  destination_not_in?: Maybe<Array<_RunnableFilter>>;
  destination_some?: Maybe<_RunnableFilter>;
  destination_none?: Maybe<_RunnableFilter>;
  destination_single?: Maybe<_RunnableFilter>;
  destination_every?: Maybe<_RunnableFilter>;
};

export type Runnable = {
  __typename?: 'Runnable';
  name: Scalars['String'];
  repository?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  command?: Maybe<Scalars['String']>;
  helmChart?: Maybe<HelmChart>;
  helmChartVersion?: Maybe<Scalars['String']>;
  upstream?: Maybe<Scalars['JSON']>;
  configTree?: Maybe<Scalars['JSON']>;
  configs?: Maybe<Array<ConfigMap>>;
  facility?: Maybe<Facility>;
  inlets?: Maybe<Array<Maybe<ConnectorConfig>>>;
  outlets?: Maybe<Array<Maybe<ConnectorConfig>>>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type RunnableHelmChartArgs = {
  filter?: Maybe<_HelmChartFilter>;
};


export type RunnableConfigsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ConfigMapOrdering>>>;
  filter?: Maybe<_ConfigMapFilter>;
};


export type RunnableFacilityArgs = {
  filter?: Maybe<_FacilityFilter>;
};


export type RunnableInletsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ConnectorConfigOrdering>>>;
  filter?: Maybe<_ConnectorConfigFilter>;
};


export type RunnableOutletsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ConnectorConfigOrdering>>>;
  filter?: Maybe<_ConnectorConfigFilter>;
};

export type Facility = {
  __typename?: 'Facility';
  runnables?: Maybe<Array<Runnable>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  organization?: Maybe<Organization>;
  groups?: Maybe<Array<Maybe<FacilityGroup>>>;
  assets?: Maybe<Array<Maybe<Asset>>>;
  meters?: Maybe<Array<Maybe<UtilityMeter>>>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type FacilityRunnablesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RunnableOrdering>>>;
  filter?: Maybe<_RunnableFilter>;
};


export type FacilityAddressArgs = {
  filter?: Maybe<_AddressFilter>;
};


export type FacilityOrganizationArgs = {
  filter?: Maybe<_OrganizationFilter>;
};


export type FacilityGroupsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_FacilityGroupOrdering>>>;
  filter?: Maybe<_FacilityGroupFilter>;
};


export type FacilityAssetsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AssetOrdering>>>;
  filter?: Maybe<_AssetFilter>;
};


export type FacilityMetersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UtilityMeterOrdering>>>;
  filter?: Maybe<_UtilityMeterFilter>;
};

export type Address = {
  __typename?: 'Address';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};

export type Organization = {
  __typename?: 'Organization';
  tenantId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  facilities?: Maybe<Array<Maybe<Facility>>>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type OrganizationFacilitiesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_FacilityOrdering>>>;
  filter?: Maybe<_FacilityFilter>;
};

export enum _FacilityOrdering {
  id_asc = 'id_asc',
  id_desc = 'id_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export enum _FacilityGroupOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type FacilityGroup = {
  __typename?: 'FacilityGroup';
  name?: Maybe<Scalars['String']>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};

export enum _AssetOrdering {
  id_asc = 'id_asc',
  id_desc = 'id_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc'
}

export type Asset = {
  id: Scalars['ID'];
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
};

export enum _UtilityMeterOrdering {
  id_asc = 'id_asc',
  id_desc = 'id_desc',
  created_asc = 'created_asc',
  created_desc = 'created_desc',
  is_activated_asc = 'is_activated_asc',
  is_activated_desc = 'is_activated_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type UtilityMeter = Asset & {
  __typename?: 'UtilityMeter';
  id: Scalars['ID'];
  created?: Maybe<_Neo4jDateTime>;
  is_activated?: Maybe<Scalars['Boolean']>;
  account?: Maybe<UtilityAccount>;
  usage?: Maybe<Array<Maybe<Series>>>;
  facility?: Maybe<Facility>;
  statements?: Maybe<Array<Maybe<UtilityStatement>>>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type UtilityMeterAccountArgs = {
  filter?: Maybe<_UtilityAccountFilter>;
};


export type UtilityMeterUsageArgs = {
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};


export type UtilityMeterFacilityArgs = {
  filter?: Maybe<_FacilityFilter>;
};


export type UtilityMeterStatementsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UtilityStatementOrdering>>>;
  filter?: Maybe<_UtilityStatementFilter>;
};

export type _Neo4jDateTime = {
  __typename?: '_Neo4jDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type UtilityAccount = {
  __typename?: 'UtilityAccount';
  accountId?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  provider?: Maybe<UtilityProvider>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type UtilityAccountAddressArgs = {
  filter?: Maybe<_AddressFilter>;
};


export type UtilityAccountProviderArgs = {
  filter?: Maybe<_UtilityProviderFilter>;
};

export type UtilityProvider = {
  __typename?: 'UtilityProvider';
  name?: Maybe<Scalars['String']>;
  accounts?: Maybe<Array<Maybe<UtilityAccount>>>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type UtilityProviderAccountsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UtilityAccountOrdering>>>;
  filter?: Maybe<_UtilityAccountFilter>;
};

export enum _UtilityAccountOrdering {
  accountId_asc = 'accountId_asc',
  accountId_desc = 'accountId_desc',
  contact_asc = 'contact_asc',
  contact_desc = 'contact_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type Series = {
  __typename?: 'Series';
  time?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export enum _UtilityStatementOrdering {
  id_asc = 'id_asc',
  id_desc = 'id_desc',
  pdf_asc = 'pdf_asc',
  pdf_desc = 'pdf_desc',
  statementDate_asc = 'statementDate_asc',
  statementDate_desc = 'statementDate_desc',
  startDate_asc = 'startDate_asc',
  startDate_desc = 'startDate_desc',
  endDate_asc = 'endDate_asc',
  endDate_desc = 'endDate_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type UtilityStatement = {
  __typename?: 'UtilityStatement';
  id: Scalars['ID'];
  pdf?: Maybe<Scalars['String']>;
  statementDate?: Maybe<_Neo4jDateTime>;
  startDate?: Maybe<_Neo4jDateTime>;
  endDate?: Maybe<_Neo4jDateTime>;
  meter?: Maybe<UtilityMeter>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type UtilityStatementMeterArgs = {
  filter?: Maybe<_UtilityMeterFilter>;
};

export enum _ConnectorConfigOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  topicName_asc = 'topicName_asc',
  topicName_desc = 'topicName_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type ConnectorConfig = {
  __typename?: 'ConnectorConfig';
  name: Scalars['String'];
  topicName?: Maybe<Scalars['String']>;
  source?: Maybe<Runnable>;
  destination?: Maybe<Array<Maybe<Runnable>>>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type ConnectorConfigSourceArgs = {
  filter?: Maybe<_RunnableFilter>;
};


export type ConnectorConfigDestinationArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RunnableOrdering>>>;
  filter?: Maybe<_RunnableFilter>;
};

export enum _OrganizationOrdering {
  tenantId_asc = 'tenantId_asc',
  tenantId_desc = 'tenantId_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export enum _AddressOrdering {
  address1_asc = 'address1_asc',
  address1_desc = 'address1_desc',
  address2_asc = 'address2_asc',
  address2_desc = 'address2_desc',
  city_asc = 'city_asc',
  city_desc = 'city_desc',
  state_asc = 'state_asc',
  state_desc = 'state_desc',
  zip_asc = 'zip_asc',
  zip_desc = 'zip_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export enum _NovozymesFacilityConfigOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  slug_asc = 'slug_asc',
  slug_desc = 'slug_desc',
  contxtId_asc = 'contxtId_asc',
  contxtId_desc = 'contxtId_desc',
  iotKey_asc = 'iotKey_asc',
  iotKey_desc = 'iotKey_desc',
  provisioningUrl_asc = 'provisioningUrl_asc',
  provisioningUrl_desc = 'provisioningUrl_desc',
  extractSince_asc = 'extractSince_asc',
  extractSince_desc = 'extractSince_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type _NovozymesFacilityConfigFilter = {
  AND?: Maybe<Array<_NovozymesFacilityConfigFilter>>;
  OR?: Maybe<Array<_NovozymesFacilityConfigFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  contxtId?: Maybe<Scalars['Int']>;
  contxtId_not?: Maybe<Scalars['Int']>;
  contxtId_in?: Maybe<Array<Scalars['Int']>>;
  contxtId_not_in?: Maybe<Array<Scalars['Int']>>;
  contxtId_lt?: Maybe<Scalars['Int']>;
  contxtId_lte?: Maybe<Scalars['Int']>;
  contxtId_gt?: Maybe<Scalars['Int']>;
  contxtId_gte?: Maybe<Scalars['Int']>;
  iotKey?: Maybe<Scalars['String']>;
  iotKey_not?: Maybe<Scalars['String']>;
  iotKey_in?: Maybe<Array<Scalars['String']>>;
  iotKey_not_in?: Maybe<Array<Scalars['String']>>;
  iotKey_contains?: Maybe<Scalars['String']>;
  iotKey_not_contains?: Maybe<Scalars['String']>;
  iotKey_starts_with?: Maybe<Scalars['String']>;
  iotKey_not_starts_with?: Maybe<Scalars['String']>;
  iotKey_ends_with?: Maybe<Scalars['String']>;
  iotKey_not_ends_with?: Maybe<Scalars['String']>;
  provisioningUrl?: Maybe<Scalars['String']>;
  provisioningUrl_not?: Maybe<Scalars['String']>;
  provisioningUrl_in?: Maybe<Array<Scalars['String']>>;
  provisioningUrl_not_in?: Maybe<Array<Scalars['String']>>;
  provisioningUrl_contains?: Maybe<Scalars['String']>;
  provisioningUrl_not_contains?: Maybe<Scalars['String']>;
  provisioningUrl_starts_with?: Maybe<Scalars['String']>;
  provisioningUrl_not_starts_with?: Maybe<Scalars['String']>;
  provisioningUrl_ends_with?: Maybe<Scalars['String']>;
  provisioningUrl_not_ends_with?: Maybe<Scalars['String']>;
};

export type NovozymesFacilityConfig = ConfigMap & {
  __typename?: 'NovozymesFacilityConfig';
  name: Scalars['String'];
  slug: Scalars['String'];
  contxtId: Scalars['Int'];
  iotKey: Scalars['String'];
  provisioningUrl: Scalars['String'];
  extractSince?: Maybe<Scalars['DateTime']>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};

export enum _NovozymesDataSourceOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  url_asc = 'url_asc',
  url_desc = 'url_desc',
  host_asc = 'host_asc',
  host_desc = 'host_desc',
  port_asc = 'port_asc',
  port_desc = 'port_desc',
  username_asc = 'username_asc',
  username_desc = 'username_desc',
  password_asc = 'password_asc',
  password_desc = 'password_desc',
  timezone_asc = 'timezone_asc',
  timezone_desc = 'timezone_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type _NovozymesDataSourceFilter = {
  AND?: Maybe<Array<_NovozymesDataSourceFilter>>;
  OR?: Maybe<Array<_NovozymesDataSourceFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Scalars['String']>>;
  url_not_in?: Maybe<Array<Scalars['String']>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  url_starts_with?: Maybe<Scalars['String']>;
  url_not_starts_with?: Maybe<Scalars['String']>;
  url_ends_with?: Maybe<Scalars['String']>;
  url_not_ends_with?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  host_not?: Maybe<Scalars['String']>;
  host_in?: Maybe<Array<Scalars['String']>>;
  host_not_in?: Maybe<Array<Scalars['String']>>;
  host_contains?: Maybe<Scalars['String']>;
  host_not_contains?: Maybe<Scalars['String']>;
  host_starts_with?: Maybe<Scalars['String']>;
  host_not_starts_with?: Maybe<Scalars['String']>;
  host_ends_with?: Maybe<Scalars['String']>;
  host_not_ends_with?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  port_not?: Maybe<Scalars['String']>;
  port_in?: Maybe<Array<Scalars['String']>>;
  port_not_in?: Maybe<Array<Scalars['String']>>;
  port_contains?: Maybe<Scalars['String']>;
  port_not_contains?: Maybe<Scalars['String']>;
  port_starts_with?: Maybe<Scalars['String']>;
  port_not_starts_with?: Maybe<Scalars['String']>;
  port_ends_with?: Maybe<Scalars['String']>;
  port_not_ends_with?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_not?: Maybe<Scalars['String']>;
  username_in?: Maybe<Array<Scalars['String']>>;
  username_not_in?: Maybe<Array<Scalars['String']>>;
  username_contains?: Maybe<Scalars['String']>;
  username_not_contains?: Maybe<Scalars['String']>;
  username_starts_with?: Maybe<Scalars['String']>;
  username_not_starts_with?: Maybe<Scalars['String']>;
  username_ends_with?: Maybe<Scalars['String']>;
  username_not_ends_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  password_not?: Maybe<Scalars['String']>;
  password_in?: Maybe<Array<Scalars['String']>>;
  password_not_in?: Maybe<Array<Scalars['String']>>;
  password_contains?: Maybe<Scalars['String']>;
  password_not_contains?: Maybe<Scalars['String']>;
  password_starts_with?: Maybe<Scalars['String']>;
  password_not_starts_with?: Maybe<Scalars['String']>;
  password_ends_with?: Maybe<Scalars['String']>;
  password_not_ends_with?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  timezone_not?: Maybe<Scalars['String']>;
  timezone_in?: Maybe<Array<Scalars['String']>>;
  timezone_not_in?: Maybe<Array<Scalars['String']>>;
  timezone_contains?: Maybe<Scalars['String']>;
  timezone_not_contains?: Maybe<Scalars['String']>;
  timezone_starts_with?: Maybe<Scalars['String']>;
  timezone_not_starts_with?: Maybe<Scalars['String']>;
  timezone_ends_with?: Maybe<Scalars['String']>;
  timezone_not_ends_with?: Maybe<Scalars['String']>;
  extractorConfig?: Maybe<_BatchExtractorConfigFilter>;
  extractorConfig_not?: Maybe<_BatchExtractorConfigFilter>;
  extractorConfig_in?: Maybe<Array<_BatchExtractorConfigFilter>>;
  extractorConfig_not_in?: Maybe<Array<_BatchExtractorConfigFilter>>;
};

export type _BatchExtractorConfigFilter = {
  AND?: Maybe<Array<_BatchExtractorConfigFilter>>;
  OR?: Maybe<Array<_BatchExtractorConfigFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  envName?: Maybe<Scalars['String']>;
  envName_not?: Maybe<Scalars['String']>;
  envName_in?: Maybe<Array<Scalars['String']>>;
  envName_not_in?: Maybe<Array<Scalars['String']>>;
  envName_contains?: Maybe<Scalars['String']>;
  envName_not_contains?: Maybe<Scalars['String']>;
  envName_starts_with?: Maybe<Scalars['String']>;
  envName_not_starts_with?: Maybe<Scalars['String']>;
  envName_ends_with?: Maybe<Scalars['String']>;
  envName_not_ends_with?: Maybe<Scalars['String']>;
  batchExtractor?: Maybe<Scalars['String']>;
  batchExtractor_not?: Maybe<Scalars['String']>;
  batchExtractor_in?: Maybe<Array<Scalars['String']>>;
  batchExtractor_not_in?: Maybe<Array<Scalars['String']>>;
  batchExtractor_contains?: Maybe<Scalars['String']>;
  batchExtractor_not_contains?: Maybe<Scalars['String']>;
  batchExtractor_starts_with?: Maybe<Scalars['String']>;
  batchExtractor_not_starts_with?: Maybe<Scalars['String']>;
  batchExtractor_ends_with?: Maybe<Scalars['String']>;
  batchExtractor_not_ends_with?: Maybe<Scalars['String']>;
  batchIndicatorTemplate?: Maybe<Scalars['String']>;
  batchIndicatorTemplate_not?: Maybe<Scalars['String']>;
  batchIndicatorTemplate_in?: Maybe<Array<Scalars['String']>>;
  batchIndicatorTemplate_not_in?: Maybe<Array<Scalars['String']>>;
  batchIndicatorTemplate_contains?: Maybe<Scalars['String']>;
  batchIndicatorTemplate_not_contains?: Maybe<Scalars['String']>;
  batchIndicatorTemplate_starts_with?: Maybe<Scalars['String']>;
  batchIndicatorTemplate_not_starts_with?: Maybe<Scalars['String']>;
  batchIndicatorTemplate_ends_with?: Maybe<Scalars['String']>;
  batchIndicatorTemplate_not_ends_with?: Maybe<Scalars['String']>;
  tagExtractor?: Maybe<_TagExtractorConfigFilter>;
  tagExtractor_not?: Maybe<_TagExtractorConfigFilter>;
  tagExtractor_in?: Maybe<Array<_TagExtractorConfigFilter>>;
  tagExtractor_not_in?: Maybe<Array<_TagExtractorConfigFilter>>;
};

export type _TagExtractorConfigFilter = {
  AND?: Maybe<Array<_TagExtractorConfigFilter>>;
  OR?: Maybe<Array<_TagExtractorConfigFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  tagExtractor?: Maybe<Scalars['String']>;
  tagExtractor_not?: Maybe<Scalars['String']>;
  tagExtractor_in?: Maybe<Array<Scalars['String']>>;
  tagExtractor_not_in?: Maybe<Array<Scalars['String']>>;
  tagExtractor_contains?: Maybe<Scalars['String']>;
  tagExtractor_not_contains?: Maybe<Scalars['String']>;
  tagExtractor_starts_with?: Maybe<Scalars['String']>;
  tagExtractor_not_starts_with?: Maybe<Scalars['String']>;
  tagExtractor_ends_with?: Maybe<Scalars['String']>;
  tagExtractor_not_ends_with?: Maybe<Scalars['String']>;
};

export type NovozymesDataSource = DataSource & ConfigMap & {
  __typename?: 'NovozymesDataSource';
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  extractorConfig?: Maybe<BatchExtractorConfig>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type NovozymesDataSourceExtractorConfigArgs = {
  filter?: Maybe<_BatchExtractorConfigFilter>;
};

export type BatchExtractorConfig = ConfigMap & {
  __typename?: 'BatchExtractorConfig';
  name: Scalars['String'];
  envName: Scalars['String'];
  batchExtractor?: Maybe<Scalars['String']>;
  batchIndicatorTemplate?: Maybe<Scalars['String']>;
  tagExtractor?: Maybe<TagExtractorConfig>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type BatchExtractorConfigTagExtractorArgs = {
  filter?: Maybe<_TagExtractorConfigFilter>;
};

export type TagExtractorConfig = ConfigMap & {
  __typename?: 'TagExtractorConfig';
  name: Scalars['String'];
  tagExtractor?: Maybe<Scalars['String']>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};

export enum _BatchExtractorConfigOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  envName_asc = 'envName_asc',
  envName_desc = 'envName_desc',
  batchExtractor_asc = 'batchExtractor_asc',
  batchExtractor_desc = 'batchExtractor_desc',
  batchIndicatorTemplate_asc = 'batchIndicatorTemplate_asc',
  batchIndicatorTemplate_desc = 'batchIndicatorTemplate_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export enum _TagExtractorConfigOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  tagExtractor_asc = 'tagExtractor_asc',
  tagExtractor_desc = 'tagExtractor_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export enum _UtilityProviderOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export enum _WmsDataSourceOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  url_asc = 'url_asc',
  url_desc = 'url_desc',
  host_asc = 'host_asc',
  host_desc = 'host_desc',
  port_asc = 'port_asc',
  port_desc = 'port_desc',
  username_asc = 'username_asc',
  username_desc = 'username_desc',
  password_asc = 'password_asc',
  password_desc = 'password_desc',
  sourceId_asc = 'sourceId_asc',
  sourceId_desc = 'sourceId_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type _WmsDataSourceFilter = {
  AND?: Maybe<Array<_WmsDataSourceFilter>>;
  OR?: Maybe<Array<_WmsDataSourceFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Scalars['String']>>;
  url_not_in?: Maybe<Array<Scalars['String']>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  url_starts_with?: Maybe<Scalars['String']>;
  url_not_starts_with?: Maybe<Scalars['String']>;
  url_ends_with?: Maybe<Scalars['String']>;
  url_not_ends_with?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  host_not?: Maybe<Scalars['String']>;
  host_in?: Maybe<Array<Scalars['String']>>;
  host_not_in?: Maybe<Array<Scalars['String']>>;
  host_contains?: Maybe<Scalars['String']>;
  host_not_contains?: Maybe<Scalars['String']>;
  host_starts_with?: Maybe<Scalars['String']>;
  host_not_starts_with?: Maybe<Scalars['String']>;
  host_ends_with?: Maybe<Scalars['String']>;
  host_not_ends_with?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  port_not?: Maybe<Scalars['String']>;
  port_in?: Maybe<Array<Scalars['String']>>;
  port_not_in?: Maybe<Array<Scalars['String']>>;
  port_contains?: Maybe<Scalars['String']>;
  port_not_contains?: Maybe<Scalars['String']>;
  port_starts_with?: Maybe<Scalars['String']>;
  port_not_starts_with?: Maybe<Scalars['String']>;
  port_ends_with?: Maybe<Scalars['String']>;
  port_not_ends_with?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_not?: Maybe<Scalars['String']>;
  username_in?: Maybe<Array<Scalars['String']>>;
  username_not_in?: Maybe<Array<Scalars['String']>>;
  username_contains?: Maybe<Scalars['String']>;
  username_not_contains?: Maybe<Scalars['String']>;
  username_starts_with?: Maybe<Scalars['String']>;
  username_not_starts_with?: Maybe<Scalars['String']>;
  username_ends_with?: Maybe<Scalars['String']>;
  username_not_ends_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  password_not?: Maybe<Scalars['String']>;
  password_in?: Maybe<Array<Scalars['String']>>;
  password_not_in?: Maybe<Array<Scalars['String']>>;
  password_contains?: Maybe<Scalars['String']>;
  password_not_contains?: Maybe<Scalars['String']>;
  password_starts_with?: Maybe<Scalars['String']>;
  password_not_starts_with?: Maybe<Scalars['String']>;
  password_ends_with?: Maybe<Scalars['String']>;
  password_not_ends_with?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['Int']>;
  sourceId_not?: Maybe<Scalars['Int']>;
  sourceId_in?: Maybe<Array<Scalars['Int']>>;
  sourceId_not_in?: Maybe<Array<Scalars['Int']>>;
  sourceId_lt?: Maybe<Scalars['Int']>;
  sourceId_lte?: Maybe<Scalars['Int']>;
  sourceId_gt?: Maybe<Scalars['Int']>;
  sourceId_gte?: Maybe<Scalars['Int']>;
};

export type WmsDataSource = DataSource & ConfigMap & {
  __typename?: 'WmsDataSource';
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['Int']>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};

export enum _CanonicalOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type _CanonicalFilter = {
  AND?: Maybe<Array<_CanonicalFilter>>;
  OR?: Maybe<Array<_CanonicalFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  extractors?: Maybe<_ExtractorConfigMapFilter>;
  extractors_not?: Maybe<_ExtractorConfigMapFilter>;
  extractors_in?: Maybe<Array<_ExtractorConfigMapFilter>>;
  extractors_not_in?: Maybe<Array<_ExtractorConfigMapFilter>>;
  extractors_some?: Maybe<_ExtractorConfigMapFilter>;
  extractors_none?: Maybe<_ExtractorConfigMapFilter>;
  extractors_single?: Maybe<_ExtractorConfigMapFilter>;
  extractors_every?: Maybe<_ExtractorConfigMapFilter>;
};

export type _ExtractorConfigMapFilter = {
  AND?: Maybe<Array<_ExtractorConfigMapFilter>>;
  OR?: Maybe<Array<_ExtractorConfigMapFilter>>;
  query?: Maybe<Scalars['String']>;
  query_not?: Maybe<Scalars['String']>;
  query_in?: Maybe<Array<Scalars['String']>>;
  query_not_in?: Maybe<Array<Scalars['String']>>;
  query_contains?: Maybe<Scalars['String']>;
  query_not_contains?: Maybe<Scalars['String']>;
  query_starts_with?: Maybe<Scalars['String']>;
  query_not_starts_with?: Maybe<Scalars['String']>;
  query_ends_with?: Maybe<Scalars['String']>;
  query_not_ends_with?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchPeriod_not?: Maybe<Scalars['Int']>;
  fetchPeriod_in?: Maybe<Array<Scalars['Int']>>;
  fetchPeriod_not_in?: Maybe<Array<Scalars['Int']>>;
  fetchPeriod_lt?: Maybe<Scalars['Int']>;
  fetchPeriod_lte?: Maybe<Scalars['Int']>;
  fetchPeriod_gt?: Maybe<Scalars['Int']>;
  fetchPeriod_gte?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
  fetchSize_not?: Maybe<Scalars['Int']>;
  fetchSize_in?: Maybe<Array<Scalars['Int']>>;
  fetchSize_not_in?: Maybe<Array<Scalars['Int']>>;
  fetchSize_lt?: Maybe<Scalars['Int']>;
  fetchSize_lte?: Maybe<Scalars['Int']>;
  fetchSize_gt?: Maybe<Scalars['Int']>;
  fetchSize_gte?: Maybe<Scalars['Int']>;
  canonical?: Maybe<_CanonicalFilter>;
  canonical_not?: Maybe<_CanonicalFilter>;
  canonical_in?: Maybe<Array<_CanonicalFilter>>;
  canonical_not_in?: Maybe<Array<_CanonicalFilter>>;
};

export type Canonical = ConfigMap & {
  __typename?: 'Canonical';
  name: Scalars['String'];
  extractors?: Maybe<Array<Maybe<ExtractorConfigMap>>>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type CanonicalExtractorsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ExtractorConfigMapOrdering>>>;
  filter?: Maybe<_ExtractorConfigMapFilter>;
};

export enum _ExtractorConfigMapOrdering {
  query_asc = 'query_asc',
  query_desc = 'query_desc',
  fetchPeriod_asc = 'fetchPeriod_asc',
  fetchPeriod_desc = 'fetchPeriod_desc',
  fetchSize_asc = 'fetchSize_asc',
  fetchSize_desc = 'fetchSize_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc'
}

export type ExtractorConfigMap = {
  query: Scalars['String'];
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
  canonical?: Maybe<Canonical>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
};


export type ExtractorConfigMapCanonicalArgs = {
  filter?: Maybe<_CanonicalFilter>;
};

export enum _CdtExtractorConfigMapOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  upsertId_asc = 'upsertId_asc',
  upsertId_desc = 'upsertId_desc',
  deleteId_asc = 'deleteId_asc',
  deleteId_desc = 'deleteId_desc',
  cdtId_asc = 'cdtId_asc',
  cdtId_desc = 'cdtId_desc',
  query_asc = 'query_asc',
  query_desc = 'query_desc',
  fetchPeriod_asc = 'fetchPeriod_asc',
  fetchPeriod_desc = 'fetchPeriod_desc',
  fetchSize_asc = 'fetchSize_asc',
  fetchSize_desc = 'fetchSize_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type _CdtExtractorConfigMapFilter = {
  AND?: Maybe<Array<_CdtExtractorConfigMapFilter>>;
  OR?: Maybe<Array<_CdtExtractorConfigMapFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  upsertId?: Maybe<Scalars['String']>;
  upsertId_not?: Maybe<Scalars['String']>;
  upsertId_in?: Maybe<Array<Scalars['String']>>;
  upsertId_not_in?: Maybe<Array<Scalars['String']>>;
  upsertId_contains?: Maybe<Scalars['String']>;
  upsertId_not_contains?: Maybe<Scalars['String']>;
  upsertId_starts_with?: Maybe<Scalars['String']>;
  upsertId_not_starts_with?: Maybe<Scalars['String']>;
  upsertId_ends_with?: Maybe<Scalars['String']>;
  upsertId_not_ends_with?: Maybe<Scalars['String']>;
  deleteId?: Maybe<Scalars['String']>;
  deleteId_not?: Maybe<Scalars['String']>;
  deleteId_in?: Maybe<Array<Scalars['String']>>;
  deleteId_not_in?: Maybe<Array<Scalars['String']>>;
  deleteId_contains?: Maybe<Scalars['String']>;
  deleteId_not_contains?: Maybe<Scalars['String']>;
  deleteId_starts_with?: Maybe<Scalars['String']>;
  deleteId_not_starts_with?: Maybe<Scalars['String']>;
  deleteId_ends_with?: Maybe<Scalars['String']>;
  deleteId_not_ends_with?: Maybe<Scalars['String']>;
  cdtId?: Maybe<Scalars['String']>;
  cdtId_not?: Maybe<Scalars['String']>;
  cdtId_in?: Maybe<Array<Scalars['String']>>;
  cdtId_not_in?: Maybe<Array<Scalars['String']>>;
  cdtId_contains?: Maybe<Scalars['String']>;
  cdtId_not_contains?: Maybe<Scalars['String']>;
  cdtId_starts_with?: Maybe<Scalars['String']>;
  cdtId_not_starts_with?: Maybe<Scalars['String']>;
  cdtId_ends_with?: Maybe<Scalars['String']>;
  cdtId_not_ends_with?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  query_not?: Maybe<Scalars['String']>;
  query_in?: Maybe<Array<Scalars['String']>>;
  query_not_in?: Maybe<Array<Scalars['String']>>;
  query_contains?: Maybe<Scalars['String']>;
  query_not_contains?: Maybe<Scalars['String']>;
  query_starts_with?: Maybe<Scalars['String']>;
  query_not_starts_with?: Maybe<Scalars['String']>;
  query_ends_with?: Maybe<Scalars['String']>;
  query_not_ends_with?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchPeriod_not?: Maybe<Scalars['Int']>;
  fetchPeriod_in?: Maybe<Array<Scalars['Int']>>;
  fetchPeriod_not_in?: Maybe<Array<Scalars['Int']>>;
  fetchPeriod_lt?: Maybe<Scalars['Int']>;
  fetchPeriod_lte?: Maybe<Scalars['Int']>;
  fetchPeriod_gt?: Maybe<Scalars['Int']>;
  fetchPeriod_gte?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
  fetchSize_not?: Maybe<Scalars['Int']>;
  fetchSize_in?: Maybe<Array<Scalars['Int']>>;
  fetchSize_not_in?: Maybe<Array<Scalars['Int']>>;
  fetchSize_lt?: Maybe<Scalars['Int']>;
  fetchSize_lte?: Maybe<Scalars['Int']>;
  fetchSize_gt?: Maybe<Scalars['Int']>;
  fetchSize_gte?: Maybe<Scalars['Int']>;
  canonical?: Maybe<_CanonicalFilter>;
  canonical_not?: Maybe<_CanonicalFilter>;
  canonical_in?: Maybe<Array<_CanonicalFilter>>;
  canonical_not_in?: Maybe<Array<_CanonicalFilter>>;
};

export type CdtExtractorConfigMap = ExtractorConfigMap & ConfigMap & {
  __typename?: 'CdtExtractorConfigMap';
  name: Scalars['String'];
  upsertId?: Maybe<Scalars['String']>;
  deleteId?: Maybe<Scalars['String']>;
  cdtId?: Maybe<Scalars['String']>;
  query: Scalars['String'];
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
  canonical?: Maybe<Canonical>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type CdtExtractorConfigMapCanonicalArgs = {
  filter?: Maybe<_CanonicalFilter>;
};

export enum _CdcExtractorConfigMapOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  query_asc = 'query_asc',
  query_desc = 'query_desc',
  fetchPeriod_asc = 'fetchPeriod_asc',
  fetchPeriod_desc = 'fetchPeriod_desc',
  fetchSize_asc = 'fetchSize_asc',
  fetchSize_desc = 'fetchSize_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type _CdcExtractorConfigMapFilter = {
  AND?: Maybe<Array<_CdcExtractorConfigMapFilter>>;
  OR?: Maybe<Array<_CdcExtractorConfigMapFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  query_not?: Maybe<Scalars['String']>;
  query_in?: Maybe<Array<Scalars['String']>>;
  query_not_in?: Maybe<Array<Scalars['String']>>;
  query_contains?: Maybe<Scalars['String']>;
  query_not_contains?: Maybe<Scalars['String']>;
  query_starts_with?: Maybe<Scalars['String']>;
  query_not_starts_with?: Maybe<Scalars['String']>;
  query_ends_with?: Maybe<Scalars['String']>;
  query_not_ends_with?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchPeriod_not?: Maybe<Scalars['Int']>;
  fetchPeriod_in?: Maybe<Array<Scalars['Int']>>;
  fetchPeriod_not_in?: Maybe<Array<Scalars['Int']>>;
  fetchPeriod_lt?: Maybe<Scalars['Int']>;
  fetchPeriod_lte?: Maybe<Scalars['Int']>;
  fetchPeriod_gt?: Maybe<Scalars['Int']>;
  fetchPeriod_gte?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
  fetchSize_not?: Maybe<Scalars['Int']>;
  fetchSize_in?: Maybe<Array<Scalars['Int']>>;
  fetchSize_not_in?: Maybe<Array<Scalars['Int']>>;
  fetchSize_lt?: Maybe<Scalars['Int']>;
  fetchSize_lte?: Maybe<Scalars['Int']>;
  fetchSize_gt?: Maybe<Scalars['Int']>;
  fetchSize_gte?: Maybe<Scalars['Int']>;
  canonical?: Maybe<_CanonicalFilter>;
  canonical_not?: Maybe<_CanonicalFilter>;
  canonical_in?: Maybe<Array<_CanonicalFilter>>;
  canonical_not_in?: Maybe<Array<_CanonicalFilter>>;
};

export type CdcExtractorConfigMap = ExtractorConfigMap & ConfigMap & {
  __typename?: 'CdcExtractorConfigMap';
  name: Scalars['String'];
  query: Scalars['String'];
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
  canonical?: Maybe<Canonical>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type CdcExtractorConfigMapCanonicalArgs = {
  filter?: Maybe<_CanonicalFilter>;
};

export enum _CtExtractorConfigMapOrdering {
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  query_asc = 'query_asc',
  query_desc = 'query_desc',
  fetchPeriod_asc = 'fetchPeriod_asc',
  fetchPeriod_desc = 'fetchPeriod_desc',
  fetchSize_asc = 'fetchSize_asc',
  fetchSize_desc = 'fetchSize_desc',
  _properties_asc = '_properties_asc',
  _properties_desc = '_properties_desc',
  _id_asc = '_id_asc',
  _id_desc = '_id_desc'
}

export type _CtExtractorConfigMapFilter = {
  AND?: Maybe<Array<_CtExtractorConfigMapFilter>>;
  OR?: Maybe<Array<_CtExtractorConfigMapFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  query_not?: Maybe<Scalars['String']>;
  query_in?: Maybe<Array<Scalars['String']>>;
  query_not_in?: Maybe<Array<Scalars['String']>>;
  query_contains?: Maybe<Scalars['String']>;
  query_not_contains?: Maybe<Scalars['String']>;
  query_starts_with?: Maybe<Scalars['String']>;
  query_not_starts_with?: Maybe<Scalars['String']>;
  query_ends_with?: Maybe<Scalars['String']>;
  query_not_ends_with?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchPeriod_not?: Maybe<Scalars['Int']>;
  fetchPeriod_in?: Maybe<Array<Scalars['Int']>>;
  fetchPeriod_not_in?: Maybe<Array<Scalars['Int']>>;
  fetchPeriod_lt?: Maybe<Scalars['Int']>;
  fetchPeriod_lte?: Maybe<Scalars['Int']>;
  fetchPeriod_gt?: Maybe<Scalars['Int']>;
  fetchPeriod_gte?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
  fetchSize_not?: Maybe<Scalars['Int']>;
  fetchSize_in?: Maybe<Array<Scalars['Int']>>;
  fetchSize_not_in?: Maybe<Array<Scalars['Int']>>;
  fetchSize_lt?: Maybe<Scalars['Int']>;
  fetchSize_lte?: Maybe<Scalars['Int']>;
  fetchSize_gt?: Maybe<Scalars['Int']>;
  fetchSize_gte?: Maybe<Scalars['Int']>;
  canonical?: Maybe<_CanonicalFilter>;
  canonical_not?: Maybe<_CanonicalFilter>;
  canonical_in?: Maybe<Array<_CanonicalFilter>>;
  canonical_not_in?: Maybe<Array<_CanonicalFilter>>;
};

export type CtExtractorConfigMap = ExtractorConfigMap & ConfigMap & {
  __typename?: 'CtExtractorConfigMap';
  name: Scalars['String'];
  query: Scalars['String'];
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
  canonical?: Maybe<Canonical>;
  /** Returns the raw properties for the entity. */
  _properties: Scalars['JSON'];
  _id?: Maybe<Scalars['String']>;
};


export type CtExtractorConfigMapCanonicalArgs = {
  filter?: Maybe<_CanonicalFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  IngestType?: Maybe<Scalars['JSONObject']>;
  CreateSimpleDataSource?: Maybe<SimpleDataSource>;
  UpdateSimpleDataSource?: Maybe<SimpleDataSource>;
  DeleteSimpleDataSource?: Maybe<SimpleDataSource>;
  MergeSimpleDataSource?: Maybe<SimpleDataSource>;
  CreateSimpleConfigMap?: Maybe<SimpleConfigMap>;
  DeleteSimpleConfigMap?: Maybe<SimpleConfigMap>;
  MergeSimpleConfigMap?: Maybe<SimpleConfigMap>;
  CreateHelmChart?: Maybe<HelmChart>;
  UpdateHelmChart?: Maybe<HelmChart>;
  DeleteHelmChart?: Maybe<HelmChart>;
  MergeHelmChart?: Maybe<HelmChart>;
  AddRunnableHelmChart?: Maybe<_AddRunnableHelmChartPayload>;
  RemoveRunnableHelmChart?: Maybe<_RemoveRunnableHelmChartPayload>;
  MergeRunnableHelmChart?: Maybe<_MergeRunnableHelmChartPayload>;
  AddRunnableConfigs?: Maybe<_AddRunnableConfigsPayload>;
  RemoveRunnableConfigs?: Maybe<_RemoveRunnableConfigsPayload>;
  MergeRunnableConfigs?: Maybe<_MergeRunnableConfigsPayload>;
  AddRunnableFacility?: Maybe<_AddRunnableFacilityPayload>;
  RemoveRunnableFacility?: Maybe<_RemoveRunnableFacilityPayload>;
  MergeRunnableFacility?: Maybe<_MergeRunnableFacilityPayload>;
  AddRunnableInlets?: Maybe<_AddRunnableInletsPayload>;
  RemoveRunnableInlets?: Maybe<_RemoveRunnableInletsPayload>;
  MergeRunnableInlets?: Maybe<_MergeRunnableInletsPayload>;
  AddRunnableOutlets?: Maybe<_AddRunnableOutletsPayload>;
  RemoveRunnableOutlets?: Maybe<_RemoveRunnableOutletsPayload>;
  MergeRunnableOutlets?: Maybe<_MergeRunnableOutletsPayload>;
  CreateRunnable?: Maybe<Runnable>;
  UpdateRunnable?: Maybe<Runnable>;
  DeleteRunnable?: Maybe<Runnable>;
  MergeRunnable?: Maybe<Runnable>;
  AddConnectorConfigSource?: Maybe<_AddConnectorConfigSourcePayload>;
  RemoveConnectorConfigSource?: Maybe<_RemoveConnectorConfigSourcePayload>;
  MergeConnectorConfigSource?: Maybe<_MergeConnectorConfigSourcePayload>;
  AddConnectorConfigDestination?: Maybe<_AddConnectorConfigDestinationPayload>;
  RemoveConnectorConfigDestination?: Maybe<_RemoveConnectorConfigDestinationPayload>;
  MergeConnectorConfigDestination?: Maybe<_MergeConnectorConfigDestinationPayload>;
  CreateConnectorConfig?: Maybe<ConnectorConfig>;
  UpdateConnectorConfig?: Maybe<ConnectorConfig>;
  DeleteConnectorConfig?: Maybe<ConnectorConfig>;
  MergeConnectorConfig?: Maybe<ConnectorConfig>;
  AddFacilityRunnables?: Maybe<_AddFacilityRunnablesPayload>;
  RemoveFacilityRunnables?: Maybe<_RemoveFacilityRunnablesPayload>;
  MergeFacilityRunnables?: Maybe<_MergeFacilityRunnablesPayload>;
  AddFacilityAddress?: Maybe<_AddFacilityAddressPayload>;
  RemoveFacilityAddress?: Maybe<_RemoveFacilityAddressPayload>;
  MergeFacilityAddress?: Maybe<_MergeFacilityAddressPayload>;
  AddFacilityOrganization?: Maybe<_AddFacilityOrganizationPayload>;
  RemoveFacilityOrganization?: Maybe<_RemoveFacilityOrganizationPayload>;
  MergeFacilityOrganization?: Maybe<_MergeFacilityOrganizationPayload>;
  AddFacilityGroups?: Maybe<_AddFacilityGroupsPayload>;
  RemoveFacilityGroups?: Maybe<_RemoveFacilityGroupsPayload>;
  MergeFacilityGroups?: Maybe<_MergeFacilityGroupsPayload>;
  AddFacilityAssets?: Maybe<_AddFacilityAssetsPayload>;
  RemoveFacilityAssets?: Maybe<_RemoveFacilityAssetsPayload>;
  MergeFacilityAssets?: Maybe<_MergeFacilityAssetsPayload>;
  AddFacilityMeters?: Maybe<_AddFacilityMetersPayload>;
  RemoveFacilityMeters?: Maybe<_RemoveFacilityMetersPayload>;
  MergeFacilityMeters?: Maybe<_MergeFacilityMetersPayload>;
  CreateFacility?: Maybe<Facility>;
  UpdateFacility?: Maybe<Facility>;
  DeleteFacility?: Maybe<Facility>;
  MergeFacility?: Maybe<Facility>;
  AddOrganizationFacilities?: Maybe<_AddOrganizationFacilitiesPayload>;
  RemoveOrganizationFacilities?: Maybe<_RemoveOrganizationFacilitiesPayload>;
  MergeOrganizationFacilities?: Maybe<_MergeOrganizationFacilitiesPayload>;
  CreateOrganization?: Maybe<Organization>;
  UpdateOrganization?: Maybe<Organization>;
  DeleteOrganization?: Maybe<Organization>;
  MergeOrganization?: Maybe<Organization>;
  CreateFacilityGroup?: Maybe<FacilityGroup>;
  DeleteFacilityGroup?: Maybe<FacilityGroup>;
  MergeFacilityGroup?: Maybe<FacilityGroup>;
  CreateAddress?: Maybe<Address>;
  UpdateAddress?: Maybe<Address>;
  DeleteAddress?: Maybe<Address>;
  MergeAddress?: Maybe<Address>;
  CreateNovozymesFacilityConfig?: Maybe<NovozymesFacilityConfig>;
  UpdateNovozymesFacilityConfig?: Maybe<NovozymesFacilityConfig>;
  DeleteNovozymesFacilityConfig?: Maybe<NovozymesFacilityConfig>;
  MergeNovozymesFacilityConfig?: Maybe<NovozymesFacilityConfig>;
  AddNovozymesDataSourceExtractorConfig?: Maybe<_AddNovozymesDataSourceExtractorConfigPayload>;
  RemoveNovozymesDataSourceExtractorConfig?: Maybe<_RemoveNovozymesDataSourceExtractorConfigPayload>;
  MergeNovozymesDataSourceExtractorConfig?: Maybe<_MergeNovozymesDataSourceExtractorConfigPayload>;
  CreateNovozymesDataSource?: Maybe<NovozymesDataSource>;
  UpdateNovozymesDataSource?: Maybe<NovozymesDataSource>;
  DeleteNovozymesDataSource?: Maybe<NovozymesDataSource>;
  MergeNovozymesDataSource?: Maybe<NovozymesDataSource>;
  AddBatchExtractorConfigTagExtractor?: Maybe<_AddBatchExtractorConfigTagExtractorPayload>;
  RemoveBatchExtractorConfigTagExtractor?: Maybe<_RemoveBatchExtractorConfigTagExtractorPayload>;
  MergeBatchExtractorConfigTagExtractor?: Maybe<_MergeBatchExtractorConfigTagExtractorPayload>;
  CreateBatchExtractorConfig?: Maybe<BatchExtractorConfig>;
  UpdateBatchExtractorConfig?: Maybe<BatchExtractorConfig>;
  DeleteBatchExtractorConfig?: Maybe<BatchExtractorConfig>;
  MergeBatchExtractorConfig?: Maybe<BatchExtractorConfig>;
  CreateTagExtractorConfig?: Maybe<TagExtractorConfig>;
  UpdateTagExtractorConfig?: Maybe<TagExtractorConfig>;
  DeleteTagExtractorConfig?: Maybe<TagExtractorConfig>;
  MergeTagExtractorConfig?: Maybe<TagExtractorConfig>;
  AddUtilityAccountAddress?: Maybe<_AddUtilityAccountAddressPayload>;
  RemoveUtilityAccountAddress?: Maybe<_RemoveUtilityAccountAddressPayload>;
  MergeUtilityAccountAddress?: Maybe<_MergeUtilityAccountAddressPayload>;
  AddUtilityAccountProvider?: Maybe<_AddUtilityAccountProviderPayload>;
  RemoveUtilityAccountProvider?: Maybe<_RemoveUtilityAccountProviderPayload>;
  MergeUtilityAccountProvider?: Maybe<_MergeUtilityAccountProviderPayload>;
  CreateUtilityAccount?: Maybe<UtilityAccount>;
  UpdateUtilityAccount?: Maybe<UtilityAccount>;
  DeleteUtilityAccount?: Maybe<UtilityAccount>;
  MergeUtilityAccount?: Maybe<UtilityAccount>;
  AddUtilityProviderAccounts?: Maybe<_AddUtilityProviderAccountsPayload>;
  RemoveUtilityProviderAccounts?: Maybe<_RemoveUtilityProviderAccountsPayload>;
  MergeUtilityProviderAccounts?: Maybe<_MergeUtilityProviderAccountsPayload>;
  CreateUtilityProvider?: Maybe<UtilityProvider>;
  DeleteUtilityProvider?: Maybe<UtilityProvider>;
  MergeUtilityProvider?: Maybe<UtilityProvider>;
  AddUtilityStatementMeter?: Maybe<_AddUtilityStatementMeterPayload>;
  RemoveUtilityStatementMeter?: Maybe<_RemoveUtilityStatementMeterPayload>;
  MergeUtilityStatementMeter?: Maybe<_MergeUtilityStatementMeterPayload>;
  CreateUtilityStatement?: Maybe<UtilityStatement>;
  UpdateUtilityStatement?: Maybe<UtilityStatement>;
  DeleteUtilityStatement?: Maybe<UtilityStatement>;
  MergeUtilityStatement?: Maybe<UtilityStatement>;
  CreateSeries?: Maybe<Series>;
  UpdateSeries?: Maybe<Series>;
  DeleteSeries?: Maybe<Series>;
  MergeSeries?: Maybe<Series>;
  AddUtilityMeterAccount?: Maybe<_AddUtilityMeterAccountPayload>;
  RemoveUtilityMeterAccount?: Maybe<_RemoveUtilityMeterAccountPayload>;
  MergeUtilityMeterAccount?: Maybe<_MergeUtilityMeterAccountPayload>;
  AddUtilityMeterFacility?: Maybe<_AddUtilityMeterFacilityPayload>;
  RemoveUtilityMeterFacility?: Maybe<_RemoveUtilityMeterFacilityPayload>;
  MergeUtilityMeterFacility?: Maybe<_MergeUtilityMeterFacilityPayload>;
  AddUtilityMeterStatements?: Maybe<_AddUtilityMeterStatementsPayload>;
  RemoveUtilityMeterStatements?: Maybe<_RemoveUtilityMeterStatementsPayload>;
  MergeUtilityMeterStatements?: Maybe<_MergeUtilityMeterStatementsPayload>;
  CreateUtilityMeter?: Maybe<UtilityMeter>;
  UpdateUtilityMeter?: Maybe<UtilityMeter>;
  DeleteUtilityMeter?: Maybe<UtilityMeter>;
  MergeUtilityMeter?: Maybe<UtilityMeter>;
  CreateWmsDataSource?: Maybe<WmsDataSource>;
  UpdateWmsDataSource?: Maybe<WmsDataSource>;
  DeleteWmsDataSource?: Maybe<WmsDataSource>;
  MergeWmsDataSource?: Maybe<WmsDataSource>;
  AddCanonicalExtractors?: Maybe<_AddCanonicalExtractorsPayload>;
  RemoveCanonicalExtractors?: Maybe<_RemoveCanonicalExtractorsPayload>;
  MergeCanonicalExtractors?: Maybe<_MergeCanonicalExtractorsPayload>;
  CreateCanonical?: Maybe<Canonical>;
  DeleteCanonical?: Maybe<Canonical>;
  MergeCanonical?: Maybe<Canonical>;
  AddExtractorConfigMapCanonical?: Maybe<_AddExtractorConfigMapCanonicalPayload>;
  RemoveExtractorConfigMapCanonical?: Maybe<_RemoveExtractorConfigMapCanonicalPayload>;
  MergeExtractorConfigMapCanonical?: Maybe<_MergeExtractorConfigMapCanonicalPayload>;
  AddCdtExtractorConfigMapCanonical?: Maybe<_AddCdtExtractorConfigMapCanonicalPayload>;
  RemoveCdtExtractorConfigMapCanonical?: Maybe<_RemoveCdtExtractorConfigMapCanonicalPayload>;
  MergeCdtExtractorConfigMapCanonical?: Maybe<_MergeCdtExtractorConfigMapCanonicalPayload>;
  CreateCdtExtractorConfigMap?: Maybe<CdtExtractorConfigMap>;
  UpdateCdtExtractorConfigMap?: Maybe<CdtExtractorConfigMap>;
  DeleteCdtExtractorConfigMap?: Maybe<CdtExtractorConfigMap>;
  MergeCdtExtractorConfigMap?: Maybe<CdtExtractorConfigMap>;
  AddCdcExtractorConfigMapCanonical?: Maybe<_AddCdcExtractorConfigMapCanonicalPayload>;
  RemoveCdcExtractorConfigMapCanonical?: Maybe<_RemoveCdcExtractorConfigMapCanonicalPayload>;
  MergeCdcExtractorConfigMapCanonical?: Maybe<_MergeCdcExtractorConfigMapCanonicalPayload>;
  CreateCdcExtractorConfigMap?: Maybe<CdcExtractorConfigMap>;
  UpdateCdcExtractorConfigMap?: Maybe<CdcExtractorConfigMap>;
  DeleteCdcExtractorConfigMap?: Maybe<CdcExtractorConfigMap>;
  MergeCdcExtractorConfigMap?: Maybe<CdcExtractorConfigMap>;
  AddCtExtractorConfigMapCanonical?: Maybe<_AddCtExtractorConfigMapCanonicalPayload>;
  RemoveCtExtractorConfigMapCanonical?: Maybe<_RemoveCtExtractorConfigMapCanonicalPayload>;
  MergeCtExtractorConfigMapCanonical?: Maybe<_MergeCtExtractorConfigMapCanonicalPayload>;
  CreateCtExtractorConfigMap?: Maybe<CtExtractorConfigMap>;
  UpdateCtExtractorConfigMap?: Maybe<CtExtractorConfigMap>;
  DeleteCtExtractorConfigMap?: Maybe<CtExtractorConfigMap>;
  MergeCtExtractorConfigMap?: Maybe<CtExtractorConfigMap>;
};


export type MutationIngestTypeArgs = {
  type?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['JSONObject']>;
};


export type MutationCreateSimpleDataSourceArgs = {
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationUpdateSimpleDataSourceArgs = {
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationDeleteSimpleDataSourceArgs = {
  name: Scalars['String'];
};


export type MutationMergeSimpleDataSourceArgs = {
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type MutationCreateSimpleConfigMapArgs = {
  name: Scalars['String'];
};


export type MutationDeleteSimpleConfigMapArgs = {
  name: Scalars['String'];
};


export type MutationMergeSimpleConfigMapArgs = {
  name: Scalars['String'];
};


export type MutationCreateHelmChartArgs = {
  name: Scalars['String'];
  repoUrl?: Maybe<Scalars['String']>;
};


export type MutationUpdateHelmChartArgs = {
  name: Scalars['String'];
  repoUrl?: Maybe<Scalars['String']>;
};


export type MutationDeleteHelmChartArgs = {
  name: Scalars['String'];
};


export type MutationMergeHelmChartArgs = {
  name: Scalars['String'];
  repoUrl?: Maybe<Scalars['String']>;
};


export type MutationAddRunnableHelmChartArgs = {
  from: _RunnableInput;
  to: _HelmChartInput;
};


export type MutationRemoveRunnableHelmChartArgs = {
  from: _RunnableInput;
  to: _HelmChartInput;
};


export type MutationMergeRunnableHelmChartArgs = {
  from: _RunnableInput;
  to: _HelmChartInput;
};


export type MutationAddRunnableConfigsArgs = {
  from: _RunnableInput;
  to: _ConfigMapInput;
};


export type MutationRemoveRunnableConfigsArgs = {
  from: _RunnableInput;
  to: _ConfigMapInput;
};


export type MutationMergeRunnableConfigsArgs = {
  from: _RunnableInput;
  to: _ConfigMapInput;
};


export type MutationAddRunnableFacilityArgs = {
  from: _RunnableInput;
  to: _FacilityInput;
};


export type MutationRemoveRunnableFacilityArgs = {
  from: _RunnableInput;
  to: _FacilityInput;
};


export type MutationMergeRunnableFacilityArgs = {
  from: _RunnableInput;
  to: _FacilityInput;
};


export type MutationAddRunnableInletsArgs = {
  from: _ConnectorConfigInput;
  to: _RunnableInput;
};


export type MutationRemoveRunnableInletsArgs = {
  from: _ConnectorConfigInput;
  to: _RunnableInput;
};


export type MutationMergeRunnableInletsArgs = {
  from: _ConnectorConfigInput;
  to: _RunnableInput;
};


export type MutationAddRunnableOutletsArgs = {
  from: _RunnableInput;
  to: _ConnectorConfigInput;
};


export type MutationRemoveRunnableOutletsArgs = {
  from: _RunnableInput;
  to: _ConnectorConfigInput;
};


export type MutationMergeRunnableOutletsArgs = {
  from: _RunnableInput;
  to: _ConnectorConfigInput;
};


export type MutationCreateRunnableArgs = {
  name: Scalars['String'];
  repository?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  command?: Maybe<Scalars['String']>;
  helmChartVersion?: Maybe<Scalars['String']>;
};


export type MutationUpdateRunnableArgs = {
  name: Scalars['String'];
  repository?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  command?: Maybe<Scalars['String']>;
  helmChartVersion?: Maybe<Scalars['String']>;
};


export type MutationDeleteRunnableArgs = {
  name: Scalars['String'];
};


export type MutationMergeRunnableArgs = {
  name: Scalars['String'];
  repository?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  command?: Maybe<Scalars['String']>;
  helmChartVersion?: Maybe<Scalars['String']>;
};


export type MutationAddConnectorConfigSourceArgs = {
  from: _RunnableInput;
  to: _ConnectorConfigInput;
};


export type MutationRemoveConnectorConfigSourceArgs = {
  from: _RunnableInput;
  to: _ConnectorConfigInput;
};


export type MutationMergeConnectorConfigSourceArgs = {
  from: _RunnableInput;
  to: _ConnectorConfigInput;
};


export type MutationAddConnectorConfigDestinationArgs = {
  from: _ConnectorConfigInput;
  to: _RunnableInput;
};


export type MutationRemoveConnectorConfigDestinationArgs = {
  from: _ConnectorConfigInput;
  to: _RunnableInput;
};


export type MutationMergeConnectorConfigDestinationArgs = {
  from: _ConnectorConfigInput;
  to: _RunnableInput;
};


export type MutationCreateConnectorConfigArgs = {
  name: Scalars['String'];
  topicName?: Maybe<Scalars['String']>;
};


export type MutationUpdateConnectorConfigArgs = {
  name: Scalars['String'];
  topicName?: Maybe<Scalars['String']>;
};


export type MutationDeleteConnectorConfigArgs = {
  name: Scalars['String'];
};


export type MutationMergeConnectorConfigArgs = {
  name: Scalars['String'];
  topicName?: Maybe<Scalars['String']>;
};


export type MutationAddFacilityRunnablesArgs = {
  from: _RunnableInput;
  to: _FacilityInput;
};


export type MutationRemoveFacilityRunnablesArgs = {
  from: _RunnableInput;
  to: _FacilityInput;
};


export type MutationMergeFacilityRunnablesArgs = {
  from: _RunnableInput;
  to: _FacilityInput;
};


export type MutationAddFacilityAddressArgs = {
  from: _FacilityInput;
  to: _AddressInput;
};


export type MutationRemoveFacilityAddressArgs = {
  from: _FacilityInput;
  to: _AddressInput;
};


export type MutationMergeFacilityAddressArgs = {
  from: _FacilityInput;
  to: _AddressInput;
};


export type MutationAddFacilityOrganizationArgs = {
  from: _FacilityInput;
  to: _OrganizationInput;
};


export type MutationRemoveFacilityOrganizationArgs = {
  from: _FacilityInput;
  to: _OrganizationInput;
};


export type MutationMergeFacilityOrganizationArgs = {
  from: _FacilityInput;
  to: _OrganizationInput;
};


export type MutationAddFacilityGroupsArgs = {
  from: _FacilityInput;
  to: _FacilityGroupInput;
};


export type MutationRemoveFacilityGroupsArgs = {
  from: _FacilityInput;
  to: _FacilityGroupInput;
};


export type MutationMergeFacilityGroupsArgs = {
  from: _FacilityInput;
  to: _FacilityGroupInput;
};


export type MutationAddFacilityAssetsArgs = {
  from: _FacilityInput;
  to: _AssetInput;
};


export type MutationRemoveFacilityAssetsArgs = {
  from: _FacilityInput;
  to: _AssetInput;
};


export type MutationMergeFacilityAssetsArgs = {
  from: _FacilityInput;
  to: _AssetInput;
};


export type MutationAddFacilityMetersArgs = {
  from: _FacilityInput;
  to: _UtilityMeterInput;
};


export type MutationRemoveFacilityMetersArgs = {
  from: _FacilityInput;
  to: _UtilityMeterInput;
};


export type MutationMergeFacilityMetersArgs = {
  from: _FacilityInput;
  to: _UtilityMeterInput;
};


export type MutationCreateFacilityArgs = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationUpdateFacilityArgs = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};


export type MutationDeleteFacilityArgs = {
  id: Scalars['String'];
};


export type MutationMergeFacilityArgs = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};


export type MutationAddOrganizationFacilitiesArgs = {
  from: _FacilityInput;
  to: _OrganizationInput;
};


export type MutationRemoveOrganizationFacilitiesArgs = {
  from: _FacilityInput;
  to: _OrganizationInput;
};


export type MutationMergeOrganizationFacilitiesArgs = {
  from: _FacilityInput;
  to: _OrganizationInput;
};


export type MutationCreateOrganizationArgs = {
  tenantId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationUpdateOrganizationArgs = {
  tenantId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type MutationDeleteOrganizationArgs = {
  tenantId: Scalars['ID'];
};


export type MutationMergeOrganizationArgs = {
  tenantId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type MutationCreateFacilityGroupArgs = {
  name?: Maybe<Scalars['String']>;
};


export type MutationDeleteFacilityGroupArgs = {
  name: Scalars['String'];
};


export type MutationMergeFacilityGroupArgs = {
  name: Scalars['String'];
};


export type MutationCreateAddressArgs = {
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};


export type MutationUpdateAddressArgs = {
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};


export type MutationDeleteAddressArgs = {
  address1: Scalars['String'];
};


export type MutationMergeAddressArgs = {
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};


export type MutationCreateNovozymesFacilityConfigArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
  contxtId: Scalars['Int'];
  iotKey: Scalars['String'];
  provisioningUrl: Scalars['String'];
  extractSince?: Maybe<Scalars['DateTime']>;
};


export type MutationUpdateNovozymesFacilityConfigArgs = {
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  contxtId?: Maybe<Scalars['Int']>;
  iotKey?: Maybe<Scalars['String']>;
  provisioningUrl?: Maybe<Scalars['String']>;
  extractSince?: Maybe<Scalars['DateTime']>;
};


export type MutationDeleteNovozymesFacilityConfigArgs = {
  name: Scalars['String'];
};


export type MutationMergeNovozymesFacilityConfigArgs = {
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  contxtId?: Maybe<Scalars['Int']>;
  iotKey?: Maybe<Scalars['String']>;
  provisioningUrl?: Maybe<Scalars['String']>;
  extractSince?: Maybe<Scalars['DateTime']>;
};


export type MutationAddNovozymesDataSourceExtractorConfigArgs = {
  from: _NovozymesDataSourceInput;
  to: _BatchExtractorConfigInput;
};


export type MutationRemoveNovozymesDataSourceExtractorConfigArgs = {
  from: _NovozymesDataSourceInput;
  to: _BatchExtractorConfigInput;
};


export type MutationMergeNovozymesDataSourceExtractorConfigArgs = {
  from: _NovozymesDataSourceInput;
  to: _BatchExtractorConfigInput;
};


export type MutationCreateNovozymesDataSourceArgs = {
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
};


export type MutationUpdateNovozymesDataSourceArgs = {
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
};


export type MutationDeleteNovozymesDataSourceArgs = {
  name: Scalars['String'];
};


export type MutationMergeNovozymesDataSourceArgs = {
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
};


export type MutationAddBatchExtractorConfigTagExtractorArgs = {
  from: _BatchExtractorConfigInput;
  to: _TagExtractorConfigInput;
};


export type MutationRemoveBatchExtractorConfigTagExtractorArgs = {
  from: _BatchExtractorConfigInput;
  to: _TagExtractorConfigInput;
};


export type MutationMergeBatchExtractorConfigTagExtractorArgs = {
  from: _BatchExtractorConfigInput;
  to: _TagExtractorConfigInput;
};


export type MutationCreateBatchExtractorConfigArgs = {
  name: Scalars['String'];
  envName: Scalars['String'];
  batchExtractor?: Maybe<Scalars['String']>;
  batchIndicatorTemplate?: Maybe<Scalars['String']>;
};


export type MutationUpdateBatchExtractorConfigArgs = {
  name: Scalars['String'];
  envName?: Maybe<Scalars['String']>;
  batchExtractor?: Maybe<Scalars['String']>;
  batchIndicatorTemplate?: Maybe<Scalars['String']>;
};


export type MutationDeleteBatchExtractorConfigArgs = {
  name: Scalars['String'];
};


export type MutationMergeBatchExtractorConfigArgs = {
  name: Scalars['String'];
  envName?: Maybe<Scalars['String']>;
  batchExtractor?: Maybe<Scalars['String']>;
  batchIndicatorTemplate?: Maybe<Scalars['String']>;
};


export type MutationCreateTagExtractorConfigArgs = {
  name: Scalars['String'];
  tagExtractor?: Maybe<Scalars['String']>;
};


export type MutationUpdateTagExtractorConfigArgs = {
  name: Scalars['String'];
  tagExtractor?: Maybe<Scalars['String']>;
};


export type MutationDeleteTagExtractorConfigArgs = {
  name: Scalars['String'];
};


export type MutationMergeTagExtractorConfigArgs = {
  name: Scalars['String'];
  tagExtractor?: Maybe<Scalars['String']>;
};


export type MutationAddUtilityAccountAddressArgs = {
  from: _UtilityAccountInput;
  to: _AddressInput;
};


export type MutationRemoveUtilityAccountAddressArgs = {
  from: _UtilityAccountInput;
  to: _AddressInput;
};


export type MutationMergeUtilityAccountAddressArgs = {
  from: _UtilityAccountInput;
  to: _AddressInput;
};


export type MutationAddUtilityAccountProviderArgs = {
  from: _UtilityAccountInput;
  to: _UtilityProviderInput;
};


export type MutationRemoveUtilityAccountProviderArgs = {
  from: _UtilityAccountInput;
  to: _UtilityProviderInput;
};


export type MutationMergeUtilityAccountProviderArgs = {
  from: _UtilityAccountInput;
  to: _UtilityProviderInput;
};


export type MutationCreateUtilityAccountArgs = {
  accountId?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
};


export type MutationUpdateUtilityAccountArgs = {
  accountId: Scalars['String'];
  contact?: Maybe<Scalars['String']>;
};


export type MutationDeleteUtilityAccountArgs = {
  accountId: Scalars['String'];
};


export type MutationMergeUtilityAccountArgs = {
  accountId: Scalars['String'];
  contact?: Maybe<Scalars['String']>;
};


export type MutationAddUtilityProviderAccountsArgs = {
  from: _UtilityAccountInput;
  to: _UtilityProviderInput;
};


export type MutationRemoveUtilityProviderAccountsArgs = {
  from: _UtilityAccountInput;
  to: _UtilityProviderInput;
};


export type MutationMergeUtilityProviderAccountsArgs = {
  from: _UtilityAccountInput;
  to: _UtilityProviderInput;
};


export type MutationCreateUtilityProviderArgs = {
  name?: Maybe<Scalars['String']>;
};


export type MutationDeleteUtilityProviderArgs = {
  name: Scalars['String'];
};


export type MutationMergeUtilityProviderArgs = {
  name: Scalars['String'];
};


export type MutationAddUtilityStatementMeterArgs = {
  from: _UtilityMeterInput;
  to: _UtilityStatementInput;
};


export type MutationRemoveUtilityStatementMeterArgs = {
  from: _UtilityMeterInput;
  to: _UtilityStatementInput;
};


export type MutationMergeUtilityStatementMeterArgs = {
  from: _UtilityMeterInput;
  to: _UtilityStatementInput;
};


export type MutationCreateUtilityStatementArgs = {
  id?: Maybe<Scalars['ID']>;
  pdf?: Maybe<Scalars['String']>;
  statementDate?: Maybe<_Neo4jDateTimeInput>;
  startDate?: Maybe<_Neo4jDateTimeInput>;
  endDate?: Maybe<_Neo4jDateTimeInput>;
};


export type MutationUpdateUtilityStatementArgs = {
  id: Scalars['ID'];
  pdf?: Maybe<Scalars['String']>;
  statementDate?: Maybe<_Neo4jDateTimeInput>;
  startDate?: Maybe<_Neo4jDateTimeInput>;
  endDate?: Maybe<_Neo4jDateTimeInput>;
};


export type MutationDeleteUtilityStatementArgs = {
  id: Scalars['ID'];
};


export type MutationMergeUtilityStatementArgs = {
  id: Scalars['ID'];
  pdf?: Maybe<Scalars['String']>;
  statementDate?: Maybe<_Neo4jDateTimeInput>;
  startDate?: Maybe<_Neo4jDateTimeInput>;
  endDate?: Maybe<_Neo4jDateTimeInput>;
};


export type MutationCreateSeriesArgs = {
  time?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};


export type MutationUpdateSeriesArgs = {
  time: Scalars['DateTime'];
  value?: Maybe<Scalars['Float']>;
};


export type MutationDeleteSeriesArgs = {
  time: Scalars['DateTime'];
};


export type MutationMergeSeriesArgs = {
  time: Scalars['DateTime'];
  value?: Maybe<Scalars['Float']>;
};


export type MutationAddUtilityMeterAccountArgs = {
  from: _UtilityMeterInput;
  to: _UtilityAccountInput;
};


export type MutationRemoveUtilityMeterAccountArgs = {
  from: _UtilityMeterInput;
  to: _UtilityAccountInput;
};


export type MutationMergeUtilityMeterAccountArgs = {
  from: _UtilityMeterInput;
  to: _UtilityAccountInput;
};


export type MutationAddUtilityMeterFacilityArgs = {
  from: _FacilityInput;
  to: _UtilityMeterInput;
};


export type MutationRemoveUtilityMeterFacilityArgs = {
  from: _FacilityInput;
  to: _UtilityMeterInput;
};


export type MutationMergeUtilityMeterFacilityArgs = {
  from: _FacilityInput;
  to: _UtilityMeterInput;
};


export type MutationAddUtilityMeterStatementsArgs = {
  from: _UtilityMeterInput;
  to: _UtilityStatementInput;
};


export type MutationRemoveUtilityMeterStatementsArgs = {
  from: _UtilityMeterInput;
  to: _UtilityStatementInput;
};


export type MutationMergeUtilityMeterStatementsArgs = {
  from: _UtilityMeterInput;
  to: _UtilityStatementInput;
};


export type MutationCreateUtilityMeterArgs = {
  id?: Maybe<Scalars['ID']>;
  created?: Maybe<_Neo4jDateTimeInput>;
  is_activated?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateUtilityMeterArgs = {
  id: Scalars['ID'];
  created?: Maybe<_Neo4jDateTimeInput>;
  is_activated?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteUtilityMeterArgs = {
  id: Scalars['ID'];
};


export type MutationMergeUtilityMeterArgs = {
  id: Scalars['ID'];
  created?: Maybe<_Neo4jDateTimeInput>;
  is_activated?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateWmsDataSourceArgs = {
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['Int']>;
};


export type MutationUpdateWmsDataSourceArgs = {
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['Int']>;
};


export type MutationDeleteWmsDataSourceArgs = {
  name: Scalars['String'];
};


export type MutationMergeWmsDataSourceArgs = {
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['Int']>;
};


export type MutationAddCanonicalExtractorsArgs = {
  from: _ExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationRemoveCanonicalExtractorsArgs = {
  from: _ExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationMergeCanonicalExtractorsArgs = {
  from: _ExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationCreateCanonicalArgs = {
  name: Scalars['String'];
};


export type MutationDeleteCanonicalArgs = {
  name: Scalars['String'];
};


export type MutationMergeCanonicalArgs = {
  name: Scalars['String'];
};


export type MutationAddExtractorConfigMapCanonicalArgs = {
  from: _ExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationRemoveExtractorConfigMapCanonicalArgs = {
  from: _ExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationMergeExtractorConfigMapCanonicalArgs = {
  from: _ExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationAddCdtExtractorConfigMapCanonicalArgs = {
  from: _CdtExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationRemoveCdtExtractorConfigMapCanonicalArgs = {
  from: _CdtExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationMergeCdtExtractorConfigMapCanonicalArgs = {
  from: _CdtExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationCreateCdtExtractorConfigMapArgs = {
  name: Scalars['String'];
  upsertId?: Maybe<Scalars['String']>;
  deleteId?: Maybe<Scalars['String']>;
  cdtId?: Maybe<Scalars['String']>;
  query: Scalars['String'];
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
};


export type MutationUpdateCdtExtractorConfigMapArgs = {
  name: Scalars['String'];
  upsertId?: Maybe<Scalars['String']>;
  deleteId?: Maybe<Scalars['String']>;
  cdtId?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
};


export type MutationDeleteCdtExtractorConfigMapArgs = {
  name: Scalars['String'];
};


export type MutationMergeCdtExtractorConfigMapArgs = {
  name: Scalars['String'];
  upsertId?: Maybe<Scalars['String']>;
  deleteId?: Maybe<Scalars['String']>;
  cdtId?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
};


export type MutationAddCdcExtractorConfigMapCanonicalArgs = {
  from: _CdcExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationRemoveCdcExtractorConfigMapCanonicalArgs = {
  from: _CdcExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationMergeCdcExtractorConfigMapCanonicalArgs = {
  from: _CdcExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationCreateCdcExtractorConfigMapArgs = {
  name: Scalars['String'];
  query: Scalars['String'];
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
};


export type MutationUpdateCdcExtractorConfigMapArgs = {
  name: Scalars['String'];
  query?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
};


export type MutationDeleteCdcExtractorConfigMapArgs = {
  name: Scalars['String'];
};


export type MutationMergeCdcExtractorConfigMapArgs = {
  name: Scalars['String'];
  query?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
};


export type MutationAddCtExtractorConfigMapCanonicalArgs = {
  from: _CtExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationRemoveCtExtractorConfigMapCanonicalArgs = {
  from: _CtExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationMergeCtExtractorConfigMapCanonicalArgs = {
  from: _CtExtractorConfigMapInput;
  to: _CanonicalInput;
};


export type MutationCreateCtExtractorConfigMapArgs = {
  name: Scalars['String'];
  query: Scalars['String'];
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
};


export type MutationUpdateCtExtractorConfigMapArgs = {
  name: Scalars['String'];
  query?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
};


export type MutationDeleteCtExtractorConfigMapArgs = {
  name: Scalars['String'];
};


export type MutationMergeCtExtractorConfigMapArgs = {
  name: Scalars['String'];
  query?: Maybe<Scalars['String']>;
  fetchPeriod?: Maybe<Scalars['Int']>;
  fetchSize?: Maybe<Scalars['Int']>;
};


export type _RunnableInput = {
  name: Scalars['String'];
};

export type _HelmChartInput = {
  name: Scalars['String'];
};

export type _AddRunnableHelmChartPayload = {
  __typename?: '_AddRunnableHelmChartPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<HelmChart>;
};

export type _RemoveRunnableHelmChartPayload = {
  __typename?: '_RemoveRunnableHelmChartPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<HelmChart>;
};

export type _MergeRunnableHelmChartPayload = {
  __typename?: '_MergeRunnableHelmChartPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<HelmChart>;
};

export type _ConfigMapInput = {
  name: Scalars['String'];
};

export type _AddRunnableConfigsPayload = {
  __typename?: '_AddRunnableConfigsPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<ConfigMap>;
};

export type _RemoveRunnableConfigsPayload = {
  __typename?: '_RemoveRunnableConfigsPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<ConfigMap>;
};

export type _MergeRunnableConfigsPayload = {
  __typename?: '_MergeRunnableConfigsPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<ConfigMap>;
};

export type _FacilityInput = {
  id: Scalars['String'];
};

export type _AddRunnableFacilityPayload = {
  __typename?: '_AddRunnableFacilityPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<Facility>;
};

export type _RemoveRunnableFacilityPayload = {
  __typename?: '_RemoveRunnableFacilityPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<Facility>;
};

export type _MergeRunnableFacilityPayload = {
  __typename?: '_MergeRunnableFacilityPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<Facility>;
};

export type _ConnectorConfigInput = {
  name: Scalars['String'];
};

export type _AddRunnableInletsPayload = {
  __typename?: '_AddRunnableInletsPayload';
  from?: Maybe<ConnectorConfig>;
  to?: Maybe<Runnable>;
};

export type _RemoveRunnableInletsPayload = {
  __typename?: '_RemoveRunnableInletsPayload';
  from?: Maybe<ConnectorConfig>;
  to?: Maybe<Runnable>;
};

export type _MergeRunnableInletsPayload = {
  __typename?: '_MergeRunnableInletsPayload';
  from?: Maybe<ConnectorConfig>;
  to?: Maybe<Runnable>;
};

export type _AddRunnableOutletsPayload = {
  __typename?: '_AddRunnableOutletsPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<ConnectorConfig>;
};

export type _RemoveRunnableOutletsPayload = {
  __typename?: '_RemoveRunnableOutletsPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<ConnectorConfig>;
};

export type _MergeRunnableOutletsPayload = {
  __typename?: '_MergeRunnableOutletsPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<ConnectorConfig>;
};

export type _AddConnectorConfigSourcePayload = {
  __typename?: '_AddConnectorConfigSourcePayload';
  from?: Maybe<Runnable>;
  to?: Maybe<ConnectorConfig>;
};

export type _RemoveConnectorConfigSourcePayload = {
  __typename?: '_RemoveConnectorConfigSourcePayload';
  from?: Maybe<Runnable>;
  to?: Maybe<ConnectorConfig>;
};

export type _MergeConnectorConfigSourcePayload = {
  __typename?: '_MergeConnectorConfigSourcePayload';
  from?: Maybe<Runnable>;
  to?: Maybe<ConnectorConfig>;
};

export type _AddConnectorConfigDestinationPayload = {
  __typename?: '_AddConnectorConfigDestinationPayload';
  from?: Maybe<ConnectorConfig>;
  to?: Maybe<Runnable>;
};

export type _RemoveConnectorConfigDestinationPayload = {
  __typename?: '_RemoveConnectorConfigDestinationPayload';
  from?: Maybe<ConnectorConfig>;
  to?: Maybe<Runnable>;
};

export type _MergeConnectorConfigDestinationPayload = {
  __typename?: '_MergeConnectorConfigDestinationPayload';
  from?: Maybe<ConnectorConfig>;
  to?: Maybe<Runnable>;
};

export type _AddFacilityRunnablesPayload = {
  __typename?: '_AddFacilityRunnablesPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<Facility>;
};

export type _RemoveFacilityRunnablesPayload = {
  __typename?: '_RemoveFacilityRunnablesPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<Facility>;
};

export type _MergeFacilityRunnablesPayload = {
  __typename?: '_MergeFacilityRunnablesPayload';
  from?: Maybe<Runnable>;
  to?: Maybe<Facility>;
};

export type _AddressInput = {
  address1: Scalars['String'];
};

export type _AddFacilityAddressPayload = {
  __typename?: '_AddFacilityAddressPayload';
  from?: Maybe<Facility>;
  to?: Maybe<Address>;
};

export type _RemoveFacilityAddressPayload = {
  __typename?: '_RemoveFacilityAddressPayload';
  from?: Maybe<Facility>;
  to?: Maybe<Address>;
};

export type _MergeFacilityAddressPayload = {
  __typename?: '_MergeFacilityAddressPayload';
  from?: Maybe<Facility>;
  to?: Maybe<Address>;
};

export type _OrganizationInput = {
  tenantId: Scalars['ID'];
};

export type _AddFacilityOrganizationPayload = {
  __typename?: '_AddFacilityOrganizationPayload';
  from?: Maybe<Facility>;
  to?: Maybe<Organization>;
};

export type _RemoveFacilityOrganizationPayload = {
  __typename?: '_RemoveFacilityOrganizationPayload';
  from?: Maybe<Facility>;
  to?: Maybe<Organization>;
};

export type _MergeFacilityOrganizationPayload = {
  __typename?: '_MergeFacilityOrganizationPayload';
  from?: Maybe<Facility>;
  to?: Maybe<Organization>;
};

export type _FacilityGroupInput = {
  name: Scalars['String'];
};

export type _AddFacilityGroupsPayload = {
  __typename?: '_AddFacilityGroupsPayload';
  from?: Maybe<Facility>;
  to?: Maybe<FacilityGroup>;
};

export type _RemoveFacilityGroupsPayload = {
  __typename?: '_RemoveFacilityGroupsPayload';
  from?: Maybe<Facility>;
  to?: Maybe<FacilityGroup>;
};

export type _MergeFacilityGroupsPayload = {
  __typename?: '_MergeFacilityGroupsPayload';
  from?: Maybe<Facility>;
  to?: Maybe<FacilityGroup>;
};

export type _AssetInput = {
  id: Scalars['ID'];
};

export type _AddFacilityAssetsPayload = {
  __typename?: '_AddFacilityAssetsPayload';
  from?: Maybe<Facility>;
  to?: Maybe<Asset>;
};

export type _RemoveFacilityAssetsPayload = {
  __typename?: '_RemoveFacilityAssetsPayload';
  from?: Maybe<Facility>;
  to?: Maybe<Asset>;
};

export type _MergeFacilityAssetsPayload = {
  __typename?: '_MergeFacilityAssetsPayload';
  from?: Maybe<Facility>;
  to?: Maybe<Asset>;
};

export type _UtilityMeterInput = {
  id: Scalars['ID'];
};

export type _AddFacilityMetersPayload = {
  __typename?: '_AddFacilityMetersPayload';
  from?: Maybe<Facility>;
  to?: Maybe<UtilityMeter>;
};

export type _RemoveFacilityMetersPayload = {
  __typename?: '_RemoveFacilityMetersPayload';
  from?: Maybe<Facility>;
  to?: Maybe<UtilityMeter>;
};

export type _MergeFacilityMetersPayload = {
  __typename?: '_MergeFacilityMetersPayload';
  from?: Maybe<Facility>;
  to?: Maybe<UtilityMeter>;
};

export type _AddOrganizationFacilitiesPayload = {
  __typename?: '_AddOrganizationFacilitiesPayload';
  from?: Maybe<Facility>;
  to?: Maybe<Organization>;
};

export type _RemoveOrganizationFacilitiesPayload = {
  __typename?: '_RemoveOrganizationFacilitiesPayload';
  from?: Maybe<Facility>;
  to?: Maybe<Organization>;
};

export type _MergeOrganizationFacilitiesPayload = {
  __typename?: '_MergeOrganizationFacilitiesPayload';
  from?: Maybe<Facility>;
  to?: Maybe<Organization>;
};

export type _NovozymesDataSourceInput = {
  name: Scalars['String'];
};

export type _BatchExtractorConfigInput = {
  name: Scalars['String'];
};

export type _AddNovozymesDataSourceExtractorConfigPayload = {
  __typename?: '_AddNovozymesDataSourceExtractorConfigPayload';
  from?: Maybe<NovozymesDataSource>;
  to?: Maybe<BatchExtractorConfig>;
};

export type _RemoveNovozymesDataSourceExtractorConfigPayload = {
  __typename?: '_RemoveNovozymesDataSourceExtractorConfigPayload';
  from?: Maybe<NovozymesDataSource>;
  to?: Maybe<BatchExtractorConfig>;
};

export type _MergeNovozymesDataSourceExtractorConfigPayload = {
  __typename?: '_MergeNovozymesDataSourceExtractorConfigPayload';
  from?: Maybe<NovozymesDataSource>;
  to?: Maybe<BatchExtractorConfig>;
};

export type _TagExtractorConfigInput = {
  name: Scalars['String'];
};

export type _AddBatchExtractorConfigTagExtractorPayload = {
  __typename?: '_AddBatchExtractorConfigTagExtractorPayload';
  from?: Maybe<BatchExtractorConfig>;
  to?: Maybe<TagExtractorConfig>;
};

export type _RemoveBatchExtractorConfigTagExtractorPayload = {
  __typename?: '_RemoveBatchExtractorConfigTagExtractorPayload';
  from?: Maybe<BatchExtractorConfig>;
  to?: Maybe<TagExtractorConfig>;
};

export type _MergeBatchExtractorConfigTagExtractorPayload = {
  __typename?: '_MergeBatchExtractorConfigTagExtractorPayload';
  from?: Maybe<BatchExtractorConfig>;
  to?: Maybe<TagExtractorConfig>;
};

export type _UtilityAccountInput = {
  accountId: Scalars['String'];
};

export type _AddUtilityAccountAddressPayload = {
  __typename?: '_AddUtilityAccountAddressPayload';
  from?: Maybe<UtilityAccount>;
  to?: Maybe<Address>;
};

export type _RemoveUtilityAccountAddressPayload = {
  __typename?: '_RemoveUtilityAccountAddressPayload';
  from?: Maybe<UtilityAccount>;
  to?: Maybe<Address>;
};

export type _MergeUtilityAccountAddressPayload = {
  __typename?: '_MergeUtilityAccountAddressPayload';
  from?: Maybe<UtilityAccount>;
  to?: Maybe<Address>;
};

export type _UtilityProviderInput = {
  name: Scalars['String'];
};

export type _AddUtilityAccountProviderPayload = {
  __typename?: '_AddUtilityAccountProviderPayload';
  from?: Maybe<UtilityAccount>;
  to?: Maybe<UtilityProvider>;
};

export type _RemoveUtilityAccountProviderPayload = {
  __typename?: '_RemoveUtilityAccountProviderPayload';
  from?: Maybe<UtilityAccount>;
  to?: Maybe<UtilityProvider>;
};

export type _MergeUtilityAccountProviderPayload = {
  __typename?: '_MergeUtilityAccountProviderPayload';
  from?: Maybe<UtilityAccount>;
  to?: Maybe<UtilityProvider>;
};

export type _AddUtilityProviderAccountsPayload = {
  __typename?: '_AddUtilityProviderAccountsPayload';
  from?: Maybe<UtilityAccount>;
  to?: Maybe<UtilityProvider>;
};

export type _RemoveUtilityProviderAccountsPayload = {
  __typename?: '_RemoveUtilityProviderAccountsPayload';
  from?: Maybe<UtilityAccount>;
  to?: Maybe<UtilityProvider>;
};

export type _MergeUtilityProviderAccountsPayload = {
  __typename?: '_MergeUtilityProviderAccountsPayload';
  from?: Maybe<UtilityAccount>;
  to?: Maybe<UtilityProvider>;
};

export type _UtilityStatementInput = {
  id: Scalars['ID'];
};

export type _AddUtilityStatementMeterPayload = {
  __typename?: '_AddUtilityStatementMeterPayload';
  from?: Maybe<UtilityMeter>;
  to?: Maybe<UtilityStatement>;
};

export type _RemoveUtilityStatementMeterPayload = {
  __typename?: '_RemoveUtilityStatementMeterPayload';
  from?: Maybe<UtilityMeter>;
  to?: Maybe<UtilityStatement>;
};

export type _MergeUtilityStatementMeterPayload = {
  __typename?: '_MergeUtilityStatementMeterPayload';
  from?: Maybe<UtilityMeter>;
  to?: Maybe<UtilityStatement>;
};

export type _AddUtilityMeterAccountPayload = {
  __typename?: '_AddUtilityMeterAccountPayload';
  from?: Maybe<UtilityMeter>;
  to?: Maybe<UtilityAccount>;
};

export type _RemoveUtilityMeterAccountPayload = {
  __typename?: '_RemoveUtilityMeterAccountPayload';
  from?: Maybe<UtilityMeter>;
  to?: Maybe<UtilityAccount>;
};

export type _MergeUtilityMeterAccountPayload = {
  __typename?: '_MergeUtilityMeterAccountPayload';
  from?: Maybe<UtilityMeter>;
  to?: Maybe<UtilityAccount>;
};

export type _AddUtilityMeterFacilityPayload = {
  __typename?: '_AddUtilityMeterFacilityPayload';
  from?: Maybe<Facility>;
  to?: Maybe<UtilityMeter>;
};

export type _RemoveUtilityMeterFacilityPayload = {
  __typename?: '_RemoveUtilityMeterFacilityPayload';
  from?: Maybe<Facility>;
  to?: Maybe<UtilityMeter>;
};

export type _MergeUtilityMeterFacilityPayload = {
  __typename?: '_MergeUtilityMeterFacilityPayload';
  from?: Maybe<Facility>;
  to?: Maybe<UtilityMeter>;
};

export type _AddUtilityMeterStatementsPayload = {
  __typename?: '_AddUtilityMeterStatementsPayload';
  from?: Maybe<UtilityMeter>;
  to?: Maybe<UtilityStatement>;
};

export type _RemoveUtilityMeterStatementsPayload = {
  __typename?: '_RemoveUtilityMeterStatementsPayload';
  from?: Maybe<UtilityMeter>;
  to?: Maybe<UtilityStatement>;
};

export type _MergeUtilityMeterStatementsPayload = {
  __typename?: '_MergeUtilityMeterStatementsPayload';
  from?: Maybe<UtilityMeter>;
  to?: Maybe<UtilityStatement>;
};

export type _ExtractorConfigMapInput = {
  query: Scalars['String'];
};

export type _CanonicalInput = {
  name: Scalars['String'];
};

export type _AddCanonicalExtractorsPayload = {
  __typename?: '_AddCanonicalExtractorsPayload';
  from?: Maybe<ExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _RemoveCanonicalExtractorsPayload = {
  __typename?: '_RemoveCanonicalExtractorsPayload';
  from?: Maybe<ExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _MergeCanonicalExtractorsPayload = {
  __typename?: '_MergeCanonicalExtractorsPayload';
  from?: Maybe<ExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _AddExtractorConfigMapCanonicalPayload = {
  __typename?: '_AddExtractorConfigMapCanonicalPayload';
  from?: Maybe<ExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _RemoveExtractorConfigMapCanonicalPayload = {
  __typename?: '_RemoveExtractorConfigMapCanonicalPayload';
  from?: Maybe<ExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _MergeExtractorConfigMapCanonicalPayload = {
  __typename?: '_MergeExtractorConfigMapCanonicalPayload';
  from?: Maybe<ExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _CdtExtractorConfigMapInput = {
  name: Scalars['String'];
};

export type _AddCdtExtractorConfigMapCanonicalPayload = {
  __typename?: '_AddCdtExtractorConfigMapCanonicalPayload';
  from?: Maybe<CdtExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _RemoveCdtExtractorConfigMapCanonicalPayload = {
  __typename?: '_RemoveCdtExtractorConfigMapCanonicalPayload';
  from?: Maybe<CdtExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _MergeCdtExtractorConfigMapCanonicalPayload = {
  __typename?: '_MergeCdtExtractorConfigMapCanonicalPayload';
  from?: Maybe<CdtExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _CdcExtractorConfigMapInput = {
  name: Scalars['String'];
};

export type _AddCdcExtractorConfigMapCanonicalPayload = {
  __typename?: '_AddCdcExtractorConfigMapCanonicalPayload';
  from?: Maybe<CdcExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _RemoveCdcExtractorConfigMapCanonicalPayload = {
  __typename?: '_RemoveCdcExtractorConfigMapCanonicalPayload';
  from?: Maybe<CdcExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _MergeCdcExtractorConfigMapCanonicalPayload = {
  __typename?: '_MergeCdcExtractorConfigMapCanonicalPayload';
  from?: Maybe<CdcExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _CtExtractorConfigMapInput = {
  name: Scalars['String'];
};

export type _AddCtExtractorConfigMapCanonicalPayload = {
  __typename?: '_AddCtExtractorConfigMapCanonicalPayload';
  from?: Maybe<CtExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _RemoveCtExtractorConfigMapCanonicalPayload = {
  __typename?: '_RemoveCtExtractorConfigMapCanonicalPayload';
  from?: Maybe<CtExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _MergeCtExtractorConfigMapCanonicalPayload = {
  __typename?: '_MergeCtExtractorConfigMapCanonicalPayload';
  from?: Maybe<CtExtractorConfigMap>;
  to?: Maybe<Canonical>;
};

export type _DataSourceInput = {
  url: Scalars['String'];
};

export enum Export_Type {
  OBJECT = 'OBJECT',
  LIST = 'LIST'
}

export type _SimpleDataSourceInput = {
  name: Scalars['String'];
};

export type _SimpleConfigMapInput = {
  name: Scalars['String'];
};

export type _NovozymesFacilityConfigInput = {
  name: Scalars['String'];
};

export type _SeriesInput = {
  time: Scalars['DateTime'];
};

export type _WmsDataSourceInput = {
  name: Scalars['String'];
};

export type _Neo4jTime = {
  __typename?: '_Neo4jTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jDate = {
  __typename?: '_Neo4jDate';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jDateInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalTime = {
  __typename?: '_Neo4jLocalTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalDateTime = {
  __typename?: '_Neo4jLocalDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jLocalDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jPointDistanceFilter = {
  point: _Neo4jPointInput;
  distance: Scalars['Float'];
};

export type _Neo4jPointInput = {
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  crs?: Maybe<Scalars['String']>;
  srid?: Maybe<Scalars['Int']>;
};

export type _Neo4jPoint = {
  __typename?: '_Neo4jPoint';
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  crs?: Maybe<Scalars['String']>;
  srid?: Maybe<Scalars['Int']>;
};

export enum _RelationDirections {
  IN = 'IN',
  OUT = 'OUT'
}

