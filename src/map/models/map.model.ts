export interface RegionMapProps  {
	fill: string;
	styles: {
		[key: string]: string | number;
	};
	onClick?: () => void;
	opacity?: number | string;
}
