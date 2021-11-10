import { LinkStation } from "./linkStations";

export class Device {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	getLinkStationWithMostPower(linkStations: LinkStation[]): LinkStation {
		let maxLinkStation: LinkStation = null;
		let maxLinkStationPower = 0;

		for (const linkStation of linkStations) {
			const linkStationPower = linkStation.getPower(this)

			if (linkStationPower > maxLinkStationPower) {
				maxLinkStationPower = linkStationPower;
				maxLinkStation = linkStation;
			}
		}

		return maxLinkStation
	}
}