def polygon_area(n):
    new_n = n**2
    old_n_squared = (n-1)**2
    return new_n + old_n_squared


assert polygon_area(1) == 1
assert polygon_area(2) == 5
assert polygon_area(3) == 13
assert polygon_area(4) == 25
print('All Tests Passed')

from tests import full_test
full_test(polygon_area)
