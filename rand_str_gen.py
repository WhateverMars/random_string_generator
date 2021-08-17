import random

def random_string(size):
    rand_str = ''
    for i in range(size):
        rand_int = random.randint(97,122)
        if random.randint(0,1):
            rand_int -= 32
        rand_str += chr(rand_int)
    return rand_str

print(random_string(10))