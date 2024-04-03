# this program simply takes a command line input of a string and returns how many words it has


def word_counter(str):
    words = 0
    for i in range(0, len(str)):
        if str[i] in [" ", ".", "?", "!"]:
            words += 1

    return words


print("Please paste string here: ")
string = input()
print("Number of words: " + str(word_counter(string)))
