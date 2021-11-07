class LinkStation:
	def __init__(self, x, y, reach):
		self.x = x
		self.y = y
		self.reach = reach

	def getPower(self, device):
		distance_between_device_and_link_station = ((((device.x - self.x) ** 2) + ((device.y-self.y) ** 2)) ** 0.5)

		if (distance_between_device_and_link_station > self.reach):
			link_station_power = 0
		else:
			link_station_power = (self.reach - distance_between_device_and_link_station) ** 2

		assert link_station_power >= 0

		return link_station_power