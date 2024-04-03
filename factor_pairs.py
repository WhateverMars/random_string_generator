# This is a function that outputs a list of factions organised in their pairs for any given positive integer


def factors(n):

    try:
        if n <= 0:
            return "Please give a positive integer."

        # The list factors stores the values as strings of the form 'factor1 x factor2'
        factors = []
        for i in range(1, n + 1):
            if n % i == 0:
                if (str(int(n / i)) + " x " + str(i)) not in factors:
                    factors.append(str(i) + " x " + str(int(n / i)))

    except TypeError:
        return "Error: Requires a positive integer as input"

    return factors


# print function for testing
# print(factors(21))
