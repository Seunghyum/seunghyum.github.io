# def num_encodings(s):
#     if s.startswith('0'):
#         return 0
#     elif len(s) <= 1: # This covers empty string
#         return 1

#     total = 0

#     if int(s[:2]) <= 26:
#         total += num_encodings(s[2:])

#     total += num_encodings(s[1:])
#     return total

# print(num_encodings("110011"))

from collections import defaultdict

def num_encodings(s):
    # On lookup, this hashmap returns a default value of 0 if the key doesn't exist
    # cache[i] gives us # of ways to encode the substring s[i:]
    cache = defaultdict(int)
    cache[len(s)] = 1 # Empty string is 1 valid encoding
    print(dict(cache))
    
    print(*reversed(range(len(s))), sep=' ')

    for i in reversed(range(len(s))):
        if s[i].startswith('0'):
            cache[i] = 0
        elif i == len(s) - 1:
            cache[i] = 1
        else:
            if int(s[i:i + 2]) <= 26:
                cache[i] = cache[i + 2]
            cache[i] += cache[i + 1]
    print(dict(cache))
    return cache[0]


# print(num_encodings("11011"))
# {5: 1}
# 4 3 2 1 0
# {5: 1, 4: 1, 3: 2, 2: 0, 1: 2, 0: 2}
# 2

# print(num_encodings("110011"))
# {6: 1}
# 5 4 3 2 1 0
# {6: 1, 5: 1, 4: 2, 3: 0, 2: 0, 1: 0, 0: 0}
# 0

print(num_encodings("111"))
{3: 1}
2 1 0
{3: 1, 2: 1, 1: 2, 0: 3}
3