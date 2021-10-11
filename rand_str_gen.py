import random

# This function takes an int as input and outputs 
# a random string of that length

def random_string(size):
    
    try:
        if size <= 0:
            return 'Size must be a positive integer'
        rand_str = ''
        for i in range(size):
            rand_int = random.randint(97,122)
            if random.randint(0,1):
                rand_int -= 32
            rand_str += chr(rand_int)
        return rand_str
    
    except TypeError:
        return 'Error: Usage random_string(Size) where size is given as a positve integer'

# print statement used for testing
#print(random_string(10))