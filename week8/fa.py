def minimum(a, b, c, d):
    arr = [a, b, c, d]
    arr.sort()
    return arr[0]


a, b, c, d = input().split(" ")
print(minimum(a, b, c, d))