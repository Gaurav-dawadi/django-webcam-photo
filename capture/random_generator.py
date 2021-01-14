import random
import string


def random_filename():
    fname = 'webcam'
    finalname = fname + random.choice(string.ascii_letters).upper()
    return finalname


