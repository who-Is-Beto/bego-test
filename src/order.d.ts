export interface GetOrders {
  result: Result;
  status: number;
}

export interface GetOrdersResult {
  ETA: number;
  _id: string;
  add_ons: AddOns;
  bego_order: boolean;
  cargo: Cargo;
  completion_percentage: number;
  created: number;
  destinations: Destination[];
  distance_mts: number;
  driver: Driver;
  end_date: number;
  invoice: Invoice;
  manager: Driver;
  map: Map;
  order_number: string;
  pricing: Pricing;
  reference_number: string;
  route: Route;
  stamp: boolean;
  stampedPercentage: number;
  start_date: number;
  status: number;
  status_list: StatusList;
  trailer: Trailer;
  truck: Truck;
  user_id: string;
  version: string;
}

export interface AddOns {
  cargo_value: number;
  cruce: boolean;
  customs_agent: boolean;
  insurance: boolean;
  insurance_percentage: number;
  min_insurance: boolean;
}

export interface Cargo {
  '53_48': string;
  cargo_goods: string;
  description: string;
  hazardous_material: string;
  hazardous_type: string;
  packaging: string;
  required_units: number;
  type: string;
  unit_type: string;
  weight_unit: string;
  weigth: number[];
}

export interface Destination {
  address: string;
  contact_info: ContactInfo;
  endDate?: number;
  evidence: Evidence;
  geometry: Geometry;
  lat: number;
  lng: number;
  place_id_dropoff?: string;
  place_id_pickup?: string;
  raw_address: string;
  startDate: number;
  status: number;
  status_class: string;
  status_string: string;
  zip_code: number;
}

export interface ContactInfo {
  country_code: string;
  email: string;
  name: string;
  rfc: string;
  telephone: string;
}

export interface Evidence {
  extra_notes: string;
  pictures: any[];
  signature: Signature;
}

export interface Signature {}

export interface Geometry {
  coordinates: number[];
  type: string;
}

export interface Driver {
  _id: string;
  active_sessions: number;
  allow_login: boolean;
  availability: number;
  cer?: Cer;
  connected: boolean;
  country_code: string;
  date_created: number;
  email: string;
  full_documentation: boolean;
  key?: Cer;
  key_pswd?: string;
  language: string;
  location: Location;
  mood: number;
  nickname: string;
  place_id?: string;
  raw_nickname: string;
  raw_telephone: string;
  role: number;
  tags?: string[];
  telephone: string;
  test: boolean;
  thumbnail?: string;
  verified: boolean;
  version: string;
}

export interface Cer {
  Bucket: string;
  ETag: string;
  Key: string;
  Location: string;
}

export interface Location {
  geometry: Geometry;
  lat: number;
  lng: number;
}

export interface Invoice {
  address: string;
  cfdi: string;
  company: null;
  country_code: null;
  email: null;
  fullname: string;
  phonenumber: null;
  receiver: Receiver;
  rfc: string;
  series_id: string;
}

export interface Receiver {
  address: Address;
  branch: null;
  cfdi: string;
  company: string;
  place_id: string;
  rfc: string;
}

export interface Address {
  place_id: string;
}

export interface Map {
  original_url: string;
  thumbnail_url: string;
}

export interface Pricing {
  cruce: number;
  customs: number;
  deferred_payment: boolean;
  driver_earnings: number;
  extras: number;
  insurance: number;
  pre_taxes: number;
  single: number;
  subtotal: number;
  taxes: number;
  total: number;
}

export interface Route {
  dropoff: string;
  end_date: number;
  pickup: string;
  route: string;
  single: number;
  start_date: number;
  status: number;
  stay: string;
}

export interface StatusList {
  dropoff: Dropoff[];
  pickup: Dropoff[];
}

export interface Dropoff {
  active: boolean;
  status: string;
}

export interface Trailer {
  _id: string;
  active: boolean;
  attributes: TrailerAttributes;
  thumbnail: string;
}

export interface TrailerAttributes {
  plates: string;
  trailer_number: string;
  type: string;
}

export interface Truck {
  _id: string;
  active: boolean;
  attributes: TruckAttributes;
  thumbnail: string;
}

export interface TruckAttributes {
  brand: string;
  caat: string;
  color: string;
  colorName: string;
  insurer: string;
  plates: string;
  policy_number: string;
  sct_number: string;
  sct_permission: string;
  sct_permission_text: string;
  truck_settings: string;
  truck_settings_text: string;
  year: string;
}
