declare module server {
	interface appSettingKeyModel {
		id: number;
		name: string;
		description: string;
		updatedBy?: number;
		updatedOn: Date;
		appSetting: server.appSettingModel[];
	}
}
