import random

rand_str = ''
for i in range(10):
    rand_int = random.randint(97,122)
    if random.randint(0,1):
        rand_int -= 32
    rand_str += chr(rand_int)

print(rand_str)