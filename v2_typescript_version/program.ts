import { TestCaseSet } from "./testCaseSet";

class Program {
	main(): void {
		const testCaseSet = new TestCaseSet()
		this.printResults(testCaseSet)
	}

	printResults(testCaseSet: TestCaseSet): void {
		for (const deviceTestCase of testCaseSet.devices) {
			const linkStationWithMostPower = deviceTestCase.getLinkStationWithMostPower(testCaseSet.linkStations)

			const isLinkStationReachableFromDevice = linkStationWithMostPower !== null

			if (isLinkStationReachableFromDevice) {
				console.log(`Best link station for point ${deviceTestCase.x},${deviceTestCase.y} is ${linkStationWithMostPower.x},${linkStationWithMostPower.y} with power ${linkStationWithMostPower.getPower(deviceTestCase)}`)
			} else {
				console.log(`No link station within reach for point ${deviceTestCase.x},${deviceTestCase.y}`)
			}
		}
	}
}

const program = new Program()
program.main()