import { LinkStation } from "./linkStations";
import { Device } from "./device";

export class TestCaseSet {
	linkStations: LinkStation[];
	devices: Device[];

	constructor() {
		this.linkStations = [
			new LinkStation(0, 0, 10),
			new LinkStation(20, 20, 5),
			new LinkStation(10, 0, 12)
		]

		this.devices = [
			new Device(0, 0),
			new Device(100, 100),
			new Device(15, 10),
			new Device(18, 18)
		]
	}
}