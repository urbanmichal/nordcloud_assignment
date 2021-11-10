import { Device } from "./device";

export class LinkStation {
	x: number;
	y: number;
	reach: number;

	constructor(x: number, y: number, reach: number) {
		this.x = x;
		this.y = y;
		this.reach = reach;
	}

	getPower(device: Device): number {
		const distanceBetweenDeviceAndLinkStation = (((device.x - this.x) ** 2) + ((device.y-this.y) ** 2)) ** 0.5

		let linkStationPower: number;

		if (distanceBetweenDeviceAndLinkStation > this.reach) {
			linkStationPower = 0;
		} else {
			linkStationPower = (this.reach - distanceBetweenDeviceAndLinkStation) ** 2
		}

		return linkStationPower;
	}
}