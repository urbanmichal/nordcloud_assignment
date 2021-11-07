from device import Device
from link_station import LinkStation

class TestCaseSet:
	def __init__(self):
		self.link_stations = [
			LinkStation(0, 0, 10),
			LinkStation(20, 20, 5),
			LinkStation(10, 0, 12)
		]

		self.devices = [
			Device(0, 0),
			Device(100, 100),
			Device(15, 10),
			Device(18, 18)
		]