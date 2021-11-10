from link_station import LinkStation

class Device:
	def __init__(self, x, y):
		self.x = x
		self.y = y

	def get_link_station_with_most_power(self, link_stations):
		max_link_station = None
		max_link_station_power = 0

		link_station: LinkStation
		for link_station in link_stations:
			device = self
			link_station_power = link_station.getPower(device) 

			if link_station_power > max_link_station_power:
				max_link_station_power = link_station_power
				max_link_station: LinkStation = link_station

		return max_link_station