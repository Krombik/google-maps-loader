export type GoogleMapsLibraries = {
  core: google.maps.CoreLibrary;
  maps: google.maps.MapsLibrary;
  places: google.maps.PlacesLibrary;
  geocoding: google.maps.GeocodingLibrary;
  routes: google.maps.RoutesLibrary;
  marker: google.maps.MarkerLibrary;
  geometry: google.maps.GeometryLibrary;
  elevation: google.maps.ElevationLibrary;
  streetView: google.maps.StreetViewLibrary;
  journeySharing: google.maps.JourneySharingLibrary;
  drawing: google.maps.DrawingLibrary;
  visualization: google.maps.VisualizationLibrary;
};

export type GoogleMapsLibrary = keyof GoogleMapsLibraries;

export type GoogleMapsLoaderOptions = {
  /**
   * Your [API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
   */
  key: string;
  /**
   * @deprecated
   * @see https://developers.google.com/maps/premium/overview
   */
  channel?: string;
  /**
   * @deprecated use {@link GoogleMapsLoaderOptions.apiKey apiKey} instead
   * @see https://developers.google.com/maps/premium/overview
   */
  client?: string;
  /**
   * The [version](https://developers.google.com/maps/documentation/javascript/versions) of the Maps JavaScript API to use
   */
  v?: string;
  /**
   * The [language](https://developers.google.com/maps/documentation/javascript/localization) to use. This affects the names of controls, copyright notices, driving directions, and control labels, as well as the responses to service requests. See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport)
   */
  language?: string;
  /**
   * The [region](https://developers.google.com/maps/documentation/javascript/localization#Region) code to use. This alters the map's behavior based on a given country or territory
   */
  region?: string;
  /**
   * @deprecated Passing `map_ids` is no longer required in the script tag
   */
  map_ids?: string[];
  /**
   * Maps JS customers can configure HTTP Referrer Restrictions in the Cloud Console to limit which URLs are allowed to use a particular API Key. By default, these restrictions can be configured to allow only certain paths to use an API Key. If any URL on the same domain or origin may use the API Key, you can set `"origin"` to limit the amount of data sent when authorizing requests from the Maps JavaScript API. This is available starting in version **3.46**. When this parameter is specified and HTTP Referrer Restrictions are enabled on Cloud Console, Maps JavaScript API will only be able to load if there is an HTTP Referrer Restriction that matches the current website's domain without a path specified
   */
  auth_referrer_policy?: 'origin';
};

type OmitMethods<T> = {
  [key in keyof T]: T[key] extends (...args: any[]) => any ? never : T[key];
};

export type ScriptOptions = Partial<
  OmitMethods<
    Omit<
      HTMLScriptElement,
      Exclude<keyof HTMLElement, 'nonce' | 'id'> | 'src' | 'type'
    >
  >
>;

export type GoogleMapsLoaderStatus = 'none' | 'loading' | 'loaded' | 'error';
