# This is a function that gives all the factions for given integer in a list


def factors(n):
    try:
        if n <= 0:
            return "Please give a positive integer."

        # creates a list factors where all factors will be stored
        factors = []

        for i in range(1, n + 1):
            # if i divides with no remainder then i is a factor
            if n % i == 0:
                factors.append(i)

    except TypeError:
        return "Error: Requires a positive integer as input."

    return factors


# print(factors(120))
