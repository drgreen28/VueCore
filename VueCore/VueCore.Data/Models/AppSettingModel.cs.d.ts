declare module server {
	interface appSettingModel {
		id: number;
		appSettingsKeyId: number;
		value: string;
		updatedBy?: number;
		updatedOn: Date;
		appSettingsKey: {
			id: number;
			name: string;
			description: string;
			updatedBy?: number;
			updatedOn: Date;
			appSetting: any[];
		};
	}
}
