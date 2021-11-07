from test_case_set import TestCaseSet

def main():
	test_case_set = TestCaseSet()
	print_results(test_case_set)

def print_results(test_case_set):
	for device_test_case in test_case_set.devices:
		link_station_with_most_power = device_test_case.get_link_station_with_most_power(test_case_set.link_stations)

		link_station_reachable_from_device = link_station_with_most_power is not None

		if (link_station_reachable_from_device):
			print(f'Best link station for point {device_test_case.x},{device_test_case.y} is {link_station_with_most_power.x},{link_station_with_most_power.y} with power {link_station_with_most_power.getPower(device_test_case)}')
		else:
			print(f'No link station within reach for point {device_test_case.x},{device_test_case.y}')

if __name__ == "__main__":
	main()