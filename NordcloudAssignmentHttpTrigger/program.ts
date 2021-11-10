import { TestCaseSet } from "./testCaseSet";

export class Program {
	getResult(): string {
		const testCaseSet = new TestCaseSet()
		let result = ''

		for (const deviceTestCase of testCaseSet.devices) {
			const linkStationWithMostPower = deviceTestCase.getLinkStationWithMostPower(testCaseSet.linkStations)

			const isLinkStationReachableFromDevice = linkStationWithMostPower !== null

			if (isLinkStationReachableFromDevice) {
				result += `Best link station for point ${deviceTestCase.x},${deviceTestCase.y} is ${linkStationWithMostPower.x},${linkStationWithMostPower.y} with power ${linkStationWithMostPower.getPower(deviceTestCase)}\n`
			} else {
				result += `No link station within reach for point ${deviceTestCase.x},${deviceTestCase.y}\n`
			}
		}

		return result;
	}
}