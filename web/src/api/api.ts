import {
	AlbumApi,
	APIKeyApi,
	AssetApi,
	AuthenticationApi,
	Configuration,
	ConfigurationParameters,
	DeviceInfoApi,
	JobApi,
	OAuthApi,
	SearchApi,
	ServerInfoApi,
	ShareApi,
	SystemConfigApi,
	UserApi
} from './open-api';

export class ImmichApi {
	public userApi: UserApi;
	public albumApi: AlbumApi;
	public assetApi: AssetApi;
	public authenticationApi: AuthenticationApi;
	public oauthApi: OAuthApi;
	public deviceInfoApi: DeviceInfoApi;
	public searchApi: SearchApi;
	public serverInfoApi: ServerInfoApi;
	public jobApi: JobApi;
	public keyApi: APIKeyApi;
	public systemConfigApi: SystemConfigApi;
	public shareApi: ShareApi;

	private config: Configuration;

	constructor(params: ConfigurationParameters) {
		this.config = new Configuration(params);

		this.userApi = new UserApi(this.config);
		this.albumApi = new AlbumApi(this.config);
		this.assetApi = new AssetApi(this.config);
		this.authenticationApi = new AuthenticationApi(this.config);
		this.oauthApi = new OAuthApi(this.config);
		this.deviceInfoApi = new DeviceInfoApi(this.config);
		this.serverInfoApi = new ServerInfoApi(this.config);
		this.jobApi = new JobApi(this.config);
		this.keyApi = new APIKeyApi(this.config);
		this.searchApi = new SearchApi(this.config);
		this.systemConfigApi = new SystemConfigApi(this.config);
		this.shareApi = new ShareApi(this.config);
	}

	public setAccessToken(accessToken: string) {
		this.config.accessToken = accessToken;
	}

	public removeAccessToken() {
		this.config.accessToken = undefined;
	}

	public setBaseUrl(baseUrl: string) {
		this.config.basePath = baseUrl;
	}
}

export const api = new ImmichApi({ basePath: '/api' });
