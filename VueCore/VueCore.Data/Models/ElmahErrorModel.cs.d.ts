declare module server {
	interface elmahErrorModel {
		errorId: any;
		application: string;
		host: string;
		type: string;
		source: string;
		message: string;
		user: string;
		statusCode: number;
		timeUtc: Date;
		sequence: number;
		allXml: string;
	}
}
