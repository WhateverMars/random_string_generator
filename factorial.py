# This function takes a number as input num and outputs the factorial num!

def factorial(num):
    try:

        if num < 0:
            return 'Can only find factorials of positive Integers'

        # in special case of zero, 0! is equal 1
        if num == 0:
            return 
            
        ans = num
        for n in range(1, num):
            ans = ans*(num-n)
        return ans      

        # if user gives a non int value
    except TypeError:
        return ('ERROR: Please give a positive integer')
